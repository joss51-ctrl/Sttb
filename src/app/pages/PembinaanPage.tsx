/**
 * PembinaanPage - Student Formation & Development Page
 * Storytelling experience with high readability and sticky navigation
 */

import { useState, useEffect } from 'react';
import { ChevronRight, Users, Church, Heart, BookOpen, Sparkles, Hand, Target } from 'lucide-react';

export default function PembinaanPage() {
  const [activeSection, setActiveSection] = useState('hero');

  // Sticky navigation sections
  const sections = [
    { id: 'komunitas', label: 'Komunitas', icon: Users },
    { id: 'kapel', label: 'Kapel', icon: Church },
    { id: 'pastoral', label: 'Pastoral', icon: Heart },
    { id: 'pembinaan', label: 'Pembinaan', icon: BookOpen },
    { id: 'formasi', label: 'Formasi', icon: Sparkles },
    { id: 'pelayanan', label: 'Pelayanan', icon: Hand },
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Account for sticky header + navigation
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900 transition-colors">
              Beranda
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-blue-900 transition-colors">
              Kehidupan Kampus
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Pembinaan</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1722962674485-d34e69a9a406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwYmlibGUlMjB0aGVvbG9neXxlbnwxfHx8fDE3NzMyNDY1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Pembinaan Mahasiswa"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Red accent corner */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-700 rounded-br-[3rem] opacity-20"></div>
              </div>

              {/* Right - Content */}
              <div>
                <div className="inline-block bg-red-700 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  KEHIDUPAN KAMPUS
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-red-700 mb-6">
                  PEMBINAAN<br />MAHASISWA
                </h1>
                <div className="space-y-3 text-gray-700" style={{ lineHeight: '1.6' }}>
                  <p className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">•</span>
                    <span><strong>Mindset Sovreign:</strong><br />Untuk pembinaan dan pengembangan karakter</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">•</span>
                    <span><strong>Pembekalan:</strong><br />Melalui pelatihan melalui magang secara berkala</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">•</span>
                    <span><strong>Pembentukan:</strong><br />Komunitas mahasiswa yang solid dan saling mendukung</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-700 font-bold mt-1">•</span>
                    <span><strong>Kebiasaan & Disiplin:</strong><br />Melalui program yang terstruktur</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigator */}
      <nav className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 py-4 overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex flex-col items-center gap-2 min-w-[80px] transition-all ${
                    activeSection === section.id
                      ? 'text-blue-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      activeSection === section.id
                        ? 'bg-blue-900 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* KOMUNITAS Section - Red Background with Split Layout */}
      <section id="komunitas" className="py-32 bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Content */}
              <div>
                <h2 className="text-4xl font-bold mb-8">KOMUNITAS</h2>
                <div className="space-y-6" style={{ lineHeight: '1.6', maxWidth: '650px' }}>
                  <p>
                    Kami percaya bahwa panggilan Allah sejati terlahir dari sebuah komunitas yang sehat.
                    Komunitas yang memiliki budaya inklusif, sehat, otentik, saling melayani, berkorban,
                    mengasihi, menopang, menegur dan senantiasa bertumbuh bersama-sama.
                  </p>
                  <p>
                    Suasana semacam ini tidak dapat tercipta dengan sendirinya tanpa adanya komunitas yang
                    berkomitmen dengan kehadiran satu terhadap yang lain, yang melatih mahasiswa untuk belajar
                    dan berproses di dalam komunitas yang sehat.
                  </p>
                  <div className="mt-8 space-y-3">
                    <p className="font-bold">Mahasiswa akan dibimbing dalam:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>Membangun relasi yang bermakna dalam keberagaman</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>Mengembangkan keterampilan komunikasi dan resolusi konflik</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>Berpartisipasi aktif dalam kehidupan bersama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>Mengalami transformasi melalui komunitas yang otentik</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbW11bml0eSUyMGRpc2N1c3Npb24lMjBncm91cHxlbnwxfHx8fDE3NzMyNDYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Komunitas Mahasiswa"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KAPEL Section - White Background */}
      <section id="kapel" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">KAPEL</h2>
            <div className="space-y-6 text-gray-700" style={{ lineHeight: '1.6', maxWidth: '650px', margin: '0 auto' }}>
              <p>
                Ibadah kapel adalah momen penting dalam kehidupan mahasiswa STTB untuk berkumpul bersama
                dalam penyembahan dan mendengarkan Firman Tuhan. Melalui ibadah kapel, mahasiswa diajak
                untuk merenungkan dan mengalami kehadiran Allah dalam perjalanan akademik dan spiritual mereka.
              </p>
              <p>
                Setiap sesi kapel dirancang untuk memberikan pengalaman ibadah yang bermakna, dengan
                kotbah yang relevan, musik pujian yang mengangkat jiwa, dan waktu untuk refleksi pribadi
                dan doa bersama.
              </p>
            </div>
            <div className="mt-12">
              <img
                src="https://images.unsplash.com/photo-1712056003432-34587d84b394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaGFwZWwlMjB3b3JzaGlwJTIwc2VydmljZXxlbnwxfHx8fDE3NzMyNDYwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kapel STTB"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PASTORAL Section - Balanced Split */}
      <section id="pastoral" className="py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1555069855-e580a9adbf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3JhbCUyMGNvdW5zZWxpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc3MzI0NjA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Pastoral Care"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-red-700 mb-6">PASTORAL</h2>
                <div className="space-y-6 text-gray-700" style={{ lineHeight: '1.6', maxWidth: '650px' }}>
                  <p>
                    Program pastoral dirancang untuk memberikan pendampingan dan bimbingan spiritual kepada
                    mahasiswa selama masa studi mereka. Setiap mahasiswa akan mendapatkan dosen pembimbing
                    pastoral yang akan membantu dalam perjalanan spiritual dan akademik mereka.
                  </p>
                  <p>
                    Melalui sesi konseling rutin, retreat, dan program pembinaan karakter, mahasiswa akan
                    dibimbing untuk mengembangkan kehidupan rohani yang sehat dan kuat, serta karakter yang
                    mencerminkan nilai-nilai Kristiani.
                  </p>
                  <div className="mt-8 bg-white p-6 rounded-xl shadow-md border-l-4 border-red-700">
                    <h3 className="font-bold text-blue-900 mb-3">Layanan Pastoral Meliputi:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 font-bold">•</span>
                        <span>Konseling individu dengan dosen pembimbing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 font-bold">•</span>
                        <span>Retreat dan camp spiritual berkala</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 font-bold">•</span>
                        <span>Program mentoring dan discipleship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700 font-bold">•</span>
                        <span>Dukungan dalam pergumulan pribadi dan akademik</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PEMBINAAN Section - White with Icons */}
      <section id="pembinaan" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">PEMBINAAN</h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
                Program pembinaan mahasiswa dirancang secara komprehensif untuk mengembangkan seluruh aspek
                kehidupan mahasiswa: akademik, spiritual, karakter, dan keterampilan pelayanan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pembinaan Card 1 */}
              <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Formasi Akademik</h3>
                <p className="text-sm text-gray-700" style={{ lineHeight: '1.6' }}>
                  Pengembangan kemampuan berpikir kritis, riset teologis, dan penguasaan bidang studi
                </p>
              </div>

              {/* Pembinaan Card 2 */}
              <div className="bg-red-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Formasi Spiritual</h3>
                <p className="text-sm text-gray-700" style={{ lineHeight: '1.6' }}>
                  Pendalaman kehidupan doa, meditasi Firman, dan praktik disiplin rohani
                </p>
              </div>

              {/* Pembinaan Card 3 */}
              <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Formasi Karakter</h3>
                <p className="text-sm text-gray-700" style={{ lineHeight: '1.6' }}>
                  Pembentukan integritas, kepemimpinan pelayan, dan nilai-nilai Kristiani
                </p>
              </div>

              {/* Pembinaan Card 4 */}
              <div className="bg-red-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Formasi Pelayanan</h3>
                <p className="text-sm text-gray-700" style={{ lineHeight: '1.6' }}>
                  Praktik pelayanan di gereja dan komunitas untuk mengaplikasikan pembelajaran
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMASI Section - 4 Elegant Cards in 2x2 Grid */}
      <section id="formasi" className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">EMPAT FORMASI</h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
                Empat pilar pembentukan yang terintegrasi untuk menghasilkan lulusan yang unggul
                dalam akademik, matang secara spiritual, berkarakter Kristus, dan terampil dalam pelayanan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Formasi Card 1 - Akademik */}
              <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">FORMASI AKADEMIK</h3>
                    <p className="text-red-700 font-semibold text-sm">Academic Excellence</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  <p>
                    Mahasiswa dibekali dengan pendidikan teologi yang solid melalui kurikulum yang komprehensif,
                    metode pembelajaran yang interaktif, dan bimbingan dari dosen-dosen yang berkompeten.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>Pendalaman Alkitab dan teologi sistematik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>Penelitian dan publikasi karya ilmiah</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>Seminar dan diskusi teologis</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Formasi Card 2 - Spiritual */}
              <div className="bg-red-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Church className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">FORMASI SPIRITUAL</h3>
                    <p className="text-red-700 font-semibold text-sm">Spiritual Maturity</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  <p>
                    Kehidupan rohani mahasiswa dipupuk melalui berbagai program spiritual yang terstruktur,
                    membentuk kedewasaan iman dan hubungan yang intim dengan Tuhan.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">•</span>
                      <span>Devosi dan meditasi Firman harian</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">•</span>
                      <span>Retreat spiritual dan camp iman</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">•</span>
                      <span>Praktik disiplin rohani klasik</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Formasi Card 3 - Misiional */}
              <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">FORMASI MISIIONAL</h3>
                    <p className="text-red-700 font-semibold text-sm">Missional Engagement</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  <p>
                    Mahasiswa diarahkan untuk memiliki hati misi yang berkobar, memahami konteks pelayanan,
                    dan terlibat aktif dalam pekerjaan transformasi Kerajaan Allah.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>Pelayanan misi lintas budaya</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>Penginjilan dan perintisan gereja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>Program transformasi komunitas</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Formasi Card 4 - Pelayanan */}
              <div className="bg-red-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Hand className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">FORMASI PELAYANAN</h3>
                    <p className="text-red-700 font-semibold text-sm">Ministry Skills</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                  <p>
                    Mahasiswa dilatih dalam berbagai keterampilan pelayanan praktis melalui magang,
                    bimbingan mentor, dan kesempatan melayani di berbagai konteks gereja dan komunitas.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">•</span>
                      <span>Magang di gereja dan organisasi Kristen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">•</span>
                      <span>Pelatihan khotbah dan pengajaran</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">•</span>
                      <span>Pengembangan kepemimpinan pelayan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PELAYANAN Section - Image Focus */}
      <section id="pelayanan" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">PELAYANAN</h2>
                <div className="space-y-6 text-gray-700" style={{ lineHeight: '1.6', maxWidth: '650px' }}>
                  <p>
                    Setiap mahasiswa STTB diberikan kesempatan untuk terlibat dalam berbagai bentuk pelayanan
                    praktis sebagai bagian integral dari proses pembelajaran. Melalui pelayanan, mahasiswa
                    mengaplikasikan teori yang dipelajari di kelas ke dalam konteks kehidupan nyata.
                  </p>
                  <p>
                    Program pelayanan mencakup magang di gereja-gereja lokal, pelayanan sosial di komunitas,
                    penginjilan, pemuridan, pelayanan anak dan remaja, serta berbagai bentuk pelayanan lainnya
                    yang disesuaikan dengan panggilan dan minat setiap mahasiswa.
                  </p>
                  <div className="mt-8 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
                    <h3 className="font-bold text-blue-900 mb-3">Area Pelayanan:</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>Khotbah & Pengajaran</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>Pastoral Care</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>Pelayanan Anak</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>Pelayanan Remaja</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>Pelayanan Musik</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>Pelayanan Sosial</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyaW5nfGVufDF8fHx8MTc3MzI0NjA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Pelayanan Mahasiswa"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Siap Bertumbuh Bersama Kami?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Bergabunglah dengan komunitas STTB dan alami transformasi hidup melalui program pembinaan
            yang holistik dan berpusat pada Kristus.
          </p>
          <a href="/pendaftaran">
            <button className="bg-red-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-800 transition-colors shadow-lg">
              Daftar Sekarang
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}