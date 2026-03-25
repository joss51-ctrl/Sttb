import useSWR, { useSWRConfig } from 'swr';
import { useCallback, useState } from 'react';
import { userApi } from '@/functions/api/userApi';
import { useFetchWithAccessToken } from '@/functions/useFetchWithAccessToken';
import { useSwrFetcherWithAccessToken } from '@/functions/useSwrFetcherWithAccessToken';
import type { User } from '@/types';
import { toast } from 'sonner';

// Define the response shape (adjust if your backend returns paginated response)
interface UserListResponse {
  items: User[];
  total: number;
}

export function useUsers(params?: { page?: number; search?: string; role?: string }) {
  const { fetchGET, fetchPOST, fetchPUT, fetchDELETE } = useFetchWithAccessToken();
  const fetcher = useSwrFetcherWithAccessToken();
  const { mutate: globalMutate } = useSWRConfig();

  // Fetch users list - adjust based on your backend response structure
  const { data: response, error, isLoading } = useSWR<UserListResponse>(
    userApi.keys.list(params),
    () => fetcher(userApi.getListUrl(params)),
    {}
  );

  // Extract the items array (or fallback to empty array)
  const data = response?.items ?? [];

  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const createUser = useCallback(async (payload: Omit<User, 'id' | 'createdAt'>) => {
    setIsCreating(true);
    try {
      const backendPayload = {
        FullName: payload.fullName,
        Email: payload.email,
        Role: payload.role,
        IsActive: payload.isActive,
      };

      const { data: newId, error } = await fetchPOST<string>(
        userApi.createUrl(),
        backendPayload
      );
      if (error) throw new Error(error);
      if (!newId) throw new Error('No ID returned from server');
      await globalMutate(userApi.keys.list(params));
      toast.success('User created successfully');
      return true;
    } catch (err: any) {
      toast.error(err.message || 'Failed to create user');
      return false;
    } finally {
      setIsCreating(false);
    }
  }, [fetchPOST, globalMutate, params]);

  const updateUser = useCallback(async (id: string, payload: Partial<User>) => {
    setIsUpdating(true);
    try {
      const backendPayload: any = {};
      if (payload.fullName !== undefined) backendPayload.FullName = payload.fullName;
      if (payload.email !== undefined) backendPayload.Email = payload.email;
      if (payload.role !== undefined) backendPayload.Role = payload.role;
      if (payload.isActive !== undefined) backendPayload.IsActive = payload.isActive;

      const { data: updated, error } = await fetchPUT<User>(
        userApi.updateUrl(id),
        backendPayload
      );
      if (error) throw new Error(error);
      await globalMutate(userApi.keys.list(params));
      await globalMutate(userApi.keys.detail(id));
      toast.success('User updated successfully');
      return true;
    } catch (err: any) {
      toast.error(err.message || 'Update failed');
      return false;
    } finally {
      setIsUpdating(false);
    }
  }, [fetchPUT, globalMutate, params]);

  const deleteUser = useCallback(async (id: string) => {
    setIsDeleting(true);
    try {
      const { error } = await fetchDELETE(userApi.deleteUrl(id));
      if (error) throw new Error(error);
      await globalMutate(userApi.keys.list(params));
      toast.success('User deleted successfully');
    } catch (err: any) {
      toast.error(err.message || 'Delete failed');
    } finally {
      setIsDeleting(false);
    }
  }, [fetchDELETE, globalMutate, params]);

  const toggleUserStatus = useCallback(async (id: string, isActive: boolean) => {
    setIsUpdating(true);
    try {
      const { data, error } = await fetchPUT<{ success: boolean }>(
        userApi.updateStatusUrl(id),
        { IsActive: isActive }
      );
      if (error) throw new Error(error);
      await globalMutate(userApi.keys.list(params));
      await globalMutate(userApi.keys.detail(id));
      toast.success(`User ${isActive ? 'activated' : 'deactivated'} successfully`);
      return true;
    } catch (err: any) {
      toast.error(err.message || 'Failed to update user status');
      return false;
    } finally {
      setIsUpdating(false);
    }
  }, [fetchPUT, globalMutate, params]);

  return {
    data,
    isLoading,
    error,
    actions: { createUser, updateUser, deleteUser, toggleUserStatus },
    isCreating,
    isUpdating,
    isDeleting,
  };
}