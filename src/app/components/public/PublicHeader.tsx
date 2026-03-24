import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  Home,
  Calendar,
  Newspaper,
  Rocket,
  TvMinimalPlay,
  Search,
  Menu,
  X,
  BookOpen,
} from "lucide-react";
export default function PublicHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const topMenuItems = [
    { label: "Beranda", href: "/", icon: Home },
    { label: "Kegiatan", href: "/kegiatan", icon: Calendar },
    { label: "Berita", href: "/berita", icon: Newspaper },
    { label: "Media", href: "/media", icon: TvMinimalPlay },
    { label: "LEAD", href: "/lead", icon: Rocket },
    { label: "Perpustakaan", href: "/perpustakaan", icon: BookOpen },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would trigger a search
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 gap-4">
            {/* BAGIAN KIRI: Menu Utama */}
            <div className="flex items-center gap-4 flex-1">
              {topMenuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-1.5 text-[11px] font-medium hover:text-blue-200 transition-colors hidden xl:flex whitespace-nowrap"
                >
                  <item.icon size={14} className="opacity-80" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* BAGIAN TENGAH: Search Bar (Hapus 'absolute') */}
            <div className="hidden md:flex flex-1 justify-center max-w-md">
              <form onSubmit={handleSearch} className="relative group w-full">
                <Input
                  type="search"
                  placeholder="Cari informasi di STTB..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-8 bg-blue-800/50 border-blue-700 text-white placeholder:text-blue-300 focus:bg-white focus:text-gray-900 transition-all rounded-md text-xs"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-blue-300 group-focus-within:text-gray-500 pointer-events-none" />
              </form>
            </div>

            {/* BAGIAN KANAN: Language Selector */}
            <div className="flex items-center gap-5 flex-1 justify-end">
              <div className="flex items-center text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">
                <button className="text-white hover:text-blue-200 transition-colors">
                  Indonesia
                </button>
                <span className="mx-2 text-blue-700">|</span>
                <button className="text-blue-400 hover:text-white transition-colors">
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              {/* Container Logo */}
              <div className="w-26 h-12 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sttb.ac.id/storage/2022/01/logo.png"
                  alt="Logo STTB"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 justify-center flex-1">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="justify-center">
                  {/* Tentang Kami */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Tentang Kami</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/sejarah"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Sejarah
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/visi-misi"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Visi Misi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/mars"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Mars STTB
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/pengakuan-iman"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Pengakuan Iman
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/dewan-dosen"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Dewan Dosen
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/yayasan"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
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
                            <Link
                              to="/programs/sarjana-teologi"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Sarjana Teologi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/programs/sarjana-pendidikan-kristen"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Sarjana Pendidikan Kristen
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/programs/magister-teologi-urban"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Magister Teologi Pelayanan Pastoral Gereja Urban
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/programs/magister-teologi-transformasi"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Magister Teologi Transformasi Budaya & Masyarakat
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/programs/magister-pendidikan-kristen"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Magister Pendidikan Kristen
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/programs/magister-ministri-marketplace"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Magister Ministri Marketplace
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/programs/magister-ministri-kepemimpinan"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Magister Ministri Kepemimpinan Pastoral
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/programs/magister-ministri-pelayanan-gerejawi"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
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
                            <Link
                              to="/jadwal-admisi"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Jadwal Admisi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/prosedur-admisi"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Prosedur Admisi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/info-persyaratan"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Info Persyaratan
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/faq"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              FAQ
                            </Link>
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
                            <Link
                              to="/biaya-studi"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Biaya Studi
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/beasiswa"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Beasiswa
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/dukung-sttb"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Dukung STTB
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Kehidupan Kampus */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Kehidupan Kampus
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/fasilitas"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Fasilitas
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/pembinaan"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Pembinaan
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/senat"
                              className="block p-2 rounded hover:bg-gray-100 text-sm"
                            >
                              Senat
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* 3. KANAN: Action Buttons (Kontak Kami & Login) */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              {/* Tombol Kontak Kami (Sekarang jadi Button Utama) */}
              <Link to="/kontak-kami">
                <Button
                  variant="ghost"
                  className="text-sm font-semibold text-white bg-red-600 hover:bg-red-600/90 hover:text-white"
                >
                  Kontak Kami
                </Button>
              </Link>

              {/* Tombol Login (Dibuat lebih menonjol) */}
              <Link to="/login">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-2 rounded-md shadow-sm transition-all active:scale-95">
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
