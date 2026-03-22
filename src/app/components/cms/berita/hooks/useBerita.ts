import useSWR, { useSWRConfig } from 'swr';
import { useCallback, useState } from 'react';

import { beritaApi } from '@/functions/api/beritaApi';
import { useFetchWithAccessToken } from '@/functions/useFetchWithAccessToken';
import { useSwrFetcherWithAccessToken } from '@/functions/useSwrFetcherWithAccessToken';

import type { Berita } from '@/types';

import { toast } from 'sonner';

export function useBerita(params?: { page?: number; search?: string; status?: string }) {
  const { fetchGET, fetchPOST, fetchPUT, fetchDELETE } = useFetchWithAccessToken();
  const fetcher = useSwrFetcherWithAccessToken();
  const { mutate: globalMutate } = useSWRConfig();

  const { data, error, isLoading } = useSWR<Berita[]>(
    beritaApi.keys.list(params),
    () => fetcher(beritaApi.getListUrl(params)),
    {} // empty options to avoid overload conflict
  );

  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // CREATE - expects the backend to return the new ID (Guid)
  const createBerita = useCallback(async (payload: Omit<Berita, 'id' | 'createdAt'>) => {
    setIsCreating(true);
    try {
      const { data: newId, error } = await fetchPOST<string>(beritaApi.createUrl(), payload);
      if (error) throw new Error(error);
      if (!newId) throw new Error('No ID returned from server');

      // Invalidate the list cache so it refetches the latest data
      await globalMutate(beritaApi.keys.list(params));
      toast.success('Berita created successfully');
      return true;
    } catch (err: any) {
      toast.error(err.message || 'Failed to create berita');
      return false;
    } finally {
      setIsCreating(false);
    }
  }, [fetchPOST, globalMutate, params]);

  // UPDATE (unchanged)
  const updateBerita = useCallback(async (id: string, payload: Partial<Berita>) => {
    setIsUpdating(true);
    try {
      const { data: updated, error } = await fetchPUT<Berita>(beritaApi.updateUrl(id), payload);
      if (error) throw new Error(error);
      await globalMutate(beritaApi.keys.list(params));
      await globalMutate(beritaApi.keys.detail(id));
      toast.success('Berita updated');
      return true;
    } catch (err: any) {
      toast.error(err.message || 'Update failed');
      return false;
    } finally {
      setIsUpdating(false);
    }
  }, [fetchPUT, globalMutate, params]);

  // DELETE (unchanged)
  const deleteBerita = useCallback(async (id: string) => {
    setIsDeleting(true);
    try {
      const { error } = await fetchDELETE(beritaApi.deleteUrl(id));
      if (error) throw new Error(error);
      await globalMutate(beritaApi.keys.list(params));
      toast.success('Berita deleted');
    } catch (err: any) {
      toast.error(err.message || 'Delete failed');
    } finally {
      setIsDeleting(false);
    }
  }, [fetchDELETE, globalMutate, params]);

  return {
    data: data || [],
    isLoading,
    error,
    actions: { createBerita, updateBerita, deleteBerita },
    isCreating,
    isUpdating,
    isDeleting,
  };
}