import useSWR, { useSWRConfig } from 'swr';
import { useCallback, useState } from 'react';
import { kegiatanApi } from '@/functions/api/kegiatanApi';
import { useFetchWithAccessToken } from '@/functions/useFetchWithAccessToken';
import { useSwrFetcherWithAccessToken } from '@/functions/useSwrFetcherWithAccessToken';
import type { Kegiatan, ContentStatus } from '@/types';
import { toast } from 'sonner';

// Map frontend workflow status strings to backend integer values (if backend uses enum)
const statusMap: Record<string, number> = {
  'Draft': 0,
  'In Review': 1,
  'Approved': 2,
  'Published': 3,
  'Scheduled': 4,
  'Rejected': 5,
};

export function useKegiatan(params?: { page?: number; search?: string; status?: string }) {
  const { fetchPOST, fetchPUT, fetchDELETE } = useFetchWithAccessToken();
  const fetcher = useSwrFetcherWithAccessToken();
  const { mutate: globalMutate } = useSWRConfig();

  const { data: response, error, isLoading } = useSWR<{ items: Kegiatan[] }>(
    kegiatanApi.keys.list(params),
    () => fetcher(kegiatanApi.getListUrl(params)),
    {}
  );

  const data = response?.items ?? [];

  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const createKegiatan = useCallback(async (payload: Omit<Kegiatan, 'id'>) => {
    setIsCreating(true);
    try {
      const backendPayload = {
        Title: payload.title,
        StartDateTime: payload.startDateTime.toISOString(),
        EndDateTime: payload.endDateTime.toISOString(),
        Organizer: payload.organizer,
        Category: payload.category,
        IsFeatured: payload.isFeatured,
        Status: payload.status, // event status string
        Location: payload.location,
        Description: payload.description,
        // CMS workflow status – if backend supports it
        WorkflowStatus: payload.statusWorkflow ? statusMap[payload.statusWorkflow] : undefined,
      };

      const { data: newId, error } = await fetchPOST<string>(
        kegiatanApi.createUrl(),
        backendPayload
      );
      if (error) throw new Error(error);
      if (!newId) throw new Error('No ID returned from server');
      await globalMutate(kegiatanApi.keys.list(params));
      toast.success('Kegiatan created successfully');
      return true;
    } catch (err: any) {
      toast.error(err.message || 'Failed to create kegiatan');
      return false;
    } finally {
      setIsCreating(false);
    }
  }, [fetchPOST, globalMutate, params]);

  const updateKegiatan = useCallback(async (id: string, payload: Partial<Kegiatan>) => {
    setIsUpdating(true);
    try {
      const backendPayload: any = {};
      if (payload.title !== undefined) backendPayload.Title = payload.title;
      if (payload.startDateTime !== undefined) backendPayload.StartDateTime = payload.startDateTime.toISOString();
      if (payload.endDateTime !== undefined) backendPayload.EndDateTime = payload.endDateTime.toISOString();
      if (payload.organizer !== undefined) backendPayload.Organizer = payload.organizer;
      if (payload.category !== undefined) backendPayload.Category = payload.category;
      if (payload.isFeatured !== undefined) backendPayload.IsFeatured = payload.isFeatured;
      if (payload.status !== undefined) backendPayload.Status = payload.status;
      if (payload.location !== undefined) backendPayload.Location = payload.location;
      if (payload.description !== undefined) backendPayload.Description = payload.description;
      if (payload.statusWorkflow !== undefined) backendPayload.WorkflowStatus = statusMap[payload.statusWorkflow];

      const { data: updated, error } = await fetchPUT<Kegiatan>(
        kegiatanApi.updateUrl(id),
        backendPayload
      );
      if (error) throw new Error(error);
      await globalMutate(kegiatanApi.keys.list(params));
      await globalMutate(kegiatanApi.keys.detail(id));
      toast.success('Kegiatan updated');
      return true;
    } catch (err: any) {
      toast.error(err.message || 'Update failed');
      return false;
    } finally {
      setIsUpdating(false);
    }
  }, [fetchPUT, globalMutate, params]);

  const deleteKegiatan = useCallback(async (id: string) => {
    setIsDeleting(true);
    try {
      const { error } = await fetchDELETE(kegiatanApi.deleteUrl(id));
      if (error) throw new Error(error);
      await globalMutate(kegiatanApi.keys.list(params));
      toast.success('Kegiatan deleted');
    } catch (err: any) {
      toast.error(err.message || 'Delete failed');
    } finally {
      setIsDeleting(false);
    }
  }, [fetchDELETE, globalMutate, params]);

  return {
    data,
    isLoading,
    error,
    actions: { createKegiatan, updateKegiatan, deleteKegiatan },
    isCreating,
    isUpdating,
    isDeleting,
  };
}