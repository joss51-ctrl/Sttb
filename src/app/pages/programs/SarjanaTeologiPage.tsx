/**
 * SarjanaTeologiPage - Bachelor of Theology Program Page
 * 
 * Sections:
 * 1. PROFIL LULUSAN - 4-column grid with graduate profiles
 * 2. INFORMASI PRODI - Program information cards
 * 3. KURIKULUM - 8-semester accordion curriculum with expandable course descriptions
 * 
 * Design:
 * - Professional with lots of white space
 * - Navy Blue headings
 * - Crimson Red accents
 */

import { ChevronRight, BookOpen, Users, Cross, Award } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { CourseTable, Course } from '../../components/CourseTable';

export default function SarjanaTeologiPage() {
  // Graduate Profiles
  const profiles = [
    {
      icon: Cross,
      title: 'Pastor-Scholar',
      description: 'Gembala sidang yang memiliki pemahaman teologi yang mendalam dan kemampuan eksposisi Alkitab'
    },
    {
      icon: BookOpen,
      title: 'Christian Educator',
      description: 'Pendidik Kristen yang mampu mengajarkan kebenaran Alkitab dengan metode yang efektif'
    },
    {
      icon: Users,
      title: 'Church Leader',
      description: 'Pemimpin gereja yang berkarakter Kristus dan memiliki visi pelayanan yang jelas'
    },
    {
      icon: Award,
      title: 'Mission Worker',
      description: 'Pekerja misi yang siap melayani di berbagai konteks budaya dan masyarakat'
    }
  ];

  // Program Information
  const programInfo = [
    {
      label: 'Persyaratan',
      value: 'Lulusan SMA/SMK/MA dengan rekomendasi gereja'
    },
    {
      label: 'Jumlah Kredit',
      value: '144 SKS'
    },
    {
      label: 'Masa Studi',
      value: '4 tahun (8 semester)'
    },
    {
      label: 'Keterangan',
      value: 'Terakreditasi B oleh BAN-PT'
    },
    {
      label: 'Sistem Perkuliahan',
      value: 'Kelas reguler dengan metode pembelajaran aktif'
    }
  ];

  // Curriculum Data
  const curriculum: { semester: number, sks: number, courses: Course[] }[] = [
    {
      semester: 1,
      sks: 18,
      courses: [
        { code: 'TH101', name: 'Pengantar Teologi', sks: 3, description: 'Pengantar Teologi adalah mata kuliah yang memperkenalkan konsep-konsep dasar dalam teologi Kristen, termasuk Teologi Sistematis, Teologi Perjanjian Lama, dan Teologi Perjanjian Baru.' },
        { code: 'BI101', name: 'Pengantar Perjanjian Lama', sks: 3, description: 'Pengantar Perjanjian Lama adalah mata kuliah yang memperkenalkan peserta didik dengan isi dan makna Perjanjian Lama, termasuk buku-buku seperti Genesis, Exodus, dan Deuteronomi.' },
        { code: 'BI102', name: 'Pengantar Perjanjian Baru', sks: 3, description: 'Pengantar Perjanjian Baru adalah mata kuliah yang memperkenalkan peserta didik dengan isi dan makna Perjanjian Baru, termasuk buku-buku seperti Matematius, Markus, dan Lukas.' },
        { code: 'TH102', name: 'Hermeneutika', sks: 2, description: 'Hermeneutika adalah mata kuliah yang membahas metode-metode interpretasi Alkitab, termasuk metode literal, historis, dan teologis.' },
        { code: 'CH101', name: 'Sejarah Gereja I', sks: 2, description: 'Sejarah Gereja I adalah mata kuliah yang memperkenalkan peserta didik dengan sejarah gereja Kristen dari awal hingga abad ke-16.' },
        { code: 'GE101', name: 'Bahasa Inggris I', sks: 2, description: 'Bahasa Inggris I adalah mata kuliah yang membantu peserta didik mempelajari dasar-dasar bahasa Inggris, termasuk gramatika, vokabular, dan pengucapan.' },
        { code: 'GE102', name: 'Bahasa Indonesia', sks: 2, description: 'Bahasa Indonesia adalah mata kuliah yang membantu peserta didik memperkuat pemahaman dan penggunaan bahasa Indonesia dalam konteks akademik dan profesional.' },
        { code: 'SP101', name: 'Pembinaan Rohani I', sks: 1, description: 'Pembinaan Rohani I adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pembinaan rohani dalam konteks gereja.' }
      ]
    },
    {
      semester: 2,
      sks: 18,
      courses: [
        { code: 'BI201', name: 'Tafsir Pentateukh', sks: 3, description: 'Tafsir Pentateukh adalah mata kuliah yang membahas interpretasi Alkitab dari buku-buku Pentateukh, termasuk Genesis, Exodus, Levitikus, Numeri, dan Deuteronomi.' },
        { code: 'BI202', name: 'Tafsir Injil Sinoptik', sks: 3, description: 'Tafsir Injil Sinoptik adalah mata kuliah yang membahas interpretasi Alkitab dari buku-buku Injil Sinoptik, termasuk Matematius, Markus, dan Lukas.' },
        { code: 'TH201', name: 'Teologi Sistematika I', sks: 3, description: 'Teologi Sistematika I adalah mata kuliah yang memperkenalkan peserta didik dengan konsep-konsep dasar dalam teologi Kristen, termasuk Teologi Sistematis, Teologi Perjanjian Lama, dan Teologi Perjanjian Baru.' },
        { code: 'TH202', name: 'Bahasa Ibrani I', sks: 3, description: 'Bahasa Ibrani I adalah mata kuliah yang membantu peserta didik mempelajari dasar-dasar bahasa Ibrani, termasuk gramatika, vokabular, dan pengucapan.' },
        { code: 'CH201', name: 'Sejarah Gereja II', sks: 2, description: 'Sejarah Gereja II adalah mata kuliah yang memperkenalkan peserta didik dengan sejarah gereja Kristen dari abad ke-16 hingga abad ke-20.' },
        { code: 'GE201', name: 'Bahasa Inggris II', sks: 2, description: 'Bahasa Inggris II adalah mata kuliah yang membantu peserta didik memperdalam pemahaman dan penggunaan bahasa Inggris dalam konteks akademik dan profesional.' },
        { code: 'SP201', name: 'Pembinaan Rohani II', sks: 1, description: 'Pembinaan Rohani II adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pembinaan rohani dalam konteks gereja.' },
        { code: 'PR201', name: 'Praktik Pelayanan I', sks: 1, description: 'Praktik Pelayanan I adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pelayanan gereja dalam konteks praktis.' }
      ]
    },
    {
      semester: 3,
      sks: 19,
      courses: [
        { code: 'BI301', name: 'Tafsir Kitab Sejarah', sks: 3, description: 'Tafsir Kitab Sejarah adalah mata kuliah yang membahas interpretasi Alkitab dari buku-buku Sejarah, termasuk Joshua, Huta, dan 1-2 Samuel.' },
        { code: 'BI302', name: 'Tafsir Surat Paulus I', sks: 3, description: 'Tafsir Surat Paulus I adalah mata kuliah yang membahas interpretasi Alkitab dari surat-surat Paulus, termasuk Romawi, 1-2 Korintus, dan Galatia.' },
        { code: 'TH301', name: 'Teologi Sistematika II', sks: 3, description: 'Teologi Sistematika II adalah mata kuliah yang memperdalam pemahaman peserta didik tentang konsep-konsep dalam teologi Kristen, termasuk Teologi Sistematis, Teologi Perjanjian Lama, dan Teologi Perjanjian Baru.' },
        { code: 'TH302', name: 'Bahasa Ibrani II', sks: 3, description: 'Bahasa Ibrani II adalah mata kuliah yang membantu peserta didik memperdalam pemahaman dan penggunaan bahasa Ibrani dalam konteks akademik dan profesional.' },
        { code: 'TH303', name: 'Bahasa Yunani I', sks: 3, description: 'Bahasa Yunani I adalah mata kuliah yang membantu peserta didik mempelajari dasar-dasar bahasa Yunani, termasuk gramatika, vokabular, dan pengucapan.' },
        { code: 'CE301', name: 'Pendidikan Kristen', sks: 2, description: 'Pendidikan Kristen adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pendidikan Kristen dalam konteks gereja.' },
        { code: 'SP301', name: 'Pembinaan Rohani III', sks: 1, description: 'Pembinaan Rohani III adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pembinaan rohani dalam konteks gereja.' },
        { code: 'PR301', name: 'Praktik Pelayanan II', sks: 1, description: 'Praktik Pelayanan II adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pelayanan gereja dalam konteks praktis.' }
      ]
    },
    {
      semester: 4,
      sks: 18,
      courses: [
        { code: 'BI401', name: 'Tafsir Kitab Puisi & Hikmat', sks: 3, description: 'Tafsir Kitab Puisi & Hikmat adalah mata kuliah yang membahas interpretasi Alkitab dari buku-buku Puisi & Hikmat, termasuk Psalmen, Proverbia, dan Esa.' },
        { code: 'BI402', name: 'Tafsir Surat Paulus II', sks: 3, description: 'Tafsir Surat Paulus II adalah mata kuliah yang membahas interpretasi Alkitab dari surat-surat Paulus, termasuk Kolos, Filippi, dan Titus.' },
        { code: 'TH401', name: 'Teologi Sistematika III', sks: 3, description: 'Teologi Sistematika III adalah mata kuliah yang memperdalam pemahaman peserta didik tentang konsep-konsep dalam teologi Kristen, termasuk Teologi Sistematis, Teologi Perjanjian Lama, dan Teologi Perjanjian Baru.' },
        { code: 'TH402', name: 'Bahasa Yunani II', sks: 3, description: 'Bahasa Yunani II adalah mata kuliah yang membantu peserta didik memperdalam pemahaman dan penggunaan bahasa Yunani dalam konteks akademik dan profesional.' },
        { code: 'PT401', name: 'Homiletika I', sks: 2, description: 'Homiletika I adalah mata kuliah yang membahas metode-metode penyampaian pesan Alkitab dalam konteks pelayanan gereja.' },
        { code: 'CE401', name: 'Metodologi Pengajaran', sks: 2, description: 'Metodologi Pengajaran adalah mata kuliah yang membantu peserta didik memahami dan menerapkan metode-metode pengajaran dalam konteks pendidikan Kristen.' },
        { code: 'SP401', name: 'Pembinaan Rohani IV', sks: 1, description: 'Pembinaan Rohani IV adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pembinaan rohani dalam konteks gereja.' },
        { code: 'PR401', name: 'Praktik Pelayanan III', sks: 1, description: 'Praktik Pelayanan III adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pelayanan gereja dalam konteks praktis.' }
      ]
    },
    {
      semester: 5,
      sks: 18,
      courses: [
        { code: 'BI501', name: 'Tafsir Nabi-nabi Besar', sks: 3, description: 'Tafsir Nabi-nabi Besar adalah mata kuliah yang membahas interpretasi Alkitab dari buku-buku Nabi-nabi Besar, termasuk Isa, Yeremia, dan Ezechiel.' },
        { code: 'BI502', name: 'Tafsir Surat-surat Am', sks: 3, description: 'Tafsir Surat-surat Am adalah mata kuliah yang membahas interpretasi Alkitab dari surat-surat Am, termasuk Amos, Habakuk, dan Zefaniah.' },
        { code: 'TH501', name: 'Teologi Sistematika IV', sks: 3, description: 'Teologi Sistematika IV adalah mata kuliah yang memperdalam pemahaman peserta didik tentang konsep-konsep dalam teologi Kristen, termasuk Teologi Sistematis, Teologi Perjanjian Lama, dan Teologi Perjanjian Baru.' },
        { code: 'TH502', name: 'Etika Kristen', sks: 2, description: 'Etika Kristen adalah mata kuliah yang membahas prinsip-prinsip etika dalam konteks Kristen, termasuk etika sosial, etika profesi, dan etika pribadi.' },
        { code: 'PT501', name: 'Homiletika II', sks: 2, description: 'Homiletika II adalah mata kuliah yang membahas metode-metode penyampaian pesan Alkitab dalam konteks pelayanan gereja.' },
        { code: 'PT502', name: 'Konseling Pastoral', sks: 3, description: 'Konseling Pastoral adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip konseling dalam konteks gereja.' },
        { code: 'SP501', name: 'Pembinaan Rohani V', sks: 1, description: 'Pembinaan Rohani V adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pembinaan rohani dalam konteks gereja.' },
        { code: 'PR501', name: 'Praktik Pelayanan IV', sks: 1, description: 'Praktik Pelayanan IV adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pelayanan gereja dalam konteks praktis.' }
      ]
    },
    {
      semester: 6,
      sks: 18,
      courses: [
        { code: 'BI601', name: 'Tafsir Nabi-nabi Kecil', sks: 3, description: 'Tafsir Nabi-nabi Kecil adalah mata kuliah yang membahas interpretasi Alkitab dari buku-buku Nabi-nabi Kecil, termasuk Obadiah, Naum, dan Habakuk.' },
        { code: 'BI602', name: 'Teologi Perjanjian Lama', sks: 2, description: 'Teologi Perjanjian Lama adalah mata kuliah yang memperkenalkan peserta didik dengan konsep-konsep dalam teologi Perjanjian Lama, termasuk Teologi Sistematis, Teologi Perjanjian Lama, dan Teologi Perjanjian Baru.' },
        { code: 'BI603', name: 'Teologi Perjanjian Baru', sks: 2, description: 'Teologi Perjanjian Baru adalah mata kuliah yang memperkenalkan peserta didik dengan konsep-konsep dalam teologi Perjanjian Baru, termasuk Teologi Sistematis, Teologi Perjanjian Lama, dan Teologi Perjanjian Baru.' },
        { code: 'TH601', name: 'Apologetika', sks: 2, description: 'Apologetika adalah mata kuliah yang membahas metode-metode pertahanan kepercayaan Kristen dalam konteks sosial dan budaya.' },
        { code: 'PT601', name: 'Kepemimpinan Kristen', sks: 2, description: 'Kepemimpinan Kristen adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip kepemimpinan dalam konteks gereja.' },
        { code: 'PT602', name: 'Liturgi & Musik Gereja', sks: 2, description: 'Liturgi & Musik Gereja adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip liturgi dan musik dalam konteks gereja.' },
        { code: 'MS601', name: 'Misiologi', sks: 3, description: 'Misiologi adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip misiologi dalam konteks gereja.' },
        { code: 'SP601', name: 'Pembinaan Rohani VI', sks: 1, description: 'Pembinaan Rohani VI adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pembinaan rohani dalam konteks gereja.' },
        { code: 'PR601', name: 'Praktik Pelayanan V', sks: 1, description: 'Praktik Pelayanan V adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pelayanan gereja dalam konteks praktis.' }
      ]
    },
    {
      semester: 7,
      sks: 18,
      courses: [
        { code: 'TH701', name: 'Teologi Reformed', sks: 3, description: 'Teologi Reformed adalah mata kuliah yang memperkenalkan peserta didik dengan konsep-konsep dalam teologi Reformed, termasuk Teologi Sistematis, Teologi Perjanjian Lama, dan Teologi Perjanjian Baru.' },
        { code: 'TH702', name: 'Penginjilan & Pemuridan', sks: 2, description: 'Penginjilan & Pemuridan adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip penginjilan dan pemuridan dalam konteks gereja.' },
        { code: 'PT701', name: 'Administrasi Gereja', sks: 2, description: 'Administrasi Gereja adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip administrasi gereja dalam konteks praktis.' },
        { code: 'PT702', name: 'Pelayanan Anak & Remaja', sks: 2, description: 'Pelayanan Anak & Remaja adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pelayanan anak dan remaja dalam konteks gereja.' },
        { code: 'MS701', name: 'Antropologi Misi', sks: 2, description: 'Antropologi Misi adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip antropologi misi dalam konteks gereja.' },
        { code: 'EL701', name: 'Mata Kuliah Pilihan I', sks: 3, description: 'Mata Kuliah Pilihan I adalah mata kuliah yang memungkinkan peserta didik memilih topik-topik tertentu dalam bidang teologi Kristen.' },
        { code: 'EL702', name: 'Mata Kuliah Pilihan II', sks: 3, description: 'Mata Kuliah Pilihan II adalah mata kuliah yang memungkinkan peserta didik memilih topik-topik tertentu dalam bidang teologi Kristen.' },
        { code: 'SP701', name: 'Pembinaan Rohani VII', sks: 1, description: 'Pembinaan Rohani VII adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pembinaan rohani dalam konteks gereja.' }
      ]
    },
    {
      semester: 8,
      sks: 18,
      courses: [
        { code: 'TH801', name: 'Teologi Kontemporer', sks: 2, description: 'Teologi Kontemporer adalah mata kuliah yang memperkenalkan peserta didik dengan konsep-konsep dalam teologi kontemporer, termasuk Teologi Sistematis, Teologi Perjanjian Lama, dan Teologi Perjanjian Baru.' },
        { code: 'TH802', name: 'Metodologi Penelitian', sks: 2, description: 'Metodologi Penelitian adalah mata kuliah yang membantu peserta didik memahami dan menerapkan metode-metode penelitian dalam konteks teologi Kristen.' },
        { code: 'PT801', name: 'Khotbah & Pengajaran Ekspositori', sks: 3, description: 'Khotbah & Pengajaran Ekspositori adalah mata kuliah yang membantu peserta didik memahami dan menerapkan metode-metode penyampaian pesan Alkitab dalam konteks pelayanan gereja.' },
        { code: 'EL801', name: 'Mata Kuliah Pilihan III', sks: 3, description: 'Mata Kuliah Pilihan III adalah mata kuliah yang memungkinkan peserta didik memilih topik-topik tertentu dalam bidang teologi Kristen.' },
        { code: 'TH803', name: 'Skripsi', sks: 6, description: 'Skripsi adalah mata kuliah yang memungkinkan peserta didik meneliti topik-topik tertentu dalam bidang teologi Kristen dan menulisnya dalam bentuk skripsi.' },
        { code: 'SP801', name: 'Pembinaan Rohani VIII', sks: 1, description: 'Pembinaan Rohani VIII adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pembinaan rohani dalam konteks gereja.' },
        { code: 'PR801', name: 'Praktik Pelayanan VI', sks: 1, description: 'Praktik Pelayanan VI adalah mata kuliah yang membantu peserta didik memahami dan menerapkan prinsip-prinsip pelayanan gereja dalam konteks praktis.' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <a href="/" className="hover:text-white transition-colors">
              Beranda
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-white transition-colors">
              Akademik
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Sarjana Teologi</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">Sarjana Teologi</h1>
          <p className="text-2xl text-blue-100 mb-4">S.Th. (Strata 1)</p>
          <p className="text-lg text-blue-100 max-w-3xl">
            Program pendidikan teologi Reformed yang komprehensif untuk mempersiapkan hamba Tuhan yang berkarakter Kristus
          </p>
        </div>
      </section>

      {/* SECTION 1: PROFIL LULUSAN */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
            Profil Lulusan
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Program Sarjana Teologi menghasilkan lulusan yang siap melayani dalam berbagai bidang pelayanan gereja
          </p>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {profiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <div key={index} className="text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-red-700" />
                  </div>
                  
                  {/* Bold Red Title */}
                  <h3 className="text-xl font-bold text-red-700 mb-2">
                    {profile.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: INFORMASI PRODI */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Informasi Program Studi
          </h2>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {programInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">
                  {info.label}
                </h3>
                <p className="text-gray-900 font-semibold">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: KURIKULUM */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
            Kurikulum
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Kurikulum komprehensif selama 8 semester dengan total 144 SKS
          </p>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {curriculum.map((sem) => (
                <AccordionItem 
                  key={sem.semester} 
                  value={`semester-${sem.semester}`}
                  className="bg-white border-2 border-blue-900 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-50">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span className="text-lg font-bold text-blue-900">
                        Semester {sem.semester}
                      </span>
                      <span className="text-sm font-semibold text-red-700">
                        {sem.sks} SKS
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <CourseTable courses={sem.courses} semesterKey={`semester-${sem.semester}`} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Bergabung dengan Program Sarjana Teologi?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan Anda untuk menjadi hamba Tuhan yang setia dan kompeten
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Daftar Sekarang
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Download Brosur
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}