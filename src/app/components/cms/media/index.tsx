import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMedia } from '@/app/components/cms/media/hooks/useMedia';
import { DataTable } from '@/app/components/shared/DataTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StatusBadge } from '@/app/components/shared/StatusBadge';
import { columns } from '@/app/components/cms/media/hooks/columns';


export default function MediaList() {
  const [search, setSearch] = useState('');
  const [format, setFormat] = useState('');
  const { data, isLoading, actions } = useMedia({ search, format });
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Media Library</h1>
        <Link to="/cms/media/new">
          <Button>Upload New Media</Button>
        </Link>
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={format} onValueChange={setFormat}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="Video">Video</SelectItem>
            <SelectItem value="Artikel">Artikel</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DataTable
        columns={columns(actions.deleteMedia)}
        data={data}
        loading={isLoading}
        onRowClick={(row) => navigate(`/cms/media/${row.id}`)}
      />
    </div>
  );
}