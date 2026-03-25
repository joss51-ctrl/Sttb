import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/app/components/shared/StatusBadge';
import type { Media } from '@/types';
import { Trash2, Edit } from 'lucide-react';
import { isValidStatus } from '@/types/index';

export const columns = (onDelete: (id: string) => void) => [
  { key: 'title', header: 'Title' },
  { key: 'formatMedia', header: 'Format' },
  { key: 'topikKategori', header: 'Topic' },
  {
    key: 'status',
    header: 'Status',
        render: (value: string) =>
          isValidStatus(value) ? (
            <StatusBadge status={value} />
          ) : (
            <StatusBadge status="Draft" />
          ),
        },
  {
    key: 'createdAt',
    header: 'Uploaded At',
    render: (value: Date) => new Date(value).toLocaleDateString(),
  },
  {
    key: 'actions',
    header: 'Actions',
    render: (_: any, row: Media) => (
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); /* edit */ }}>
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); onDelete(row.id); }}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];