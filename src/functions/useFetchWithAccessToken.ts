import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function useFetchWithAccessToken() {
  const navigate = useNavigate();

  const getToken = () => localStorage.getItem('accessToken');

  const request = useCallback(async <T>(
    url: string,
    options?: RequestInit
  ): Promise<{ data?: T; error?: string; problem?: string }> => {
    const token = getToken();
    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...options?.headers,
        },
      });
      if (res.status === 401) {
        // Try refresh or redirect to login
        localStorage.removeItem('accessToken');
        navigate('/login');
        return { error: 'Unauthorized', problem: 'UNAUTHORIZED' };
      }
      if (res.status === 403) {
        toast.error('You do not have permission to perform this action');
        return { error: 'Forbidden', problem: 'FORBIDDEN' };
      }
      const json = await res.json();
      if (!res.ok) {
        return { error: json.message || 'Request failed', problem: 'ERROR' };
      }
      return { data: json as T };
    } catch (err) {
      console.error('Fetch error:', err);
      return { error: 'Network error', problem: 'NETWORK_ERROR' };
    }
  }, [navigate]);

  const fetchGET = useCallback(<T>(url: string) => request<T>(url, { method: 'GET' }), [request]);
  const fetchPOST = useCallback(<T>(url: string, body: any, options?: RequestInit) => {
  return request<T>(url, { method: 'POST', body: JSON.stringify(body), ...options });
}, [request]);
  const fetchPUT = useCallback(<T>(url: string, body: any) => request<T>(url, { method: 'PUT', body: JSON.stringify(body) }), [request]);
  const fetchDELETE = useCallback(<T>(url: string) => request<T>(url, { method: 'DELETE' }), [request]);

  return { fetchGET, fetchPOST, fetchPUT, fetchDELETE };
}