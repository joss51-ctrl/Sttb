import { ArrowRight } from "lucide-react";

const KehidupanKampusHomePage = () => {
  const facilities = [
    {
      title: "Perpustakaan",
      img: "https://sttb.ac.id/storage/2022/08/fasilitas-10.png",
      desc: "Koleksi literatur teologi terlengkap dengan puluhan ribu judul buku fisik dan akses jurnal digital.",
    },
    {
      title: "Chapel",
      img: "https://sttb.ac.id/storage/2022/08/fasilitas-8.png",
      desc: "Pusat kehidupan spiritual kampus untuk ibadah raya dan pengembangan pelayanan mimbar.",
    },
    {
      title: "Ruang Kelas",
      img: "https://sttb.ac.id/storage/2022/08/fasilitas-17.png",
      desc: "Ruang belajar ergonomis dengan teknologi hybrid untuk interaksi akademik yang maksimal.",
    },
    {
      title: "Asrama",
      img: "https://sttb.ac.id/storage/2022/08/fasilitas-18.png",
      desc: "Hunian nyaman yang dirancang untuk membentuk karakter dan komunitas persaudaraan mahasiswa.",
    },
    {
      title: "Studio Recording",
      img: "https://sttb.ac.id/storage/2022/08/fasilitas-19.png",
      desc: "Fasilitas produksi mutakhir untuk pembuatan materi pembelajaran digital dan konten kreatif.",
    },
    {
      title: "Podcast",
      img: "https://sttb.ac.id/storage/2022/08/fasilitas-2.png",
      desc: "Ruang diskusi modern untuk menyuarakan pesan Injil melalui berbagai platform media digital.",
    },
    {
      title: "Kantin",
      img: "https://sttb.ac.id/storage/2022/08/fasilitas-16.png",
      desc: "Area bersantap yang bersih dan nyaman untuk bersantai di sela aktivitas perkuliahan.",
    },
    {
      title: "Area Komunal",
      img: "https://sttb.ac.id/storage/2022/08/fasilitas-9.png",
      desc: "Ruang terbuka inspiratif untuk diskusi santai dan sosialisasi antar civitas akademika.",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Kehidupan Kampus
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-1.5 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-1.5 bg-yellow-400 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg">
              Mari mengenal lebih dekat lingkungan belajar yang transformatif,
              inklusif, dan penuh semangat kekeluargaan.
            </p>
          </div>
        </div>

        {/* --- VIDEO SECTION --- */}
        <div className="max-w-5xl mx-auto px-4 mb-10">
          {/* Dekorasi Background */}
          <div className="absolute -inset-4 bg-blue-900/5 rounded-[3rem] -z-10 scale-95 group-hover:scale-100 transition-transform duration-700"></div>

          <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            {/* Embed Youtube (Ganti ID VIDEO_ID dengan ID video asli) */}
            <iframe
              className="w-full h-full"
              // Tambahkan &mute=1 di sini
              src="https://www.youtube.com/embed/hTh0QkKxNhg?si=fdX6C7qC375XoMdn&mute=1"
              title="Campus Tour STTB"
              // Tambahkan autoplay di dalam allow
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* --- BRIDGING SECTION --- */}
        <div className="text-center mb-15">
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Lebih dari sekadar gedung, setiap ruangan di STTB dirancang untuk
            menciptakan ruang bertumbuh. Lihat detail fasilitas pendukung kami
            yang menjadi saksi transformasi setiap mahasiswa.
          </p>
        </div>

        {/* --- FASILITAS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-3xl overflow-hidden mb-4 shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 group-hover:text-red-600 transition-colors">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/program-studi"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-red-600 text-red-600 font-bold rounded-full overflow-hidden transition-all duration-300 hover:text-white"
          >
            {/* Layer Background yang muncul saat hover */}
            <div className="absolute inset-0 w-0 bg-red-500 transition-all duration-600 ease-out group-hover:w-full"></div>

            <span className="relative z-10">Lihat Semua Fasilitas</span>
            <ArrowRight
              size={20}
              className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default KehidupanKampusHomePage;
