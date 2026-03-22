import useSWR from 'swr';
import { beritaApi } from '@/functions/api/beritaApi';
import { useSwrFetcherWithAccessToken } from '../functions/useSwrFetcherWithAccessToken';

type Berita = {
  title: string;
  content: string;
  category: string;
  thumbnailUrl?: string;
  taglines?: string;
  status?: 'Draft' | 'In Review' | 'Approved' | 'Published' | 'Scheduled';
};


export function useBeritaDetail(id: string | undefined) {
  const fetcher = useSwrFetcherWithAccessToken();
  const { data, error, isLoading } = useSWR(
    id ? beritaApi.keys.detail(id) : null,
    () => fetcher(beritaApi.getByIdUrl(id!))
  );
  return { data, error, isLoading };
}