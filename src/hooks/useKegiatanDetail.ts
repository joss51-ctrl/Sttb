import useSWR from 'swr';
import { kegiatanApi } from '../functions/api/kegiatanApi';
import { useSwrFetcherWithAccessToken } from '../functions/useSwrFetcherWithAccessToken';

export function useKegiatanDetail(id: string | undefined) {
  const fetcher = useSwrFetcherWithAccessToken();
  const { data, error, isLoading } = useSWR(
    id ? kegiatanApi.keys.detail(id) : null,
    () => fetcher(kegiatanApi.getByIdUrl(id!))
  );
  return { data, error, isLoading };
}