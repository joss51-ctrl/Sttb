/**
 * FAQPage - Frequently Asked Questions Page
 * Accordion system with search and category cards
 */

import { useState } from 'react';
import { ChevronRight, Search, ChevronDown } from 'lucide-react';
import { Input } from '../components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  questions: FAQItem[];
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Top 5 General FAQs
  const topFAQs: FAQItem[] = [
    {
      question: 'Apakah STTB sudah terakreditasi?',
      answer: 'Ya, Sekolah Tinggi Teologi Bandung (STTB) telah terakreditasi oleh BAN-PT (Badan Akreditasi Nasional Perguruan Tinggi) dengan akreditasi B untuk program studi Sarjana Teologi dan Magister Teologi. Akreditasi ini menjamin kualitas pendidikan dan pengakuan ijazah secara nasional.'
    },
    {
      question: 'Berapa lama masa studi di STTB?',
      answer: 'Masa studi untuk program S1 (Sarjana) adalah 4 tahun atau 8 semester dengan total 144-160 SKS. Untuk program S2 (Magister), masa studi adalah 2 tahun atau 4 semester dengan total 42-48 SKS. Mahasiswa dapat menyelesaikan lebih cepat dengan mengambil SKS maksimal per semester sesuai IPK.'
    },
    {
      question: 'Apakah ada program beasiswa di STTB?',
      answer: 'Ya, STTB menyediakan berbagai program beasiswa untuk mahasiswa berprestasi dan yang membutuhkan bantuan finansial. Beasiswa tersebut meliputi: Beasiswa Prestasi Akademik, Beasiswa Pelayanan, Beasiswa Kemitraan Gereja, dan Beasiswa Yayasan. Informasi lebih lanjut dapat menghubungi bagian Kemahasiswaan.'
    },
    {
      question: 'Bagaimana sistem pembelajaran di STTB?',
      answer: 'STTB menerapkan sistem pembelajaran hybrid yang menggabungkan kuliah tatap muka, diskusi kelas, praktikum pelayanan, dan pembelajaran online. Metode pembelajaran meliputi: lectures, case studies, group discussions, field ministry, dan research projects. Setiap semester juga ada program praktik pelayanan di gereja atau lembaga Kristen.'
    },
    {
      question: 'Apakah lulusan STTB bisa melanjutkan ke jenjang lebih tinggi?',
      answer: 'Ya, lulusan STTB dapat melanjutkan studi ke jenjang lebih tinggi baik di dalam maupun luar negeri. Ijazah STTB yang terakreditasi BAN-PT diakui secara nasional dan internasional. Banyak alumni STTB yang melanjutkan studi S2 dan S3 di berbagai universitas teologi terkemuka di Indonesia, Asia, Eropa, dan Amerika.'
    }
  ];

  // Category-based FAQs
  const categories: FAQCategory[] = [
    {
      title: 'Memilih Program Studi Yang Tepat',
      questions: [
        {
          question: 'Apa perbedaan Program S1 dan S2 di STTB?',
          answer: 'Program S1 (Sarjana) adalah jenjang pendidikan dasar teologi yang fokus pada pembentukan karakter hamba Tuhan dan fondasi teologi yang kuat. Program ini terbuka untuk lulusan SMA/sederajat. Sedangkan Program S2 (Magister) adalah jenjang lanjutan yang fokus pada spesialisasi bidang tertentu seperti Pendidikan Kristen, Ministri Marketplace, atau Kepemimpinan. Program S2 membutuhkan gelar S1 (bisa dari jurusan apapun).'
        },
        {
          question: 'Bagaimana cara mengetahui program studi yang sesuai dengan panggilan saya?',
          answer: 'Anda dapat berkonsultasi dengan bagian Admisi STTB untuk mendapatkan guidance dalam memilih program studi. Pertimbangkan beberapa hal: (1) Panggilan pelayanan Anda (gembala, pengajar, atau marketplace ministry), (2) Pengalaman pelayanan sebelumnya, (3) Visi pelayanan masa depan, dan (4) Ketersediaan waktu untuk studi. Tim admisi akan membantu Anda menemukan program yang paling sesuai.'
        },
        {
          question: 'Apakah saya harus dari latar belakang Kristen untuk mendaftar?',
          answer: 'Ya, STTB adalah institusi pendidikan teologi Kristen yang mempersiapkan hamba Tuhan. Oleh karena itu, calon mahasiswa harus: (1) Sudah percaya Yesus Kristus sebagai Tuhan dan Juruselamat pribadi, (2) Sudah dibaptis, (3) Aktif di gereja lokal, (4) Memiliki surat rekomendasi dari gembala/pendeta, dan (5) Memiliki komitmen untuk melayani Tuhan.'
        }
      ]
    },
    {
      title: 'Tips Memilih Program Studi S1',
      questions: [
        {
          question: 'Apa perbedaan Sarjana Teologi (S.Th.) dan Sarjana Pendidikan Kristen (S.Pd.K.)?',
          answer: 'Sarjana Teologi (S.Th.) fokus pada pembentukan gembala, penginjil, dan pekerja pelayanan gerejawi secara umum. Kurikulumnya menekankan pada teologi sistematika, eksegesis Alkitab, homilетika, dan pastoral care. Sedangkan Sarjana Pendidikan Kristen (S.Pd.K.) fokus pada pendidikan dan pengajaran Kristen, baik di sekolah maupun gereja. Kurikulumnya mencakup pedagogi, psikologi pendidikan, kurikulum PAK, dan metodologi pengajaran.'
        },
        {
          question: 'Apakah program S1 bisa diambil sambil bekerja?',
          answer: 'Program S1 di STTB dirancang sebagai full-time study yang membutuhkan komitmen penuh karena melibatkan kuliah intensif, tugas-tugas teologis yang memerlukan riset mendalam, dan praktik pelayanan lapangan. Namun, beberapa mahasiswa tetap melayanan part-time di gereja. Konsultasikan dengan bagian akademik untuk mendapatkan jadwal yang optimal.'
        },
        {
          question: 'Berapa biaya kuliah program S1 di STTB?',
          answer: 'Biaya kuliah program S1 berkisar antara Rp 8.000.000 - Rp 10.000.000 per semester, tergantung program studi dan jumlah SKS yang diambil. Biaya ini sudah termasuk kuliah, praktikum, akses perpustakaan, dan fasilitas kampus. Tersedia berbagai skema pembayaran dan program beasiswa untuk meringankan beban finansial mahasiswa.'
        },
        {
          question: 'Apakah ada program magang atau praktik lapangan untuk S1?',
          answer: 'Ya, program S1 memiliki komponen Field Education (Praktik Pelayanan Lapangan) yang wajib diambil. Mahasiswa akan ditempatkan di gereja-gereja mitra, sekolah Kristen, atau lembaga pelayanan untuk mendapatkan pengalaman praktis selama 1-2 semester. Program ini dibimbing oleh supervisor lapangan dan dosen pembimbing akademik.'
        }
      ]
    },
    {
      title: 'Tips Memilih Program Studi S2',
      questions: [
        {
          question: 'Apa perbedaan antara ketiga program Magister Ministri (M.Min.)?',
          answer: 'STTB memiliki 3 program Magister Ministri dengan fokus berbeda: (1) M.Min. Marketplace - untuk profesional yang ingin melayani Tuhan di dunia kerja secular, fokus pada theology of work dan transformasi marketplace. (2) M.Min. Kepemimpinan - untuk pemimpin gereja/organisasi Kristen, fokus pada leadership teologis dan manajemen pelayanan. (3) M.Min. Pelayanan Gerejawi - untuk gembala dan pekerja gereja, fokus pada praktik pastoral dan pengembangan jemaat.'
        },
        {
          question: 'Apakah S2 bisa diambil oleh lulusan S1 non-teologi?',
          answer: 'Ya, beberapa program S2 di STTB terbuka untuk lulusan S1 dari berbagai jurusan. Contohnya: Magister Pendidikan Kristen (M.Pd.) menerima lulusan Pendidikan, Psikologi, atau jurusan lainnya. Magister Ministri Marketplace (M.Min.) sangat cocok untuk lulusan Ekonomi, Bisnis, Teknik, dll. Namun, mahasiswa dari non-teologi akan diwajibkan mengambil mata kuliah matrikulasi teologi dasar.'
        },
        {
          question: 'Berapa lama waktu penyelesaian tesis S2?',
          answer: 'Waktu penyelesaian tesis S2 normalnya adalah 1 tahun (semester 3-4). Mahasiswa akan dibimbing oleh 2 dosen pembimbing. Proses meliputi: pengajuan proposal (bulan ke-1 hingga ke-3), riset dan penulisan (bulan ke-4 hingga ke-10), dan ujian sidang tesis (bulan ke-11-12). Mahasiswa dapat mengajukan perpanjangan maksimal 1 semester jika diperlukan.'
        },
        {
          question: 'Apakah program S2 tersedia dalam kelas weekend atau malam?',
          answer: 'Saat ini program S2 di STTB menggunakan sistem blok/intensive yang lebih fleksibel. Kuliah dilaksanakan dalam bentuk workshop intensif pada hari Jumat-Sabtu atau Sabtu-Minggu, 2-3 kali per bulan. Sistem ini dirancang untuk working professionals yang tidak bisa kuliah setiap hari. Beberapa mata kuliah juga tersedia dalam format online/hybrid.'
        },
        {
          question: 'Apakah ada program sandwich atau joint degree dengan universitas luar negeri?',
          answer: 'STTB memiliki kerjasama dengan beberapa universitas teologi di Asia dan Eropa untuk program exchange dan research collaboration. Mahasiswa S2 berkesempatan mengikuti short course atau research visit selama 1-2 bulan di universitas mitra. Namun untuk program joint degree atau double degree, saat ini masih dalam tahap pengembangan. Informasi lebih lanjut dapat menghubungi bagian Hubungan Internasional.'
        },
        {
          question: 'Berapa biaya program S2 di STTB?',
          answer: 'Biaya kuliah program S2 berkisar antara Rp 12.000.000 - Rp 15.000.000 per semester, tergantung program studi. Total biaya untuk menyelesaikan program S2 (4 semester) sekitar Rp 50.000.000 - Rp 60.000.000 sudah termasuk biaya tesis, perpustakaan, dan seminar. Tersedia program beasiswa parsial untuk mahasiswa berprestasi dan pelayanan.'
        },
        {
          question: 'Apakah gelar M.Th., M.Pd., dan M.Min. diakui untuk mengajar di perguruan tinggi?',
          answer: 'Ya, semua gelar magister dari STTB yang terakreditasi BAN-PT diakui untuk mengajar di perguruan tinggi sesuai dengan bidang keilmuannya. Lulusan M.Th. dapat mengajar di fakultas teologi, M.Pd. dapat mengajar di fakultas pendidikan atau program studi PAK, dan M.Min. dapat mengajar di sekolah tinggi teologi atau menjadi dosen praktisi. Untuk menjadi dosen tetap, diperlukan juga sertifikasi dosen sesuai regulasi Dikti.'
        },
        {
          question: 'Apakah lulusan S2 STTB bisa melanjutkan ke program Doktor (S3)?',
          answer: 'Ya, lulusan S2 STTB dapat melanjutkan ke program Doktor (S3) di dalam atau luar negeri. Banyak alumni STTB yang melanjutkan studi doktoral di berbagai universitas teologi terkemuka seperti SEAGST (Singapura), APTS (Filipina), Trinity Evangelical Divinity School (USA), Oxford University (UK), dan universitas-universitas teologi terkemuka lainnya. STTB juga sedang mempersiapkan program S3 sendiri untuk masa depan.'
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredTopFAQs = topFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900 transition-colors">Beranda</a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-blue-900 transition-colors">Admisi</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">FAQ</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan Anda tentang admisi dan kehidupan kampus di STTB
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari pertanyaan Anda..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-blue-900 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 FAQs Section */}
      {filteredTopFAQs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
                Pertanyaan Populer
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {filteredTopFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`top-faq-${index}`}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:bg-gray-50 text-left">
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-2">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Category-based FAQs Section */}
      {filteredCategories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-blue-900 mb-12 text-center">
                FAQ Berdasarkan Kategori
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {filteredCategories.map((category, categoryIndex) => (
                  <div 
                    key={categoryIndex}
                    className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
                  >
                    {/* Category Title */}
                    <h3 className="text-lg font-bold text-blue-900 mb-6 pb-4 border-b border-gray-200">
                      {category.title}
                    </h3>

                    {/* Category Questions */}
                    <Accordion type="single" collapsible className="space-y-3">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`category-${categoryIndex}-faq-${faqIndex}`}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <AccordionTrigger className="py-3 hover:text-red-700 text-left text-sm">
                            <span className="font-medium text-gray-800 pr-2">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-3 pt-1">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {searchQuery && filteredTopFAQs.length === 0 && filteredCategories.length === 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gray-50 rounded-xl p-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tidak ada hasil ditemukan
                </h3>
                <p className="text-gray-600 mb-6">
                  Maaf, kami tidak menemukan pertanyaan yang sesuai dengan pencarian Anda: "<strong>{searchQuery}</strong>"
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-blue-900 font-semibold hover:underline"
                >
                  Hapus pencarian
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Tidak Menemukan Jawaban yang Anda Cari?
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Tim admisi kami siap membantu menjawab pertanyaan Anda. Jangan ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Hubungi via WhatsApp
              </a>
              <a 
                href="mailto:admisi@sttb.ac.id"
                className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
