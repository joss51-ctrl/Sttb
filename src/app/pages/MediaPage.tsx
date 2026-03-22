/**
 * MediaPage - Media Hub
 * Clean 3-column grid with minimalist cards and topic filters
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Play } from 'lucide-react';

// Media item type
interface MediaItem {
  id: string;
  title: string;
  slug: string;
  type: 'Video' | 'Artikel';
  date: string;
  image: string;
  videoUrl?: string;
}

// Mock media data
const mockMedia: MediaItem[] = [
  {
    id: '1',
    title: 'Ibadah Pembukaan Semester Genap 2026',
    slug: 'ibadah-pembukaan-semester-genap-2026',
    type: 'Video',
    date: '2026-03-10',
    image: 'https://images.unsplash.com/photo-1667068114508-0055f7fb25a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWR8ZW58MXx8fHwxNzczMjM1MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Refleksi Teologis: Gereja dalam Konteks Indonesia',
    slug: 'refleksi-teologis-gereja-konteks-indonesia',
    type: 'Artikel',
    date: '2026-03-08',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzczMjU1MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '3',
    title: 'Paduan Suara STTB - Konser Natal 2025',
    slug: 'paduan-suara-sttb-konser-natal-2025',
    type: 'Video',
    date: '2026-03-05',
    image: 'https://images.unsplash.com/photo-1745852738233-bbd0df06c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzczMTc3NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Teologi Pembebasan dan Transformasi Sosial',
    slug: 'teologi-pembebasan-transformasi-sosial',
    type: 'Artikel',
    date: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1663162550928-2c2389cdb27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwc21hbGwlMjBncm91cHxlbnwxfHx8fDE3NzMxNjA2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '5',
    title: 'Kuliah Umum: Etika Kristen di Dunia Digital',
    slug: 'kuliah-umum-etika-kristen-dunia-digital',
    type: 'Video',
    date: '2026-02-25',
    image: 'https://images.unsplash.com/photo-1769755013274-09bcb0ff5038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBjb25mZXJlbmNlJTIwc3BlYWtlcnxlbnwxfHx8fDE3NzMyNTU5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '6',
    title: 'Memaknai Penderitaan dalam Perspektif Alkitabiah',
    slug: 'memaknai-penderitaan-perspektif-alkitabiah',
    type: 'Artikel',
    date: '2026-02-20',
    image: 'https://images.unsplash.com/photo-1602114324193-e1c1b41dcde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHJlYWRpbmclMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzczMTQzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '7',
    title: 'Wisuda Sarjana Teologi Angkatan 2025',
    slug: 'wisuda-sarjana-teologi-2025',
    type: 'Video',
    date: '2026-02-15',
    image: 'https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczMjUyOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '8',
    title: 'Hermeneutika Kontekstual: Membaca Alkitab dalam Budaya Lokal',
    slug: 'hermeneutika-kontekstual-membaca-alkitab',
    type: 'Artikel',
    date: '2026-02-10',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzczMjU1MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '9',
    title: 'Seminar Nasional: Teologi dan Keadilan Sosial',
    slug: 'seminar-nasional-teologi-keadilan-sosial',
    type: 'Video',
    date: '2026-02-05',
    image: 'https://images.unsplash.com/photo-1769755013274-09bcb0ff5038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBjb25mZXJlbmNlJTIwc3BlYWtlcnxlbnwxfHx8fDE3NzMyNTU5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export default function MediaPage() {
  // State
  const [topicFilter, setTopicFilter] = useState<string>('Semua');

  // Filter media
  const filteredMedia = topicFilter === 'Semua' 
    ? mockMedia 
    : mockMedia.filter(item => item.type === topicFilter);

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
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Media</h1>
          <p className="text-xl text-blue-100">
            Koleksi video, artikel, dan dokumentasi kegiatan STTB
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Topic Chips Filter - Horizontal */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {['Semua', 'Video', 'Artikel'].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setTopicFilter(topic)}
                  className={`px-8 py-3 rounded-full font-semibold text-base transition-all ${
                    topicFilter === topic
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-gray-200'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Grid of Minimalist Cards */}
          {filteredMedia.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Tidak ada media yang sesuai filter</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((media) => (
                <Link
                  key={media.id}
                  to={`/media/${media.slug}`}
                  className="group"
                >
                  {/* Card - White background, 12px rounded, subtle shadow */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                    {/* Image on top - 16:9 */}
                    <div className="aspect-video overflow-hidden bg-gray-100 relative">
                      <img
                        src={media.image}
                        alt={media.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Video play icon overlay */}
                      {media.type === 'Video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-red-700 flex items-center justify-center shadow-lg">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content below image */}
                    <div className="p-6">
                      {/* Small grey date tag */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(media.date)}</span>
                      </div>

                      {/* Title - Bold Navy Blue */}
                      <h3 className="text-xl font-bold text-blue-900 leading-tight group-hover:text-red-700 transition-colors">
                        {media.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
