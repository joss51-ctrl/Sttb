import { createBrowserRouter } from 'react-router';

// Public pages
import HomePage from './pages/HomePage';
import KegiatanPage from './pages/KegiatanPage';
import BeritaPage from './pages/BeritaPage';
import MediaPage from './pages/MediaPage';
import LEADPage from './pages/LEADPage';
import PerpustakaanPage from './pages/PerpustakaanPage';
import SejarahPage from './pages/SejarahPage';
import VisiMisiPage from './pages/VisiMisiPage';
import MarsPage from './pages/MarsPage';
import PengakuanImanPage from './pages/PengakuanImanPage';
import DewanDosenPage from './pages/DewanDosenPage';
import YayasanPage from './pages/YayasanPage';
import LoginPage from './pages/LoginPage';

// CMS pages
import CMSDashboard from './pages/cms/Dashboard';
import CMSContentList from './pages/cms/ContentList';
import CMSContentEditor from './pages/cms/ContentEditor';
import CMSMediaLibrary from './pages/cms/MediaLibrary';
import CMSUsers from './pages/cms/Users';
import CMSSettings from './pages/cms/Settings';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import CMSLayout from './layouts/CMSLayout';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'kegiatan', Component: KegiatanPage },
      { path: 'berita', Component: BeritaPage },
      { path: 'media', Component: MediaPage },
      { path: 'lead', Component: LEADPage },
      { path: 'perpustakaan', Component: PerpustakaanPage },
      { path: 'sejarah', Component: SejarahPage },
      { path: 'visi-misi', Component: VisiMisiPage },
      { path: 'mars', Component: MarsPage },
      { path: 'pengakuan-iman', Component: PengakuanImanPage },
      { path: 'dewan-dosen', Component: DewanDosenPage },
      { path: 'yayasan', Component: YayasanPage },
      { path: 'login', Component: LoginPage },
    ],
  },
  {
    path: '/cms',
    Component: CMSLayout,
    children: [
      { index: true, Component: CMSDashboard },
      { path: 'content', Component: CMSContentList },
      { path: 'content/new', Component: CMSContentEditor },
      { path: 'content/:id', Component: CMSContentEditor },
      { path: 'media', Component: CMSMediaLibrary },
      { path: 'users', Component: CMSUsers },
      { path: 'settings', Component: CMSSettings },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);