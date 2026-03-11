/**
 * MediaDetailPage - Media Article/Video Detail Page
 * Center-aligned content with 750px max-width
 */

import { useRef } from 'react';
import { Link, useParams } from 'react-router';
import { Calendar, ArrowLeft } from 'lucide-react';

// Mock media detail data
const mockMediaDetails: { [key: string]: any } = {
  'refleksi-teologis-gereja-konteks-indonesia': {
    title: 'Refleksi Teologis: Gereja dalam Konteks Indonesia',
    type: 'Artikel',
    date: '2026-03-08',
    author: 'Dr. Paulus Gunawan, M.Th.',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzczMjU1MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `
      <p>Indonesia, sebagai negara dengan keberagaman budaya, suku, dan agama yang luar biasa, memberikan tantangan dan peluang unik bagi kehadiran dan pelayanan gereja. Dalam konteks ini, gereja tidak dapat beroperasi dengan pendekatan yang sama seperti di negara-negara dengan konteks yang berbeda. Gereja di Indonesia dipanggil untuk menjadi komunitas yang kontekstual, relevan, dan transformatif.</p>

      <p>Keberadaan gereja di Indonesia tidak dapat dilepaskan dari realitas sosial, politik, dan budaya yang kompleks. Gereja harus mampu membaca tanda-tanda zaman dan merespons dengan bijaksana terhadap berbagai isu yang dihadapi masyarakat, seperti kemiskinan, ketidakadilan, konflik antar-agama, dan degradasi moral.</p>

      <h2>Gereja sebagai Agen Transformasi</h2>

      <p>Peran gereja bukan hanya sebatas pelayanan spiritual di dalam gedung gereja, tetapi juga sebagai agen transformasi sosial di tengah masyarakat. Gereja dipanggil untuk menjadi garam dan terang dunia, membawa nilai-nilai Kerajaan Allah ke dalam setiap aspek kehidupan bermasyarakat.</p>

      <p>Dalam konteks Indonesia yang majemuk, gereja harus menjadi pelopor dialog antarumat beragama, mempromosikan toleransi, dan membangun jembatan perdamaian. Gereja perlu menunjukkan wajah Kristus yang penuh kasih, tidak eksklusif, tetapi inklusif dalam pendekatan pelayanannya.</p>

      <h2>Tantangan Kontekstualisasi</h2>

      <p>Kontekstualisasi bukan berarti kompromi terhadap kebenaran Injil, melainkan bagaimana mengkomunikasikan kebenaran tersebut dengan cara yang dapat dipahami dan relevan bagi konteks setempat. Gereja di Indonesia perlu belajar dari kearifan lokal, memahami worldview masyarakat Indonesia, dan menemukan titik temu antara nilai-nilai Alkitab dengan nilai-nilai budaya yang tidak bertentangan dengan iman Kristen.</p>

      <p>Salah satu tantangan terbesar adalah bagaimana gereja dapat tetap setia pada doktrin Alkitabiah sambil beradaptasi dengan konteks budaya Indonesia yang sangat beragam. Ini memerlukan wisdom teologis yang mendalam dan sensitivitas budaya yang tinggi dari para pemimpin gereja.</p>

      <h2>Pendidikan Teologi Kontekstual</h2>

      <p>Pendidikan teologi memiliki peran krusial dalam mempersiapkan para hamba Tuhan yang tidak hanya memiliki pengetahuan teologis yang solid, tetapi juga pemahaman yang mendalam tentang konteks Indonesia. Lembaga pendidikan teologi seperti STTB bertanggung jawab untuk menghasilkan lulusan yang mampu menjembatani gap antara teori teologis dan praksis pelayanan di lapangan.</p>

      <p>Kurikulum pendidikan teologi perlu dirancang dengan mempertimbangkan realitas konteks Indonesia, tidak hanya mengadopsi mentah-mentah sistem pendidikan teologi dari Barat. Studi kasus lokal, penelitian lapangan, dan praktik pelayanan di berbagai setting budaya Indonesia harus menjadi bagian integral dari proses pembelajaran.</p>

      <h2>Kesimpulan</h2>

      <p>Gereja di Indonesia memiliki panggilan yang mulia namun menantang. Untuk dapat menjalankan misinya dengan efektif, gereja perlu terus melakukan refleksi teologis yang mendalam, sambil tetap membuka diri terhadap pembelajaran dari konteks lokal. Hanya dengan demikian, gereja dapat menjadi komunitas yang benar-benar relevan, transformatif, dan membawa dampak positif bagi bangsa Indonesia.</p>

      <p>Mari kita bersama-sama mengembangkan teologi yang tidak hanya ortodoks, tetapi juga ortopraksis—teologi yang tidak hanya benar secara doktrin, tetapi juga dapat dipraktikkan dengan benar dalam konteks Indonesia yang unik dan beragam ini.</p>
    `,
  },
  'ibadah-pembukaan-semester-genap-2026': {
    title: 'Ibadah Pembukaan Semester Genap 2026',
    type: 'Video',
    date: '2026-03-10',
    author: 'Tim Media STTB',
    image: 'https://images.unsplash.com/photo-1667068114508-0055f7fb25a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWR8ZW58MXx8fHwxNzczMjM1MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    content: `
      <p>Ibadah pembukaan semester genap 2026 di Sekolah Tinggi Teologi Bandung diselenggarakan dengan penuh sukacita dan harapan. Seluruh sivitas akademika—dosen, mahasiswa, dan staf—berkumpul untuk memuji Tuhan dan memohon berkat-Nya atas semester yang akan dimulai.</p>

      <p>Dalam khotbahnya, Rektor STTB, Dr. Paulus Gunawan, M.Th., menekankan pentingnya fondasi spiritual yang kuat dalam menjalani proses pendidikan teologi. "Pengetahuan tanpa spiritualitas akan menjadi kosong. Kita tidak hanya belajar tentang Tuhan, tetapi juga belajar mengenal Tuhan secara pribadi," ujarnya.</p>

      <h2>Tema: "Diperlengkapi untuk Melayani"</h2>

      <p>Tema ibadah pembukaan tahun ini adalah "Diperlengkapi untuk Melayani" yang diambil dari Efesus 4:12. Tema ini mengingatkan bahwa tujuan pendidikan teologi bukan untuk akumulasi pengetahuan semata, tetapi untuk perlengkapan pelayanan yang efektif di gereja dan masyarakat.</p>

      <p>Mahasiswa baru disambut dengan hangat dan didorong untuk mengembangkan tidak hanya intelektualitas, tetapi juga karakter Kristiani yang kuat. Semester genap ini diharapkan menjadi waktu pertumbuhan rohani dan akademis yang signifikan bagi seluruh civitas academica STTB.</p>
    `,
  },
};

// Related media items
const relatedMedia = [
  {
    id: '4',
    title: 'Teologi Pembebasan dan Transformasi Sosial',
    slug: 'teologi-pembebasan-transformasi-sosial',
    type: 'Artikel',
    image: 'https://images.unsplash.com/photo-1663162550928-2c2389cdb27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwc21hbGwlMjBncm91cHxlbnwxfHx8fDE3NzMxNjA2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '6',
    title: 'Memaknai Penderitaan dalam Perspektif Alkitabiah',
    slug: 'memaknai-penderitaan-perspektif-alkitabiah',
    type: 'Artikel',
    image: 'https://images.unsplash.com/photo-1602114324193-e1c1b41dcde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHJlYWRpbmclMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzczMTQzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '8',
    title: 'Hermeneutika Kontekstual: Membaca Alkitab dalam Budaya Lokal',
    slug: 'hermeneutika-kontekstual-membaca-alkitab',
    type: 'Artikel',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzczMjU1MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function MediaDetailPage() {
  const { slug } = useParams();
  const contentRef = useRef<HTMLDivElement>(null);

  // Get media data
  const media = mockMediaDetails[slug || ''] || mockMediaDetails['refleksi-teologis-gereja-konteks-indonesia'];

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
            to="/media"
            className="inline-flex items-center gap-2 text-blue-900 hover:text-red-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Media
          </Link>
        </div>
      </div>

      {/* Media Content - Center-aligned with max-width 750px */}
      <article ref={contentRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[750px] mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              {/* Title - Large */}
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                {media.title}
              </h1>

              {/* Date and Author */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{formatDate(media.date)}</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="font-medium">{media.author}</span>
                <span className="text-gray-400">•</span>
                <span className="font-medium text-blue-900">{media.type}</span>
              </div>
            </header>

            {/* Video Embed (if type is Video) or Featured Image */}
            {media.type === 'Video' && media.videoUrl ? (
              <div className="mb-12 rounded-xl overflow-hidden shadow-lg aspect-video">
                <iframe
                  src={media.videoUrl}
                  title={media.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={media.image}
                  alt={media.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Article Body - Serif Font, 18px, line-height 1.7 */}
            <div
              className="prose-media"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '18px',
                lineHeight: '1.7',
              }}
              dangerouslySetInnerHTML={{ __html: media.content }}
            />
          </div>
        </div>
      </article>

      {/* Related Media Section - At the bottom */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-[750px] mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Media Terkait</h2>

            {/* 3 Related Media Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {relatedMedia.map((item) => (
                <Link
                  key={item.id}
                  to={`/media/${item.slug}`}
                  className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Image - 16:9 */}
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xs font-semibold text-blue-900 mb-2">{item.type}</p>
                    <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-red-700 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
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