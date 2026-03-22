const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';

export const BackendApiUrl = {
  // Berita
  berita: `${baseUrl}/berita`,
  beritaItem: (id: string) => `${baseUrl}/berita/${id}`,

  // Kegiatan
  kegiatan: `${baseUrl}/kegiatan`,
  kegiatanItem: (id: string) => `${baseUrl}/kegiatan/${id}`,

  // Media
  media: `${baseUrl}/media`,
  mediaItem: (id: string) => `${baseUrl}/media/${id}`,
  mediaUpload: `${baseUrl}/media/upload`,

  // Users
  users: `${baseUrl}/users`,
  user: (id: string) => `${baseUrl}/users/${id}`,

  // Auth
  login: `${baseUrl}/auth/login`,
  me: `${baseUrl}/auth/me`,

  // Audit
  auditLogs: `${baseUrl}/audit-logs`,
};

export function buildUrl(url: string, params?: Record<string, any>) {
  if (!params) return url;
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '')
      searchParams.append(key, String(value));
  });
  const qs = searchParams.toString();
  return qs ? `${url}?${qs}` : url;
}