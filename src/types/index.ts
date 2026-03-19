// Core TypeScript types for the University Website and CMS

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Content Admin' | 'Editor' | 'Approver' | 'User';
  avatar?: string;
  createdAt: string;
}

export interface ContentItem {
  id: string;
  title: string;
  slug: string;
  contentType: 'page' | 'article' | 'banner' | 'announcement' | 'faq' | 'event';
  status: 'Draft' | 'In Review' | 'Approved' | 'Published' | 'Scheduled' | 'Rejected';
  author: User;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  publishedAt?: string;
  scheduledAt?: string;
  updatedAt: string;
  createdAt: string;
  category?: string;
  tags?: string[];
  
  // Event specific fields
  eventDate?: string;
  eventTime?: string;
  location?: string;
  organizer?: string;
}

export interface MediaItem {
  id: string;
  filename: string;
  url: string;
  type: 'image' | 'video' | 'document' | 'audio';
  size: number;
  mimeType: string;
  uploadedBy: User;
  uploadedAt: string;
  alt?: string;
  caption?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface DashboardStats {
  totalContent: number;
  publishedContent: number;
  draftContent: number;
  pendingReview: number;
  totalMedia: number;
  totalUsers: number;
}

export interface CMSFormData {
  title: string;
  slug?: string;
  content: string;
  contentType: ContentItem['contentType'];
  status: ContentItem['status'];
  excerpt?: string;
  featuredImage?: string;
  category?: string;
  tags?: string[];
  scheduledAt?: string;
  
  // Event specific fields
  eventDate?: string;
  eventTime?: string;
  location?: string;
  organizer?: string;
}
