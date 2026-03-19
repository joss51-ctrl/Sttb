import { BookOpen, Users, GraduationCap, ArrowRight } from "lucide-react";
import DosenPengajar from "@/assets/TentangKami.webp";
import MTeologia from "@/assets/MTeologia.webp";
import SPendidikan from "@/assets/SPendidikan.webp";
import STeologia from "@/assets/STeologia.webp";

const ProgramStudiHomePage = () => {
  // Data dummy untuk 3 program studi. Ganti dengan data asli STTB.
  const programs = [
    {
      id: 1,
      jenjang: "Sarjana (S1)",
      nama: "Sarjana Teologi ",
      deskripsi:
        "Membentuk hamba Tuhan yang setia dengan landasan biblika yang kokoh dan hati gembala.",
      imageUrl: STeologia,
    },
    {
      id: 2,
      jenjang: "Sarjana (S1)",
      nama: "Sarjana Pendidikan Kristen",
      deskripsi:
        "Mempersiapkan pendidik Kristen yang kompeten untuk melayani di sekolah dan gereja.",
      imageUrl: SPendidikan,
    },
    {
      id: 3,
      jenjang: "Magister (S2)",
      nama: "Magister Teologi",
      deskripsi:
        "Program lanjutan bagi para profesional dan pelayan gereja untuk mendalami riset teologis.",
      imageUrl: MTeologia,
    },
  ];

  return (
    <section className="bg-white px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900 leading-tight">
            Program Studi
          </h2>
          {/* Underline Dekoratif (Dot & Line) */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-0.5 bg-yellow-400 rounded-full"></div>
            <span className="flex-shrink text-yellow-500">✦</span>{" "}
            <div className="w-12 h-0.5 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prodi) => {
            return (
              <div
                key={prodi.id}
                className="group relative overflow-hidden rounded-[2rem] bg-blue-950 aspect-[4/5] shadow-xl transition-all duration-700"
              >
                {/* 1. Background Image - Berikan efek grayscale yang hilang saat hover */}
                <img
                  src={prodi.imageUrl}
                  alt={prodi.nama}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 z-0"
                />

                {/* 2. Gradient Overlay - Lebih pekat di bawah agar teks kontras */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent z-10"></div>

                {/* 3. Garis Tepi (Glow Effect) */}
                <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2rem] z-20 group-hover:border-red-500/50 transition-colors duration-500"></div>

                {/* 4. Content */}
                <div className="absolute inset-0 p-8 z-30 flex flex-col">
                  {/* Badge di pojok kiri atas */}
                  <div className="flex justify-between items-start">
                    <span className="bg-red-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-tighter">
                      {prodi.jenjang}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                      {prodi.nama}
                    </h3>

                    {/* Garis dekoratif yang memanjang saat hover */}
                    <div className="h-1 w-0 bg-red-500 group-hover:w-full transition-all duration-700 mb-4 rounded-full"></div>

                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 duration-delay-100">
                      {prodi.deskripsi}
                    </p>

                    <div className="mt-6 flex items-center text-red-500 font-bold text-sm">
                      <span>Lihat Program</span>
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-3 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* --- TOMBOL LIHAT SEMUA PROGRAM STUDI --- */}
      <div className="mt-16 flex justify-center">
        <a
          href="/program-studi"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-red-600 text-red-600 font-bold rounded-full overflow-hidden transition-all duration-300 hover:text-white"
        >
          {/* Layer Background yang muncul saat hover */}
          <div className="absolute inset-0 w-0 bg-red-500 transition-all duration-600 ease-out group-hover:w-full"></div>

          <span className="relative z-10">Lihat Semua Program Studi</span>
          <ArrowRight
            size={20}
            className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
          />
        </a>
      </div>
    </section>
  );
};

export default ProgramStudiHomePage;
