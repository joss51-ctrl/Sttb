import { BackendApiUrl, buildUrl } from '../BackendApiUrl';

export const userApi = {
  keys: {
    list: (params?: any) => ['users', params],
    detail: (id: string) => ['users', id],
  },
  
  getListUrl: (params?: { page?: number; search?: string; role?: string }) =>
    buildUrl(BackendApiUrl.users, params),
    
  getByIdUrl: (id: string) => BackendApiUrl.user(id),
  
  createUrl: () => BackendApiUrl.users,
  
  updateUrl: (id: string) => BackendApiUrl.user(id),
  
  deleteUrl: (id: string) => BackendApiUrl.user(id),
  
  updateStatusUrl: (id: string) => BackendApiUrl.updateUserStatus(id),
  
  getRolesUrl: () => BackendApiUrl.userRoles,
};