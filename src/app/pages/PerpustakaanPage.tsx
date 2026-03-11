/**
 * PerpustakaanPage - Perpustakaan Transformatio Landing Page
 * Modern academic catalog layout with sidebar, search, and book collections
 */

import { useState } from 'react';
import { Search, BookOpen, FileText, Database, Globe, UserPlus, ChevronRight, ChevronLeft } from 'lucide-react';

// Mock book data
const featuredBooks = [
  {
    id: 1,
    title: 'Teologi Sistematika: Doktrin Allah',
    author: 'Wayne Grudem',
    cover: 'https://images.unsplash.com/photo-1597149305660-78eb2b9aa78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NzMyNTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Teologi Sistematika',
  },
  {
    id: 2,
    title: 'Hermeunetika: Prinsip & Metode Penafsiran Alkitab',
    author: 'Gordon D. Fee & Douglas Stuart',
    cover: 'https://images.unsplash.com/photo-1682235336380-f6ccad180553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rcyUyMHN0YWNrZWR8ZW58MXx8fHwxNzczMjU3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hermeneutika',
  },
  {
    id: 3,
    title: 'Sejarah Gereja: Dari Abad Pertama hingga Abad 21',
    author: 'Justo L. González',
    cover: 'https://images.unsplash.com/photo-1580699228119-7be487b3137f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwYm9va3N8ZW58MXx8fHwxNzczMjU3ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sejarah Gereja',
  },
  {
    id: 4,
    title: 'Etika Kristen Kontemporer',
    author: 'Norman L. Geisler',
    cover: 'https://images.unsplash.com/photo-1772452591742-711023a30e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY29sbGVjdGlvbiUyMGFjYWRlbWljfGVufDF8fHx8MTc3MzI1Nzg0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Etika Kristen',
  },
  {
    id: 5,
    title: 'Teologi Perjanjian Baru',
    author: 'George Eldon Ladd',
    cover: 'https://images.unsplash.com/photo-1764509422504-f9aee0a1dd76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYm9va3MlMjBsZWF0aGVyfGVufDF8fHx8MTc3MzI1Nzg0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Teologi Alkitab',
  },
  {
    id: 6,
    title: 'Misiologi: Teologi dan Praktik Misi Kristen',
    author: 'Stephen Neill',
    cover: 'https://images.unsplash.com/photo-1597149305660-78eb2b9aa78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NzMyNTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Misiologi',
  },
  {
    id: 7,
    title: 'Kepemimpinan Kristen yang Efektif',
    author: 'John Maxwell',
    cover: 'https://images.unsplash.com/photo-1682235336380-f6ccad180553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rcyUyMHN0YWNrZWR8ZW58MXx8fHwxNzczMjU3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Kepemimpinan',
  },
  {
    id: 8,
    title: 'Pastoral Care: Konseling & Penggembalaan',
    author: 'Gary Collins',
    cover: 'https://images.unsplash.com/photo-1580699228119-7be487b3137f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwYm9va3N8ZW58MXx8fHwxNzczMjU3ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pastoral',
  },
];

// Recent library activities
const recentActivities = [
  {
    id: 1,
    title: 'Workshop Literasi Digital untuk Mahasiswa',
    image: 'https://images.unsplash.com/photo-1702974915123-16739a9c3577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwd29ya3Nob3AlMjBldmVudHxlbnwxfHx8fDE3NzMyNTc4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '15 Februari 2026',
  },
  {
    id: 2,
    title: 'Peluncuran Koleksi Baru: Teologi Kontekstual Asia',
    image: 'https://images.unsplash.com/photo-1766506075730-f1d871df530a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwcm9vbSUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzI1Nzg0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '8 Februari 2026',
  },
  {
    id: 3,
    title: 'Seminar Penggunaan Database EBSCO & ATLA',
    image: 'https://images.unsplash.com/photo-1772452591742-711023a30e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY29sbGVjdGlvbiUyMGFjYWRlbWljfGVufDF8fHx8MTc3MzI1Nzg0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '1 Februari 2026',
  },
];

export default function PerpustakaanPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  // Carousel navigation
  const nextActivity = () => {
    setCurrentActivityIndex((prev) => (prev + 1) % recentActivities.length);
  };

  const prevActivity = () => {
    setCurrentActivityIndex((prev) => (prev - 1 + recentActivities.length) % recentActivities.length);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION - Full-width with dimmed library background */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url('https://images.unsplash.com/photo-1700308234428-c619d7408fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwaW50ZXJpb3IlMjBib29rcyUyMHNoZWx2ZXN8ZW58MXx8fHwxNzczMjU3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Perpustakaan Transformatio
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Pusat Referensi Teologi & Transformasi Akademik
            </p>

            {/* Search Bar - Prominent & Centered */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Cari judul buku, penulis, atau topik..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-5 pr-14 rounded-xl text-lg shadow-2xl border-2 border-transparent focus:border-red-700 focus:outline-none transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-700 text-white p-3 rounded-lg hover:bg-red-800 transition-colors">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIC INFO BAR - Light grey background with 3 stats */}
      <section className="bg-gray-100 border-y border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-900/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-7 h-7 text-blue-900" strokeWidth={2} />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">6.000+</p>
                <p className="text-sm text-gray-600 font-medium">Koleksi Cetak</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-900/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-blue-900" strokeWidth={2} />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">10+</p>
                <p className="text-sm text-gray-600 font-medium">Jurnal Terakreditasi</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-900/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-7 h-7 text-blue-900" strokeWidth={2} />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">E-Library</p>
                <p className="text-sm text-gray-600 font-medium">Access Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UTILITY BAR - 4 External Links (Outline Buttons) */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Utility Button 1 */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              <BookOpen className="w-5 h-5" />
              <span>Katalog Fisik</span>
            </a>

            {/* Utility Button 2 */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              <Database className="w-5 h-5" />
              <span>EBSCO Host</span>
            </a>

            {/* Utility Button 3 */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              <FileText className="w-5 h-5" />
              <span>Jurnal ATLA</span>
            </a>

            {/* Utility Button 4 */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              <Globe className="w-5 h-5" />
              <span>OJS</span>
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA - Two Column Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto">
            
            {/* LEFT SIDEBAR - 250px Fixed Card */}
            <aside className="lg:w-[250px] flex-shrink-0">
              <div className="bg-white border-2 border-blue-900 rounded-xl p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <UserPlus className="w-6 h-6 text-blue-900" />
                  <h3 className="text-lg font-bold text-blue-900">Pendaftaran Anggota</h3>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Daftarkan diri Anda untuk mendapatkan akses penuh ke seluruh koleksi perpustakaan.
                </p>

                {/* 3 Simple Steps */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <p className="text-sm text-gray-700">Isi formulir pendaftaran online</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <p className="text-sm text-gray-700">Upload foto & dokumen identitas</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <p className="text-sm text-gray-700">Dapatkan kartu anggota perpustakaan</p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-red-700 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition-colors">
                  Daftar Sekarang
                </button>
              </div>
            </aside>

            {/* MAIN CONTENT - Right Side (850px) */}
            <main className="flex-1 lg:max-w-[850px]">
              
              {/* FEATURED COLLECTIONS - 4-Column Grid */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">
                  Koleksi Terbaru & Rekomendasi
                </h2>

                {/* Book Cards Grid - 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredBooks.map((book) => (
                    <div
                      key={book.id}
                      className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 group"
                    >
                      {/* Book Cover - 3:4 Portrait Ratio */}
                      <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Book Info */}
                      <div className="p-4">
                        {/* Title - Bold Navy */}
                        <h3 className="text-sm font-bold text-blue-900 mb-2 line-clamp-2 leading-tight">
                          {book.title}
                        </h3>

                        {/* Author - Grey */}
                        <p className="text-xs text-gray-600 mb-3 line-clamp-1">
                          {book.author}
                        </p>

                        {/* Category Badge */}
                        <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded mb-3">
                          {book.category}
                        </span>

                        {/* Lihat Detail Button */}
                        <button className="w-full bg-red-700 text-white text-sm font-semibold py-2 rounded-lg hover:bg-red-800 transition-colors">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </main>

          </div>
        </div>
      </section>

      {/* RECENT ACTIVITIES - Carousel at Bottom */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Kegiatan Perpustakaan
            </h2>

            {/* Carousel Container */}
            <div className="relative">
              {/* Carousel Track */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentActivityIndex * 100}%)` }}
                >
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow max-w-2xl mx-auto">
                        <div className="flex flex-col md:flex-row">
                          {/* Image - Landscape */}
                          <div className="md:w-1/2 aspect-video md:aspect-auto bg-gray-100">
                            <img
                              src={activity.image}
                              alt={activity.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Content */}
                          <div className="md:w-1/2 p-8 flex flex-col justify-center">
                            <p className="text-sm text-red-700 font-semibold mb-2">
                              {activity.date}
                            </p>
                            <h3 className="text-xl font-bold text-blue-900 leading-tight">
                              {activity.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevActivity}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border-2 border-blue-900 text-blue-900 p-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                aria-label="Previous activity"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextActivity}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border-2 border-blue-900 text-blue-900 p-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                aria-label="Next activity"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {recentActivities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentActivityIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentActivityIndex ? 'bg-blue-900' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to activity ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
