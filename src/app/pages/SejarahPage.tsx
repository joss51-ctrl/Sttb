/**
 * SejarahPage - STTB History Page
 * 
 * Features a modern zig-zag timeline layout showcasing the university's history
 * from 1992 to 2022 across 5 major periods.
 * 
 * Design:
 * - Alternating image-text layout (left-right, right-left pattern)
 * - Deep Blue and Crimson Red color palette
 * - Generous white space and line-height (1.6)
 * - Vertical timeline connector
 * - Professional, academic, and trustworthy visual style
 */

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import logoImage from 'figma:asset/3308a592eb8e599b899462fa3ba1c1cb2cc81be0.png';
import apiIcon from 'figma:asset/2b9773aa375b6705fc69f0494c26aab9ef0eb9c4.png';
import salibIcon from 'figma:asset/26b21d36b14bc27629e0dbdb42d994a19a8c7b44.png';
import alkitabIcon from 'figma:asset/958fed8541ee2bd947354eb0172f818fa1eae33c.png';
import tongkatIcon from 'figma:asset/ea920ee6f637ce7a5c5bd5d1a20804989706472c.png';

interface TimelineSection {
  year: string;
  title: string;
  description: string;
  fullDescription?: string; // For expandable content
  imageUrl: string;
  imagePosition: 'left' | 'right';
}

const timelineSections: TimelineSection[] = [
  {
    year: '1992 - 1998',
    title: 'Masa Perintisan',
    description: `Pdt. Caleb Tong, Pdt. Joseph Tong, dan Pdt. Dorothy I. Marx mendirikan STTB pada tahun 1992 dengan tujuan menghasilkan Pastor-Scholar yg memiliki kerangka teologi Reformed Injili dalam konteks pekerjaan Tuhan di Indonesia. Pdt. Daniel Lucas Lukito sebagai Dekan Akademik pertama banyak berperan dalam meletakkan kerangka dasar pembangunan STTB. Pembukaan STTB disiapkan sangat baik dengan jajaran dosen yang berkualitas. Komitmen untuk mengejar kualitas akademis yg tinggi didukung juga oleh perpustakaan yang memiliki koleksi buku dan jurnal yang sangat memadai, serta penerbitan Jurnal Teologi STULOS dalam versi Bahasa Indonesia dan Inggris. Pada tahun-tahun pertama diselenggarakan acara dengan lingkup nasional yaitu Ferakristal (Festival Remaja Kristen Pencinta Alkitab). Wisuda pertama diadakan pada tahun 1996.`,
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    imagePosition: 'left',
  },
  {
    year: '1999 - 2005',
    title: 'Pergantian Kepemimpinan',
    description: `STTB mengalami pergantian pemimpin dan jajaran dosen. Ibu Dorothy I. Marx menjabat sebagai Rektor dan STTB terus melanjutkan kiprahnya atas anugerah Tuhan dengan membuka program-program studi baru: M.A. (Master of Arts/Magister Artium) untuk memperlengkapi kaum awam dan M.Th. (Master of Theology/Magister Teologi) untuk memperlengkapi para hamba Tuhan yang rindu berkiprah di dunia akademis. Asrama dosen dibangun bersebelahan dengan asrama mahasiswa. STTB berkomitmen menerbitkan seri buku "Sola ... " dan menyelenggarakan acara nasional bagi pemuda dengan nama CYLF (Christian Youth Leadership Forum).`,
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    imagePosition: 'right',
  },
  {
    year: '2006 - 2010',
    title: 'Penguatan Akademik',
    description: `Perkembangan STTB berlanjut dalam kepemimpinan Pdt. Joseph Tong yang berkomitmen meningkatkan kualifikasi tenaga pengajar dengan mengutus beberapa dosen untuk studi lanjut di USA. Pada periode ini terbit dua buku Seri Sola, yaitu Sola Scriptura dan Sola Fide. Dalam periode ini STTB membuka program studi berbahasa Mandarin (S.Th., M.Div., dan M.A.) sebagai kontribusinya dalam pelayanan misi di Tiongkok. Untuk itu 2 dosen yaitu Pdt. Lee Ching Yen dan Pdt. Joseph Lin dari Taiwan diundang mengajar para mahasiswa yang datang dari Tiongkok.`,
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    imagePosition: 'left',
  },
  {
    year: '2011 - 2016',
    title: 'Transformasi & Gedung Baru',
    description: `Periode ini ditandai dengan beberapa perkembangan yang signifikan. Pdt. Agus Gunawan melanjutkan kepemimpinan sebagai Rektor. Pada tahun 2011, STTB hadir dengan wajah baru dengan dibangunnya gedung baru berlantai tujuh yang saat ini difungsikan untuk ruang-ruang kelas, kantor dosen dan staf, asrama mahasiswa, aula, dan perpustakaan. Buku ketiga dan keempat dari Seri Sola (Sola Gratia dan Solus Christos) diterbitkan. Pada periode ini juga beberapa orang di jajaran pimpinan melanjutkan studi doktoral di Asia dan Amerika. Tahun 2012 dibuka prodi baru S.Pd.K. (Sarjana Pendidikan Kristen) bersama dengan prodi M.Min. (Magister Ministri). Selanjutnya, pada tahun 2015, STTB juga menambah program studi M.Pd.K. (Magister Pendidikan Kristen), yang dirancang untuk memperlengkapi para pemimpin pendidikan Kristen. Dalam periode ini beberapa program studi sudah mulai terakreditasi oleh BAN-PT (Badan Akreditasi Nasional Perguruan Tinggi) dan ATA (Asian Theological Association). Selain itu juga STTB memperluas jejaring global yang ditandai dengan kehadiran beberapa orang dosen dari Inggris, India, dan Filipina, yang sangat mendukung program M.Th. yang diselenggarakan dalam Bahasa Inggris.`,
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    imagePosition: 'right',
  },
  {
    year: '2017 - 2022',
    title: 'Era Digital & Kolaborasi Global',
    description: `Periode ini diwarnai oleh pembenahan kualitas dan penajaman arah pengembangan program-program studi formal dan non-formal sesuai visi dan keunikan panggilan STTB. Formasi spiritualitas yg berkualitas dan terintegrasi antara kelas, kapel, kelompok pastoral, asrama, pemuridan, hingga mentoring dalam praktek pelayanan mengokohkan proses pembentukan untuk mahasiswa STh dan SPd untuk kesiapan mereka melayani. Komitmen STTB kepada dunia pendidikan kristen makin mendapat apresiasi luas melalui perkembangan program studi Magister Pendidikan, inisiasi tumbuhnya komunitas Indonesian Forum for Christian Educators (IFCE), dan kontribusi para dosen STTB`,
    fullDescription: `Periode ini diwarnai oleh pembenahan kualitas dan penajaman arah pengembangan program-program studi formal dan non-formal sesuai visi dan keunikan panggilan STTB. Formasi spiritualitas yg berkualitas dan terintegrasi antara kelas, kapel, kelompok pastoral, asrama, pemuridan, hingga mentoring dalam praktek pelayanan mengokohkan proses pembentukan untuk mahasiswa STh dan SPd untuk kesiapan mereka melayani. Komitmen STTB kepada dunia pendidikan kristen makin mendapat apresiasi luas melalui perkembangan program studi Magister Pendidikan, inisiasi tumbuhnya komunitas Indonesian Forum for Christian Educators (IFCE), dan kontribusi para dosen STTB dalam berbagai forum nasional. Demikian juga komitmen STTB untuk mengembangkan pendidikan teologi yang aplikatif dan transformatif mendapatkan sambutan yg positif melalui perkembangan program studi MTh yang berfokus pada Transformasi Budaya dan Masyarakat dan program studi MMin Marketplace untuk memperlengkapi profesional Kristen bermisi di dunia kerja. Sementara itu dua program MMin juga berlangsung dalam periode ini, yaitu MMin Music Leadership (bekerja sama dengan Singapore Bible College) dan MMin Pastoral Leadership. Pendidikan nonformal makin berkembang dengan budaya digital yg tumbuh pesat selama masa pandemi. Melalui pengembangan pusat studi non-formal (LEAD Center) dikembangkan modul-modul pembinaan Vocatio (marketplace), Perspectives (misi), dan materi-materi pembinaan digital yg dapat diakses melalui media sosial. Pengembangan penelitian ditandai dengan publikasi ilmiah berupa seri webinar berkala. Conversation That Matters (CTM) dan penerbitan monograf untuk tesis-tesis master yg terpilih karena kualitas dan relevansinya bagi pelayanan di lapangan. Mengingat besarnya dan luasnya pekerjaan yg harus dilakukan, maka kolaborasi dan sinergi dengan berbagai gereja dan lembaga secara nasional dan global yg sejalan dengan visi STTB makin dikembangkan dalam periode ini. Dalam periode ini kepemimpinan STTB mengalami beberapa kali peralihan, yaitu Pdt Chandra Koewoso sebagai Ketua sejak Agustus 2017, dan selanjutnya Sutrisna Harjanto PhD sebagai Ketua sejak Agustus 2019 hingga saat ini.`,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    imagePosition: 'left',
  },
];

export default function SejarahPage() {
  const [isExpanded, setIsExpanded] = useState(false);

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
            <span className="text-white">Sejarah</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold">Sejarah STTB</h1>
          <p className="text-xl text-blue-100 mt-4 max-w-3xl">
            Perjalanan Sekolah Tinggi Teologi Bandung dari tahun 1992 hingga kini
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
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
                      section.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`${
                        section.imagePosition === 'right' ? 'lg:col-start-2' : 'lg:col-start-1'
                      }`}
                    >
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-red-700/20 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                        <img
                          src={section.imageUrl}
                          alt={section.title}
                          className="w-full h-80 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`${
                        section.imagePosition === 'right'
                          ? 'lg:col-start-1 lg:row-start-1'
                          : 'lg:col-start-2'
                      }`}
                    >
                      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-700">
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
                          style={{ lineHeight: '1.6' }}
                        >
                          {index === timelineSections.length - 1 && section.fullDescription ? (
                            <>
                              <div className="relative">
                                <p>{isExpanded ? section.fullDescription : section.description}</p>
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
                                {isExpanded ? 'Sembunyikan' : 'Baca selengkapnya...'}
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            ARTI LOGO
          </h2>

          {/* Main Diagram Layout */}
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Left Column - 2 Cards */}
              <div className="space-y-8">
                {/* API Card */}
                <div className="bg-white rounded-lg shadow-md p-6 relative">
                  {/* Connector line indicator */}
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-4 h-0.5 bg-gray-300"></div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={apiIcon}
                      alt="API"
                      className="w-16 h-16 text-gray-800"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-red-700 text-center mb-3">
                    API
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-700 text-center leading-relaxed" style={{ lineHeight: '1.5' }}>
                    <em>di atas logo menggambarkan penyertaan dan pemenuhan dari Allah Roh Kudus yang menjadi sumber hikmat, kuasa, dan kasih serta merupakan syarat mutlak bagi pelayan Tuhan.</em>
                  </p>
                </div>

                {/* SALIB & MAHKOTA Card */}
                <div className="bg-white rounded-lg shadow-md p-6 relative">
                  {/* Connector line indicator */}
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-4 h-0.5 bg-gray-300"></div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={salibIcon}
                      alt="SALIB & MAHKOTA"
                      className="w-16 h-16 text-gray-800"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-red-700 text-center mb-3">
                    SALIB & MAHKOTA
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-700 text-center leading-relaxed" style={{ lineHeight: '1.5' }}>
                    <em>melambangkan panggilan untuk berpegang kepada kebenaran dan merajakan Kristus.</em>
                  </p>
                </div>
              </div>

              {/* Center Column - Main Logo */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Main Logo Image */}
                  <img
                    src={logoImage}
                    alt="STTB Shield Logo"
                    className="w-full max-w-sm mx-auto"
                  />
                </div>
                
                {/* Logo Summary */}
                <div className="mt-8 text-center max-w-md">
                  <h3 className="text-2xl font-bold text-red-700 mb-4">
                    LOGO STTB
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ lineHeight: '1.5' }}>
                    <em>
                      Logo STTB menggambarkan pola pendidikan teologi yang akan memperlengkapi para mahasiswa untuk menjadi hamba Allah yang baik, setia, dan penuh hikmat, serta siap dipakai dalam pelayanan di ladangNya.
                    </em>
                  </p>
                </div>
              </div>

              {/* Right Column - 2 Cards */}
              <div className="space-y-8">
                {/* ALKITAB Card */}
                <div className="bg-white rounded-lg shadow-md p-6 relative">
                  {/* Connector line indicator */}
                  <div className="hidden lg:block absolute -left-4 top-1/2 w-4 h-0.5 bg-gray-300"></div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={alkitabIcon}
                      alt="ALKITAB"
                      className="w-16 h-16 text-gray-800"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-red-700 text-center mb-3">
                    ALKITAB
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-700 text-center leading-relaxed" style={{ lineHeight: '1.5' }}>
                    <em>adalah satu-satunya sumber pengetahuan yang benar tentang Allah dan dasar bagi panggilan serta pelayanan (Sola Scriptura).</em>
                  </p>
                </div>

                {/* TONGKAT GEMBALA Card */}
                <div className="bg-white rounded-lg shadow-md p-6 relative">
                  {/* Connector line indicator */}
                  <div className="hidden lg:block absolute -left-4 top-1/2 w-4 h-0.5 bg-gray-300"></div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={tongkatIcon}
                      alt="TONGKAT GEMBALA"
                      className="w-16 h-16 text-gray-800"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-red-700 text-center mb-3">
                    TONGKAT GEMBALA
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-700 text-center leading-relaxed" style={{ lineHeight: '1.5' }}>
                    <em>melambangkan panggilan Tuhan untuk menggembalakan umat-Nya.</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Menjadi Bagian dari Sejarah STTB
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan kami dan lanjutkan warisan keunggulan akademik dan pelayanan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Pelajari Lebih Lanjut
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