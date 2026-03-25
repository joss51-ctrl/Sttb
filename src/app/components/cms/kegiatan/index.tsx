import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useKegiatan } from '@/app/components/cms/kegiatan/hooks/useKegiatan';
import { DataTable } from '@/app/components/shared/DataTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { columns } from '@/app/components/cms/kegiatan/hooks/columns';

export default function KegiatanList() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const { data, isLoading, actions } = useKegiatan({ search, status });
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Kegiatan Management</h1>
        <Link to="/cms/kegiatan/new">
          <Button>Create New Event</Button>
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
            <SelectValue placeholder="Event Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="Ongoing">Ongoing</SelectItem>
            <SelectItem value="Finished">Finished</SelectItem>
            <SelectItem value="Expired">Expired</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DataTable
        columns={columns(actions.deleteKegiatan)}
        data={data}
        loading={isLoading}
        onRowClick={(row) => navigate(`/cms/kegiatan/${row.id}`)}
      />
    </div>
  );
}