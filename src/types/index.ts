
import { Input } from 'src/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'src/app/components/ui/select';
import { useNavigate } from 'react-router-dom';

export type UserRole = 'Super Admin' | 'Content Admin' | 'Editor' | 'Approver';
export type ContentStatus = 'Draft' | 'In Review' | 'Approved' | 'Published' | 'Scheduled' | 'Rejected';
export type KegiatanStatus = 'Ongoing' | 'Finished' | 'Expired';
export type MediaFormat = 'Video' | 'Artikel';
const navigate = useNavigate();
export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  lastLoginAt?: Date;
}

export interface Berita {
  id: string;
  title: string;
  content: string;
  thumbnailUrl?: string;   // optional
  category: string;
  taglines?: string;       // optional
  createdAt: Date;
  status?: ContentStatus;
  authorId?: string;
}

export interface Kegiatan {
  id: string;
  title: string;
  startDateTime: Date;
  endDateTime: Date;
  organizer: string;
  category: string;
  isFeatured: boolean;
  status: KegiatanStatus;
  location: string;
  description: string;
  // CMS additions:
  statusWorkflow?: ContentStatus;
}

export interface Media {
  id: string;
  formatMedia: MediaFormat;
  topikKategori: string;
  title: string;
  thumbnailUrl: string;
  contentUrl: string; // URL to video or article
  createdAt: Date;
  status?: ContentStatus;
}

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  entityType: 'Berita' | 'Kegiatan' | 'Media' | 'User';
  entityId: string;
  details: string;
  timestamp: Date;
}

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}
export type StatusType =
  | 'Draft'
  | 'In Review'
  | 'Approved'
  | 'Published'
  | 'Scheduled'
  | 'Rejected';

export const isValidStatus = (status: string): status is StatusType => {
  return [
    'Draft',
    'In Review',
    'Approved',
    'Published',
    'Scheduled',
    'Rejected',
  ].includes(status);
};

export interface ContentItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  contentType: 'page' | 'article' | 'banner' | 'announcement' | 'faq' | 'event';
  status: 'Draft' | 'In Review' | 'Approved' | 'Published' | 'Scheduled' | 'Rejected';
  excerpt?: string;
  category?: string;
  tags?: string[];
  eventDate?: string;
  eventTime?: string;
  location?: string;
  organizer?: string;
  createdAt: Date;
  updatedAt?: Date;
  authorId?: string;
}

export type CMSFormData = Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>;