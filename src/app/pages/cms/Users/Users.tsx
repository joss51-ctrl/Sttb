import { useState } from 'react';
import { useUsers } from '@/app/components/cms/users/hooks/useUsers';
import { DataTable } from '@/app/components/shared/DataTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { useAuth } from '@/contexts/AuthContext';
import type { UserRole } from '@/types';

const roleColors: Record<UserRole, string> = {
  'Super Admin': 'bg-purple-100 text-purple-800',
  'Content Admin': 'bg-blue-100 text-blue-800',
  'Editor': 'bg-green-100 text-green-800',
  'Approver': 'bg-yellow-100 text-yellow-800',
};

export default function Users() {
  const [search, setSearch] = useState('');
  const { data: users, isLoading, actions } = useUsers({ search });
  const { user } = useAuth(); // ← Changed from usePermissions to useAuth
  
  // Check if current user is Super Admin
  const isSuperAdmin = user?.role === 'Super Admin';

  const columns = [
    { key: 'fullName', header: 'Name' },
    { key: 'email', header: 'Email' },
    {
      key: 'role',
      header: 'Role',
      render: (value: UserRole) => (
        <Badge className={roleColors[value] || 'bg-gray-100 text-gray-800'}>
          {value}
        </Badge>
      ),
    },
    {
      key: 'isActive',
      header: 'Status',
      render: (value: boolean, row: any) => (
        <div className="flex items-center gap-2">
          <Switch
            checked={value}
            onCheckedChange={(checked) => actions.toggleUserStatus(row.id, checked)}
            disabled={!isSuperAdmin}
          />
          <span className="text-sm">{value ? 'Active' : 'Inactive'}</span>
        </div>
      ),
    },
    {
      key: 'createdAt',
      header: 'Created',
      render: (value: Date) => new Date(value).toLocaleDateString(),
    },
    {
      key: 'lastLoginAt',
      header: 'Last Login',
      render: (value: Date) => value ? new Date(value).toLocaleDateString() : 'Never',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
        {isSuperAdmin && (
          <Button onClick={() => {/* open create user modal */}}>
            Add New User
          </Button>
        )}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              placeholder="Search users by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <DataTable
            columns={columns}
            data={users || []}
            loading={isLoading}
          />
        </CardContent>
      </Card>
    </div>
  );
}