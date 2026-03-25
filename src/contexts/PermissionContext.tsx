import { createContext, useContext, useMemo, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export type UserRole = 'Super Admin' | 'Content Admin' | 'Editor' | 'Approver';

interface PermissionContextType {
  userRole: UserRole | null;
  hasPermission: (requiredRole: UserRole | UserRole[]) => boolean;
}

const PermissionContext = createContext<PermissionContextType | undefined>(undefined);

export const PermissionProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  const userRole = useMemo(() => {
    if (!user?.role) return null;
    return user.role as UserRole;
  }, [user]);

  const hasPermission = (requiredRole: UserRole | UserRole[]): boolean => {
    if (!userRole) return false;
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    return roles.includes(userRole);
  };

  return (
    <PermissionContext.Provider value={{ userRole, hasPermission }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermissions = () => {
  const context = useContext(PermissionContext);
  if (!context) {
    throw new Error('usePermissions must be used within a PermissionProvider');
  }
  return context;
};