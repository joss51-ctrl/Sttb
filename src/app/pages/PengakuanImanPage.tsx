/**
 * PengakuanImanPage - Statement of Faith Page
 * 
 * Features:
 * - Single-column centered layout with 8 faith statement cards
 * - Clean, elegant, and sacred design
 * - Red accent line on each card
 * - Navy Blue and white color palette
 * - Sophisticated typography with high readability
 * 
 * Design:
 * - White cards with soft shadows
 * - Serif fonts for titles, sans-serif for body
 * - 1.6 line-height for excellent readability
 * - Navy Blue footer with motto
 */

import { ChevronRight } from 'lucide-react';

export default function PengakuanImanPage() {
  const statements = [
    {
      number: 1,
      text: "KAMI PERCAYA bahwa Alkitab secara keseluruhan, Perjanjian Lama dan Perjanjian Baru, adalah firman Allah yang diwahyukan dan diilhamkan tanpa kesalahan. Oleh karena itu, Alkitab adalah sumber otoritas tertinggi bagi iman dan kehidupan orang percaya di segala abad dan tempat."
    },
    {
      number: 2,
      text: "KAMI PERCAYA bahwa Allah adalah Esa dan kekal, Mahakudus, dan penuh rahmat. Ia adalah pencipta, penguasa, dan pemelihara alam semesta beserta segala isinya, Tritunggal sebagai Bapa, Anak, dan Roh Kudus. Masing-masing adalah Pribadi yang tidak diciptakan, sehakekat, dan setara dalam kuasa dan kemuliaan. Ia berdaulat baik dalam keselamatan maupun dalam penghakiman umat manusia."
    },
    {
      number: 3,
      text: "KAMI PERCAYA bahwa manusia, laki-laki dan perempuan, telah diciptakan oleh Allah menurut gambar-Nya, yang telah dimahkotai-Nya dengan kemuliaan serta mandat untuk memenuhi bumi, mengelola dan memelihara seluruh ciptaan-Nya. Tetapi manusia telah jatuh ke dalam dosa, terpisah dari Allah, dan kehilangan kemampuan untuk hidup sesuai dengan citranya sebagai ciptaan Allah, sehingga tidak mampu menyelamatkan dirinya sendiri."
    },
    {
      number: 4,
      text: "KAMI PERCAYA bahwa Yesus Kristus adalah Anak Tunggal Allah, Allah sejati dan Manusia sejati, penebus dan satu-satunya jalan keselamatan bagi seluruh umat manusia. Ia dikandung dari Roh Kudus, lahir dari anak dara Maria, hidup tanpa dosa, sempurna dalam pengorbanan dan kasih. Ia mati di atas kayu salib, bangkit kembali dari antara orang mati dalam tubuh kebangkitan yang nyata, naik ke sorga, duduk di sebelah kanan Allah Bapa, menjadi Imam Besar Agung bagi orang percaya, dan pengantara tunggal antara Allah dan manusia, serta Raja di atas segala raja."
    },
    {
      number: 5,
      text: "KAMI PERCAYA bahwa Roh Kudus adalah Allah yang hidup, yang menginsafkan manusia akan dosa, kebenaran, dan penghakiman. Ia melahirbarukan orang berdosa yang percaya, mendiami, menguduskan, dan memberi kuasa serta karunia-karunia kepada setiap orang percaya menurut kehendak-Nya demi kesaksian, persekutuan, dan pelayanan untuk pembangunan tubuh Kristus."
    },
    {
      number: 6,
      text: "KAMI PERCAYA bahwa manusia hanya dapat diselamatkan oleh kasih karunia melalui penebusan oleh Tuhan Yesus Kristus dan dibenarkan melalui iman, tanpa jasa, usaha, ataupun kesalehan dari pihak manusia. Melalui penyelamatan Allah dalam Kristus, gambar Allah pada manusia dipulihkan. Dengan demikian, manusia dimampukan untuk menjalani kehidupan yang penuh tanggung jawab dalam pengabdian dan kasih di hadapan Allah dan manusia."
    },
    {
      number: 7,
      text: "KAMI PERCAYA bahwa Gereja selaku garam dan terang dunia adalah himpunan semua orang percaya dari segala abad dan bangsa. Ia adalah tubuh Kristus yang kudus dan Am, dengan Kristus sebagai Kepalanya. Gereja memberitakan Kerajaan Allah melalui kebaktian, pengajaran, sakramen baptisan dan perjamuan kudus, serta pemberitaan Injil dan misi umat Allah seutuhnya di tengah dunia."
    },
    {
      number: 8,
      text: "KAMI PERCAYA bahwa kepastian kedatangan kembali Yesus Kristus secara nyata dan pribadi akan terjadi pada akhir zaman untuk menjemput umat-Nya untuk menghakimi seluruh umat manusia, baik yang hidup maupun yang mati. Pada kedatangan-Nya kedua kali itulah setiap orang mati akan dibangkitkan, orang percaya masuk ke dalam kehidupan yang kekal, orang yang tidak percaya masuk ke dalam kebinasaan yang kekal."
    }
  ];

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
            <span className="text-white">Pengakuan Iman</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold">Pengakuan Iman</h1>
          <p className="text-xl text-blue-100 mt-4 max-w-3xl">
            Pernyataan iman dan keyakinan teologis Sekolah Tinggi Teologi Bandung
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sebagai institusi pendidikan teologi Reformed, kami memegang teguh pengakuan iman yang didasarkan pada Alkitab sebagai firman Allah yang tidak salah dan tidak dapat salah.
            </p>
          </div>

          {/* Statement Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {statements.map((statement) => (
              <div
                key={statement.number}
                className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Red Accent Line */}
                <div className="h-1 bg-red-700" />
                
                {/* Card Content */}
                <div className="p-8">
                  {/* Title */}
                  <h2 className="text-2xl font-serif font-bold text-blue-900 mb-4">
                    {statement.number}. KAMI PERCAYA
                  </h2>
                  
                  {/* Body Text */}
                  <p className="text-gray-700 leading-relaxed" style={{ lineHeight: '1.6' }}>
                    {statement.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Spacing */}
          <div className="h-12" />
        </div>
      </section>

      {/* Footer Quote Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border-t-2 border-b-2 border-yellow-500 py-8">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-yellow-500 tracking-wider">
                TO THE LORD
              </h2>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-yellow-500 tracking-wider mt-2">
                THE BEST THE GREATEST
              </h2>
            </div>
            <p className="text-yellow-500 italic text-sm mt-6 tracking-wide">
              DOMINO OPTIMO MAXIMO
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Pelajari Lebih Lanjut Tentang STTB
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Temukan bagaimana STTB mempersiapkan hamba Tuhan yang setia dan kompeten
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/visi-misi"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
            >
              Visi & Misi
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="/sejarah"
              className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Sejarah STTB
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
