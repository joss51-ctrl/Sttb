import { BackendApiUrl, buildUrl } from '../BackendApiUrl';

export const beritaApi = {
  keys: {
    list: (params?: any) => ['berita', params],
    detail: (id: string) => ['berita', id],
  },
  // Sync URL builders
  getListUrl: (params?: { page?: number; search?: string; status?: string }) =>
    buildUrl(BackendApiUrl.berita, params),
  getByIdUrl: (id: string) => BackendApiUrl.beritaItem(id),
  createUrl: () => BackendApiUrl.berita,
  updateUrl: (id: string) => BackendApiUrl.beritaItem(id),
  deleteUrl: (id: string) => BackendApiUrl.beritaItem(id),
};