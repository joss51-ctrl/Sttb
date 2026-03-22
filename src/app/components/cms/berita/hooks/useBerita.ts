import useSWR, { useSWRConfig } from 'swr';
import { useCallback, useState } from 'react';

import { beritaApi } from '@/functions/api/beritaApi';
import { useFetchWithAccessToken } from '@/functions/useFetchWithAccessToken';
import { useSwrFetcherWithAccessToken } from '@/functions/useSwrFetcherWithAccessToken';

import type { Berita } from '@/types';

import { toast } from 'sonner';
const statusMap: Record<string, number> = {
  'Draft': 0,
  'In Review': 1,
  'Approved': 2,
  'Published': 3,
  'Scheduled': 4,
};
// Define the expected response shape
interface BeritaListResponse {
  items: Berita[];
}

export function useBerita(params?: { page?: number; search?: string; status?: string }) {
  const { fetchGET, fetchPOST, fetchPUT, fetchDELETE } = useFetchWithAccessToken();
  const fetcher = useSwrFetcherWithAccessToken();
  const { mutate: globalMutate } = useSWRConfig();

  // Explicitly type the SWR data as the response object
  const { data: response, error, isLoading } = useSWR<BeritaListResponse>(
    beritaApi.keys.list(params),
    () => fetcher(beritaApi.getListUrl(params)),
    {}
  );

  // Extract the items array (or fallback to empty array)
  const data = response?.items ?? [];

  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const createBerita = useCallback(async (payload: Omit<Berita, 'id' | 'createdAt'>) => {
  setIsCreating(true);
  try {
    // Build backend-compatible payload (PascalCase)
    const backendPayload = {
      Title: payload.title,
      Content: payload.content,
      Category: payload.category,
      ThumbnailUrl: payload.thumbnailUrl ?? '',
      Taglines: payload.taglines ?? '',
      Status: statusMap[payload.status ??  'Draft'], // convert string to integer
      AuthorId: payload.authorId ?? '',        // include if available
    };

    const { data: newId, error } = await fetchPOST<string>(
      beritaApi.createUrl(),
      backendPayload
    );
    if (error) throw new Error(error);
    if (!newId) throw new Error('No ID returned from server');
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
    data,           // now data is always an array
    isLoading,
    error,
    actions: { createBerita, updateBerita, deleteBerita },
    isCreating,
    isUpdating,
    isDeleting,
  };
}