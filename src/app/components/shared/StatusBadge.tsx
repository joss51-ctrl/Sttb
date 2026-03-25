import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Define the allowed status types
export type StatusType = 'Draft' | 'In Review' | 'Approved' | 'Published' | 'Scheduled' | 'Rejected';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      status: {
        Draft: 'bg-gray-100 text-gray-800',
        'In Review': 'bg-yellow-100 text-yellow-800',
        Approved: 'bg-blue-100 text-blue-800',
        Published: 'bg-green-100 text-green-800',
        Scheduled: 'bg-purple-100 text-purple-800',
        Rejected: 'bg-red-100 text-red-800',
      },
    },
    defaultVariants: { status: 'Draft' },
  }
);

interface StatusBadgeProps extends VariantProps<typeof badgeVariants> {
  status: StatusType;  // Use the typed union instead of string
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn(badgeVariants({ status }), className)}>
      {status}
    </span>
  );
}