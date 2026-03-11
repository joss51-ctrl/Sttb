/**
 * BeritaPage - News List Page
 * Clean editorial design with featured hero and 3-column grid
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, ChevronRight } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// News Article type
interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  isFeatured?: boolean;
}

// Mock news data
const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'STTB Meraih Akreditasi A dari BAN-PT',
    slug: 'sttb-meraih-akreditasi-a',
    excerpt: 'Sekolah Tinggi Teologi Bandung berhasil meraih akreditasi A dari Badan Akreditasi Nasional Perguruan Tinggi untuk seluruh program studi.',
    date: '2026-03-10',
    category: 'Akademik',
    image: 'https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc3MzI1NTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Tim Redaksi',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Seminar Nasional Teologi Transformatif 2026',
    slug: 'seminar-nasional-teologi-transformatif',
    excerpt: 'STTB mengadakan seminar nasional dengan tema "Teologi untuk Transformasi Sosial" yang dihadiri ratusan peserta dari seluruh Indonesia.',
    date: '2026-03-08',
    category: 'Kegiatan',
    image: 'https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBzZW1pbmFyfGVufDF8fHx8MTc3MzE1NTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Dr. Paulus Gunawan',
  },
  {
    id: '3',
    title: 'Mahasiswa STTB Menjuarai Kompetisi Debat Teologi',
    slug: 'mahasiswa-menjuarai-kompetisi-debat',
    excerpt: 'Tim debat STTB berhasil meraih juara pertama dalam Kompetisi Debat Teologi Tingkat Nasional yang diselenggarakan di Jakarta.',
    date: '2026-03-05',
    category: 'Kemahasiswaan',
    image: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGRpc2N1c3Npb24lMjBncm91cHxlbnwxfHx8fDE3NzMyNTUzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Humas STTB',
  },
  {
    id: '4',
    title: 'Peluncuran Program Beasiswa Penuh untuk Mahasiswa Berprestasi',
    slug: 'peluncuran-program-beasiswa',
    excerpt: 'STTB meluncurkan program beasiswa penuh untuk mahasiswa berprestasi yang berasal dari keluarga kurang mampu.',
    date: '2026-03-01',
    category: 'Pengumuman',
    image: 'https://images.unsplash.com/photo-1711843250811-a7d0bb485a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9naWNhbCUyMHNlbWluYXJ5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzMyNTUzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Bagian Keuangan',
  },
  {
    id: '5',
    title: 'Ibadah Kebangunan Rohani di Kampus STTB',
    slug: 'ibadah-kebangunan-rohani',
    excerpt: 'Kebaktian kebangunan rohani yang diadakan selama 3 hari menghadirkan ratusan mahasiswa dan dosen untuk memperdalam iman.',
    date: '2026-02-25',
    category: 'Rohani',
    image: 'https://images.unsplash.com/photo-1760367120345-2b96c53de838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwJTIwY2h1cmNoJTIwZXZlbnR8ZW58MXx8fHwxNzczMjU1MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Tim Pembinaan',
  },
  {
    id: '6',
    title: 'Bakti Sosial Mahasiswa di Desa Terpencil',
    slug: 'bakti-sosial-mahasiswa',
    excerpt: 'Mahasiswa STTB mengadakan kegiatan bakti sosial di desa terpencil dengan memberikan bantuan pendidikan dan kesehatan.',
    date: '2026-02-20',
    category: 'Kemahasiswaan',
    image: 'https://images.unsplash.com/photo-1762013728402-69cff78f29fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc3MzI1NTM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Senat Mahasiswa',
  },
  {
    id: '7',
    title: 'Kerjasama STTB dengan Universitas di Luar Negeri',
    slug: 'kerjasama-universitas-luar-negeri',
    excerpt: 'STTB menandatangani MoU dengan beberapa universitas teologi ternama di Eropa dan Amerika untuk program pertukaran mahasiswa.',
    date: '2026-02-15',
    category: 'Akademik',
    image: 'https://images.unsplash.com/photo-1711843250811-a7d0bb485a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9naWNhbCUyMHNlbWluYXJ5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzMyNTUzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Dr. Elisabeth Chen',
  },
];

// Category colors
const categoryColors: { [key: string]: string } = {
  Akademik: 'bg-blue-100 text-blue-700 border-blue-200',
  Kegiatan: 'bg-purple-100 text-purple-700 border-purple-200',
  Kemahasiswaan: 'bg-green-100 text-green-700 border-green-200',
  Pengumuman: 'bg-orange-100 text-orange-700 border-orange-200',
  Rohani: 'bg-red-100 text-red-700 border-red-200',
};

export default function BeritaPage() {
  // State
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [archiveFilter, setArchiveFilter] = useState<string>('all');

  // Get unique categories
  const categories = Array.from(new Set(mockNews.map(n => n.category)));

  // Get unique months for archive
  const archives = Array.from(new Set(mockNews.map(n => {
    const date = new Date(n.date);
    return `${date.toLocaleString('id-ID', { month: 'long', year: 'numeric' })}`;
  })));

  // Featured news (first item with isFeatured flag)
  const featuredNews = mockNews.find(n => n.isFeatured) || mockNews[0];

  // Filter news (exclude featured)
  const filteredNews = mockNews
    .filter(n => n.id !== featuredNews.id)
    .filter(news => {
      const matchesCategory = categoryFilter === 'all' || news.category === categoryFilter;
      
      if (archiveFilter === 'all') return matchesCategory;
      
      const newsMonth = new Date(news.date).toLocaleString('id-ID', { month: 'long', year: 'numeric' });
      const matchesArchive = newsMonth === archiveFilter;
      
      return matchesCategory && matchesArchive;
    });

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Featured News Hero */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={featuredNews.image}
            alt={featuredNews.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Text Overlay */}
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-3xl">
              <Badge 
                variant="outline" 
                className="bg-white/90 text-blue-900 border-white mb-4 font-semibold"
              >
                Berita Utama
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {featuredNews.title}
              </h1>
              <p className="text-xl text-white/90 mb-4 leading-relaxed">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center gap-4 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(featuredNews.date)}</span>
                </div>
                <span>•</span>
                <span>{featuredNews.category}</span>
              </div>
              <Link
                to={`/berita/${featuredNews.slug}`}
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Baca Selengkapnya
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main News Grid */}
            <main className="flex-1">
              {/* Filter Bar */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8 border border-gray-200">
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                  {/* Archive Dropdown */}
                  <div className="flex items-center gap-3">
                    <label className="text-sm font-semibold text-gray-700">Arsip Berita:</label>
                    <Select value={archiveFilter} onValueChange={setArchiveFilter}>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Pilih Bulan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua Waktu</SelectItem>
                        {archives.map((archive) => (
                          <SelectItem key={archive} value={archive}>
                            {archive}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Clear Filter */}
                  {(categoryFilter !== 'all' || archiveFilter !== 'all') && (
                    <button
                      onClick={() => {
                        setCategoryFilter('all');
                        setArchiveFilter('all');
                      }}
                      className="text-sm text-red-700 hover:text-red-800 font-semibold"
                    >
                      Reset Filter
                    </button>
                  )}
                </div>
              </div>

              {/* Category Chips/Tags */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Kategori:</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategoryFilter('all')}
                    className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                      categoryFilter === 'all'
                        ? 'bg-blue-900 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    Semua
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setCategoryFilter(category)}
                      className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                        categoryFilter === category
                          ? 'bg-blue-900 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* News Grid - 3 Columns */}
              {filteredNews.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">Tidak ada berita yang sesuai filter</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredNews.map((news) => (
                    <Link
                      key={news.id}
                      to={`/berita/${news.slug}`}
                      className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
                    >
                      {/* 16:9 Image */}
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        {/* Date Tag */}
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(news.date)}</span>
                        </div>

                        {/* Title - Bold Navy */}
                        <h3 className="text-xl font-bold text-blue-900 mb-3 leading-tight group-hover:text-red-700 transition-colors">
                          {news.title}
                        </h3>

                        {/* 2-line Excerpt */}
                        <p className="text-gray-600 mb-4 line-clamp-2" style={{ lineHeight: '1.6' }}>
                          {news.excerpt}
                        </p>

                        {/* Category Badge */}
                        <Badge
                          variant="outline"
                          className={`font-semibold ${categoryColors[news.category] || 'bg-gray-100 text-gray-700'}`}
                        >
                          {news.category}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
