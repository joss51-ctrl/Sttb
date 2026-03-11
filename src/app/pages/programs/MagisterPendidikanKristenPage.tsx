import { ChevronRight, BookOpen, Users, Lightbulb, Target } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { CourseTable, Course } from '../../components/CourseTable';

export default function MagisterPendidikanKristenPage() {
  const profiles = [
    { icon: BookOpen, title: 'Pengembang Kurikulum', description: 'Ahli pengembangan kurikulum PAK untuk berbagai tingkatan dan konteks' },
    { icon: Users, title: 'Pemimpin Pendidikan', description: 'Pemimpin lembaga pendidikan Kristen yang visioner dan inovatif' },
    { icon: Lightbulb, title: 'Peneliti Pendidikan', description: 'Peneliti yang mengembangkan teori dan praktik pendidikan Kristen' },
    { icon: Target, title: 'Trainer & Mentor', description: 'Pelatih guru PAK dan mentor pendidikan Kristen' }
  ];

  const programInfo = [
    { label: 'Persyaratan', value: 'S.Pd.K./S1 terkait dengan pengalaman mengajar min. 2 tahun' },
    { label: 'Jumlah Kredit', value: '48 SKS' },
    { label: 'Masa Studi', value: '2 tahun (4 semester)' },
    { label: 'Keterangan', value: 'Program Magister Terakreditasi' },
    { label: 'Sistem Perkuliahan', value: 'Blok intensif dengan workshop' }
  ];

  const curriculum: { semester: number, sks: number, courses: Course[] }[] = [
    { semester: 1, sks: 12, courses: [
      { code: 'MPK601', name: 'Filosofi Pendidikan Kristen Lanjutan', sks: 3, description: 'Studi mendalam tentang landasan filosofis dan teologis pendidikan Kristen dalam konteks kontemporer.' },
      { code: 'MPK602', name: 'Teori Kurikulum & Desain Instruksional', sks: 3, description: 'Prinsip-prinsip pengembangan kurikulum dan desain pembelajaran yang efektif untuk pendidikan Kristen.' },
      { code: 'MPK603', name: 'Metodologi Penelitian Pendidikan', sks: 3, description: 'Metode penelitian kuantitatif dan kualitatif untuk mengkaji isu-isu pendidikan Kristen.' },
      { code: 'MPK604', name: 'Psikologi Pendidikan Lanjutan', sks: 3, description: 'Teori psikologi pembelajaran dan aplikasinya dalam pendidikan Kristen untuk berbagai usia.' }
    ]},
    { semester: 2, sks: 12, courses: [
      { code: 'MPK611', name: 'Kepemimpinan & Manajemen Pendidikan', sks: 3, description: 'Pengembangan keterampilan kepemimpinan dan manajemen untuk lembaga pendidikan Kristen.' },
      { code: 'MPK612', name: 'Teologi Pendidikan', sks: 3, description: 'Kajian teologis tentang hakikat, tujuan, dan metodologi pendidikan dalam perspektif Kristen.' },
      { code: 'MPK613', name: 'Evaluasi & Asesmen Pembelajaran', sks: 3, description: 'Metode evaluasi dan asesmen yang komprehensif untuk mengukur pencapaian pembelajaran Kristen.' },
      { code: 'MPK614', name: 'Teknologi dalam Pendidikan Kristen', sks: 3, description: 'Integrasi teknologi digital dan media dalam pembelajaran Pendidikan Agama Kristen.' }
    ]},
    { semester: 3, sks: 12, courses: [
      { code: 'MPK621', name: 'Pendidikan Karakter & Spiritualitas', sks: 3, description: 'Strategi pengembangan karakter dan spiritualitas Kristiani melalui pendidikan yang holistik.' },
      { code: 'MPK622', name: 'Supervisi & Pengembangan Guru', sks: 3, description: 'Teknik supervisi dan mentoring untuk meningkatkan kompetensi guru Pendidikan Agama Kristen.' },
      { code: 'MPK623', name: 'Pendidikan Intergenerasi', sks: 3, description: 'Pendekatan pendidikan Kristen yang melibatkan dan menghubungkan berbagai generasi.' },
      { code: 'MPK624', name: 'Seminar Isu Kontemporer PAK', sks: 3, description: 'Diskusi kritis tentang isu-isu terkini yang dihadapi pendidikan Kristen di Indonesia.' }
    ]},
    { semester: 4, sks: 12, courses: [
      { code: 'MPK631', name: 'Kolokium', sks: 2, description: 'Forum presentasi dan diskusi tentang proposal dan hasil penelitian tesis mahasiswa.' },
      { code: 'MPK632', name: 'Praktik Lapangan', sks: 2, description: 'Pengalaman praktis menerapkan teori pendidikan Kristen dalam setting pendidikan nyata.' },
      { code: 'MPK633', name: 'Tesis', sks: 8, description: 'Penelitian mandiri yang berkontribusi pada pengembangan teori dan praktik pendidikan Kristen.' }
    ]}
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <a href="/" className="hover:text-white transition-colors">Beranda</a><ChevronRight className="w-4 h-4" /><a href="#" className="hover:text-white transition-colors">Akademik</a><ChevronRight className="w-4 h-4" /><span className="text-white">Magister Pendidikan Kristen</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Magister Pendidikan Kristen</h1>
          <p className="text-xl text-blue-100 mb-2">M.Pd.K. (Strata 2)</p>
          <p className="text-lg text-blue-100 max-w-3xl">Program pascasarjana untuk mengembangkan kepemimpinan dan keahlian dalam pendidikan Kristen</p>
        </div>
      </section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Profil Lulusan</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">{profiles.map((profile, index) => { const Icon = profile.icon; return (<div key={index} className="text-center"><div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center"><Icon className="w-10 h-10 text-red-700" /></div><h3 className="text-xl font-bold text-red-700 mb-2">{profile.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{profile.description}</p></div>);})}</div></div></section>

      <section className="py-20 bg-gray-50"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Informasi Program Studi</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">{programInfo.map((info, index) => (<div key={index} className="bg-white p-6 rounded-lg shadow-md"><h3 className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">{info.label}</h3><p className="text-gray-900 font-semibold">{info.value}</p></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Kurikulum</h2><div className="max-w-4xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{curriculum.map((sem) => (<AccordionItem key={sem.semester} value={`semester-${sem.semester}`} className="bg-white border-2 border-blue-900 rounded-lg overflow-hidden"><AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-50"><div className="flex justify-between items-center w-full pr-4"><span className="text-lg font-bold text-blue-900">Semester {sem.semester}</span><span className="text-sm font-semibold text-red-700">{sem.sks} SKS</span></div></AccordionTrigger><AccordionContent className="px-6 pb-4"><CourseTable courses={sem.courses} /></AccordionContent></AccordionItem>))}</Accordion></div></div></section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Kembangkan Keahlian Anda</h2><p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Bergabunglah untuk menjadi pemimpin pendidikan Kristen yang profesional</p><div className="flex flex-wrap justify-center gap-4"><a href="#" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Daftar Sekarang <ChevronRight className="w-5 h-5" /></a><a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">Download Brosur</a></div></div></section>
    </div>
  );
}
