/**
 * MagisterTeologiUrbanPage - Master of Theology in Urban Pastoral Ministry
 */

import { ChevronRight, Building2, Users, Heart, MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { CourseTable, Course } from '../../components/CourseTable';

export default function MagisterTeologiUrbanPage() {
  const profiles = [
    { icon: Building2, title: 'Urban Pastor', description: 'Gembala gereja kota dengan pemahaman konteks urban yang mendalam dan strategi pelayanan yang relevan' },
    { icon: Users, title: 'Community Leader', description: 'Pemimpin komunitas yang mampu mengintegrasikan teologi dengan realitas sosial perkotaan' },
    { icon: Heart, title: 'Soul Care Specialist', description: 'Ahli pemeliharaan jiwa dalam konteks tantangan kehidupan urban modern' },
    { icon: MapPin, title: 'Church Planter', description: 'Perintis gereja dengan strategi kontekstual untuk menjangkau masyarakat urban' }
  ];

  const programInfo = [
    { label: 'Persyaratan', value: 'S.Th. atau S1 bidang terkait dengan pengalaman pelayanan min. 2 tahun' },
    { label: 'Jumlah Kredit', value: '48 SKS' },
    { label: 'Masa Studi', value: '2 tahun (4 semester)' },
    { label: 'Keterangan', value: 'Program Magister Terakreditasi' },
    { label: 'Sistem Perkuliahan', value: 'Blok intensif dan pembelajaran jarak jauh' }
  ];

  const curriculum: { semester: number, sks: number, courses: Course[] }[] = [
    { semester: 1, sks: 12, courses: [
      { code: 'MTH601', name: 'Metodologi Penelitian Teologi', sks: 3, description: 'Studi tentang metode-metode penelitian teologis yang sistematis dan ilmiah untuk menghasilkan karya akademik yang berkualitas.' },
      { code: 'MTH602', name: 'Teologi Urban Kontemporer', sks: 3, description: 'Eksplorasi mendalam tentang teologi dalam konteks perkotaan modern, termasuk tantangan dan peluang pelayanan gereja urban.' },
      { code: 'MTH603', name: 'Eksegesis Alkitab Lanjutan', sks: 3, description: 'Pem bahasan mendalam tentang metode eksegesis Alkitab tingkat lanjut untuk pengajaran dan pelayanan gereja urban.' },
      { code: 'MTH604', name: 'Sejarah & Teologi Gereja Urban', sks: 3, description: 'Studi tentang perkembangan gereja urban dari perspektif historis dan teologis.' }
    ]},
    { semester: 2, sks: 12, courses: [
      { code: 'MTH611', name: 'Kepemimpinan Pastoral dalam Konteks Urban', sks: 3, description: 'Pengembangan keterampilan kepemimpinan pastoral yang efektif dalam konteks kompleksitas perkotaan.' },
      { code: 'MTH612', name: 'Konseling Pastoral untuk Masyarakat Kota', sks: 3, description: 'Teknik dan pendekatan konseling pastoral yang disesuaikan dengan kebutuhan masyarakat urban.' },
      { code: 'MTH613', name: 'Homiletika Kontekstual Urban', sks: 3, description: 'Seni berkhotbah yang relevan dan kontekstual untuk jemaat perkotaan yang beragam.' },
      { code: 'MTH614', name: 'Pelayanan Holistik di Kota', sks: 3, description: 'Strategi pelayanan gereja yang holistik mencakup aspek rohani, sosial, dan ekonomi masyarakat urban.' }
    ]},
    { semester: 3, sks: 12, courses: [
      { code: 'MTH621', name: 'Sosiologi Kota & Misi Gereja', sks: 3, description: 'Pemahaman tentang dinamika sosiologis perkotaan dan implikasinya terhadap strategi misi gereja.' },
      { code: 'MTH622', name: 'Transformasi Sosial & Keadilan', sks: 3, description: 'Teologi dan praktik transformasi sosial serta perjuangan keadilan dalam konteks urban.' },
      { code: 'MTH623', name: 'Strategi Pengembangan Jemaat Urban', sks: 3, description: 'Pendekatan strategis untuk pertumbuhan dan pengembangan jemaat di wilayah perkotaan.' },
      { code: 'MTH624', name: 'Etika Kristen dalam Konteks Urban', sks: 3, description: 'Penerapan prinsip-prinsip etika Kristen dalam menghadapi isu-isu moral di lingkungan urban.' }
    ]},
    { semester: 4, sks: 12, courses: [
      { code: 'MTH631', name: 'Seminar Teologi Pastoral', sks: 2, description: 'Forum diskusi dan presentasi tentang isu-isu terkini dalam teologi pastoral urban.' },
      { code: 'MTH632', name: 'Praktik Pelayanan Urban', sks: 2, description: 'Pengalaman praktis dalam pelayanan gereja urban di bawah supervisi.' },
      { code: 'MTH633', name: 'Tesis', sks: 8, description: 'Penelitian independen yang mendalam tentang topik teologi atau pelayanan pastoral gereja urban.' }
    ]}
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
            <span className="text-white">M.Th. Pelayanan Pastoral Gereja Urban</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Magister Teologi</h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-100 mb-4">Pelayanan Pastoral Gereja Urban</h2>
          <p className="text-xl text-blue-100 mb-2">M.Th. (Strata 2)</p>
          <p className="text-lg text-blue-100 max-w-3xl">
            Program pascasarjana untuk mengembangkan kepemimpinan pastoral yang efektif dalam konteks gereja perkotaan
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Profil Lulusan</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lulusan siap memimpin dan melayani gereja dengan pemahaman mendalam tentang dinamika urban
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
            Kurikulum intensif 48 SKS dengan fokus pada teologi dan praktik pelayanan urban
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
          <h2 className="text-3xl font-bold mb-4">Tingkatkan Pelayanan Anda</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan program magister untuk memperdalam pemahaman teologi urban
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
