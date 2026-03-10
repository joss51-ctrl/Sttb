# STTB Website & CMS - Complete Project Documentation

## Table of Contents
1. [Overview](#overview)
2. [Page Inventory](#page-inventory)
3. [Component Architecture](#component-architecture)
4. [API Structure](#api-structure)
5. [Type System](#type-system)
6. [Workflows](#workflows)
7. [Design System](#design-system)

## Overview

This is a comprehensive dual-application system consisting of:
- **Public Website**: For students, visitors, and the general public
- **CMS**: For content administrators, editors, and approvers

Built with React, TypeScript, Tailwind CSS, and Shadcn/UI following enterprise-grade standards.

---

## Page Inventory

### Public Website Pages

#### 1. Home Page (`/`)
- **Location**: `/src/app/pages/HomePage.tsx`
- **Features**:
  - Hero section with call-to-action
  - Quick statistics (8+ programs, 500+ students, etc.)
  - Latest news and events (3 featured items)
  - Program overview grid
  - Call-to-action section
- **Data**: Fetches latest published content from mock API
- **State Management**: Loading, error, and data states

#### 2. Kegiatan (Events) Page (`/kegiatan`)
- **Location**: `/src/app/pages/KegiatanPage.tsx`
- **Features**:
  - Event listings with featured images
  - Event details (date, time, location)
  - Category badges
  - Grid layout (responsive)
- **Data**: Filters content by category 'Kegiatan'

#### 3. Berita (News) Page (`/berita`)
- **Location**: `/src/app/pages/BeritaPage.tsx`
- **Features**:
  - News article listings
  - Author and date information
  - Tag system
  - Sidebar with categories
  - Two-column layout (main + sidebar)
- **Data**: Filters content by category 'Berita'

#### 4. Media Page (`/media`)
- **Location**: `/src/app/pages/MediaPage.tsx`
- **Features**:
  - Photo and video gallery
  - Grid layout with hover effects
  - Image previews
- **Status**: Basic implementation (can be enhanced with filters)

#### 5. LEAD Page (`/lead`)
- **Location**: `/src/app/pages/LEADPage.tsx`
- **Features**:
  - Program description
  - Leadership development information
- **Status**: Content page (can be enhanced with program details)

#### 6. Perpustakaan (Library) Page (`/perpustakaan`)
- **Location**: `/src/app/pages/PerpustakaanPage.tsx`
- **Features**:
  - Library statistics (10,000+ books, 500+ journals, 2,000+ e-books)
  - Resource overview
  - Collection highlights
- **Status**: Information page (can be enhanced with catalog integration)

#### 7. Login Page (`/login`)
- **Location**: `/src/app/pages/LoginPage.tsx`
- **Features**:
  - Email/password authentication form
  - Demo credentials (any email/password works)
  - Redirects to CMS after login
- **Security**: Mock authentication (needs real OAuth/OIDC in production)

#### 8. 404 Page (`/*`)
- **Location**: `/src/app/pages/NotFoundPage.tsx`
- **Features**:
  - Friendly error message
  - Back to home button

---

### CMS Admin Pages

#### 1. Dashboard (`/cms`)
- **Location**: `/src/app/pages/cms/Dashboard.tsx`
- **Features**:
  - Key metrics cards (Total Content, Published, Pending Review, Media Files)
  - Content status breakdown with progress bars
  - Progress calculation: `(published / total) * 100`
  - Quick action cards
  - System status indicator
- **Data Fetching**: Loads dashboard statistics with loading/error states
- **Comments**: Detailed explanations of progress bar logic

#### 2. Content List (`/cms/content`)
- **Location**: `/src/app/pages/cms/ContentList.tsx`
- **Features**:
  - Data table with sortable columns
  - Search functionality (live filtering)
  - Status filter dropdown (All, Published, Draft, In Review, Scheduled)
  - Type filter dropdown (All, Page, Article, Banner, Announcement)
  - Action menu per row (Edit, Preview, Delete)
  - Status badges with color coding
  - Create new button
- **State**: Search query, status filter, type filter
- **CRUD**: Delete with confirmation dialog

#### 3. Content Editor (`/cms/content/new` and `/cms/content/:id`)
- **Location**: `/src/app/pages/cms/ContentEditor.tsx`
- **Features**:
  - Form with validation
  - Fields: Title*, Slug, Excerpt, Content*, Type, Status, Category, Tags
  - Auto-slug generation (mentioned in UI)
  - Rich text editor placeholder (Textarea with note for production)
  - Save/Update functionality
  - Cancel button (navigates back)
  - Toast notifications on success/error
- **State**: Form data, loading, saving states
- **Validation**: Required fields marked with *

#### 4. Media Library (`/cms/media`)
- **Location**: `/src/app/pages/cms/MediaLibrary.tsx`
- **Features**:
  - Grid view of uploaded media
  - Upload button (file input)
  - File preview (images shown, others show MIME type)
  - Delete on hover (with confirmation)
  - File information (filename, size in KB)
  - Upload progress state
- **Supported**: Images, videos, documents
- **State**: Loading, uploading states

#### 5. Users (`/cms/users`)
- **Location**: `/src/app/pages/cms/Users.tsx`
- **Features**:
  - User list table
  - Role badges with color coding
  - Add user button (placeholder)
  - User information (Name, Email, Role, Created date)
- **Roles**: Super Admin, Content Admin, Editor, Approver, User

#### 6. Settings (`/cms/settings`)
- **Location**: `/src/app/pages/cms/Settings.tsx`
- **Features**:
  - Site settings form (Site Name, Site URL)
  - Notification settings placeholder
  - Save changes button
- **Status**: Basic implementation (can be enhanced)

---

## Component Architecture

### Layouts

#### PublicLayout
- **Location**: `/src/app/layouts/PublicLayout.tsx`
- **Components**: PublicHeader, Outlet, PublicFooter
- **Structure**: Flex column with sticky header

#### CMSLayout
- **Location**: `/src/app/layouts/CMSLayout.tsx`
- **Components**: Sidebar navigation, Top bar, Main content area
- **Features**:
  - Collapsible sidebar (toggle button)
  - Active route highlighting
  - User profile in top bar
  - Logout button
- **Navigation**: Dashboard, Content, Media, Users, Settings

### Shared Components

#### PublicHeader
- **Location**: `/src/app/components/public/PublicHeader.tsx`
- **Features**:
  - Top bar with quick links (Beranda, Kegiatan, Berita, Media, LEAD, Perpustakaan)
  - Search bar with toggle
  - Main navigation with dropdown menus (Shadcn NavigationMenu)
  - Mobile menu with hamburger icon
  - Sticky positioning
- **Menus**:
  - Tentang Kami: Sejarah, Visi Misi, Pengakuan Iman
  - Akademik: 8 program studi
  - Admisi: Pendaftaran Online, Jadwal, Prosedur, FAQ
  - Keuangan: Biaya Studi, Beasiswa, Dukung STTB
  - Kehidupan Kampus: Fasilitas, Pembinaan, Senat
  - Kontak Kami

#### PublicFooter
- **Location**: `/src/app/components/public/PublicFooter.tsx`
- **Sections**:
  1. Sumber Daya: Perpustakaan, Digital, Jurnal, Podcast, Video, Buletin
  2. Link Bantuan: SIA, E-Learning, Library System, Collaboration, Alumni, Mail
  3. Program Studi: All 7+ programs listed
  4. Bank Account: BCA details
  5. Newsletter: Name + Email subscription form
  6. Contact Info: Address, Phone, WhatsApp, Email
  7. Social Media: Facebook, Instagram, YouTube, Twitter icons
  8. Copyright notice
- **Grid**: 5 columns on desktop, responsive

### UI Components (Shadcn/UI)

All in `/src/app/components/ui/`:
- Button, Input, Label, Textarea
- Card, Badge, Progress
- Table, Select, Dropdown Menu
- Navigation Menu
- Dialog, Alert Dialog
- Toast (Sonner)
- And 30+ more Radix UI primitives

---

## API Structure

### Mock API
- **Location**: `/src/utils/mockApi.ts`
- **Purpose**: Simulates backend for development

#### Methods:

**Dashboard**
- `getDashboardStats()`: Returns statistics object

**Content**
- `getContentList(filters?)`: Get all content with optional filters
  - Filters: status, contentType, search
- `getContentById(id)`: Get single content item
- `createContent(data)`: Create new content
- `updateContent(id, data)`: Update existing content
- `deleteContent(id)`: Delete content

**Media**
- `getMediaList()`: Get all media files
- `uploadMedia(file)`: Upload new file
- `deleteMedia(id)`: Delete media file

**Users**
- `getUserList()`: Get all users
- `getCurrentUser()`: Get logged-in user

**Public**
- `getPublicContent(category?)`: Get published content, optionally filtered by category

#### Mock Data:
- 3 Users (Dr. Yohanes Susanto, Maria Wijaya, David Sinaga)
- 5 Content Items (various statuses)
- 2 Media Items

---

## Type System

### Location
`/src/types/index.ts`

### Interfaces:

#### User
```typescript
{
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Content Admin' | 'Editor' | 'Approver' | 'User';
  avatar?: string;
  createdAt: string;
}
```

#### ContentItem
```typescript
{
  id: string;
  title: string;
  slug: string;
  contentType: 'page' | 'article' | 'banner' | 'announcement' | 'faq';
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
}
```

#### MediaItem
```typescript
{
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
```

#### DashboardStats
```typescript
{
  totalContent: number;
  publishedContent: number;
  draftContent: number;
  pendingReview: number;
  totalMedia: number;
  totalUsers: number;
}
```

#### CMSFormData
```typescript
{
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
}
```

---

## Workflows

### Content Publishing Workflow

```
1. Editor creates content → Status: Draft
2. Editor submits for review → Status: In Review
3. Approver reviews content:
   a. Approves → Status: Approved
   b. Rejects → Status: Rejected (back to Draft)
4. Admin publishes:
   a. Immediately → Status: Published
   b. Scheduled → Status: Scheduled (auto-publish at scheduledAt)
```

### User Roles & Permissions

| Action | Super Admin | Content Admin | Editor | Approver | User |
|--------|-------------|---------------|--------|----------|------|
| View public website | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create content | ✓ | ✓ | ✓ | - | - |
| Edit own content | ✓ | ✓ | ✓ | - | - |
| Edit all content | ✓ | ✓ | - | - | - |
| Delete content | ✓ | ✓ | - | - | - |
| Approve content | ✓ | ✓ | - | ✓ | - |
| Publish content | ✓ | ✓ | - | - | - |
| Upload media | ✓ | ✓ | ✓ | - | - |
| Delete media | ✓ | ✓ | - | - | - |
| Manage users | ✓ | - | - | - | - |
| System settings | ✓ | - | - | - | - |

---

## Design System

### Colors

**Primary**: Blue 900/700 (University brand)
- Gradients for headers
- CTA buttons
- Navigation active states

**Status Colors**:
- Published: Green
- Draft: Gray
- In Review: Yellow
- Approved: Blue
- Scheduled: Purple
- Rejected: Red

### Typography

**Headings**:
- H1: 3xl - 5xl (responsive)
- H2: 2xl - 3xl
- H3: xl - 2xl
- H4: lg - xl

**Body**: Base (16px)

**Font Weights**:
- Normal: 400
- Medium: 500
- Bold: 700

### Spacing

**Container**: `container mx-auto px-4`
**Sections**: `py-12` to `py-16`
**Card gaps**: `gap-4` to `gap-6`
**Grid gaps**: `gap-4` to `gap-8`

### Grid System

**Public Pages**: 1-3 columns (responsive)
**CMS Tables**: Full width
**CMS Sidebar**: 64 (sidebar) + flex-1 (content)

### Components

**Cards**: Rounded corners, subtle shadow, hover effects
**Buttons**: Primary (filled), Outline, Ghost variants
**Tables**: Striped rows optional, hover states
**Forms**: Clear labels, helper text, validation messages
**Badges**: Rounded, colored by status/role
**Progress bars**: Height 2, colored by context

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large: > 1280px

### Accessibility

- ARIA labels on icon buttons
- Focus states on all interactive elements
- Semantic HTML (nav, main, footer, section, article)
- Color contrast compliance
- Keyboard navigation support

---

## File Structure Summary

```
Total Files Created: 25+

Public Pages: 8
- HomePage, KegiatanPage, BeritaPage, MediaPage
- LEADPage, PerpustakaanPage, LoginPage, NotFoundPage

CMS Pages: 6
- Dashboard, ContentList, ContentEditor
- MediaLibrary, Users, Settings

Layouts: 2
- PublicLayout, CMSLayout

Components: 2
- PublicHeader, PublicFooter

Core Files: 4
- routes.ts, App.tsx
- types/index.ts, utils/mockApi.ts

Documentation: 2
- README.md, PROJECT_DOCUMENTATION.md

Existing: 40+ Shadcn/UI components
```

---

## Development Notes

### State Management Pattern

All data-fetching components follow this pattern:

```tsx
const [data, setData] = useState<Type[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      // Fetch data
      const result = await mockApi.getData();
      setData(result);
    } catch (err) {
      setError('Error message');
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [dependencies]);
```

### Progress Bar Calculation

Used in Dashboard to show publishing progress:

```tsx
// Calculate percentage of published content
const publishedPercentage = stats
  ? Math.round((stats.publishedContent / stats.totalContent) * 100)
  : 0;

<Progress value={publishedPercentage} className="h-2" />
```

### Security Considerations

- No hardcoded credentials
- Mock auth for demo (replace with OAuth/OIDC)
- Input validation on forms
- CSRF protection needed in production
- Environment variables for sensitive data

### Next Steps for Production

1. Replace mock API with real backend endpoints
2. Implement OAuth/OIDC authentication
3. Add rich text editor (TinyMCE/CKEditor)
4. Implement file upload to cloud storage
5. Add server-side validation
6. Implement pagination for large datasets
7. Add search indexing (Algolia/Elasticsearch)
8. Set up CI/CD pipeline
9. Configure CDN for static assets
10. Implement analytics tracking

---

**Last Updated**: March 10, 2026
**Version**: 1.0.0
**Maintainer**: STTB Development Team
