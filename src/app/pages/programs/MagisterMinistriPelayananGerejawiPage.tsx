import { ChevronRight, Church, Heart, Book, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { CourseTable, Course } from '../../components/CourseTable';

export default function MagisterMinistriPelayananGerejawiPage() {
  const profiles = [
    { icon: Church, title: 'Church Minister', description: 'Pelayan gereja yang kompeten dalam berbagai aspek pelayanan' },
    { icon: Heart, title: 'Pastoral Care Specialist', description: 'Ahli pemeliharaan dan penggembalaan jemaat' },
    { icon: Book, title: 'Bible Teacher', description: 'Pengajar Alkitab yang efektif dan transformatif' },
    { icon: Users, title: 'Ministry Coordinator', description: 'Koordinator pelayanan gereja yang terorganisir' }
  ];

  const programInfo = [
    { label: 'Persyaratan', value: 'S.Th./S1 dengan pengalaman pelayanan gereja min. 3 tahun' },
    { label: 'Jumlah Kredit', value: '40 SKS' },
    { label: 'Masa Studi', value: '2 tahun (4 semester)' },
    { label: 'Keterangan', value: 'Program M.Min. Terakreditasi' },
    { label: 'Sistem Perkuliahan', value: 'Kelas weekend & intensif' }
  ];

  const curriculum: { semester: number, sks: number, courses: Course[] }[] = [
    { semester: 1, sks: 10, courses: [
      { code: 'MP601', name: 'Teologi Pelayanan Gerejawi', sks: 3, description: 'Landasan teologis pelayanan gereja yang berpusat pada Kristus dan berorientasi pada jemaat.' },
      { code: 'MP602', name: 'Eksposisi Alkitab', sks: 3, description: 'Metode eksposisi Alkitab yang mendalam dan sistematis untuk pengajaran gereja.' },
      { code: 'MP603', name: 'Pastoral Care & Counseling', sks: 2, description: 'Keterampilan pemeliharaan dan konseling pastoral untuk berbagai kebutuhan jemaat.' },
      { code: 'MP604', name: 'Worship & Liturgy', sks: 2, description: 'Teologi dan praktik ibadah serta liturgi yang bermakna dan transformatif.' }
    ]},
    { semester: 2, sks: 10, courses: [
      { code: 'MP611', name: 'Homiletika Praktis', sks: 3, description: 'Seni berkhotbah yang praktis, relevan, dan aplikatif untuk kehidupan jemaat.' },
      { code: 'MP612', name: 'Ministry to All Ages', sks: 3, description: 'Strategi pelayanan yang efektif untuk semua kelompok usia dalam gereja.' },
      { code: 'MP613', name: 'Small Group Ministry', sks: 2, description: 'Pengembangan dan pengelolaan kelompok kecil sebagai pilar pertumbuhan jemaat.' },
      { code: 'MP614', name: 'Church Administration', sks: 2, description: 'Administrasi gereja yang efisien dan mendukung visi pelayanan.' }
    ]},
    { semester: 3, sks: 10, courses: [
      { code: 'MP621', name: 'Discipleship & Spiritual Formation', sks: 3, description: 'Pemuridan dan pembentukan spiritual yang mendalam untuk kedewasaan rohani jemaat.' },
      { code: 'MP622', name: 'Evangelism & Outreach', sks: 2, description: 'Strategi penginjilan dan penjangkauan yang efektif dalam konteks lokal.' },
      { code: 'MP623', name: 'Crisis Intervention Ministry', sks: 2, description: 'Pelayanan intervensi krisis untuk membantu jemaat dalam situasi sulit.' },
      { code: 'MP624', name: 'Ministry in Digital Age', sks: 3, description: 'Pelayanan gereja yang relevan dan efektif di era digital dan media sosial.' }
    ]},
    { semester: 4, sks: 10, courses: [
      { code: 'MP631', name: 'Ministry Project', sks: 6, description: 'Proyek pelayanan yang mengintegrasikan berbagai aspek pelayanan gerejawi.' },
      { code: 'MP632', name: 'Reflective Practice Seminar', sks: 2, description: 'Refleksi dan evaluasi praktik pelayanan untuk pengembangan berkelanjutan.' },
      { code: 'MP633', name: 'Field Practicum', sks: 2, description: 'Praktik lapangan pelayanan gerejawi di bawah supervisi gembala senior.' }
    ]}
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">

          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Magister Ministri</h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-100 mb-4">Teologi Pelayanan Gerejawi</h2>
          <p className="text-xl text-blue-100 mb-2">M.Min. (Strata 2)</p>
          <p className="text-lg text-blue-100 max-w-3xl">Program untuk meningkatkan kompetensi pelayanan gerejawi yang holistik</p>
        </div>
      </section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Profil Lulusan</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">{profiles.map((p, i) => { const Icon = p.icon; return (<div key={i} className="text-center"><div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center"><Icon className="w-10 h-10 text-red-700" /></div><h3 className="text-xl font-bold text-red-700 mb-2">{p.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{p.description}</p></div>);})}</div></div></section>

      <section className="py-20 bg-gray-50"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Informasi Program Studi</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">{programInfo.map((info, i) => (<div key={i} className="bg-white p-6 rounded-lg shadow-md"><h3 className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">{info.label}</h3><p className="text-gray-900 font-semibold">{info.value}</p></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Kurikulum</h2><div className="max-w-4xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{curriculum.map((sem) => (<AccordionItem key={sem.semester} value={`s-${sem.semester}`} className="bg-white border-2 border-blue-900 rounded-lg"><AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-50"><div className="flex justify-between items-center w-full pr-4"><span className="text-lg font-bold text-blue-900">Semester {sem.semester}</span><span className="text-sm font-semibold text-red-700">{sem.sks} SKS</span></div></AccordionTrigger><AccordionContent className="px-6 pb-4"><CourseTable courses={sem.courses} /></AccordionContent></AccordionItem>))}</Accordion></div></div></section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Layani dengan Keunggulan</h2><p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Tingkatkan pelayanan gerejawi Anda dengan kompetensi yang lebih mendalam</p><div className="flex flex-wrap justify-center gap-4"><a href="#" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">Daftar Sekarang <ChevronRight className="w-5 h-5" /></a><a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Download Brosur</a></div></div></section>
    </div>
  );
}
