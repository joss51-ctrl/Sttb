/**
 * FasilitasPage - Facilities Page
 * High-end gallery with category filtering and masonry grid
 */

import { useState } from 'react';
import { ChevronRight, BookOpen, Users, Sparkles, Home } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

// Define facility type
interface Facility {
  id: number;
  name: string;
  image: string;
  category: 'ruang-belajar' | 'area-komunitas' | 'fasilitas-kreatif' | 'asrama';
}

export default function FasilitasPage() {
  const [activeCategory, setActiveCategory] = useState('semua');

  // Facilities data
  const facilities: Facility[] = [
    // Ruang Belajar
    {
      id: 1,
      name: 'Perpustakaan STTB',
      image: 'https://images.unsplash.com/photo-1762732526878-3dd89d99c904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwcmVhZGluZyUyMHJvb218ZW58MXx8fHwxNzczMjM2NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'ruang-belajar',
    },
    {
      id: 2,
      name: 'Ruang Kelas Digital',
      image: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2xhc3Nyb29tJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczMTk1NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'ruang-belajar',
    },
    {
      id: 3,
      name: 'Ruang Belajar Kolaboratif',
      image: 'https://images.unsplash.com/photo-1763890699359-8c8a4e7288bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGxvdW5nZSUyMGNhbXB1c3xlbnwxfHx8fDE3NzMyNDUzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'ruang-belajar',
    },
    {
      id: 4,
      name: 'Lab Komputer',
      image: 'https://images.unsplash.com/photo-1764025130362-0162c3dd2035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMG1vZGVybnxlbnwxfHx8fDE3NzMyNDUzODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'ruang-belajar',
    },
    // Area Komunitas
    {
      id: 5,
      name: 'Kantin & Area Makan',
      image: 'https://images.unsplash.com/photo-1769456164543-59aac9d09256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBjYWZldGVyaWElMjBkaW5pbmd8ZW58MXx8fHwxNzczMjQ1Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'area-komunitas',
    },
    {
      id: 6,
      name: 'Student Lounge',
      image: 'https://images.unsplash.com/photo-1763890763377-abd05301034d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbG91bmdlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MzI0NTM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'area-komunitas',
    },
    {
      id: 7,
      name: 'Kapel & Ruang Ibadah',
      image: 'https://images.unsplash.com/photo-1763410723546-db98ef034af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFwZWwlMjB3b3JzaGlwJTIwc3BhY2V8ZW58MXx8fHwxNzczMjQ1Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'area-komunitas',
    },
    {
      id: 8,
      name: 'Taman Kampus',
      image: 'https://images.unsplash.com/photo-1764025851527-78f9d7c52bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY2FtcHVzJTIwZ2FyZGVufGVufDF8fHx8MTc3MzI0NTM4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'area-komunitas',
    },
    // Fasilitas Kreatif
    {
      id: 9,
      name: 'Studio Musik',
      image: 'https://images.unsplash.com/photo-1637071220527-fbb98fa15892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZ3xlbnwxfHx8fDE3NzMxNDY0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'fasilitas-kreatif',
    },
    {
      id: 10,
      name: 'Studio Green Screen',
      image: 'https://images.unsplash.com/photo-1655199153917-5f909ea93e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNjcmVlbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzMyMTk2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'fasilitas-kreatif',
    },
    {
      id: 11,
      name: 'Podcast Studio',
      image: 'https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwcmVjb3JkaW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzE0NzM1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'fasilitas-kreatif',
    },
    // Asrama
    {
      id: 12,
      name: 'Kamar Asrama',
      image: 'https://images.unsplash.com/photo-1763924636780-4da2a7c3327c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZG9ybWl0b3J5JTIwcm9vbXxlbnwxfHx8fDE3NzMyNDUzODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'asrama',
    },
  ];

  // Filter facilities by category
  const filteredFacilities =
    activeCategory === 'semua'
      ? facilities
      : facilities.filter((facility) => facility.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900 transition-colors">
              Beranda
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-blue-900 transition-colors">
              Kehidupan Kampus
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Fasilitas</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Fasilitas STTB
            </h1>
            <p className="text-lg text-gray-600" style={{ lineHeight: '1.6' }}>
              Kami menyediakan lingkungan belajar yang mendukung perkembangan akademik, spiritual, 
              dan kreativitas mahasiswa melalui fasilitas modern dan berkualitas
            </p>
          </div>

          {/* 3 Simple Columns with Minimalist Icons */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Belajar Bersama */}
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Belajar Bersama
                </h3>
                <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                  Ruang kelas modern, perpustakaan digital, dan area studi yang nyaman
                </p>
              </div>

              {/* Bertumbuh Bersama */}
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Bertumbuh Bersama
                </h3>
                <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                  Area komunitas, kantin, dan kapel untuk membangun fellowship
                </p>
              </div>

              {/* Hidup Bersama */}
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Hidup Bersama
                </h3>
                <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                  Asrama nyaman dan fasilitas pendukung kehidupan kampus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs & Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              {/* Minimalist Tab Navigation */}
              <TabsList className="w-full justify-center mb-12 bg-gray-100 p-2 rounded-lg">
                <TabsTrigger 
                  value="semua" 
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Semua
                </TabsTrigger>
                <TabsTrigger 
                  value="ruang-belajar"
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Ruang Belajar
                </TabsTrigger>
                <TabsTrigger 
                  value="area-komunitas"
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Area Komunitas
                </TabsTrigger>
                <TabsTrigger 
                  value="fasilitas-kreatif"
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Fasilitas Kreatif
                </TabsTrigger>
                <TabsTrigger 
                  value="asrama"
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Asrama
                </TabsTrigger>
              </TabsList>

              {/* Gallery Content */}
              <TabsContent value={activeCategory} className="mt-0">
                {filteredFacilities.length > 0 ? (
                  <Masonry columnsCount={3} gutter="32px">
                    {filteredFacilities.map((facility) => (
                      <div
                        key={facility.id}
                        className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                      >
                        {/* Image */}
                        <img
                          src={facility.image}
                          alt={facility.name}
                          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Semi-transparent Overlay with Caption */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                          <h3 className="text-white font-bold text-lg">
                            {facility.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </Masonry>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">Tidak ada fasilitas dalam kategori ini</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">
                    Komitmen Kami untuk Fasilitas Terbaik
                  </h2>
                  <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.6' }}>
                    STTB terus berinvestasi dalam pengembangan fasilitas kampus untuk memastikan mahasiswa 
                    mendapatkan pengalaman belajar yang optimal. Dari perpustakaan digital hingga studio kreatif, 
                    setiap ruang dirancang untuk mendukung perjalanan akademik dan spiritual Anda.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Teknologi Modern</h4>
                    <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                      Semua ruang dilengkapi dengan teknologi terkini untuk pembelajaran interaktif
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-red-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Akses 24/7</h4>
                    <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                      Beberapa fasilitas seperti perpustakaan online dapat diakses kapan saja
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Lingkungan Bersih</h4>
                    <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                      Perawatan rutin untuk menjaga kenyamanan dan kebersihan semua area
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Home className="w-4 h-4 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Keamanan Terjamin</h4>
                    <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                      Sistem keamanan 24 jam untuk kenyamanan dan keselamatan mahasiswa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ingin Melihat Langsung Fasilitas STTB?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Kunjungi kampus kami dan rasakan langsung suasana belajar yang kondusif. 
            Hubungi kami untuk mengatur jadwal kunjungan Anda.
          </p>
          <a href="/kontak">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Hubungi Kami
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
