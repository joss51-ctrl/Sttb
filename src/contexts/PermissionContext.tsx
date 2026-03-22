import { createContext, useContext, useEffect, useState } from 'react';
import { useFetchWithAccessToken } from '../functions/useFetchWithAccessToken';
import type { UserRole } from '../types';

interface PermissionContextType {
  user: { id: string; fullName: string; role: UserRole } | null;
  hasPermission: (requiredRole: UserRole | UserRole[]) => boolean;
  loading: boolean;
}

const PermissionContext = createContext<PermissionContextType | undefined>(undefined);

export function PermissionProvider({ children }: { children: React.ReactNode }) {
  const { fetchGET } = useFetchWithAccessToken();
  const [user, setUser] = useState<PermissionContextType['user']>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      const { data, error } = await fetchGET<{ id: string; fullName: string; role: UserRole }>('/api/auth/me');
      if (!error && data) setUser(data);
      setLoading(false);
    };
    fetchMe();
  }, []);

  const hasPermission = (requiredRole: UserRole | UserRole[]) => {
    if (!user) return false;
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    return roles.includes(user.role);
  };

  return (
    <PermissionContext.Provider value={{ user, hasPermission, loading }}>
      {children}
    </PermissionContext.Provider>
  );
}

export const usePermissions = () => {
  const ctx = useContext(PermissionContext);
  if (!ctx) throw new Error('usePermissions must be used within PermissionProvider');
  return ctx;
};