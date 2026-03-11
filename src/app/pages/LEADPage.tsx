/**
 * LEADPage - LEAD Center (Leadership Excellence And Development)
 * Clean, academic-professional information page with thought-leadership feel
 */

import { BookOpen, Users, Lightbulb } from 'lucide-react';

export default function LEADPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header - Clean & Professional */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">LEAD Center</h1>
            <p className="text-2xl text-blue-100 font-light">
              Leadership Excellence And Development
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section - Centered with max-width 800px */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto">
            <p 
              className="text-xl text-gray-700 leading-relaxed text-center"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: '1.8',
              }}
            >
              LEAD Center adalah pusat pengembangan kepemimpinan Sekolah Tinggi Teologi Bandung yang berkomitmen untuk membentuk para pemimpin rohani yang transformatif, visioner, dan berkarakter Kristiani. Melalui pendekatan holistik yang mengintegrasikan pembelajaran teologis, pengembangan karakter, dan pelatihan praktis, kami mempersiapkan para hamba Tuhan untuk memimpin dengan integritas dan relevansi di tengah dinamika gereja dan masyarakat Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections - 3 Vertical Sections with Color-Coded Left Border */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-[750px] mx-auto space-y-24">
            
            {/* 1. LEARNING - Red Border */}
            <div className="flex gap-8 items-start border-l-8 border-red-700 pl-8 py-6">
              {/* Icon */}
              <div className="flex-shrink-0 mt-2">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-red-700" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Learning</h2>
                <p 
                  className="text-gray-700 text-lg mb-4"
                  style={{ lineHeight: '1.7' }}
                >
                  Program pembelajaran kami dirancang untuk memberikan fondasi teologis yang kuat dan pemahaman mendalam tentang prinsip-prinsip kepemimpinan Alkitabiah. Mahasiswa akan mempelajari berbagai model kepemimpinan dalam Alkitab, sejarah gereja, dan teori kepemimpinan kontemporer yang relevan dengan konteks Indonesia.
                </p>
                <p 
                  className="text-gray-700 text-lg"
                  style={{ lineHeight: '1.7' }}
                >
                  Kurikulum kami mencakup studi intensif tentang karakter pemimpin Kristen, etika kepemimpinan, manajemen konflik, komunikasi efektif, dan pengambilan keputusan yang bijaksana. Setiap materi dirancang untuk mengembangkan pemikiran kritis dan wisdom dalam memimpin komunitas iman.
                </p>
              </div>
            </div>

            {/* 2. DEVELOPMENT - Navy Blue Border */}
            <div className="flex gap-8 items-start border-l-8 border-blue-900 pl-8 py-6">
              {/* Icon */}
              <div className="flex-shrink-0 mt-2">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-900" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Development</h2>
                <p 
                  className="text-gray-700 text-lg mb-4"
                  style={{ lineHeight: '1.7' }}
                >
                  Pengembangan karakter dan kompetensi adalah inti dari program LEAD. Kami menyediakan mentoring personal, coaching berkelanjutan, dan program pengembangan diri yang komprehensif. Setiap peserta akan mendapatkan pendampingan dari pemimpin-pemimpin rohani yang berpengalaman dalam berbagai bidang pelayanan.
                </p>
                <p 
                  className="text-gray-700 text-lg"
                  style={{ lineHeight: '1.7' }}
                >
                  Melalui berbagai workshop, retreat spiritual, dan sesi refleksi, mahasiswa akan mengalami transformasi personal yang mendalam. Kami percaya bahwa pemimpin yang efektif adalah mereka yang terus bertumbuh dalam kedewasaan rohani, emosional, dan intelektual.
                </p>
              </div>
            </div>

            {/* 3. EQUIPPING - Sky Blue Border */}
            <div className="flex gap-8 items-start border-l-8 border-sky-500 pl-8 py-6">
              {/* Icon */}
              <div className="flex-shrink-0 mt-2">
                <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-sky-600" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Equipping</h2>
                <p 
                  className="text-gray-700 text-lg mb-4"
                  style={{ lineHeight: '1.7' }}
                >
                  Perlengkapan praktis adalah bagian penting dari persiapan kepemimpinan. Program equipping kami mencakup pelatihan praktis dalam berbagai aspek pelayanan seperti khotbah, pengajaran, konseling, administrasi gereja, dan manajemen organisasi. Mahasiswa akan mendapatkan kesempatan untuk mempraktikkan keterampilan mereka dalam setting yang aman dan mendukung.
                </p>
                <p 
                  className="text-gray-700 text-lg"
                  style={{ lineHeight: '1.7' }}
                >
                  Kami juga menyediakan pelatihan dalam penggunaan teknologi untuk pelayanan, media sosial untuk komunikasi gereja, dan inovasi dalam metode penginjilan. Tujuan kami adalah mempersiapkan pemimpin yang tidak hanya kompeten secara teologis, tetapi juga terampil dalam menerapkan pengetahuan mereka untuk memenuhi kebutuhan nyata gereja dan masyarakat.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section - Minimalist */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-[750px] mx-auto text-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Bergabunglah dengan LEAD Center
            </h3>
            <p 
              className="text-lg text-gray-700 mb-8"
              style={{ 
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: '1.7' 
              }}
            >
              Program LEAD terbuka untuk seluruh mahasiswa STTB yang memiliki kerinduan untuk bertumbuh dalam kepemimpinan rohani dan melayani dengan keunggulan. Untuk informasi lebih lanjut tentang jadwal, persyaratan, dan pendaftaran, silakan hubungi kantor LEAD Center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#"
                className="inline-block px-8 py-4 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors"
              >
                Hubungi Kami
              </a>
              <a 
                href="#"
                className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg border-2 border-blue-900 hover:bg-blue-50 transition-colors"
              >
                Download Brosur
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
