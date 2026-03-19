import { ArrowRight, MoveRight } from "lucide-react";
import BangunanSTTB from "@/assets/BangunanSTTB.webp";

const HeroHomePage = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-slate-50 flex items-center overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-16">
        {/* --- KOLOM KIRI: Konten Teks --- */}
        <div className="relative z-20 space-y-10 py-12 lg:py-24 text-left">
          <div className="space-y-6">
            {/* Sub-header Merah (Welcome Text) */}
            <p className="text-red-800 font-bold text-md lg:text-xl tracking-tight border-l-4 border-red-800 pl-4">
              Selamat Datang Di
            </p>

            {/* Judul Utama - Sangat Bold & Sharp */}
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-slate-900 leading-[1.05] tracking-tight">
              Sekolah <br className="hidden lg:block" />
              Tinggi <br className="hidden lg:block" />
              Teologia <br className="hidden lg:block" />
              Bandung
            </h1>

            {/* Deskripsi (Sub-judul) */}
            <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
              BANDUNG THEOLOGICAL SEMINARY
              <span className="block text-slate-900 italic mt-2">
                {/* 'block' memaksa pindah baris, 'mt-2' memberi sedikit jarak ke atas */}
                Menghasilkan pastor-scholars yang berdampak dalam konteks
                pelayanan urban.
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-8">
            {/* Tombol Utama (Solid Red) */}
            <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 flex items-center gap-4 transition-all group shadow-xl shadow-red-900/20 active:scale-95">
              <span className="font-bold text-sm uppercase tracking-widest">
                Daftar Sekarang
              </span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            {/* Tombol Sekunder (Ghost/Outline Style) */}
            <a
              href="#"
              className="px-8 py-4 flex items-center gap-3 text-slate-900 border border-slate-200 hover:border-red-800 hover:text-red-800 transition-all group font-bold text-sm uppercase tracking-widest bg-white shadow-sm"
            >
              Lihat Program Studi
              <MoveRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* --- KOLOM KANAN: Visual dengan Blok Biru (Sesuai Gambar) --- */}
        <div className="relative h-full flex items-center justify-end py-8 lg:py-0">
          {/* Blok Biru Gelap -ape di pojok kanan atas */}
          <div
            className="absolute right-[-35%] bottom-0 w-[85%] 
          h-full bg-slate-900 -z-0 hidden lg:block "
          ></div>

          {/* Kontainer Gambar */}
          <div className="relative z-10 w-full lg:w-[105%] group">
            {/* Frame Putih di sekeliling gambar (opsional agar lebih bersih) */}
            <div className="aspect-[4/5] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src={BangunanSTTB}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                alt="Kampus STTB Bandung"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomePage;
