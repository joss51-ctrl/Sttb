import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

/**
 * PublicHeader - Main navigation header for the university website
 * Features:
 * - Top bar with quick links (Beranda, Kegiatan, Berita, Media, LEAD, Perpustakaan)
 * - Search functionality
 * - Main navigation with dropdown menus
 * - Sticky positioning for better UX
 */
export default function PublicHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const topMenuItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Kegiatan', href: '/kegiatan' },
    { label: 'Berita', href: '/berita' },
    { label: 'Media', href: '/media' },
    { label: 'LEAD', href: '/lead' },
    { label: 'Perpustakaan', href: '/perpustakaan' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would trigger a search
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-6">
              {topMenuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium hover:text-blue-200 transition-colors hidden md:block"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Search Bar */}
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                  <Input
                    type="search"
                    placeholder="Cari..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 h-8 bg-white text-gray-900"
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchOpen(false)}
                    className="text-white hover:text-blue-200"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchOpen(true)}
                  className="text-white hover:text-blue-200"
                >
                  <Search className="w-4 h-4" />
                </Button>
              )}

              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-white hover:text-blue-200">
                  LOGIN
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">STTB</h1>
                <p className="text-xs text-gray-600">Sekolah Tinggi Teologi Bandung</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Tentang Kami */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Tentang Kami</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/sejarah" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Sejarah
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/visi-misi" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Visi Misi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/mars" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Mars STTB
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/pengakuan-iman" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Pengakuan Iman
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/dewan-dosen" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Dewan Dosen
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/yayasan" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Yayasan
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Akademik */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Akademik</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[320px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/programs/sarjana-teologi" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Sarjana Teologi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/programs/sarjana-pendidikan-kristen" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Sarjana Pendidikan Kristen
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/programs/magister-teologi-urban" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Magister Teologi Pelayanan Pastoral Gereja Urban
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/programs/magister-teologi-transformasi" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Magister Teologi Transformasi Budaya & Masyarakat
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/programs/magister-pendidikan-kristen" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Magister Pendidikan Kristen
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/programs/magister-ministri-marketplace" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Magister Ministri Marketplace
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/programs/magister-ministri-kepemimpinan" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Magister Ministri Kepemimpinan Pastoral
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/programs/magister-ministri-pelayanan-gerejawi" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Magister Ministri Teologi Pelayanan Gerejawi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Admisi */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Admisi</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <a 
                              href="https://sis.sttb.ac.id/pmb" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Pendaftaran Online
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/jadwal-admisi" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Jadwal Admisi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/prosedur-admisi" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Prosedur Admisi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/info-persyaratan" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Info Persyaratan
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              FAQ
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Keuangan */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Keuangan</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Biaya Studi
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Beasiswa
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Dukung STTB
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Kehidupan Kampus */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Kehidupan Kampus</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Fasilitas
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Pembinaan
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100 text-sm">
                              Senat
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Kontak Kami */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="#" className="px-4 py-2 text-sm font-medium hover:text-blue-600">
                        Kontak Kami
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {topMenuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-2 rounded hover:bg-gray-100 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}