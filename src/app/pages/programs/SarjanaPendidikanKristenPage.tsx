/**
 * SarjanaPendidikanKristenPage - Bachelor of Christian Education Program Page
 */

import { ChevronRight, GraduationCap, School, Heart, Lightbulb } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { CourseTable, Course } from '../../components/CourseTable';

export default function SarjanaPendidikanKristenPage() {
  const profiles = [
    {
      icon: GraduationCap,
      title: 'Pendidik PAK',
      description: 'Guru Pendidikan Agama Kristen di sekolah-sekolah dengan kompetensi pedagogis yang kuat'
    },
    {
      icon: School,
      title: 'Pengajar Sekolah Minggu',
      description: 'Pemimpin pendidikan anak dan remaja di gereja dengan metode yang kreatif dan efektif'
    },
    {
      icon: Heart,
      title: 'Konselor Kristen',
      description: 'Pembimbing rohani yang mampu mendampingi pertumbuhan iman jemaat'
    },
    {
      icon: Lightbulb,
      title: 'Pengembang Kurikulum',
      description: 'Perancang program pendidikan Kristen yang kontekstual dan alkitabiah'
    }
  ];

  const programInfo = [
    { label: 'Persyaratan', value: 'Lulusan SMA/SMK/MA dengan minat dalam pendidikan' },
    { label: 'Jumlah Kredit', value: '144 SKS' },
    { label: 'Masa Studi', value: '4 tahun (8 semester)' },
    { label: 'Keterangan', value: 'Terakreditasi B oleh BAN-PT' },
    { label: 'Sistem Perkuliahan', value: 'Kelas reguler dengan praktik mengajar' }
  ];

  const curriculum: { semester: number, sks: number, courses: Course[] }[] = [
    {
      semester: 1, sks: 18,
      courses: [
        { code: 'PAK101', name: 'Pengantar Pendidikan Kristen', sks: 3, description: 'Mata kuliah ini memperkenalkan landasan teologis dan filosofis pendidikan Kristen, serta peran pendidikan dalam pengembangan iman dan karakter Kristiani.' },
        { code: 'BI101', name: 'Pengantar Alkitab', sks: 3, description: 'Pengenalan komprehensif terhadap Alkitab sebagai fondasi pengajaran Kristen, mencakup struktur, konteks, dan tema-tema utama dalam Perjanjian Lama dan Baru.' },
        { code: 'ED101', name: 'Psikologi Perkembangan', sks: 3, description: 'Studi tentang tahap-tahap perkembangan manusia dari anak hingga dewasa, dengan aplikasi pada praktik pendidikan Kristen.' },
        { code: 'ED102', name: 'Filsafat Pendidikan Kristen', sks: 2, description: 'Eksplorasi landasan filosofis pendidikan Kristen dan penerapannya dalam konteks pendidikan modern.' },
        { code: 'TH101', name: 'Teologi Dasar', sks: 2, description: 'Pengenalan konsep-konsep teologi fundamental yang menjadi dasar pemahaman iman Kristen.' },
        { code: 'GE101', name: 'Bahasa Inggris I', sks: 2, description: 'Pengembangan kemampuan bahasa Inggris dasar untuk keperluan akademik dan pelayanan.' },
        { code: 'GE102', name: 'Bahasa Indonesia', sks: 2, description: 'Peningkatan keterampilan berbahasa Indonesia yang baik dan benar dalam konteks akademik.' },
        { code: 'SP101', name: 'Pembinaan Rohani I', sks: 1, description: 'Pembinaan karakter dan spiritualitas mahasiswa melalui kegiatan devosi dan refleksi rohani.' }
      ]
    },
    {
      semester: 2, sks: 18,
      courses: [
        { code: 'PAK201', name: 'Sejarah Pendidikan Kristen', sks: 2, description: 'Pengenalan sejarah perkembangan pendidikan Kristen di Indonesia dan dunia, serta peranannya dalam masyarakat.' },
        { code: 'BI201', name: 'Teologi Perjanjian Lama', sks: 3, description: 'Studi mendalam tentang isi dan makna Perjanjian Lama, serta aplikasinya dalam pendidikan Kristen.' },
        { code: 'ED201', name: 'Psikologi Pendidikan', sks: 3, description: 'Pengenalan konsep-konsep psikologi pendidikan dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'ED202', name: 'Metodologi Pengajaran', sks: 3, description: 'Pengenalan berbagai metode pengajaran yang efektif dalam konteks pendidikan Kristen.' },
        { code: 'TH201', name: 'Doktrin Alkitab', sks: 2, description: 'Pengenalan konsep-konsep doktrin Alkitab dan penerapannya dalam pendidikan Kristen.' },
        { code: 'GE201', name: 'Bahasa Inggris II', sks: 2, description: 'Pengembangan kemampuan bahasa Inggris lanjutan untuk keperluan akademik dan pelayanan.' },
        { code: 'SP201', name: 'Pembinaan Rohani II', sks: 1, description: 'Pembinaan karakter dan spiritualitas mahasiswa melalui kegiatan devosi dan refleksi rohani.' },
        { code: 'PR201', name: 'Observasi Pembelajaran', sks: 2, description: 'Pengalaman praktik mengamati proses pembelajaran di lingkungan pendidikan Kristen.' }
      ]
    },
    {
      semester: 3, sks: 19,
      courses: [
        { code: 'PAK301', name: 'Kurikulum PAK', sks: 3, description: 'Pengenalan konsep-konsep kurikulum pendidikan Kristen dan penerapannya dalam praktik mengajar.' },
        { code: 'BI301', name: 'Teologi Perjanjian Baru', sks: 3, description: 'Studi mendalam tentang isi dan makna Perjanjian Baru, serta aplikasinya dalam pendidikan Kristen.' },
        { code: 'ED301', name: 'Teknologi Pendidikan', sks: 3, description: 'Pengenalan berbagai teknologi pendidikan dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'ED302', name: 'Pembelajaran Anak', sks: 3, description: 'Pengenalan konsep-konsep pembelajaran anak dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'TH301', name: 'Teologi Sistematika I', sks: 2, description: 'Pengenalan konsep-konsep teologi sistematika dan penerapannya dalam pendidikan Kristen.' },
        { code: 'CE301', name: 'Manajemen Kelas', sks: 2, description: 'Pengenalan konsep-konsep manajemen kelas dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'SP301', name: 'Pembinaan Rohani III', sks: 1, description: 'Pembinaan karakter dan spiritualitas mahasiswa melalui kegiatan devosi dan refleksi rohani.' },
        { code: 'PR301', name: 'Praktik Mengajar I', sks: 2, description: 'Pengalaman praktik mengajar di lingkungan pendidikan Kristen.' }
      ]
    },
    {
      semester: 4, sks: 18,
      courses: [
        { code: 'PAK401', name: 'Evaluasi Pembelajaran PAK', sks: 3, description: 'Pengenalan konsep-konsep evaluasi pembelajaran dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'BI401', name: 'Hermeneutika', sks: 2, description: 'Pengenalan konsep-konsep hermeneutika dan penerapannya dalam interpretasi Alkitab.' },
        { code: 'ED401', name: 'Pembelajaran Remaja', sks: 3, description: 'Pengenalan konsep-konsep pembelajaran remaja dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'ED402', name: 'Strategi Pembelajaran Aktif', sks: 3, description: 'Pengenalan berbagai strategi pembelajaran aktif dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'TH401', name: 'Teologi Sistematika II', sks: 2, description: 'Pengenalan konsep-konsep teologi sistematika lanjutan dan penerapannya dalam pendidikan Kristen.' },
        { code: 'CE401', name: 'Konseling Anak & Remaja', sks: 2, description: 'Pengenalan konsep-konsep konseling anak dan remaja dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'SP401', name: 'Pembinaan Rohani IV', sks: 1, description: 'Pembinaan karakter dan spiritualitas mahasiswa melalui kegiatan devosi dan refleksi rohani.' },
        { code: 'PR401', name: 'Praktik Mengajar II', sks: 2, description: 'Pengalaman praktik mengajar di lingkungan pendidikan Kristen.' }
      ]
    },
    {
      semester: 5, sks: 18,
      courses: [
        { code: 'PAK501', name: 'Media Pembelajaran PAK', sks: 3, description: 'Pengenalan berbagai media pembelajaran dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'BI501', name: 'Tafsir Alkitab untuk Anak', sks: 3, description: 'Pengenalan konsep-konsep tafsir Alkitab dan penerapannya dalam pendidikan anak Kristen.' },
        { code: 'ED501', name: 'Pembelajaran Dewasa', sks: 2, description: 'Pengenalan konsep-konsep pembelajaran dewasa dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'ED502', name: 'Pendidikan Karakter Kristen', sks: 3, description: 'Pengenalan konsep-konsep pendidikan karakter Kristen dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'TH501', name: 'Etika Kristen', sks: 2, description: 'Pengenalan konsep-konsep etika Kristen dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'CE501', name: 'Pelayanan Keluarga', sks: 2, description: 'Pengenalan konsep-konsep pelayanan keluarga dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'SP501', name: 'Pembinaan Rohani V', sks: 1, description: 'Pembinaan karakter dan spiritualitas mahasiswa melalui kegiatan devosi dan refleksi rohani.' },
        { code: 'PR501', name: 'Praktik Mengajar III', sks: 2, description: 'Pengalaman praktik mengajar di lingkungan pendidikan Kristen.' }
      ]
    },
    {
      semester: 6, sks: 18,
      courses: [
        { code: 'PAK601', name: 'Kepemimpinan Pendidikan', sks: 3, description: 'Pengenalan konsep-konsep kepemimpinan pendidikan dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'BI601', name: 'Alkitab untuk Konteks Asia', sks: 2, description: 'Pengenalan konsep-konsep Alkitab dan penerapannya dalam konteks pendidikan Kristen di Asia.' },
        { code: 'ED601', name: 'Penelitian Pendidikan', sks: 3, description: 'Pengenalan konsep-konsep penelitian pendidikan dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'ED602', name: 'Inklusi dalam Pendidikan', sks: 2, description: 'Pengenalan konsep-konsep inklusi dalam pendidikan dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'TH601', name: 'Apologetika', sks: 2, description: 'Pengenalan konsep-konsep apologetika dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'CE601', name: 'Musik & Kreativitas dalam PAK', sks: 2, description: 'Pengenalan konsep-konsep musik dan kreativitas dalam pendidikan Kristen dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'MS601', name: 'Misi Pendidikan', sks: 2, description: 'Pengenalan konsep-konsep misi pendidikan dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'SP601', name: 'Pembinaan Rohani VI', sks: 1, description: 'Pembinaan karakter dan spiritualitas mahasiswa melalui kegiatan devosi dan refleksi rohani.' },
        { code: 'PR601', name: 'Praktik Mengajar IV', sks: 1, description: 'Pengalaman praktik mengajar di lingkungan pendidikan Kristen.' }
      ]
    },
    {
      semester: 7, sks: 18,
      courses: [
        { code: 'PAK701', name: 'Administrasi Pendidikan Gereja', sks: 3, description: 'Pengenalan konsep-konsep administrasi pendidikan gereja dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'PAK702', name: 'Penginjilan & Pemuridan', sks: 2, description: 'Pengenalan konsep-konsep penginjilan dan pemuridan dalam pendidikan Kristen dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'ED701', name: 'Pembelajaran Berbasis Proyek', sks: 2, description: 'Pengenalan konsep-konsep pembelajaran berbasis proyek dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'EL701', name: 'Mata Kuliah Pilihan I', sks: 3, description: 'Pilihan mata kuliah yang sesuai dengan minat dan kebutuhan mahasiswa dalam pendidikan Kristen.' },
        { code: 'EL702', name: 'Mata Kuliah Pilihan II', sks: 3, description: 'Pilihan mata kuliah yang sesuai dengan minat dan kebutuhan mahasiswa dalam pendidikan Kristen.' },
        { code: 'EL703', name: 'Mata Kuliah Pilihan III', sks: 3, description: 'Pilihan mata kuliah yang sesuai dengan minat dan kebutuhan mahasiswa dalam pendidikan Kristen.' },
        { code: 'SP701', name: 'Pembinaan Rohani VII', sks: 1, description: 'Pembinaan karakter dan spiritualitas mahasiswa melalui kegiatan devosi dan refleksi rohani.' },
        { code: 'PR701', name: 'Praktik Mengajar V', sks: 1, description: 'Pengalaman praktik mengajar di lingkungan pendidikan Kristen.' }
      ]
    },
    {
      semester: 8, sks: 18,
      courses: [
        { code: 'PAK801', name: 'Isu Kontemporer dalam PAK', sks: 2, description: 'Pengenalan isu-isu kontemporer dalam pendidikan Kristen dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'PAK802', name: 'Metodologi Penelitian', sks: 2, description: 'Pengenalan metodologi penelitian dan penerapannya dalam praktik mengajar Kristen.' },
        { code: 'EL801', name: 'Mata Kuliah Pilihan IV', sks: 2, description: 'Pilihan mata kuliah yang sesuai dengan minat dan kebutuhan mahasiswa dalam pendidikan Kristen.' },
        { code: 'PAK803', name: 'Skripsi', sks: 6, description: 'Pengembangan penelitian ilmiah yang mendalam dalam bidang pendidikan Kristen.' },
        { code: 'SP801', name: 'Pembinaan Rohani VIII', sks: 1, description: 'Pembinaan karakter dan spiritualitas mahasiswa melalui kegiatan devosi dan refleksi rohani.' },
        { code: 'PR801', name: 'Program Pengalaman Lapangan (PPL)', sks: 5, description: 'Pengalaman praktik lapangan yang mendalam dalam bidang pendidikan Kristen.' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <a href="/" className="hover:text-white transition-colors">Beranda</a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-white transition-colors">Akademik</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Sarjana Pendidikan Kristen</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">Sarjana Pendidikan Kristen</h1>
          <p className="text-2xl text-blue-100 mb-4">S.Pd.K. (Strata 1)</p>
          <p className="text-lg text-blue-100 max-w-3xl">
            Program pendidikan untuk menghasilkan pendidik Kristen yang profesional dan berkarakter
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Profil Lulusan</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lulusan siap melayani sebagai pendidik Kristen di berbagai konteks pelayanan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {profiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-red-700" />
                  </div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">{profile.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{profile.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Informasi Program Studi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {programInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">{info.label}</h3>
                <p className="text-gray-900 font-semibold">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Kurikulum</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Kurikulum komprehensif dengan penekanan pada praktik mengajar
          </p>
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
                      <span className="text-lg font-bold text-blue-900">Semester {sem.semester}</span>
                      <span className="text-sm font-semibold text-red-700">{sem.sks} SKS</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <CourseTable courses={sem.courses} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Menjadi Pendidik Kristen?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan Anda untuk membentuk generasi yang takut akan Tuhan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Daftar Sekarang <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Brosur
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}