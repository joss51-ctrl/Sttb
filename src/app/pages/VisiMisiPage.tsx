/**
 * VisiMisiPage - STTB Vision, Mission, and Core Values Page
 * 
 * Features:
 * - VISI Section with 2x2 grid of horizontal cards
 * - MISI Section with 3 mission points
 * - Quote Banner with "DOMINO OPTIMO MAXIMO"
 * - CORE VALUES Section with 4 vertical cards
 * 
 * Design:
 * - Professional, clean, academic style
 * - Navy Blue and Crimson Red color palette
 * - Generous white space (80-100px padding between sections)
 * - Line-height 1.6 for readability
 */

import { ChevronRight, Cross, BookOpen, Shield, Zap } from 'lucide-react';

export default function VisiMisiPage() {
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
              Tentang Kami
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Visi Misi</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold">Visi & Misi STTB</h1>
          <p className="text-xl text-blue-100 mt-4 max-w-3xl">
            Komitmen kami dalam membentuk pemimpin Kristen yang transformatif
          </p>
        </div>
      </section>

      {/* VISI Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            VISI
          </h2>

          {/* 2x2 Grid of Horizontal Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Card 1: Pastor-Scholar */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center h-full">
                {/* Icon Container - Left */}
                <div className="flex-shrink-0 w-32 h-full bg-red-50 flex items-center justify-center p-6">
                  <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Text Content - Right */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold text-red-700 mb-3">
                    Pastor-Scholar
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: '1.5' }}>
                    memiliki jiwa gembala (kepemimpinan yg melayani di gereja, dunia pendidikan, maupun profesi lain) dan sekaligus pembelajar (semangat untuk terus belajar, daya nalar kritis seorang intelektual Kristen, dan kemampuan berkontribusi terhadap dunia ilmu pengetahuan dari perspektif Kristen)
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Berita Injil yang utuh */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center h-full">
                {/* Icon Container - Left */}
                <div className="flex-shrink-0 w-32 h-full bg-red-50 flex items-center justify-center p-6">
                  <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                    <Cross className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Text Content - Right */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold text-red-700 mb-3">
                    Berita Injil yang utuh
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: '1.5' }}>
                    kuasa Injil yg mampu mentransformasi seluruh aspek hidup manusia dan seluruh ciptaan yg sudah jatuh dalam dosa (total depravity), yg kesempurnaannya baru akan terjadi setelah kedatangan Kristus yang kedua, namun cicipan awalnya sudah bisa dirasakan hari ini.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Seluruh umat Allah */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center h-full">
                {/* Icon Container - Left */}
                <div className="flex-shrink-0 w-32 h-full bg-red-50 flex items-center justify-center p-6">
                  <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Text Content - Right */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold text-red-700 mb-3">
                    Seluruh umat Allah
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: '1.5' }}>
                    kuasa penebusan Kristus dinyatakan melalui hidup setiap pengikut Kristus, di tengah keluarga, gereja, dan masyarakat.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Masyarakat urban */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center h-full">
                {/* Icon Container - Left */}
                <div className="flex-shrink-0 w-32 h-full bg-red-50 flex items-center justify-center p-6">
                  <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Text Content - Right */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold text-red-700 mb-3">
                    Masyarakat urban
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: '1.5' }}>
                    mahasiswa STTB dipersiapkan dengan fokus melayani masyarakat di perkotaan, tanpa menutup kemungkinan tuntunan lain yang Tuhan berikan kepada mereka di tempat lain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISI Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            MISI
          </h2>

          {/* Mission List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Mission 1 */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <p className="text-gray-700 text-lg flex-1" style={{ lineHeight: '1.6' }}>
                Mempersiapkan pastor-scholar yang transfomatif untuk melayani dalam konteks urban.
              </p>
            </div>

            {/* Mission 2 */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <p className="text-gray-700 text-lg flex-1" style={{ lineHeight: '1.6' }}>
                Memberdayakan seluruh umat Allah untuk menghadirkan Injil seutuhnya di tengah konteks masyarakat urban melalui penelitian dan pendidikan non-formal.
              </p>
            </div>

            {/* Mission 3 */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <p className="text-gray-700 text-lg flex-1" style={{ lineHeight: '1.6' }}>
                Mengembangkan tim dosen, struktur organisasi dan keuangan, serta kemitraan untuk mendukung pencapaian visi STTB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1567923227475-692076a6e26e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBhY2FkZW1pYyUyMGNhbXB1c3xlbnwxfHx8fDE3NzMxNjAyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900/90"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <p className="text-sm uppercase tracking-widest mb-4 text-blue-200">
            Motto STTB
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            TO THE LORD
          </h2>
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            THE BEST THE GREATEST
          </h2>
          <p className="text-xl text-blue-200 italic mt-8">
            Domino Optimo Maximo
          </p>
        </div>
      </section>

      {/* CORE VALUES Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            CORE VALUES
          </h2>

          {/* 4 Vertical Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Card 1: CHRIST CENTERED */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                  <Cross className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                CHRIST CENTERED
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    Rencana keselamatan Allah atas seisi dunia yg berpusat di dalam karya penebusan Kristus.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    Mandat budaya dan mandat Injil dalam kerangka metanarasi Alkitab: Penciptaan-Kejatuhan-Penebusan-Penggenapan.
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 2: TEKS - KONTEKS */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                TEKS - KONTEKS
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    Setia kepada teks: Firman Tuhan dan warisan iman Bapa-Bapa Gereja
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    Responsif terhadap konteks: sosial dan generasional
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 3: PENATALAYANAN */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                PENATALAYANAN
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    Integritas (kejujuran, transparansi, akuntabilitas - waktu, uang, relasi)
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    Dedikasi (melayani dan mengupayakan yang terbaik bagi sesama)
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    Kompetensi (kecakapan akademik, pelayanan, dan penelitian)
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 4: TRANSFORMATIF */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                TRANSFORMATIF
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    Karya penebusan Kristus yg transformatif dialami oleh semua stakeholder STTB (mahasiswa, dosen, staf, karyawan, yayasan, mitra pelayanan, gereja, dan masyarakat)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah dengan Visi Kami
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari bersama-sama mewujudkan pastor-scholar yang transformatif bagi Indonesia
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Pelajari Program Studi
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
