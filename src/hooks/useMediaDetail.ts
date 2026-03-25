import useSWR from 'swr';
import { mediaApi } from '../functions/api/mediaApi';
import { useSwrFetcherWithAccessToken } from '../functions/useSwrFetcherWithAccessToken';
import type { Media } from '../types';

export function useMediaDetail(id: string | undefined) {
  const fetcher = useSwrFetcherWithAccessToken();
  const { data, error, isLoading } = useSWR<Media>(
    id ? mediaApi.keys.detail(id) : null,
    () => fetcher(mediaApi.getByIdUrl(id!)) as Promise<Media>
  );
  return { data, error, isLoading };
}