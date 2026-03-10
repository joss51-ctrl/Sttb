# Quick Start Guide - STTB Website & CMS

## 🚀 Get Started in 3 Steps

### 1. Explore the Public Website

Visit these pages to see the university website:

- **Home** (`/`) - Main landing page with hero, stats, and latest news
- **Kegiatan** (`/kegiatan`) - Events and activities
- **Berita** (`/berita`) - News and announcements  
- **Media** (`/media`) - Photo and video gallery
- **LEAD** (`/lead`) - Leadership program
- **Perpustakaan** (`/perpustakaan`) - Library information

### 2. Login to CMS

1. Click "LOGIN" in the top navigation bar
2. Go to `/login` page
3. **Demo Access**: Enter ANY email and password (e.g., `admin@sttb.ac.id` / `password`)
4. You'll be redirected to the CMS Dashboard

### 3. Manage Content

Once logged in to CMS (`/cms`):

#### Dashboard
- View content statistics
- See publishing progress
- Access quick actions

#### Content Management
1. Go to "Content" in sidebar
2. Click "Create New" to add content
3. Fill in the form:
   - Title (required)
   - Content (required)
   - Type (Page, Article, Banner, etc.)
   - Status (Draft, In Review, Published, etc.)
4. Click "Create Content"
5. Your content appears in the list!

#### Media Library
1. Go to "Media" in sidebar
2. Click "Upload File"
3. Select an image or document
4. File appears in the grid

#### User Management
1. Go to "Users" in sidebar
2. View all users with their roles
3. Click "Add User" (placeholder for demo)

---

## 🎯 Key Features to Try

### Public Website

✅ **Sticky Navigation** - Scroll down and watch the header stick to the top

✅ **Dropdown Menus** - Hover over "Tentang Kami", "Akademik", etc. to see submenus

✅ **Search** - Click the search icon in the top bar

✅ **Responsive Design** - Resize your browser to see mobile view

✅ **Newsletter Signup** - Fill out the form in the footer

### CMS

✅ **Filter Content** - Use the status and type dropdowns in Content list

✅ **Search Content** - Type in the search box to filter in real-time

✅ **Edit Content** - Click the menu icon (⋮) next to any content item

✅ **Status Badges** - See color-coded badges for Draft, Published, In Review, etc.

✅ **Progress Bars** - View publishing progress in Dashboard

✅ **Delete Confirmation** - Try deleting an item to see the confirmation dialog

---

## 📊 Understanding Content Status

| Status | Color | Meaning |
|--------|-------|---------|
| **Draft** | Gray | Content is being written |
| **In Review** | Yellow | Submitted for approval |
| **Approved** | Blue | Ready to publish |
| **Published** | Green | Live on website |
| **Scheduled** | Purple | Will auto-publish later |
| **Rejected** | Red | Needs revision |

---

## 👥 User Roles

The system has 5 role levels (mock data includes 3):

1. **Super Admin** (Dr. Yohanes Susanto)
   - Full access to everything
   - Can manage users and settings

2. **Content Admin** (Maria Wijaya)
   - Manage all content and media
   - Can publish content

3. **Editor** (David Sinaga)
   - Create and edit drafts
   - Submit for review

4. **Approver**
   - Review and approve content
   - Cannot publish

5. **User**
   - View public website only

---

## 🔍 Where to Find Things

### Important Files

- **Routes**: `/src/app/routes.ts`
- **Types**: `/src/types/index.ts`
- **Mock API**: `/src/utils/mockApi.ts`
- **Main App**: `/src/app/App.tsx`

### Page Locations

**Public Pages**: `/src/app/pages/`
**CMS Pages**: `/src/app/pages/cms/`
**Layouts**: `/src/app/layouts/`
**Components**: `/src/app/components/`

### Documentation

- **README.md** - Project overview and tech stack
- **PROJECT_DOCUMENTATION.md** - Complete feature documentation
- **This File** - Quick start guide

---

## 💡 Tips & Tricks

### For Developers

1. **Check Console Logs** - API calls are logged to the console
2. **Mock Data Lives Here** - `/src/utils/mockApi.ts` - Edit it to change sample data
3. **Add New Routes** - Edit `/src/app/routes.ts`
4. **Styling** - Use Tailwind classes (already configured)
5. **Icons** - Import from `lucide-react` package

### For Content Editors

1. **Draft First** - Always start with Draft status
2. **Use Categories** - Group content with categories (Beranda, Kegiatan, Berita, etc.)
3. **Add Tags** - Help organize content with comma-separated tags
4. **Excerpts** - Write short descriptions for better previews
5. **Featured Images** - Use images from the Media Library (URLs for demo)

---

## 🎨 Customization

### Change Colors

Edit `/src/styles/theme.css` to modify:
- Primary colors
- Status colors
- Dark mode colors

### Add Navigation Items

Edit `/src/app/components/public/PublicHeader.tsx`:

```tsx
const topMenuItems = [
  { label: 'Your Page', href: '/your-page' },
  // ... existing items
];
```

### Add CMS Sidebar Items

Edit `/src/app/layouts/CMSLayout.tsx`:

```tsx
const navigation = [
  { name: 'Your Section', href: '/cms/your-section', icon: YourIcon },
  // ... existing items
];
```

---

## 📱 Responsive Design

The site works on all screen sizes:

- **Mobile** (< 768px): Single column, hamburger menu
- **Tablet** (768-1024px): 2 columns, simplified navigation
- **Desktop** (> 1024px): Full layout, all features visible

---

## 🔐 Security Notes

⚠️ **This is a development build with mock authentication**

For production, you need:

1. Real authentication (OAuth, OIDC, or similar)
2. Backend API with proper authorization
3. HTTPS only
4. Environment variables for secrets
5. Input validation on server side
6. CSRF protection
7. Rate limiting

---

## 🐛 Troubleshooting

### "Page not found"
- Make sure you're using the correct URL
- Check `/src/app/routes.ts` for available routes

### "Content not loading"
- Check browser console for errors
- Mock API might have failed (simulated 500ms delay)

### "Can't login to CMS"
- Remember: ANY email/password works in demo mode
- Make sure you're clicking the "Login" button

### "Sidebar disappeared in CMS"
- Click the menu icon (☰) in the top left to toggle sidebar

---

## 📞 Support

For questions about:

- **Features**: See `PROJECT_DOCUMENTATION.md`
- **Code Standards**: See `/src/imports/fe-standard.md`
- **Security**: See `/src/imports/security-standard.md`
- **Design**: See `/src/imports/guideline.md`

---

**Happy Building! 🎉**

---

*This project was built following enterprise-grade standards for a professional university website and CMS.*
