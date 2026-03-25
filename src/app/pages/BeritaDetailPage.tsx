/**
 * BeritaDetailPage - News Article Detail Page
 * Clean editorial design with narrow content width for optimal readability
 */

import { Link, useParams } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Mock article data (in real app, this would be fetched based on slug)
const mockArticles: { [key: string]: any } = {
  'sttb-meraih-akreditasi-a': {
    title: 'STTB Meraih Akreditasi A dari BAN-PT',
    date: '2026-03-10',
    author: 'Tim Redaksi',
    category: 'Akademik',
    mainImage: 'https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc3MzI1NTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    content: `
      <p>Bandung, 10 Maret 2026 - Sekolah Tinggi Teologi Bandung (STTB) dengan bangga mengumumkan pencapaian akreditasi A dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) untuk seluruh program studi yang ditawarkan. Pencapaian ini merupakan hasil dari dedikasi dan kerja keras seluruh sivitas akademika dalam meningkatkan kualitas pendidikan teologi di Indonesia.</p>

      <p>Rektor STTB, Dr. Paulus Gunawan, M.Th., menyatakan, "Akreditasi A ini adalah bukti komitmen kami dalam menyediakan pendidikan teologi berkualitas tinggi yang relevan dengan kebutuhan gereja dan masyarakat Indonesia. Kami bersyukur atas kepercayaan yang diberikan dan akan terus berinovasi dalam metode pengajaran dan pengembangan kurikulum."</p>

      <h2>Proses Panjang Menuju Keunggulan</h2>

      <p>Proses akreditasi yang dilakukan melibatkan evaluasi komprehensif terhadap berbagai aspek, termasuk kualitas kurikulum, kompetensi dosen, fasilitas pembelajaran, sistem manajemen, hingga dampak lulusan terhadap masyarakat. Tim asesor BAN-PT melakukan kunjungan langsung ke kampus dan mewawancarai berbagai pemangku kepentingan, termasuk dosen, mahasiswa, alumni, dan mitra kerja sama.</p>

      <p>Dekan Fakultas Teologi, Dr. Elisabeth Chen, M.Div., menambahkan, "Kami telah melakukan berbagai perbaikan dan peningkatan dalam beberapa tahun terakhir. Mulai dari pembaruan kurikulum yang lebih kontekstual, peningkatan kualifikasi dosen dengan mendorong mereka menempuh pendidikan doktoral, hingga pengadaan fasilitas pembelajaran yang modern seperti perpustakaan digital dan laboratorium bahasa Alkitab."</p>

      <h2>Dampak bagi Mahasiswa dan Alumni</h2>

      <p>Akreditasi A ini membawa berbagai manfaat langsung bagi mahasiswa dan alumni STTB. Mahasiswa akan mendapatkan pengakuan yang lebih luas atas kredibilitas pendidikan mereka, baik di tingkat nasional maupun internasional. Alumni juga akan merasakan dampak positif dalam pengembangan karir pelayanan mereka di berbagai bidang.</p>

      <p>Sarah Wijaya, mahasiswa Program Magister Teologi, mengungkapkan kegembiraannya, "Sebagai mahasiswa, saya merasa sangat bangga. Akreditasi ini membuktikan bahwa pilihan saya untuk kuliah di STTB adalah keputusan yang tepat. Saya yakin kredensial ini akan sangat membantu ketika saya melanjutkan studi atau melayani di gereja nanti."</p>

      <h2>Komitmen Berkelanjutan</h2>

      <p>Meskipun telah meraih akreditasi tertinggi, STTB tidak berhenti dalam upaya peningkatan kualitas. Pihak kampus berkomitmen untuk terus mengembangkan program-program inovatif, memperluas jaringan kerjasama internasional, dan meningkatkan kontribusi terhadap pengembangan teologi kontekstual Indonesia.</p>

      <p>"Ini bukan akhir dari perjalanan kami, tetapi awal dari komitmen yang lebih besar untuk memberikan pendidikan teologi terbaik bagi gereja dan bangsa Indonesia," tutup Dr. Paulus Gunawan.</p>

      <p>STTB mengundang seluruh masyarakat yang tertarik untuk mengetahui lebih lanjut tentang program-program studi yang ditawarkan untuk mengunjungi website resmi atau datang langsung ke kampus di Jl. Durian No. 44, Bandung.</p>
    `,
    gallery: [
      'https://images.unsplash.com/photo-1711843250811-a7d0bb485a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9naWNhbCUyMHNlbWluYXJ5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzMyNTUzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBzZW1pbmFyfGVufDF8fHx8MTc3MzE1NTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGRpc2N1c3Npb24lMjBncm91cHxlbnwxfHx8fDE3NzMyNTUzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760367120345-2b96c53de838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwJTIwY2h1cmNoJTIwZXZlbnR8ZW58MXx8fHwxNzczMjU1MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
};

// Related posts
const relatedPosts = [
  {
    id: '2',
    title: 'Seminar Nasional Teologi Transformatif 2026',
    slug: 'seminar-nasional-teologi-transformatif',
    date: '2026-03-08',
    category: 'Kegiatan',
    image: 'https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBzZW1pbmFyfGVufDF8fHx8MTc3MzE1NTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '3',
    title: 'Mahasiswa STTB Menjuarai Kompetisi Debat Teologi',
    slug: 'mahasiswa-menjuarai-kompetisi-debat',
    date: '2026-03-05',
    category: 'Kemahasiswaan',
    image: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGRpc2N1c3Npb24lMjBncm91cHxlbnwxfHx8fDE3NzMyNTUzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '4',
    title: 'Peluncuran Program Beasiswa Penuh untuk Mahasiswa Berprestasi',
    slug: 'peluncuran-program-beasiswa',
    date: '2026-03-01',
    category: 'Pengumuman',
    image: 'https://images.unsplash.com/photo-1711843250811-a7d0bb485a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9naWNhbCUyMHNlbWluYXJ5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzMyNTUzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
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

export default function BeritaDetailPage() {
  const { slug } = useParams();

  // Get article data (in real app, fetch from API)
  const article = mockArticles[slug || ''] || mockArticles['sttb-meraih-akreditasi-a'];

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
      {/* Back Navigation - Sticky below header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 py-4 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 text-blue-900 hover:text-red-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Berita
          </Link>
        </div>
      </div>

      {/* Article Content - Narrow Layout (max 750px) */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[750px] mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              {/* Category Badge */}
              <Badge
                variant="outline"
                className={`font-semibold mb-4 ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}
              >
                {article.category}
              </Badge>

              {/* Large Headline */}
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Date and Author */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{article.author}</span>
                </div>
              </div>
            </header>

            {/* Main Image - Prominent at Top */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <img
                src={article.mainImage}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Article Body - Serif Font for Professional Journalistic Feel */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              style={{ 
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: '1.8',
              }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Additional Photos - 2x2 Grid Gallery */}
            {article.gallery && article.gallery.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Galeri Foto</h3>
                <div className="grid grid-cols-2 gap-4">
                  {article.gallery.map((image: string, index: number) => (
                    <div
                      key={index}
                      className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts - Berita Lainnya */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-[750px] mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Berita Lainnya</h2>

            {/* 3 Small Horizontal Cards */}
            <div className="space-y-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/berita/${post.slug}`}
                  className="flex gap-6 bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="w-48 flex-shrink-0 aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`font-semibold ${categoryColors[post.category]}`}
                    >
                      {post.category}
                    </Badge>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex items-center">
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-red-700 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}