import { ChevronRight, Globe, Lightbulb, MessageCircle, Users2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { CourseTable, Course } from '../../components/CourseTable';

export default function MagisterTeologiTransformasiPage() {
  const profiles = [
    { icon: Globe, title: 'Agen Transformasi', description: 'Pemimpin Kristen yang mampu membawa perubahan positif dalam masyarakat dan budaya' },
    { icon: Lightbulb, title: 'Teolog Kontekstual', description: 'Ahli teologi yang memahami dan merespons isu-isu kontemporer dengan bijak' },
    { icon: MessageCircle, title: 'Dialog Leader', description: 'Fasilitator dialog antara gereja dengan masyarakat dan budaya' },
    { icon: Users2, title: 'Social Activist', description: 'Aktivis sosial yang bekerja berdasarkan prinsip-prinsip Kerajaan Allah' }
  ];

  const programInfo = [
    { label: 'Persyaratan', value: 'S.Th./S1 terkait dengan pengalaman pelayanan min. 2 tahun' },
    { label: 'Jumlah Kredit', value: '48 SKS' },
    { label: 'Masa Studi', value: '2 tahun (4 semester)' },
    { label: 'Keterangan', value: 'Program Magister Terakreditasi' },
    { label: 'Sistem Perkuliahan', value: 'Blok intensif dengan field study' }
  ];

  const curriculum: { semester: number, sks: number, courses: Course[] }[] = [
    { semester: 1, sks: 12, courses: [
      { code: 'MTH701', name: 'Teologi Transformasi Budaya', sks: 3, description: 'Studi tentang peran gereja sebagai agen transformasi budaya berdasarkan nilai-nilai Kerajaan Allah.' },
      { code: 'MTH702', name: 'Alkitab & Transformasi Sosial', sks: 3, description: 'Eksplorasi ajaran Alkitab tentang keadilan, transformasi, dan tanggung jawab sosial gereja.' },
      { code: 'MTH703', name: 'Antropologi Budaya Kristen', sks: 3, description: 'Pemahaman antropologis tentang budaya dan masyarakat dari perspektif teologi Kristen.' },
      { code: 'MTH704', name: 'Metodologi Penelitian Sosiologi', sks: 3, description: 'Metode penelitian sosial untuk memahami dan menganalisis fenomena budaya dan masyarakat.' }
    ]},
    { semester: 2, sks: 12, courses: [
      { code: 'MTH711', name: 'Teologi Politik & Keadilan Sosial', sks: 3, description: 'Kajian teologis tentang politik, keadilan, dan peran gereja dalam ruang publik.' },
      { code: 'MTH712', name: 'Etika Transformatif', sks: 3, description: 'Prinsip-prinsip etika yang mendorong transformasi pribadi, komunitas, dan masyarakat.' },
      { code: 'MTH713', name: 'Teologi Publik', sks: 3, description: 'Bagaimana gereja berbicara dan berperan dalam isu-isu publik dengan relevan dan profetis.' },
      { code: 'MTH714', name: 'Misi & Transformasi Masyarakat', sks: 3, description: 'Integrasi misi gereja dengan upaya transformasi sosial yang komprehensif.' }
    ]},
    { semester: 3, sks: 12, courses: [
      { code: 'MTH721', name: 'Kepemimpinan Perubahan Sosial', sks: 3, description: 'Pengembangan kepemimpinan yang efektif dalam memimpin perubahan sosial yang berkelanjutan.' },
      { code: 'MTH722', name: 'Dialog Agama & Budaya', sks: 3, description: 'Keterampilan berdialog dengan agama dan budaya lain secara konstruktif dan penuh hormat.' },
      { code: 'MTH723', name: 'Teologi & Seni Budaya', sks: 3, description: 'Eksplorasi hubungan antara teologi, seni, dan ekspresi budaya dalam konteks transformasi.' },
      { code: 'MTH724', name: 'Ekonomi & Keadilan Alkitabiah', sks: 3, description: 'Prinsip-prinsip ekonomi yang adil berdasarkan ajaran Alkitab dan aplikasinya saat ini.' }
    ]},
    { semester: 4, sks: 12, courses: [
      { code: 'MTH731', name: 'Seminar Transformasi Sosial', sks: 2, description: 'Diskusi mendalam tentang proyek dan studi kasus transformasi sosial yang sukses.' },
      { code: 'MTH732', name: 'Praktik Lapangan', sks: 2, description: 'Pengalaman praktis dalam proyek transformasi sosial di komunitas nyata.' },
      { code: 'MTH733', name: 'Tesis', sks: 8, description: 'Penelitian mandiri tentang teori dan praktik transformasi budaya dan masyarakat.' }
    ]}
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <a href="/" className="hover:text-white transition-colors">Beranda</a><ChevronRight className="w-4 h-4" /><a href="#" className="hover:text-white transition-colors">Akademik</a><ChevronRight className="w-4 h-4" /><span className="text-white">M.Th. Transformasi Budaya & Masyarakat</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Magister Teologi</h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-100 mb-4">Transformasi Budaya & Masyarakat</h2>
          <p className="text-xl text-blue-100 mb-2">M.Th. (Strata 2)</p>
          <p className="text-lg text-blue-100 max-w-3xl">Program untuk mempersiapkan agen transformasi yang membawa nilai Kerajaan Allah ke dalam masyarakat</p>
        </div>
      </section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Profil Lulusan</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">{profiles.map((profile, index) => { const Icon = profile.icon; return (<div key={index} className="text-center"><div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center"><Icon className="w-10 h-10 text-red-700" /></div><h3 className="text-xl font-bold text-red-700 mb-2">{profile.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{profile.description}</p></div>);})}</div></div></section>

      <section className="py-20 bg-gray-50"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Informasi Program Studi</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">{programInfo.map((info, index) => (<div key={index} className="bg-white p-6 rounded-lg shadow-md"><h3 className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wide">{info.label}</h3><p className="text-gray-900 font-semibold">{info.value}</p></div>))}</div></div></section>

      <section className="py-20"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Kurikulum</h2><div className="max-w-4xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{curriculum.map((sem) => (<AccordionItem key={sem.semester} value={`semester-${sem.semester}`} className="bg-white border-2 border-blue-900 rounded-lg overflow-hidden"><AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-50"><div className="flex justify-between items-center w-full pr-4"><span className="text-lg font-bold text-blue-900">Semester {sem.semester}</span><span className="text-sm font-semibold text-red-700">{sem.sks} SKS</span></div></AccordionTrigger><AccordionContent className="px-6 pb-4"><CourseTable courses={sem.courses} /></AccordionContent></AccordionItem>))}</Accordion></div></div></section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Jadilah Agen Transformasi</h2><p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Bergabunglah untuk membawa perubahan dalam masyarakat berdasarkan prinsip Kerajaan Allah</p><div className="flex flex-wrap justify-center gap-4"><a href="#" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Daftar Sekarang <ChevronRight className="w-5 h-5" /></a><a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">Download Brosur</a></div></div></section>
    </div>
  );
}
