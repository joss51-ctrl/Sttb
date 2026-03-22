import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useBerita } from '@/app/components/cms/berita/hooks/useBerita';

import { DataTable } from '@/app/components/shared/DataTable';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { columns } from '@/app/components/cms/berita/hooks/columns';
export default function BeritaList() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const { data, isLoading, actions } = useBerita({ search, status });
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Berita Management</h1>
        <Link to="/cms/berita/new">
          <Button>Create New Article</Button>
        </Link>
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="Draft">Draft</SelectItem>
            <SelectItem value="In Review">In Review</SelectItem>
            <SelectItem value="Approved">Approved</SelectItem>
            <SelectItem value="Published">Published</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DataTable
        columns={columns(actions.deleteBerita)}
        data={data}
        loading={isLoading}
        onRowClick={(row) => navigate(`/cms/berita/${row.id}`)}
      />
    </div>
  );
}