import { BackendApiUrl, buildUrl } from '../BackendApiUrl';

export const mediaApi = {
  keys: {
    list: (params?: any) => ['media', params],
    detail: (id: string) => ['media', id],
  },
  getListUrl: (params?: { page?: number; search?: string }) =>
    buildUrl(BackendApiUrl.media, params),
  getByIdUrl: (id: string) => BackendApiUrl.mediaItem(id),
  createUrl: () => BackendApiUrl.media,
  updateUrl: (id: string) => BackendApiUrl.mediaItem(id),
  deleteUrl: (id: string) => BackendApiUrl.mediaItem(id),
};