import {
  ChevronRight,
  Cross,
  BookOpen,
  Shield,
  Zap,
} from "lucide-react";

export default function VisiMisiPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold">Visi dan Misi STTB</h1>
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

                {/* Text Content - Right */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Pastor-Scholar
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: "1.5" }}>
                    memiliki jiwa gembala (kepemimpinan yg melayani di gereja,
                    dunia pendidikan, maupun profesi lain) dan sekaligus
                    pembelajar (semangat untuk terus belajar, daya nalar kritis
                    seorang intelektual Kristen, dan kemampuan berkontribusi
                    terhadap dunia ilmu pengetahuan dari perspektif Kristen)
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Berita Injil yang utuh */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center h-full">

                {/* Text Content - Right */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold  text-blue-900 mb-3">
                    Berita Injil yang utuh
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: "1.5" }}>
                    kuasa Injil yg mampu mentransformasi seluruh aspek hidup
                    manusia dan seluruh ciptaan yg sudah jatuh dalam dosa (total
                    depravity), yg kesempurnaannya baru akan terjadi setelah
                    kedatangan Kristus yang kedua, namun cicipan awalnya sudah
                    bisa dirasakan hari ini.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Seluruh umat Allah */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center h-full">

                {/* Text Content - Right */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold  text-blue-900 mb-3">
                    Seluruh umat Allah
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: "1.5" }}>
                    kuasa penebusan Kristus dinyatakan melalui hidup setiap
                    pengikut Kristus, di tengah keluarga, gereja, dan
                    masyarakat.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Masyarakat urban */}
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center h-full">

                {/* Text Content - Right */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold  text-blue-900 mb-3">
                    Masyarakat urban
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: "1.5" }}>
                    mahasiswa STTB dipersiapkan dengan fokus melayani masyarakat
                    di perkotaan, tanpa menutup kemungkinan tuntunan lain yang
                    Tuhan berikan kepada mereka di tempat lain.
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
              <p
                className="text-gray-700 text-lg flex-1"
                style={{ lineHeight: "1.6" }}
              >
                Mempersiapkan pastor-scholar yang transfomatif untuk melayani
                dalam konteks urban.
              </p>
            </div>

            {/* Mission 2 */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <p
                className="text-gray-700 text-lg flex-1"
                style={{ lineHeight: "1.6" }}
              >
                Memberdayakan seluruh umat Allah untuk menghadirkan Injil
                seutuhnya di tengah konteks masyarakat urban melalui penelitian
                dan pendidikan non-formal.
              </p>
            </div>

            {/* Mission 3 */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <p
                className="text-gray-700 text-lg flex-1"
                style={{ lineHeight: "1.6" }}
              >
                Mengembangkan tim dosen, struktur organisasi dan keuangan, serta
                kemitraan untuk mendukung pencapaian visi STTB.
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
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">TO THE LORD</h2>
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
              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                CHRIST CENTERED
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p
                    className="text-gray-700 text-sm"
                    style={{ lineHeight: "1.6" }}
                  >
                    Rencana keselamatan Allah atas seisi dunia yg berpusat di
                    dalam karya penebusan Kristus.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p
                    className="text-gray-700 text-sm"
                    style={{ lineHeight: "1.6" }}
                  >
                    Mandat budaya dan mandat Injil dalam kerangka metanarasi
                    Alkitab: Penciptaan-Kejatuhan-Penebusan-Penggenapan.
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 2: TEKS - KONTEKS */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                TEKS - KONTEKS
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p
                    className="text-gray-700 text-sm"
                    style={{ lineHeight: "1.6" }}
                  >
                    Setia kepada teks: Firman Tuhan dan warisan iman Bapa-Bapa
                    Gereja
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p
                    className="text-gray-700 text-sm"
                    style={{ lineHeight: "1.6" }}
                  >
                    Responsif terhadap konteks: sosial dan generasional
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 3: PENATALAYANAN */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                PENATALAYANAN
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p
                    className="text-gray-700 text-sm"
                    style={{ lineHeight: "1.6" }}
                  >
                    Integritas (kejujuran, transparansi, akuntabilitas - waktu,
                    uang, relasi)
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p
                    className="text-gray-700 text-sm"
                    style={{ lineHeight: "1.6" }}
                  >
                    Dedikasi (melayani dan mengupayakan yang terbaik bagi
                    sesama)
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p
                    className="text-gray-700 text-sm"
                    style={{ lineHeight: "1.6" }}
                  >
                    Kompetensi (kecakapan akademik, pelayanan, dan penelitian)
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 4: TRANSFORMATIF */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 text-center mb-6">
                TRANSFORMATIF
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-700 rounded-full mt-2"></div>
                  <p
                    className="text-gray-700 text-sm"
                    style={{ lineHeight: "1.6" }}
                  >
                    Karya penebusan Kristus yg transformatif dialami oleh semua
                    stakeholder STTB (mahasiswa, dosen, staf, karyawan, yayasan,
                    mitra pelayanan, gereja, dan masyarakat)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
