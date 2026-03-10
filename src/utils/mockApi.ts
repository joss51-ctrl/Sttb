// Mock API for development - simulates backend responses
// In production, these would be replaced with actual API calls

import { User, ContentItem, MediaItem, DashboardStats } from '../types';

// Mock delay to simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Dr. Yohanes Susanto',
    email: 'yohanes@sttb.ac.id',
    role: 'Super Admin',
    createdAt: '2026-01-15T08:00:00Z',
  },
  {
    id: '2',
    name: 'Maria Wijaya',
    email: 'maria@sttb.ac.id',
    role: 'Content Admin',
    createdAt: '2026-02-01T08:00:00Z',
  },
  {
    id: '3',
    name: 'David Sinaga',
    email: 'david@sttb.ac.id',
    role: 'Editor',
    createdAt: '2026-02-10T08:00:00Z',
  },
];

// Mock Content Items
export const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Selamat Datang di STTB',
    slug: 'welcome-to-sttb',
    contentType: 'page',
    status: 'Published',
    author: mockUsers[0],
    content: 'Sekolah Tinggi Teologia Bandung adalah lembaga pendidikan teologi terkemuka yang berkomitmen untuk membentuk pemimpin rohani yang berkualitas.',
    excerpt: 'Selamat datang di Sekolah Tinggi Teologi Bandung',
    featuredImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop',
    publishedAt: '2026-03-01T09:00:00Z',
    updatedAt: '2026-03-01T09:00:00Z',
    createdAt: '2026-02-25T10:00:00Z',
    category: 'Beranda',
    tags: ['welcome', 'about'],
  },
  {
    id: '2',
    title: 'Kegiatan Seminar Teologi 2026',
    slug: 'seminar-teologi-2026',
    contentType: 'article',
    status: 'Published',
    author: mockUsers[1],
    content: 'STTB akan mengadakan seminar teologi dengan tema "Transformasi Gereja Urban di Era Digital" pada 15 April 2026.',
    excerpt: 'Seminar teologi dengan tema transformasi gereja urban',
    featuredImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
    publishedAt: '2026-03-05T10:00:00Z',
    updatedAt: '2026-03-05T10:00:00Z',
    createdAt: '2026-03-01T14:00:00Z',
    category: 'Kegiatan',
    tags: ['seminar', 'event'],
  },
  {
    id: '3',
    title: 'Pendaftaran Mahasiswa Baru 2026/2027',
    slug: 'pendaftaran-mahasiswa-baru-2026',
    contentType: 'announcement',
    status: 'In Review',
    author: mockUsers[2],
    content: 'Pendaftaran mahasiswa baru untuk tahun akademik 2026/2027 telah dibuka. Dapatkan beasiswa hingga 50% untuk pendaftar awal.',
    excerpt: 'Pendaftaran mahasiswa baru telah dibuka',
    featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop',
    updatedAt: '2026-03-08T11:00:00Z',
    createdAt: '2026-03-07T09:00:00Z',
    category: 'Admisi',
    tags: ['admission', 'scholarship'],
  },
  {
    id: '4',
    title: 'Berita: Akreditasi Unggul untuk Program Magister',
    slug: 'akreditasi-unggul-magister',
    contentType: 'article',
    status: 'Draft',
    author: mockUsers[1],
    content: 'Program Magister Teologi STTB mendapatkan akreditasi unggul dari BAN-PT.',
    excerpt: 'Akreditasi unggul untuk program magister',
    updatedAt: '2026-03-09T15:00:00Z',
    createdAt: '2026-03-09T14:00:00Z',
    category: 'Berita',
    tags: ['news', 'accreditation'],
  },
  {
    id: '5',
    title: 'Perpustakaan Digital STTB',
    slug: 'perpustakaan-digital',
    contentType: 'page',
    status: 'Scheduled',
    author: mockUsers[0],
    content: 'Akses ribuan koleksi buku teologi, jurnal, dan sumber daya digital lainnya.',
    excerpt: 'Perpustakaan digital dengan koleksi lengkap',
    featuredImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=600&fit=crop',
    scheduledAt: '2026-03-15T08:00:00Z',
    updatedAt: '2026-03-09T16:00:00Z',
    createdAt: '2026-03-08T10:00:00Z',
    category: 'Perpustakaan',
    tags: ['library', 'digital'],
  },
];

// Mock Media Items
export const mockMedia: MediaItem[] = [
  {
    id: '1',
    filename: 'campus-building.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    type: 'image',
    size: 2048576,
    mimeType: 'image/jpeg',
    uploadedBy: mockUsers[1],
    uploadedAt: '2026-03-01T10:00:00Z',
    alt: 'STTB Campus Building',
    caption: 'Main campus building',
  },
  {
    id: '2',
    filename: 'library-interior.jpg',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop',
    type: 'image',
    size: 1536789,
    mimeType: 'image/jpeg',
    uploadedBy: mockUsers[1],
    uploadedAt: '2026-03-02T11:00:00Z',
    alt: 'STTB Library Interior',
    caption: 'Library reading area',
  },
];

// Mock API functions
export const mockApi = {
  // Dashboard
  getDashboardStats: async (): Promise<DashboardStats> => {
    await delay(500);
    return {
      totalContent: mockContent.length,
      publishedContent: mockContent.filter(c => c.status === 'Published').length,
      draftContent: mockContent.filter(c => c.status === 'Draft').length,
      pendingReview: mockContent.filter(c => c.status === 'In Review').length,
      totalMedia: mockMedia.length,
      totalUsers: mockUsers.length,
    };
  },

  // Content
  getContentList: async (filters?: {
    status?: string;
    contentType?: string;
    search?: string;
  }): Promise<ContentItem[]> => {
    await delay(800);
    let filtered = [...mockContent];
    
    if (filters?.status) {
      filtered = filtered.filter(c => c.status === filters.status);
    }
    if (filters?.contentType) {
      filtered = filtered.filter(c => c.contentType === filters.contentType);
    }
    if (filters?.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(c => 
        c.title.toLowerCase().includes(search) ||
        c.content.toLowerCase().includes(search)
      );
    }
    
    return filtered;
  },

  getContentById: async (id: string): Promise<ContentItem | null> => {
    await delay(400);
    return mockContent.find(c => c.id === id) || null;
  },

  createContent: async (data: Partial<ContentItem>): Promise<ContentItem> => {
    await delay(600);
    const newContent: ContentItem = {
      id: String(mockContent.length + 1),
      title: data.title || '',
      slug: data.slug || '',
      contentType: data.contentType || 'article',
      status: data.status || 'Draft',
      author: mockUsers[0],
      content: data.content || '',
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      category: data.category,
      tags: data.tags,
    };
    mockContent.push(newContent);
    return newContent;
  },

  updateContent: async (id: string, data: Partial<ContentItem>): Promise<ContentItem> => {
    await delay(600);
    const index = mockContent.findIndex(c => c.id === id);
    if (index === -1) throw new Error('Content not found');
    
    mockContent[index] = {
      ...mockContent[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return mockContent[index];
  },

  deleteContent: async (id: string): Promise<void> => {
    await delay(400);
    const index = mockContent.findIndex(c => c.id === id);
    if (index !== -1) {
      mockContent.splice(index, 1);
    }
  },

  // Media
  getMediaList: async (): Promise<MediaItem[]> => {
    await delay(600);
    return [...mockMedia];
  },

  uploadMedia: async (file: File): Promise<MediaItem> => {
    await delay(1000);
    const newMedia: MediaItem = {
      id: String(mockMedia.length + 1),
      filename: file.name,
      url: URL.createObjectURL(file),
      type: file.type.startsWith('image/') ? 'image' : 'document',
      size: file.size,
      mimeType: file.type,
      uploadedBy: mockUsers[0],
      uploadedAt: new Date().toISOString(),
    };
    mockMedia.push(newMedia);
    return newMedia;
  },

  deleteMedia: async (id: string): Promise<void> => {
    await delay(400);
    const index = mockMedia.findIndex(m => m.id === id);
    if (index !== -1) {
      mockMedia.splice(index, 1);
    }
  },

  // Users
  getUserList: async (): Promise<User[]> => {
    await delay(500);
    return [...mockUsers];
  },

  getCurrentUser: async (): Promise<User> => {
    await delay(300);
    return mockUsers[0]; // Return first user as current user
  },

  // Public content (for website)
  getPublicContent: async (category?: string): Promise<ContentItem[]> => {
    await delay(400);
    let content = mockContent.filter(c => c.status === 'Published');
    if (category) {
      content = content.filter(c => c.category === category);
    }
    return content;
  },
};
