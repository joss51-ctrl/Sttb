# STTB Website & CMS

Enterprise-grade university website and content management system for Sekolah Tinggi Teologi Bandung (STTB).

## Project Overview

This project consists of two main applications:

1. **Public Website** - University website with academic information, news, events, and media
2. **CMS (Content Management System)** - Admin panel for managing website content, media, and users

## Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Routing**: React Router 7 (Data mode)
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn/UI (Radix UI primitives)
- **Form Management**: React Hook Form 7.55 + Zod
- **Data Fetching**: SWR
- **State Management**: React hooks (useState, useEffect)
- **Icons**: Lucide React
- **Notifications**: Sonner (toast)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── public/          # Public website components
│   │   │   ├── PublicHeader.tsx
│   │   │   └── PublicFooter.tsx
│   │   └── ui/              # Shadcn/UI base components
│   ├── layouts/
│   │   ├── PublicLayout.tsx # Layout for public pages
│   │   └── CMSLayout.tsx    # Layout for CMS pages
│   ├── pages/
│   │   ├── HomePage.tsx     # Public pages
│   │   ├── KegiatanPage.tsx
│   │   ├── BeritaPage.tsx
│   │   ├── MediaPage.tsx
│   │   ├── LEADPage.tsx
│   │   ├── PerpustakaanPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   └── cms/             # CMS admin pages
│   │       ├── Dashboard.tsx
│   │       ├── ContentList.tsx
│   │       ├── ContentEditor.tsx
│   │       ├── MediaLibrary.tsx
│   │       ├── Users.tsx
│   │       └── Settings.tsx
│   ├── routes.ts            # Route configuration
│   └── App.tsx              # Main app component
├── types/
│   └── index.ts             # TypeScript type definitions
├── utils/
│   └── mockApi.ts           # Mock API for development
├── styles/
│   ├── tailwind.css
│   ├── theme.css
│   └── fonts.css
└── imports/                 # Figma imported assets
    ├── Icons.tsx
    └── svg-*.ts
```

## Key Features

### Public Website

- **Responsive Design**: Mobile-first, adaptive across devices
- **Navigation**: Sticky header with mega menu dropdowns
- **Content Pages**: Homepage, News, Events, Media, Library
- **Footer**: Comprehensive links, newsletter signup, contact info
- **Search**: Global search functionality

### CMS

- **Dashboard**: Key metrics, statistics, quick actions
- **Content Management**: Create, edit, delete, publish content
- **Status Workflow**: Draft → In Review → Approved → Published → Scheduled
- **Media Library**: Upload and manage images, videos, documents
- **User Management**: Role-based access control (Super Admin, Content Admin, Editor, Approver)
- **Search & Filter**: Advanced filtering by status, type, author
- **Responsive Tables**: Data tables with sorting and pagination

## Development Standards

This project follows enterprise-grade development standards as specified in:

- `/src/imports/fe-standard.md` - Frontend development standards
- `/src/imports/security-standard.md` - Security requirements
- `/src/imports/guideline.md` - Design and UX guidelines

### Code Conventions

- **TypeScript**: Strict typing for all components, props, and API responses
- **Component Pattern**: Feature-based organization
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Hooks**: Custom hooks pattern (use[Feature][Action])
- **Comments**: Clear documentation for complex logic and data states

### Data Fetching Pattern

Components use the following pattern for data fetching:

```tsx
const [data, setData] = useState<Type[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await mockApi.getData();
      setData(result);
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
```

### Progress Bar Calculation

Dashboard progress bars calculate percentages as:
```tsx
const percentage = (completedItems / totalItems) * 100;
```

## Mock Data

The project uses mock data (`/src/utils/mockApi.ts`) for development. In production:

- Replace mock API calls with actual backend endpoints
- Implement proper authentication (OAuth/OIDC)
- Add request/response validation
- Implement error handling and retry logic

## Routes

### Public Routes
- `/` - Homepage
- `/kegiatan` - Events and activities
- `/berita` - News and announcements
- `/media` - Media gallery
- `/lead` - LEAD program
- `/perpustakaan` - Library
- `/login` - Login to CMS

### CMS Routes (Protected)
- `/cms` - Dashboard
- `/cms/content` - Content list
- `/cms/content/new` - Create new content
- `/cms/content/:id` - Edit content
- `/cms/media` - Media library
- `/cms/users` - User management
- `/cms/settings` - System settings

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## User Roles

- **Super Admin**: Full system access, user management, settings
- **Content Admin**: Manage all content, media, and publishing
- **Editor**: Create and edit content drafts
- **Approver**: Review and approve content for publishing
- **User**: Public website visitor (read-only)

## Content Workflow

1. **Draft** - Initial content creation
2. **In Review** - Submitted for approval
3. **Approved** - Ready for publishing
4. **Published** - Live on website
5. **Scheduled** - Scheduled for future publication
6. **Rejected** - Returned for revision

## Security Considerations

- No hardcoded credentials (all in environment variables)
- CSRF protection on all forms
- Input validation and sanitization
- Role-based access control
- Secure session management
- XSS prevention (contextual escaping)

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast compliance
- Screen reader friendly

## Performance Optimizations

- Code splitting with React Router
- Lazy loading of images
- Debounced search inputs
- Memoization of expensive computations
- Optimized re-renders

## Future Enhancements

- Rich text editor (TinyMCE/CKEditor)
- Real-time collaboration
- Advanced media editing
- SEO optimization tools
- Analytics dashboard
- Multi-language support
- Email notifications
- Audit log
- Version control for content

## Support

For questions or issues, contact the development team or refer to the documentation in `/src/imports/`.

---

**Built with ❤️ for STTB**
