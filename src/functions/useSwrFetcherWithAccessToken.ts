import { useFetchWithAccessToken } from './useFetchWithAccessToken';

export function useSwrFetcherWithAccessToken() {
  const { fetchGET } = useFetchWithAccessToken();

  const fetcher = async <T>(url: string): Promise<T> => {
    const { data, error } = await fetchGET<T>(url);
    if (error) throw new Error(error);
    return data as T;
  };

  return fetcher;
}