import { BookOpen, Users, Lightbulb, GraduationCap, Share2, ArrowRight, Heart } from "lucide-react";
export default function LEADPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO HEADER - Cleaned Up Spacing */}
      <section className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-12">
              <div className="text-left">
                <span className="text-red-600 font-bold tracking-[0.3em] text-sm uppercase block mb-2">
                   Leadership Excellence <br /> And Development
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-blue-950 leading-none uppercase tracking-tighter">
                  LEAD <span className="text-red-600">Center</span>
                </h1>
                <div className="h-2 w-32 bg-red-600 rounded-full mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto">
            <p
              className="text-xl text-gray-700 leading-relaxed text-center italic"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: "1.9",
              }}
            >
              STTB Learning, Equipping, And Development (disingkat L.E.A.D.)
              Center adalah pusat pendidikan dan pelatihan nonformal dari
              Sekolah Tinggi Teologi Bandung. Tujuan didirikannya LEAD Center
              adalah untuk "memperlengkapi orang-orang kudus bagi pekerjaan
              pelayanan, bagi pembangunan tubuh Kristus" (Ef 4:12). LEAD Center
              digerakkan dan didasari oleh visi STTB, yaitu "Seluruh Umat
              membawa Seluruh Injil ke Seluruh Dunia".
            </p>
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC VISION SECTION (TWO CARDS) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              
              {/* Card 1: Equipping the Equippers */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-100 group-hover:rotate-6 transition-transform">
                  <GraduationCap className="text-white w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-blue-950 mb-6 uppercase tracking-tight">
                  Equipping the <span className="text-red-600">Equippers</span>
                </h3>
                <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Salah satu buah terpenting dari reformasi adalah kembali dihayatinya keyakinan alkitabiah tentang 
                    <span className="font-bold text-blue-900 italic"> keimaman semua orang percaya (the priesthood of all believers).</span>
                  </p>
                  <p>
                    Peran sekolah teologi adalah memperlengkapi mahasiswa sehingga mereka menjadi lulusan yang dapat memperlengkapi orang percaya lainnya di mana pun mereka diutus.
                  </p>
                  <p className="pt-4 border-t border-slate-50 font-medium italic">
                    Institusi melakukan ini melalui penyelenggaraan <span className="text-blue-900 font-bold underline decoration-red-500 underline-offset-4">program studi formal</span> dengan penghargaan gelar akademik.
                  </p>
                </div>
              </div>

              {/* Card 2: Resourcing the Body of Christ */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100 group-hover:-rotate-6 transition-transform">
                  <Share2 className="text-white w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-blue-950 mb-6 uppercase tracking-tight">
                  Resourcing the <span className="text-red-600">Body of Christ</span>
                </h3>
                <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Menyediakan sumber dan sarana pembelajaran yang dapat dipakai oleh tubuh Kristus untuk memperlengkapi semua orang percaya menjadi murid dan pekerja Kristus.
                  </p>
                  <p>
                    Diperlukan usaha secara intensional dan strategis untuk mengembangkan sarana-sarana pembinaan yang dapat diteruskan demi melipatgandakan pelayan Tuhan.
                  </p>
                  <p className="pt-4 border-t border-slate-50 font-medium italic">
                    Kami melakukannya melalui <span className="text-red-600 font-bold underline decoration-blue-900 underline-offset-4">program studi nonformal</span>, kelas pembinaan, dan pembuatan bahan literatur.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE SECTIONS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto space-y-32">
            
            {/* 1. LEARNING */}
            <div className="flex flex-col md:flex-row gap-10 items-start border-l-[10px] border-red-700 pl-10 py-4 group">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-3xl bg-red-50 flex items-center justify-center group-hover:bg-red-700 transition-colors duration-500">
                  <BookOpen className="w-10 h-10 text-red-700 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-black text-blue-950 mb-6 uppercase tracking-tighter">Layanan Learning</h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                  <p>
                    Program pembelajaran kami dirancang untuk memberikan fondasi teologis yang kuat dan pemahaman mendalam tentang prinsip-prinsip kepemimpinan Alkitabiah.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. EQUIPPING */}
            <div className="flex flex-col md:flex-row gap-10 items-start border-l-[10px] border-sky-500 pl-10 py-4 group">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-3xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-500 transition-colors duration-500">
                  <Lightbulb className="w-10 h-10 text-sky-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-black text-blue-950 mb-6 uppercase tracking-tighter">Layanan Equipping</h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                  <p>
                    Perlengkapan praktis mencakup pelatihan dalam khotbah, konseling, dan administrasi gereja. Mahasiswa mendapatkan kesempatan mempraktikkan keterampilan dalam setting yang mendukung.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. DEVELOPMENT */}
            <div className="flex flex-col md:flex-row gap-10 items-start border-l-[10px] border-blue-900 pl-10 py-4 group">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-950 transition-colors duration-500">
                  <Users className="w-10 h-10 text-blue-900 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-black text-blue-950 mb-6 uppercase tracking-tighter">Layanan Development</h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                  <p>
                    Pengembangan karakter dan kompetensi melalui mentoring personal, coaching berkelanjutan, dan pendampingan dari pemimpin rohani berpengalaman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NARRATIVE FOOTER SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-red-600 font-black uppercase text-xs tracking-[0.3em]">
                  <Heart size={16} fill="currentColor" /> Visi Pelayanan
                </div>
                <div className="space-y-6 text-blue-950 font-medium leading-relaxed">
                  <p className="text-lg">
                    Gereja adalah harapan dunia, terang dunia <span className="text-red-600 font-bold">(Mat 5:13-16)</span>. 
                    Gereja yang berfungsi sepenuhnya dicirikan dengan dihasilkannya pekerja-pekerja yang diperlengkapi dan siap melayani (Ef 4:11-12).
                  </p>
                  <p className="border-l-4 border-red-600 pl-6 italic text-gray-600">
                    Pekerja yang demikian tidak dilahirkan melainkan dibentuk. Diperlukan para pelayan dan sarana pelayanan yang dapat menolong setiap orang untuk berjumpa dengan Kristus, bertumbuh dewasa dalam Kristus, dan diperlengkapi menjadi pekerja Kristus.
                  </p>
                </div>
              </div>

              <div className="bg-blue-950 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <p className="text-sm text-blue-100 leading-relaxed">
                    LEAD Center ingin menjadi bagian dari tubuh Kristus yang menyediakan, menghasilkan, dan mendistribusikan kesempatan dan bahan pembinaan yang diperlukan bagi pelipatgandaan pekerja.
                  </p>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Pelayanan LEAD Center dijiwai oleh gairah untuk melihat nama Tuhan semakin dimuliakan dengan semakin banyaknya orang yang mengenal Dia, mengasihi Dia, dan memuliakan Dia ... di dalam seluruh aspek kehidupan pribadi (Rm 12:1), di antara semua suku bangsa di dunia (Kis 1:8).
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
              </div>

            </div>
            
            <div className="text-center mt-20 border-t border-slate-200 pt-10">
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.5em]">
                Soli Deo Gloria — Mari kita bekerja bersama bagi kemuliaan-Nya!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}