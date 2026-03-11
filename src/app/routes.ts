import { createBrowserRouter } from 'react-router';

// Public pages
import HomePage from './pages/HomePage';
import KegiatanPage from './pages/KegiatanPage';
import BeritaPage from './pages/BeritaPage';
import BeritaDetailPage from './pages/BeritaDetailPage';
import MediaPage from './pages/MediaPage';
import MediaDetailPage from './pages/MediaDetailPage';
import LEADPage from './pages/LEADPage';
import PerpustakaanPage from './pages/PerpustakaanPage';
import SejarahPage from './pages/SejarahPage';
import VisiMisiPage from './pages/VisiMisiPage';
import MarsPage from './pages/MarsPage';
import PengakuanImanPage from './pages/PengakuanImanPage';
import DewanDosenPage from './pages/DewanDosenPage';
import YayasanPage from './pages/YayasanPage';
import LoginPage from './pages/LoginPage';

// Academic program pages
import SarjanaTeologiPage from './pages/programs/SarjanaTeologiPage';
import SarjanaPendidikanKristenPage from './pages/programs/SarjanaPendidikanKristenPage';
import MagisterTeologiUrbanPage from './pages/programs/MagisterTeologiUrbanPage';
import MagisterTeologiTransformasiPage from './pages/programs/MagisterTeologiTransformasiPage';
import MagisterPendidikanKristenPage from './pages/programs/MagisterPendidikanKristenPage';
import MagisterMinistriMarketplacePage from './pages/programs/MagisterMinistriMarketplacePage';
import MagisterMinistriKepemimpinanPage from './pages/programs/MagisterMinistriKepemimpinanPage';
import MagisterMinistriPelayananGerejawiPage from './pages/programs/MagisterMinistriPelayananGerejawiPage';

// Admisi pages
import JadwalAdmisiPage from './pages/JadwalAdmisiPage';
import ProsedurAdmisiPage from './pages/ProsedurAdmisiPage';
import InfoPersyaratanPage from './pages/InfoPersyaratanPage';
import FAQPage from './pages/FAQPage';

// Keuangan pages
import BiayaStudiPage from './pages/BiayaStudiPage';
import BeasiswaPage from './pages/BeasiswaPage';
import DukungSTTBPage from './pages/DukungSTTBPage';

// Kehidupan Kampus pages
import FasilitasPage from './pages/FasilitasPage';
import PembinaanPage from './pages/PembinaanPage';
import SenatPage from './pages/SenatPage';
import KontakKamiPage from './pages/KontakKamiPage';

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
      { path: 'berita/:slug', Component: BeritaDetailPage },
      { path: 'media', Component: MediaPage },
      { path: 'media/:slug', Component: MediaDetailPage },
      { path: 'lead', Component: LEADPage },
      { path: 'perpustakaan', Component: PerpustakaanPage },
      { path: 'sejarah', Component: SejarahPage },
      { path: 'visi-misi', Component: VisiMisiPage },
      { path: 'mars', Component: MarsPage },
      { path: 'pengakuan-iman', Component: PengakuanImanPage },
      { path: 'dewan-dosen', Component: DewanDosenPage },
      { path: 'yayasan', Component: YayasanPage },
      { path: 'login', Component: LoginPage },
      // Admisi pages
      { path: 'jadwal-admisi', Component: JadwalAdmisiPage },
      { path: 'prosedur-admisi', Component: ProsedurAdmisiPage },
      { path: 'info-persyaratan', Component: InfoPersyaratanPage },
      { path: 'faq', Component: FAQPage },
      // Keuangan pages
      { path: 'biaya-studi', Component: BiayaStudiPage },
      { path: 'beasiswa', Component: BeasiswaPage },
      { path: 'dukung-sttb', Component: DukungSTTBPage },
      // Kehidupan Kampus pages
      { path: 'fasilitas', Component: FasilitasPage },
      { path: 'pembinaan', Component: PembinaanPage },
      { path: 'senat', Component: SenatPage },
      { path: 'kontak-kami', Component: KontakKamiPage },
      // Academic programs
      { path: 'programs/sarjana-teologi', Component: SarjanaTeologiPage },
      { path: 'programs/sarjana-pendidikan-kristen', Component: SarjanaPendidikanKristenPage },
      { path: 'programs/magister-teologi-urban', Component: MagisterTeologiUrbanPage },
      { path: 'programs/magister-teologi-transformasi', Component: MagisterTeologiTransformasiPage },
      { path: 'programs/magister-pendidikan-kristen', Component: MagisterPendidikanKristenPage },
      { path: 'programs/magister-ministri-marketplace', Component: MagisterMinistriMarketplacePage },
      { path: 'programs/magister-ministri-kepemimpinan', Component: MagisterMinistriKepemimpinanPage },
      { path: 'programs/magister-ministri-pelayanan-gerejawi', Component: MagisterMinistriPelayananGerejawiPage },
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