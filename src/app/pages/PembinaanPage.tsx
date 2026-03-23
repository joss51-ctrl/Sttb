import { useState, useEffect } from "react";
import {
  ChevronRight,
  Users,
  Church,
  Heart,
  BookOpen,
  Sparkles,
  Hand,
  Target,
} from "lucide-react";
import KelompokPemuridan from "../components/public/KelompokPemuridan";
import FormasiSection from "../components/public/FormasiSection";

export default function PembinaanPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1722962674485-d34e69a9a406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwYmlibGUlMjB0aGVvbG9neXxlbnwxfHx8fDE3NzMyNDY1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Pembinaan Mahasiswa"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Red accent corner */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-800 rounded-br-[3rem] opacity-20"></div>
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight tracking-tighter uppercase mb-6">
                  Pembinaan <br />
                  <span className="text-blue-900">Mahasiswa</span>
                </h2>
                <div
                  className="space-y-3 text-gray-800"
                  style={{ lineHeight: "1.6" }}
                >
                  <p className="flex items-start gap-2">
                    <span className="text-blue-800 font-bold mt-1">•</span>
                    <span>
                      <strong>Mindset Sovreign:</strong>
                      <br />
                      Untuk pembinaan dan pengembangan karakter
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-800 font-bold mt-1">•</span>
                    <span>
                      <strong>Pembekalan:</strong>
                      <br />
                      Melalui pelatihan melalui magang secara berkala
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold mt-1">•</span>
                    <span>
                      <strong>Pembentukan:</strong>
                      <br />
                      Komunitas mahasiswa yang solid dan saling mendukung
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold mt-1">•</span>
                    <span>
                      <strong>Kebiasaan & Disiplin:</strong>
                      <br />
                      Melalui program yang terstruktur
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KOMUNITAS Section - Red Background with Split Layout */}
      <section id="komunitas" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Container Utama: Menggunakan Grid 3 Kolom untuk Teks & Gambar */}
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* KOLOM 1 (KIRI): Judul & Pesan Utama */}
              <div className="bg-blue-800 text-white p-8 md:p-12 rounded-3xl lg:rounded-r-none flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-8 leading-tight uppercase tracking-tight text-red-600">
                  Kehidupan <span className="text-white">Mahasiswa</span>
                </h2>
                <p className="text-xl font-semibold leading-relaxed border-l-4 border-red-500 pl-4">
                  Sepanjang masa studi, mahasiswa akan hidup bersama, belajar
                  bersama, bertumbuh bersama dalam komunitas.
                </p>
                <p className="mt-8 text-blue-100/90 leading-relaxed italic">
                  Semua mahasiswa penuh waktu dalam program S.Th., S.Pd.K., dan
                  M.Th. matrikulasi yang belum menikah wajib tinggal di dalam
                  asrama.
                </p>
              </div>

              {/* KOLOM 2 (TENGAH): Detail & Administrasi */}
              <div className="bg-blue-900 text-white p-8 md:p-12 flex flex-col justify-center border-x border-blue-800/30">
                <div className="space-y-6 text-blue-50/90 leading-relaxed antialiased">
                  <p>
                    Sebagai bagian dari komunitas, setiap mahasiswa perlu
                    belajar saling mengasihi, saling menolong, dan saling
                    menjaga dalam mengelola dan membentuk kehidupan kampus dan
                    asrama yang kondusif. "Panduan Kehidupan Mahasiswa STTB"
                    dibuat untuk membantu mahasiswa belajar dan bertumbuh di
                    kampus dan asrama.
                  </p>
                  <div className="pt-6 border-t border-blue-700/50">
                    <p className="text-blue-50/90 leading-relaxed antialiased">
                      Bidang kemahasiswaan STTB mengatur segala sesuatu yang
                      bersangkutan dengan pembinaan dan kehidupan sehari-hari
                      seluruh mahasiswa. Bidang kemahasiswaan dipimpin oleh
                      Waket III dengan dibantu oleh staf, kepala asrama,
                      pembimbing pastoral, pembina pemuridan, konselor, senat,
                      ketua lorong, ketua kamar, pengurus angkatan, dan bagian
                      dapur.
                    </p>
                  </div>
                </div>
              </div>

              {/* KOLOM 3 (KANAN): Gambar Sejajar */}
              <div className="relative min-h-[400px] lg:min-h-full">
                <img
                  src="https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbW11bml0eSUyMGRpc2N1c3Npb24lMjBncm91cHxlbnwxfHx8fDE3NzMyNDYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Komunitas Mahasiswa"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl lg:rounded-l-none shadow-2xl"
                />
                {/* Overlay gradasi tipis agar menyatu dengan kolom teks */}
                <div className="absolute inset-0 bg-blue-900/10 rounded-3xl lg:rounded-l-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* KAPEL Section - White Background */}
      <section id="kapel" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 1. HEADER SECTION: Intro & Judul */}
            <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
              <div>
                <div className="h-1.5 w-20 bg-blue-800 mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight tracking-tighter uppercase">
                  Kapel & Forum <br />
                  <span className="text-blue-900">Pembinaan</span>
                </h2>
              </div>
              <div className="text-gray-700 text-lg leading-relaxed antialiased">
                <p className="border-l-4 border-blue-100 pl-6 italic">
                  "Ibadah kapel adalah momen penting dalam kehidupan mahasiswa
                  STTB untuk berkumpul bersama dalam penyembahan dan
                  mendengarkan Firman Tuhan."
                </p>
              </div>
            </div>

            {/* 2. VISUAL SECTION: Hero Image dengan Aksen */}
            <div className="relative mb-20 group">
              <img
                src="https://images.unsplash.com/photo-1712056003432-34587d84b394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaGFwZWwlMjB3b3JzaGlwJTIwc2VydmljZXxlbnwxfHx8fDE3NzMyNDYwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kapel STTB"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-3xl"></div>

              {/* Floating Note di atas gambar */}
              <div className="absolute -bottom-6 right-10 bg-blue-900 text-white p-8 rounded-2xl shadow-xl max-w-sm hidden md:block border-b-4 border-red-600">
                <p className="text-sm leading-relaxed opacity-90">
                  Setiap sesi kapel dirancang untuk memberikan pengalaman ibadah
                  yang bermakna, dengan kotbah relevan, musik pujian, dan waktu
                  refleksi doa bersama.
                </p>
              </div>
            </div>

            {/* 3. CONTENT GRID: Detail Program & Formasi */}
            <div className="grid lg:grid-cols-3 gap-8 mt-24">
              {/* Format Ibadah */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  Format Ibadah
                </h3>
                <ul className="space-y-4 text-gray-600">
                  {[
                    "Ibadah Liturgis",
                    "Ibadah Kontemporer",
                    "Ibadah Kontemplatif",
                    "Persekutuan Doa Misi",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4 Bidang Transformasi */}
              <div className="lg:col-span-2 bg-blue-900 text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 tracking-tight">
                    4 Bidang Transformasi
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                    {[
                      {
                        t: "Formasi Pengajaran",
                        d: "Bertumbuh dalam pengenalan akan Tuhan & Firman-Nya.",
                      },
                      {
                        t: "Formasi Spiritual",
                        d: "Bertumbuh dalam hubungan pribadi dengan Tuhan.",
                      },
                      {
                        t: "Formasi Karakter",
                        d: "Bertumbuh dalam karakter serupa Kristus.",
                      },
                      {
                        t: "Formasi Pelayanan",
                        d: "Bertumbuh dalam pelayanan di tubuh Kristus.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group border-l border-white/20 pl-5 hover:border-red-500 transition-colors"
                      >
                        <h4 className="text-red-600 font-bold text-xs uppercase tracking-widest mb-1 group-hover:text-red-500">
                          {item.t}
                        </h4>
                        <p className="text-blue-50/80 text-sm leading-snug">
                          {item.d}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Dekorasi halus */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              </div>
            </div>

            {/* 4. FOOTER NOTE: Detail Administratif */}
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-800">
              <p className="text-sm text-blue-900 leading-relaxed">
                Semua mahasiswa yang tinggal di asrama (termasuk yang sedang
                menulis skripsi) wajib mengikuti kapel sesuai jadwal. Mahasiswa
                di luar asrama diwajibkan mengikuti pada hari tertentu dan
                disarankan untuk hari lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PASTORAL Section  */}
      <section id="pastoral" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 space-y-8">
                <img
                  src="https://images.unsplash.com/photo-1555069855-e580a9adbf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3JhbCUyMGNvdW5zZWxpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc3MzI0NjA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Pastoral Care"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-700">
                  <h3 className="font-bold text-blue-900 mb-3">
                    Beberapa kondisi khusus selama studi di STTB akan menjadi
                    perhatian dari pembimbing pastoral. Kondisi-kondisi tersebut
                    antara lain:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">•</span>
                      <span>
                        Gangguan Kesehatan (gawat darurat, rawat inap)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">•</span>
                      <span>
                        Umpan balik karakter (penghargaan, teguran, peringatan
                        dari kemahasiswaan)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-700 font-bold">•</span>
                      <span>
                        Permasalahan psikologis (konseling atau referal ke
                        konselor)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <div className="h-1.5 w-20 bg-blue-800 mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight tracking-tighter uppercase mb-6">
                  Kelompok
                  <br />
                  <span className="text-blue-900">Pastoral</span>
                </h2>
                <div
                  className="space-y-6 text-gray-700"
                  style={{ lineHeight: "1.6", maxWidth: "650px" }}
                >
                  <p>
                    Kelompok pastoral merupakan sarana untuk mendampingi
                    mahasiswa secara pembelajaran-akademik, kerohanian-karakter,
                    dan pelayanan-vokasional.
                  </p>
                  <p>
                    Setiap kelompok akan dipimpin oleh seorang pembimbing
                    pastoral, yang menjadi orangtua rohani yang mendampingi
                    sejumlah mahasiswa dalam satu angkatan yang sama sepanjang
                    empat tahun studi di STTB dan satu tahun praktik pelayanan.
                  </p>
                  <p>
                    Pertemuan kelompok dilakukan dua minggu sekali. Pertemuan
                    pribadi-ke-pribadi dilakukan berdasarkan keperluan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          ```
        </div>
      </section>

      <KelompokPemuridan />
      <FormasiSection />
      {/* PELAYANAN Section - Image Focus */}
      <section id="pelayanan" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div>
                <div className="h-1.5 w-20 bg-blue-800 mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight tracking-tighter uppercase mb-6">
                  Kelompok
                  <br />
                  <span className="text-blue-900">Pastoral</span>
                </h2>
                <div
                  className="space-y-6 text-gray-700"
                  style={{ lineHeight: "1.6", maxWidth: "650px" }}
                >
                  <p>
                    Setiap mahasiswa STTB diberikan kesempatan untuk terlibat
                    dalam berbagai bentuk pelayanan praktis sebagai bagian
                    integral dari proses pembelajaran. Melalui pelayanan,
                    mahasiswa mengaplikasikan teori yang dipelajari di kelas ke
                    dalam konteks kehidupan nyata.
                  </p>
                  <p>
                    Program pelayanan mencakup magang di gereja-gereja lokal,
                    pelayanan sosial di komunitas, penginjilan, pemuridan,
                    pelayanan anak dan remaja, serta berbagai bentuk pelayanan
                    lainnya yang disesuaikan dengan panggilan dan minat setiap
                    mahasiswa.
                  </p>
                  <div className="mt-8 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
                    <h3 className="font-bold text-blue-900 mb-3">
                      Praktik Pelayanan:
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>
                          Mission Education & Exposure Training (MEET)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>Praktik Pelayanan Akhir Pekan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>Praktik Pelayanan Jangka Pendek</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                        <span>
                          Praktik Pelayanan Jangka Panjang (1 Tahun)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyaW5nfGVufDF8fHx8MTc3MzI0NjA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Pelayanan Mahasiswa"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
