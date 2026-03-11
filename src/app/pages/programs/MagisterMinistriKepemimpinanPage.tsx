import { ChevronRight, Users, Target, Compass, Crown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { CourseTable, Course } from '../../components/CourseTable';

export default function MagisterMinistriKepemimpinanPage() {
  const profiles = [
    { icon: Crown, title: 'Senior Pastor', description: 'Gembala senior dengan kepemimpinan yang matang dan visioner' },
    { icon: Users, title: 'Executive Pastor', description: 'Pemimpin eksekutif gereja yang efektif dan strategis' },
    { icon: Target, title: 'Leadership Coach', description: 'Pelatih kepemimpinan untuk para pemimpin gereja' },
    { icon: Compass, title: 'Strategic Leader', description: 'Pemimpin strategis dalam pengembangan gereja' }
  ];

  const programInfo = [
    { label: 'Persyaratan', value: 'S.Th./S1 dengan pengalaman kepemimpinan min. 5 tahun' },
    { label: 'Jumlah Kredit', value: '40 SKS' },
    { label: 'Masa Studi', value: '2 tahun (4 semester)' },
    { label: 'Keterangan', value: 'Program M.Min. Terakreditasi' },
    { label: 'Sistem Perkuliahan', value: 'Kelas weekend & intensif' }
  ];

  const curriculum: { semester: number, sks: number, courses: Course[] }[] = [
    { semester: 1, sks: 10, courses: [
      { code: 'MK601', name: 'Teologi Kepemimpinan Pastoral', sks: 3, description: 'Landasan teologis kepemimpinan pastoral yang melayani dan memberdayakan jemaat.' },
      { code: 'MK602', name: 'Leadership Theory & Practice', sks: 3, description: 'Teori kepemimpinan kontemporer dan aplikasinya dalam konteks pelayanan gereja.' },
      { code: 'MK603', name: 'Character & Integrity in Leadership', sks: 2, description: 'Pembentukan karakter dan integritas sebagai fondasi kepemimpinan yang efektif.' },
      { code: 'MK604', name: 'Team Building & Development', sks: 2, description: 'Keterampilan membangun dan mengembangkan tim pelayanan yang solid dan produktif.' }
    ]},
    { semester: 2, sks: 10, courses: [
      { code: 'MK611', name: 'Strategic Planning for Church Growth', sks: 3, description: 'Perencanaan strategis untuk pertumbuhan gereja yang berkelanjutan dan sehat.' },
      { code: 'MK612', name: 'Organizational Leadership', sks: 3, description: 'Kepemimpinan organisasi gereja yang efisien dan berorientasi pada misi.' },
      { code: 'MK613', name: 'Conflict Management', sks: 2, description: 'Manajemen konflik yang konstruktif dalam kepemimpinan gereja dan tim pelayanan.' },
      { code: 'MK614', name: 'Preaching & Teaching for Leaders', sks: 2, description: 'Pengajaran dan khotbah yang menginspirasi dan menggerakkan jemaat.' }
    ]},
    { semester: 3, sks: 10, courses: [
      { code: 'MK621', name: 'Leadership in Multicultural Context', sks: 2, description: 'Kepemimpinan yang efektif dalam konteks gereja yang multikultural dan beragam.' },
      { code: 'MK622', name: 'Mentoring Next Generation Leaders', sks: 3, description: 'Mentoring dan pengembangan pemimpin generasi berikutnya dalam gereja.' },
      { code: 'MK623', name: 'Change Management', sks: 2, description: 'Manajemen perubahan yang strategis dalam organisasi dan pelayanan gereja.' },
      { code: 'MK624', name: 'Vision Casting & Communication', sks: 3, description: 'Mengkomunikasikan visi dengan jelas dan menginspirasi untuk mencapainya.' }
    ]},
    { semester: 4, sks: 10, courses: [
      { code: 'MK631', name: 'Ministry Project', sks: 6, description: 'Proyek pelayanan yang mengintegrasikan prinsip kepemimpinan dalam konteks nyata.' },
      { code: 'MK632', name: 'Leadership Seminar', sks: 2, description: 'Seminar dan diskusi tentang isu-isu kepemimpinan pastoral kontemporer.' },
      { code: 'MK633', name: 'Field Practicum', sks: 2, description: 'Praktik lapangan kepemimpinan gereja di bawah mentoring senior pastor.' }
    ]}
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <a href="/" className="hover:text-white transition-colors">Beranda</a><ChevronRight className="w-4 h-4" /><a href="#" className="hover:text-white transition-colors">Akademik</a><ChevronRight className="w-4 h-4" /><span className="text-white">M.Min. Kepemimpinan Pastoral</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Magister Ministri</h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-100 mb-4">Kepemimpinan Pastoral</h2>
          <p className="text-xl text-blue-100 mb-2">M.Min. (Strata 2)</p>
          <p className="text-lg text-blue-100 max-w-3xl">Program untuk mengembangkan kepemimpinan pastoral yang efektif dan berkarakter</p>
        </div>
      </section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Profil Lulusan</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">{profiles.map((p, i) => { const Icon = p.icon; return (<div key={i} className="text-center"><div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center"><Icon className="w-10 h-10 text-red-700" /></div><h3 className="text-xl font-bold text-red-700 mb-2">{p.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{p.description}</p></div>);})}</div></div></section>

      <section className="py-20 bg-gray-50"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Informasi Program Studi</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">{programInfo.map((info, i) => (<div key={i} className="bg-white p-6 rounded-lg shadow-md"><h3 className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">{info.label}</h3><p className="text-gray-900 font-semibold">{info.value}</p></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Kurikulum</h2><div className="max-w-4xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{curriculum.map((sem) => (<AccordionItem key={sem.semester} value={`s-${sem.semester}`} className="bg-white border-2 border-blue-900 rounded-lg"><AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-50"><div className="flex justify-between items-center w-full pr-4"><span className="text-lg font-bold text-blue-900">Semester {sem.semester}</span><span className="text-sm font-semibold text-red-700">{sem.sks} SKS</span></div></AccordionTrigger><AccordionContent className="px-6 pb-4"><CourseTable courses={sem.courses} /></AccordionContent></AccordionItem>))}</Accordion></div></div></section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Pimpin dengan Hati Gembala</h2><p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Kembangkan kepemimpinan pastoral Anda ke level berikutnya</p><div className="flex flex-wrap justify-center gap-4"><a href="#" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2">Daftar Sekarang <ChevronRight className="w-5 h-5" /></a><a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Download Brosur</a></div></div></section>
    </div>
  );
}
