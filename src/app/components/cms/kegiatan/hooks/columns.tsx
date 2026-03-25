import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/app/components/shared/StatusBadge';
import type { Kegiatan } from '@/types';
import { Trash2, Edit } from 'lucide-react';
import { isValidStatus } from '@/types/index';


export const columns = (onDelete: (id: string) => void) => [
  { key: 'title', header: 'Title' },
  { key: 'category', header: 'Category' },
  {
    key: 'startDateTime',
    header: 'Start Date',
        render: (value: string) =>
      isValidStatus(value) ? (
        <StatusBadge status={value} />
      ) : (
        <StatusBadge status="Draft" />
      ),
  },
  {
    key: 'status',
    header: 'Event Status',
    render: (value: string) => {
      const statusColors: Record<string, string> = {
        Ongoing: 'bg-green-100 text-green-800',
        Finished: 'bg-blue-100 text-blue-800',
        Expired: 'bg-gray-100 text-gray-800',
      };
      return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColors[value] || 'bg-gray-100 text-gray-800'}`}>
          {value}
        </span>
      );
    },
  },
  {
    key: 'statusWorkflow',
    header: 'Workflow',    
    render: (value: string) =>
      isValidStatus(value) ? (
        <StatusBadge status={value} />
      ) : (
        <StatusBadge status="Draft" />
      ),
  },
  {
    key: 'actions',
    header: 'Actions',
    render: (_: any, row: Kegiatan) => (
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