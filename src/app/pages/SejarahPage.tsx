import { useState } from "react";
import FoundersSection from "../components/public/FoundersSection";
interface TimelineSection {
  year: string;
  title: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  imagePosition: "left" | "right";
}

const timelineSections: TimelineSection[] = [
  {
    year: "1992 - 1998",
    title: "Masa Perintisan",
    description: `Pdt. Caleb Tong, Pdt. Joseph Tong, dan Pdt. Dorothy I. Marx mendirikan STTB pada tahun 1992 dengan tujuan menghasilkan Pastor-Scholar yg memiliki kerangka teologi Reformed Injili dalam konteks pekerjaan Tuhan di Indonesia. Pdt. Daniel Lucas Lukito sebagai Dekan Akademik pertama banyak berperan dalam meletakkan kerangka dasar pembangunan STTB. Pembukaan STTB disiapkan sangat baik dengan jajaran dosen yang berkualitas. Komitmen untuk mengejar kualitas akademis yg tinggi didukung juga oleh perpustakaan yang memiliki koleksi buku dan jurnal yang sangat memadai, serta penerbitan Jurnal Teologi STULOS dalam versi Bahasa Indonesia dan Inggris. Pada tahun-tahun pertama diselenggarakan acara dengan lingkup nasional yaitu Ferakristal (Festival Remaja Kristen Pencinta Alkitab). Wisuda pertama diadakan pada tahun 1996.`,
    imageUrl: "https://sttb.ac.id/storage/2022/06/sejarah-2-rev.png",
    imagePosition: "left",
  },
  {
    year: "1999 - 2005",
    title: "Pergantian Kepemimpinan",
    description: `STTB mengalami pergantian pemimpin dan jajaran dosen. Ibu Dorothy I. Marx menjabat sebagai Rektor dan STTB terus melanjutkan kiprahnya atas anugerah Tuhan dengan membuka program-program studi baru: M.A. (Master of Arts/Magister Artium) untuk memperlengkapi kaum awam dan M.Th. (Master of Theology/Magister Teologi) untuk memperlengkapi para hamba Tuhan yang rindu berkiprah di dunia akademis. Asrama dosen dibangun bersebelahan dengan asrama mahasiswa. STTB berkomitmen menerbitkan seri buku "Sola ... " dan menyelenggarakan acara nasional bagi pemuda dengan nama CYLF (Christian Youth Leadership Forum).`,
    imageUrl: "https://sttb.ac.id/storage/2022/06/sejarah-3-rev.png",
    imagePosition: "right",
  },
  {
    year: "2006 - 2010",
    title: "Penguatan Akademik",
    description: `Perkembangan STTB berlanjut dalam kepemimpinan Pdt. Joseph Tong yang berkomitmen meningkatkan kualifikasi tenaga pengajar dengan mengutus beberapa dosen untuk studi lanjut di USA. Pada periode ini terbit dua buku Seri Sola, yaitu Sola Scriptura dan Sola Fide. Dalam periode ini STTB membuka program studi berbahasa Mandarin (S.Th., M.Div., dan M.A.) sebagai kontribusinya dalam pelayanan misi di Tiongkok. Untuk itu 2 dosen yaitu Pdt. Lee Ching Yen dan Pdt. Joseph Lin dari Taiwan diundang mengajar para mahasiswa yang datang dari Tiongkok.`,
    imageUrl: "https://sttb.ac.id/storage/2022/01/sejarah-1.png",
    imagePosition: "left",
  },
  {
    year: "2011 - 2016",
    title: "Transformasi & Gedung Baru",
    description: `Periode ini ditandai dengan beberapa perkembangan yang signifikan. Pdt. Agus Gunawan melanjutkan kepemimpinan sebagai Rektor. Pada tahun 2011, STTB hadir dengan wajah baru dengan dibangunnya gedung baru berlantai tujuh yang saat ini difungsikan untuk ruang-ruang kelas, kantor dosen dan staf, asrama mahasiswa, aula, dan perpustakaan. Buku ketiga dan keempat dari Seri Sola (Sola Gratia dan Solus Christos) diterbitkan. Pada periode ini juga beberapa orang di jajaran pimpinan melanjutkan studi doktoral di Asia dan Amerika. Tahun 2012 dibuka prodi baru S.Pd.K. (Sarjana Pendidikan Kristen) bersama dengan prodi M.Min. (Magister Ministri). Selanjutnya, pada tahun 2015, STTB juga menambah program studi M.Pd.K. (Magister Pendidikan Kristen), yang dirancang untuk memperlengkapi para pemimpin pendidikan Kristen. Dalam periode ini beberapa program studi sudah mulai terakreditasi oleh BAN-PT (Badan Akreditasi Nasional Perguruan Tinggi) dan ATA (Asian Theological Association). Selain itu juga STTB memperluas jejaring global yang ditandai dengan kehadiran beberapa orang dosen dari Inggris, India, dan Filipina, yang sangat mendukung program M.Th. yang diselenggarakan dalam Bahasa Inggris.`,
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    imagePosition: "right",
  },
  {
    year: "2017 - 2022",
    title: "Era Digital & Kolaborasi Global",
    description: `Periode ini diwarnai oleh pembenahan kualitas dan penajaman arah pengembangan program-program studi formal dan non-formal sesuai visi dan keunikan panggilan STTB. Formasi spiritualitas yg berkualitas dan terintegrasi antara kelas, kapel, kelompok pastoral, asrama, pemuridan, hingga mentoring dalam praktek pelayanan mengokohkan proses pembentukan untuk mahasiswa STh dan SPd untuk kesiapan mereka melayani. Komitmen STTB kepada dunia pendidikan kristen makin mendapat apresiasi luas melalui perkembangan program studi Magister Pendidikan, inisiasi tumbuhnya komunitas Indonesian Forum for Christian Educators (IFCE), dan kontribusi para dosen STTB`,
    fullDescription: `Periode ini diwarnai oleh pembenahan kualitas dan penajaman arah pengembangan program-program studi formal dan non-formal sesuai visi dan keunikan panggilan STTB. Formasi spiritualitas yg berkualitas dan terintegrasi antara kelas, kapel, kelompok pastoral, asrama, pemuridan, hingga mentoring dalam praktek pelayanan mengokohkan proses pembentukan untuk mahasiswa STh dan SPd untuk kesiapan mereka melayani. Komitmen STTB kepada dunia pendidikan kristen makin mendapat apresiasi luas melalui perkembangan program studi Magister Pendidikan, inisiasi tumbuhnya komunitas Indonesian Forum for Christian Educators (IFCE), dan kontribusi para dosen STTB dalam berbagai forum nasional. Demikian juga komitmen STTB untuk mengembangkan pendidikan teologi yang aplikatif dan transformatif mendapatkan sambutan yg positif melalui perkembangan program studi MTh yang berfokus pada Transformasi Budaya dan Masyarakat dan program studi MMin Marketplace untuk memperlengkapi profesional Kristen bermisi di dunia kerja. Sementara itu dua program MMin juga berlangsung dalam periode ini, yaitu MMin Music Leadership (bekerja sama dengan Singapore Bible College) dan MMin Pastoral Leadership. Pendidikan nonformal makin berkembang dengan budaya digital yg tumbuh pesat selama masa pandemi. Melalui pengembangan pusat studi non-formal (LEAD Center) dikembangkan modul-modul pembinaan Vocatio (marketplace), Perspectives (misi), dan materi-materi pembinaan digital yg dapat diakses melalui media sosial. Pengembangan penelitian ditandai dengan publikasi ilmiah berupa seri webinar berkala. Conversation That Matters (CTM) dan penerbitan monograf untuk tesis-tesis master yg terpilih karena kualitas dan relevansinya bagi pelayanan di lapangan. Mengingat besarnya dan luasnya pekerjaan yg harus dilakukan, maka kolaborasi dan sinergi dengan berbagai gereja dan lembaga secara nasional dan global yg sejalan dengan visi STTB makin dikembangkan dalam periode ini. Dalam periode ini kepemimpinan STTB mengalami beberapa kali peralihan, yaitu Pdt Chandra Koewoso sebagai Ketua sejak Agustus 2017, dan selanjutnya Sutrisna Harjanto PhD sebagai Ketua sejak Agustus 2019 hingga saat ini.`,
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    imagePosition: "left",
  },
];

export default function SejarahPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 mb-12">
          <div className="container mx-auto px-4">
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold">Sejarah STTB</h1>
            <p className="text-xl text-blue-100 mt-4 max-w-3xl">
              Perjalanan STTB sejak tahun 1992 hingga masa kini, membentuk
              generasi pelayan dan pemimpin yang berdampak bagi gereja dan
              masyarakat.{" "}
            </p>
          </div>
        </section>

      {/* Timeline Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900 via-red-700 to-blue-900"></div>

            {/* Timeline Sections */}
            <div className="space-y-24">
              {timelineSections.map((section, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-16 h-16 bg-white border-4 border-red-700 rounded-full items-center justify-center z-10">
                    <div className="w-6 h-6 bg-red-700 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                      section.imagePosition === "right"
                        ? "lg:flex-row-reverse"
                        : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`${
                        section.imagePosition === "right"
                          ? "lg:col-start-2"
                          : "lg:col-start-1"
                      }`}
                    >
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-red-700/20 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                        <img
                          src={section.imageUrl}
                          alt={section.title}
                          className="w-full aspect-video object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`${
                        section.imagePosition === "right"
                          ? "lg:col-start-1 lg:row-start-1"
                          : "lg:col-start-2"
                      }`}
                    >
                      <div
                        className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-red-700 
    ${
      section.imagePosition === "right"
        ? "lg:border-r-4 border-l-4"
        : "border-l-4"
    }`}
                      >
                        {/* Year Badge */}
                        <div className="inline-block bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                          {section.year}
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                          {section.title}
                        </h2>

                        {/* Description */}
                        <div
                          className="text-gray-700 leading-relaxed"
                          style={{ lineHeight: "1.6" }}
                        >
                          {index === timelineSections.length - 1 &&
                          section.fullDescription ? (
                            <>
                              <div className="relative">
                                <p>
                                  {isExpanded
                                    ? section.fullDescription
                                    : section.description}
                                </p>
                                {/* Gradient fade effect - only show when not expanded */}
                                {!isExpanded && (
                                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                )}
                              </div>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsExpanded(!isExpanded);
                                }}
                                className="inline-block mt-2 text-blue-900 hover:text-blue-700 text-sm transition-colors"
                              >
                                {isExpanded
                                  ? "Sembunyikan"
                                  : "Baca selengkapnya..."}
                              </button>
                            </>
                          ) : (
                            <p>{section.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logo Anatomy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-center leading-[1.1] mb-10">
            <span className="text-black">Arti Logo </span>
            <span className="text-blue-800">STTB</span>
          </h1>

          {/* **PENTING: Kontainer Pembungkus dengan Position Relative** */}
          <div className="relative max-w-7xl mx-auto p-8 border border-gray-100 rounded-2xl bg-white shadow-sm">
            {/* Grid Utama (3 Kolom) - Tetap Utuh */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center relative z-10">
              {/* Kolom Kiri - Kartu Penjelasan */}
              <div className="space-y-8">
                {/* Kartu API (Teks Utuh) */}
                <div className="bg-white rounded-lg shadow-md p-6 relative border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://sttb.ac.id/storage/2022/01/api.png"
                      alt="API"
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-red-700 text-center mb-3">
                    API
                  </h3>
                  <p className="text-sm text-gray-700 text-center leading-relaxed italic">
                    menggambarkan penyertaan dan pemenuhan dari Allah Roh Kudus
                    yang menjadi sumber hikmat, kuasa, dan kasih serta merupakan
                    syarat mutlak bagi pelayan Tuhan.
                  </p>
                </div>

                {/* Kartu SALIB & MAHKOTA (Teks Utuh) */}
                <div className="bg-white rounded-lg shadow-md p-6 relative border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://sttb.ac.id/storage/2022/01/salib.png"
                      alt="SALIB & MAHKOTA"
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-red-700 text-center mb-3">
                    SALIB & MAHKOTA
                  </h3>
                  <p className="text-sm text-gray-700 text-center leading-relaxed italic">
                    melambangkan panggilan untuk berpegang kepada kebenaran dan
                    merajakan Kristus.
                  </p>
                </div>
              </div>

              {/* Kolom Tengah - Logo Utama (Tetap Penuh & Utuh) */}
              <div className="flex flex-col items-center justify-center relative z-20">
                <div className="relative p-2 bg-white rounded-full shadow-inner border border-gray-100">
                  <img
                    src="https://sttb.ac.id/storage/2022/01/Logo-STT-Bdg.jpg"
                    alt="STTB Shield Logo Penuh"
                    className="w-full max-w-sm mx-auto"
                  />
                </div>
                {/* Logo Summary Text */}
                <div className="mt-8 text-center max-w-md">
                  <h3 className="text-2xl font-bold text-red-700 mb-4">
                    LOGO STTB
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    Logo STTB menggambarkan pola pendidikan teologi yang akan
                    memperlengkapi para mahasiswa untuk menjadi hamba Allah yang
                    baik, setia, dan penuh hikmat, serta siap dipakai dalam
                    pelayanan di ladangNya.
                  </p>
                </div>
              </div>

              {/* Kolom Kanan - Kartu Penjelasan */}
              <div className="space-y-8">
                {/* Kartu ALKITAB (Teks Utuh) */}
                <div className="bg-white rounded-lg shadow-md p-6 relative border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://sttb.ac.id/storage/2022/01/alkitab.png"
                      alt="ALKITAB"
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-red-700 text-center mb-3">
                    ALKITAB
                  </h3>
                  <p className="text-sm text-gray-700 text-center leading-relaxed italic">
                    adalah satu-satunya sumber pengetahuan yang benar tentang
                    Allah dan dasar bagi panggilan serta pelayanan (Sola
                    Scriptura).
                  </p>
                </div>

                {/* Kartu TONGKAT GEMBALA (Teks Utuh) */}
                <div className="bg-white rounded-lg shadow-md p-6 relative border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://sttb.ac.id/storage/2022/01/tongkat.png"
                      alt="TONGKAT GEMBALA"
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-red-700 text-center mb-3">
                    TONGKAT GEMBALA
                  </h3>
                  <p className="text-sm text-gray-700 text-center leading-relaxed italic">
                    melambangkan panggilan Tuhan untuk menggembalakan umat-Nya.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
              {/* 1. Garis dari API (Kiri Atas) ke Api di Logo */}
              <div className="absolute top-[25%] left-[28%] w-[15%] h-0.5 bg-red-600/40 rotate-[10deg] origin-left">
                {/* Titik Ujung */}
                <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-red-600 shadow-md"></div>
              </div>

              {/* 2. Garis dari SALIB (Kiri Bawah) ke Salib di Logo */}
              <div className="absolute bottom-[35%] left-[28%] w-[15%] h-0.5 bg-red-600/40 -rotate-[10deg] origin-left">
                {/* Titik Ujung */}
                <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-red-600 shadow-md"></div>
              </div>

              {/* 3. Garis dari ALKITAB (Kanan Atas) ke Alkitab di Logo */}
              <div className="absolute top-[25%] right-[28%] w-[15%] h-0.5 bg-red-600/40 -rotate-[10deg] origin-right">
                {/* Titik Ujung */}
                <div className="absolute left-0 -top-1 w-2.5 h-2.5 rounded-full bg-red-600 shadow-md"></div>
              </div>

              {/* 4. Garis dari TONGKAT (Kanan Bawah) ke Tongkat di Logo */}
              <div className="absolute bottom-[35%] right-[28%] w-[15%] h-0.5 bg-red-600/40 rotate-[10deg] origin-right">
                {/* Titik Ujung */}
                <div className="absolute left-0 -top-1 w-2.5 h-2.5 rounded-full bg-red-600 shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FoundersSection />
    </div>
  );
}
