/**
 * BeasiswaPage - Scholarship Page
 * Action-oriented modern scholarship information page
 */

import { ChevronRight, Download, CheckCircle, AlertTriangle, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function BeasiswaPage() {
  // Scholarship programs
  const scholarships = [
    {
      title: 'Pastor Scholar',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      benefits: [
        'Beasiswa penuh untuk calon pelayan yang telah berpengalaman minimal 3 tahun',
        'Prioritas untuk pelayanan di daerah terpencil dan frontier',
        'Mentoring oleh dosen senior selama masa studi'
      ]
    },
    {
      title: 'Formatio',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      benefits: [
        'Beasiswa berbasis prestasi akademik untuk lulusan SMA/SMK',
        'Mencakup 50-100% biaya kuliah berdasarkan evaluasi berkala',
        'Akses ke program pengembangan kepemimpinan khusus'
      ]
    },
    {
      title: 'Transformative Leadership',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
      benefits: [
        'Beasiswa untuk mahasiswa Magister dengan visi transformasi sosial',
        'Pendampingan riset dan publikasi jurnal internasional',
        'Networking dengan pemimpin gereja dan organisasi Kristen'
      ]
    }
  ];

  // Requirements and regulations
  const requirements = [
    'IPK minimal 3.00 (untuk beasiswa prestasi akademik)',
    'Memiliki surat rekomendasi dari gembala atau pemimpin gereja',
    'Mengisi formulir pengajuan beasiswa secara lengkap dan benar',
    'Melampirkan essay motivasi (500-800 kata)',
    'Menyertakan bukti keaktifan dalam pelayanan gereja/organisasi Kristen',
    'Lulus seleksi wawancara oleh tim beasiswa STTB',
    'Bersedia menandatangani surat pernyataan komitmen pelayanan'
  ];

  const sanctions = [
    'Pencabutan beasiswa jika IPK di bawah 2.75 selama 2 semester berturut-turut',
    'Penghentian bantuan jika terbukti memberikan data palsu saat pendaftaran',
    'Kewajiban mengembalikan dana beasiswa jika mengundurkan diri tanpa alasan kuat',
    'Peringatan tertulis jika tidak mengikuti program mentoring yang diwajibkan',
    'Evaluasi ulang jika tidak aktif dalam kegiatan pelayanan kampus'
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900 transition-colors">Beranda</a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-blue-900 transition-colors">Keuangan</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Beasiswa</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
            Program Beasiswa
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            STTB berkomitmen untuk mendukung pendidikan teologi berkualitas melalui berbagai program beasiswa bagi calon pemimpin gereja dan masyarakat
          </p>
        </div>
      </section>

      {/* Scholarship Cards - 3 Column Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {scholarships.map((scholarship, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={scholarship.image}
                      alt={scholarship.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      {scholarship.title}
                    </h3>
                    <ul className="space-y-3">
                      {scholarship.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Regulations - 2 Column Layout */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Requirements */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Syarat & Ketentuan
                  </h2>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <ul className="space-y-4">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sanctions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">
                    Sanksi
                  </h2>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <ul className="space-y-4">
                    {sanctions.map((sanction, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{sanction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Formulir Pengajuan Beasiswa
            </h2>
            
            {/* Supporting Text */}
            <p className="text-lg text-gray-600 mb-10">
              Silakan unduh formulir pendaftaran beasiswa sesuai jenjang studi Anda.
            </p>

            {/* Buttons Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* S1 Button */}
              <a 
                href="https://sttb.ac.id/storage/2026/01/Form-Aplikasi-Beasiswa-Baru-S1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  size="lg"
                  className="w-full h-16 text-lg font-bold bg-blue-900 hover:bg-red-700 transition-colors rounded-lg shadow-lg hover:shadow-xl group"
                >
                  <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  Download Form S1
                </Button>
              </a>

              {/* S2 Button */}
              <a 
                href="https://sttb.ac.id/storage/2026/01/Form-Aplikasi-Beasiswa-Baru-S2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  size="lg"
                  className="w-full h-16 text-lg font-bold bg-blue-900 hover:bg-red-700 transition-colors rounded-lg shadow-lg hover:shadow-xl group"
                >
                  <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  Download Form S2
                </Button>
              </a>
            </div>

            {/* Footer Note */}
            <div className="bg-blue-100 border-l-4 border-blue-600 rounded-r-lg p-4 inline-block">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-blue-900">Catatan:</span> Kirimkan kembali formulir yang telah diisi melalui email{' '}
                <a 
                  href="mailto:beasiswa@sttb.ac.id" 
                  className="text-blue-700 font-semibold hover:underline"
                >
                  beasiswa@sttb.ac.id
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-12">
              Dampak Program Beasiswa STTB
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                <p className="text-gray-600">Penerima Beasiswa</p>
                <p className="text-sm text-gray-500 mt-1">Sejak 2015</p>
              </div>

              {/* Stat 2 */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">15 M</div>
                <p className="text-gray-600">Total Dana Beasiswa</p>
                <p className="text-sm text-gray-500 mt-1">Per Tahun</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">85%</div>
                <p className="text-gray-600">Tingkat Kelulusan</p>
                <p className="text-sm text-gray-500 mt-1">Penerima Beasiswa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ada Pertanyaan tentang Beasiswa?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Tim Beasiswa & Kemahasiswaan kami siap membantu Anda dengan informasi lebih lanjut mengenai program beasiswa yang tersedia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-bold"
              >
                Hubungi via WhatsApp
              </Button>
            </a>
            <a href="mailto:beasiswa@sttb.ac.id">
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-blue-900 font-bold"
              >
                Email Bagian Beasiswa
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}