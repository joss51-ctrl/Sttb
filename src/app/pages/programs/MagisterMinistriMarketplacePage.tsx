import { ChevronRight, Briefcase, TrendingUp, Users, Award } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { CourseTable, Course } from '../../components/CourseTable';

export default function MagisterMinistriMarketplacePage() {
  const profiles = [
    { icon: Briefcase, title: 'Marketplace Minister', description: 'Pelayan Kristus di dunia bisnis dan profesional' },
    { icon: TrendingUp, title: 'Kingdom Entrepreneur', description: 'Pengusaha yang menjalankan bisnis berdasarkan prinsip Kerajaan Allah' },
    { icon: Users, title: 'Workplace Chaplain', description: 'Pembimbing rohani di lingkungan kerja profesional' },
    { icon: Award, title: 'Ethical Leader', description: 'Pemimpin bisnis yang berintegritas dan beretika Kristen' }
  ];

  const programInfo = [
    { label: 'Persyaratan', value: 'S.Th./S1 dengan pengalaman pelayanan/bisnis min. 3 tahun' },
    { label: 'Jumlah Kredit', value: '40 SKS' },
    { label: 'Masa Studi', value: '2 tahun (4 semester)' },
    { label: 'Keterangan', value: 'Program M.Min. Terakreditasi' },
    { label: 'Sistem Perkuliahan', value: 'Kelas weekend & intensif' }
  ];

  const curriculum: { semester: number, sks: number, courses: Course[] }[] = [
    { semester: 1, sks: 10, courses: [
      { code: 'MM601', name: 'Teologi Pekerjaan & Panggilan', sks: 3, description: 'Pemahaman teologis tentang pekerjaan sebagai panggilan ilahi dan kontribusi dalam Kerajaan Allah.' },
      { code: 'MM602', name: 'Alkitab & Bisnis', sks: 3, description: 'Prinsip-prinsip alkitabiah tentang bisnis, keuangan, dan pengelolaan sumber daya dalam marketplace.' },
      { code: 'MM603', name: 'Etika Bisnis Kristen', sks: 2, description: 'Penerapan nilai-nilai etika Kristen dalam pengambilan keputusan dan praktik bisnis sehari-hari.' },
      { code: 'MM604', name: 'Kepemimpinan Transformasional', sks: 2, description: 'Gaya kepemimpinan yang memberdayakan dan mentransformasi orang serta organisasi.' }
    ]},
    { semester: 2, sks: 10, courses: [
      { code: 'MM611', name: 'Marketplace Ministry Strategy', sks: 3, description: 'Strategi pelayanan yang efektif di dunia bisnis dan profesional untuk memenangkan jiwa.' },
      { code: 'MM612', name: 'Entrepreneurship & Kingdom Business', sks: 3, description: 'Prinsip kewirausahaan yang berorientasi pada Kerajaan Allah dan dampak sosial.' },
      { code: 'MM613', name: 'Spiritual Formation for Professionals', sks: 2, description: 'Pembentukan karakter dan spiritualitas untuk profesional Kristen di marketplace.' },
      { code: 'MM614', name: 'Workplace Chaplaincy', sks: 2, description: 'Keterampilan menjadi chaplain atau konselor rohani di lingkungan kerja sekuler.' }
    ]},
    { semester: 3, sks: 10, courses: [
      { code: 'MM621', name: 'CSR & Social Impact', sks: 2, description: 'Corporate Social Responsibility dan menciptakan dampak sosial positif melalui bisnis.' },
      { code: 'MM622', name: 'Conflict Resolution & Mediation', sks: 2, description: 'Teknik resolusi konflik dan mediasi dalam konteks bisnis dan organisasi.' },
      { code: 'MM623', name: 'Mentoring & Coaching', sks: 3, description: 'Keterampilan mentoring dan coaching untuk mengembangkan pemimpin marketplace yang lain.' },
      { code: 'MM624', name: 'Case Studies in Marketplace Ministry', sks: 3, description: 'Analisis studi kasus pelayanan marketplace yang sukses dan pembelajaran dari best practices.' }
    ]},
    { semester: 4, sks: 10, courses: [
      { code: 'MM631', name: 'Ministry Project', sks: 6, description: 'Proyek pelayanan nyata di marketplace yang menerapkan prinsip-prinsip yang dipelajari.' },
      { code: 'MM632', name: 'Seminar & Presentation', sks: 2, description: 'Presentasi dan diskusi tentang proyek pelayanan dan refleksi teologis.' },
      { code: 'MM633', name: 'Field Practicum', sks: 2, description: 'Praktik lapangan dalam pelayanan marketplace di bawah supervisi mentor.' }
    ]}
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <a href="/" className="hover:text-white transition-colors">Beranda</a><ChevronRight className="w-4 h-4" /><a href="#" className="hover:text-white transition-colors">Akademik</a><ChevronRight className="w-4 h-4" /><span className="text-white">M.Min. Marketplace</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Magister Ministri</h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-100 mb-4">Marketplace</h2>
          <p className="text-xl text-blue-100 mb-2">M.Min. (Strata 2)</p>
          <p className="text-lg text-blue-100 max-w-3xl">Program untuk mempersiapkan pemimpin Kristen di dunia bisnis dan profesional</p>
        </div>
      </section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Profil Lulusan</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">{profiles.map((p, i) => { const Icon = p.icon; return (<div key={i} className="text-center"><div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center"><Icon className="w-10 h-10 text-red-700" /></div><h3 className="text-xl font-bold text-red-700 mb-2">{p.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{p.description}</p></div>);})}</div></div></section>

      <section className="py-20 bg-gray-50"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Informasi Program Studi</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">{programInfo.map((info, i) => (<div key={i} className="bg-white p-6 rounded-lg shadow-md"><h3 className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">{info.label}</h3><p className="text-gray-900 font-semibold">{info.value}</p></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Kurikulum</h2><div className="max-w-4xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{curriculum.map((sem) => (<AccordionItem key={sem.semester} value={`s-${sem.semester}`} className="bg-white border-2 border-blue-900 rounded-lg"><AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-50"><div className="flex justify-between items-center w-full pr-4"><span className="text-lg font-bold text-blue-900">Semester {sem.semester}</span><span className="text-sm font-semibold text-red-700">{sem.sks} SKS</span></div></AccordionTrigger><AccordionContent className="px-6 pb-4"><CourseTable courses={sem.courses} /></AccordionContent></AccordionItem>))}</Accordion></div></div></section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Layani Tuhan di Marketplace</h2><p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Bergabunglah untuk mengintegrasikan iman dan pekerjaan Anda</p><div className="flex flex-wrap justify-center gap-4"><a href="#" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">Daftar Sekarang <ChevronRight className="w-5 h-5" /></a><a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Download Brosur</a></div></div></section>
    </div>
  );
}
