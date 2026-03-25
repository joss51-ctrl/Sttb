import React from "react";
import { Calendar, Globe, Target } from "lucide-react";

const FormasiSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORMASI SPIRITUAL */}
          <div className="group">
            <div className="flex items-end gap-3 mb-8">
              <div className="bg-red-600 w-2 h-16"></div>
              <div>
                <span className="text-red-600 font-bold tracking-widest text-4xl uppercase">
                  Formasi
                </span>
                <h2 className="text-5xl font-bold text-blue-900 leading-none">
                  SPIRITUAL
                </h2>
              </div>
            </div>

            <div className="grid gap-6">
              {/* Card Waktu Teduh */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  Waktu Teduh Pribadi
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bersekutu dengan Tuhan secara pribadi melalui firman dan doa.
                  Wajib dilakukan pagi hari untuk membangun pondasi spiritual
                  yang kuat.
                </p>
              </div>

              {/* Card Retreat dengan Step/Timeline */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 overflow-hidden relative transition-all duration-300 hover:shadow-xl">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Calendar size={20} className="text-red-600" /> Agenda Retreat
                </h3>
                <div className="space-y-4 relative">
                  <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-100"></div>

                  {[
                    {
                      title: "Awal Studi",
                      desc: "Persiapan menjadi mahasiswa teologi",
                    },
                    {
                      title: "Mini Retreat",
                      desc: "Dilakukan hampir setiap semester",
                    },
                    {
                      title: "Akhir Studi",
                      desc: "Persiapan praktik pelayanan 1 tahun",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-8 group/item">
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-red-600 group-hover/item:bg-red-600 transition-colors"></div>
                      <h4 className="text-sm font-bold text-slate-800">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FORMASI MISIONAL */}
          <div className="group">
            <div className="flex items-end gap-3 mb-8">
              <div className="bg-blue-900 w-2 h-16"></div>
              <div>
                <span className="text-red-600 font-bold tracking-widest text-4xl uppercase">
                  Formasi
                </span>
                <h2 className="text-5xl font-bold text-blue-900 leading-none">
                  MISIONAL
                </h2>
              </div>
            </div>

            <div className="grid gap-6">
              {/* Card Pengantar Misional */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  Visi Misioner
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Dilaksanakan untuk menolong mahasiswa mendapatkan wawasan dan
                  keterampilan untuk bermisi, pengalaman langsung di ladang
                  misi, dan pembentukan gaya hidup misioner.
                </p>
              </div>

              {/* Card MEET Program */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-bold text-blue-900">
                    MEET Program (Mission Education & Exposure Training)
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Pengalaman langsung di ladang misi selama satu bulan penuh
                      yang dilaksanakan pada akhir tahun kedua perkuliahan.
                    </p>
                  </div>

                  <ul className="text-xs text-slate-500 space-y-2 ml-1">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                      Wawasan & Keterampilan Bermisi
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                      Praktik Lapangan (Exposure)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormasiSection;
