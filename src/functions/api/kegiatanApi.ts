import { BackendApiUrl, buildUrl } from '../BackendApiUrl';

export const kegiatanApi = {
  keys: {
    list: (params?: any) => ['kegiatan', params],
    detail: (id: string) => ['kegiatan', id],
  },
  getListUrl: (params?: { page?: number; search?: string; status?: string }) =>
    buildUrl(BackendApiUrl.kegiatan, params),
  getByIdUrl: (id: string) => BackendApiUrl.kegiatanItem(id),
  createUrl: () => BackendApiUrl.kegiatan,
  updateUrl: (id: string) => BackendApiUrl.kegiatanItem(id),
  deleteUrl: (id: string) => BackendApiUrl.kegiatanItem(id),
};