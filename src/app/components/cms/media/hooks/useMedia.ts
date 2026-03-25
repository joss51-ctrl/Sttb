import useSWR, { useSWRConfig } from 'swr';
import { useCallback, useState } from 'react';
import { mediaApi } from '@/functions/api/mediaApi';
import { useFetchWithAccessToken } from '@/functions/useFetchWithAccessToken';
import { useSwrFetcherWithAccessToken } from '@/functions/useSwrFetcherWithAccessToken';
import type { Media } from '@/types';
import { toast } from 'sonner';
// Map frontend status strings to backend integers (same as before)
const statusMap: Record<string, number> = {
  'Draft': 0,
  'In Review': 1,
  'Approved': 2,
  'Published': 3,
  'Scheduled': 4,
  'Rejected': 5,
};

export function useMedia(params?: { page?: number; search?: string; format?: string;  }) {
  const { fetchPOST, fetchPUT, fetchDELETE } = useFetchWithAccessToken();
  const fetcher = useSwrFetcherWithAccessToken();
  const { mutate: globalMutate } = useSWRConfig();

  const { data: response, error, isLoading } = useSWR<{ items: Media[] }>(
    mediaApi.keys.list(params),
    () => fetcher(mediaApi.getListUrl(params)),
    {}
  );

  const data = response?.items ?? [];

  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const createMedia = useCallback(async (payload: Omit<Media, 'id' | 'createdAt'>) => {
  setIsCreating(true);
    try {
      const backendPayload = {
        Title: payload.title,
        ContentUrl: payload.contentUrl,
        ThumbnailUrl: payload.thumbnailUrl,
        FormatMedia: payload.formatMedia,
        TopikKategori: payload.topikKategori,
        Status: payload.status ?? 'Draft', // e.g., 0,1,2,3,4
      };

      const { data: newId, error } = await fetchPOST<string>(
        mediaApi.createUrl(),
        backendPayload
      );
      if (error) throw new Error(error);
      if (!newId) throw new Error('No ID returned from server');
      await globalMutate(mediaApi.keys.list(params));
      toast.success('Media created successfully');
      return true;
    } catch (err: any) {
      toast.error(err.message || 'Failed to create media');
      return false;
    } finally {
      setIsCreating(false);
    }
  }, [fetchPOST, globalMutate, params]);

  // Similarly, updateMedia may also need wrapping if the update DTO expects a nested object.
  // For now, assume update uses a flat object; adjust if needed.

  const updateMedia = useCallback(async (id: string, payload: Partial<Media>) => {
    setIsUpdating(true);
    try {
      const backendPayload: any = {};
      if (payload.title !== undefined) backendPayload.Title = payload.title;
      if (payload.contentUrl !== undefined) backendPayload.ContentUrl = payload.contentUrl;
      if (payload.thumbnailUrl !== undefined) backendPayload.ThumbnailUrl = payload.thumbnailUrl;
      if (payload.formatMedia !== undefined) backendPayload.FormatMedia = payload.formatMedia;
      if (payload.topikKategori !== undefined) backendPayload.TopikKategori = payload.topikKategori;
      if (payload.status !== undefined) backendPayload.Status = statusMap[payload.status];

      // If update DTO also expects a wrapper, adjust accordingly
      // const updatePayload = { request: backendPayload };

      const { data: updated, error } = await fetchPUT<Media>(
        mediaApi.updateUrl(id),
        backendPayload   // change to updatePayload if needed
      );
      if (error) throw new Error(error);
      await globalMutate(mediaApi.keys.list(params));
      await globalMutate(mediaApi.keys.detail(id));
      toast.success('Media updated');
      return true;
    } catch (err: any) {
      toast.error(err.message || 'Update failed');
      return false;
    } finally {
      setIsUpdating(false);
    }
  }, [fetchPUT, globalMutate, params]);

  const deleteMedia = useCallback(async (id: string) => {
    setIsDeleting(true);
    try {
      const { error } = await fetchDELETE(mediaApi.deleteUrl(id));
      if (error) throw new Error(error);
      await globalMutate(mediaApi.keys.list(params));
      toast.success('Media deleted');
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
    actions: { createMedia, updateMedia, deleteMedia },
    isCreating,
    isUpdating,
    isDeleting,
  };
}