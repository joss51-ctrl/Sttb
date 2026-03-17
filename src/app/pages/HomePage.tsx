"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Calendar,
  BookOpen,
  Users,
  Award,
  Quote,
} from "lucide-react"; // Gabungkan import lucide
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { mockApi } from "../../utils/mockApi";
import type { ContentItem } from "../../types";
import BangunanSTTB from "@/assets/BangunanSTTB.webp";
import DosenPengajar from "@/assets/TentangKami.webp";
import Testimonials from "../components/public/Testimonials";

export default function HomePage() {
  const [latestNews, setLatestNews] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const content = await mockApi.getPublicContent();
        const latest = content
          .sort(
            (a, b) =>
              new Date(b.publishedAt || "").getTime() -
              new Date(a.publishedAt || "").getTime(),
          )
          .slice(0, 3);
        setLatestNews(latest);
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={BangunanSTTB}
            alt="Kampus STTB"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight text-left">
              Selamat Datang di Sekolah Tinggi Teologi Bandung
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed font-medium text-left">
              Membentuk pemimpin rohani yang berkualitas untuk melayani gereja
              dan masyarakat secara transformatif.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg active:scale-95">
              Daftar Sekarang
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-md font-bold border border-white/30 transition-all">
              Lihat Program Studi
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section / Tentang STTB */}
      <section className="py-20  text-">
        <div className="container mx-auto px-4">
          {/* --- Section: Penjelasan Singkat (Split Layout) --- */}
          <section className="bg-white pt-20 pb-32 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* KIRI: Teks Penjelasan */}
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                    Tentang STTB
                  </h2>
                  {/* Underline Dekoratif (Dot & Line) */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-1.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-1.5 bg-yellow-400 rounded-full"></div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Sekolah Tinggi Teologi Bandung (STTB) adalah institusi
                    pendidikan teologi yang berkomitmen membentuk pemimpin
                    rohani berkualitas. Dengan kurikulum yang relevan dan
                    lingkungan akademis yang inklusif, kami membimbing setiap
                    mahasiswa untuk bertumbuh secara spiritual dan intelektual.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Berdiri sejak tahun 1992, kami terus bertransformasi untuk
                    melayani gereja dan masyarakat di tengah perubahan zaman
                    yang dinamis.
                  </p>
                </div>

                {/* KANAN: Gambar */}
                <div className="md:w-1/2 relative">
                  {/* Dekorasi Bingkai Belakang (Opsional) */}
                  <div className="absolute -top-4 -right-4 w-full h-full border-2 border-yellow-200 rounded-2xl -z-10"></div>
                  <img
                    src={DosenPengajar}
                    alt="Dosen Pengajar"
                    className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* --- Section: Floating Stats (Melayang di Antara Section) --- */}
          <section className="relative z-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-10 -mt-20 border border-gray-50">
                {/* Item 1 */}
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-900 mb-1">8</h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Program Studi
                  </p>
                </div>

                {/* Item 2 - Border kiri hanya muncul di desktop */}
                <div className="text-center md:border-l border-gray-100">
                  <h3 className="text-4xl font-bold text-blue-900 mb-1">
                    30rb+
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Mahasiswa & Alumni
                  </p>
                </div>

                {/* Item 3 */}
                <div className="text-center md:border-l border-gray-100">
                  <h3 className="text-4xl font-bold text-blue-900 mb-1">34</h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Tahun Melayani
                  </p>
                </div>

                {/* Item 4 */}
                <div className="text-center md:border-l border-gray-100">
                  <h3 className="text-4xl font-bold text-blue-900 mb-1">50+</h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Dosen Pengajar
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- Section Visi Kami (Clean White Edition) --- */}
          <section className="bg-white py-24 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
                  Visi Kami
                </h2>
                {/* Underline Dekoratif Dot & Line */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-12 h-0.5 bg-yellow-400 rounded-full"></div>
                  <span className="flex-shrink text-yellow-500">✦</span>{" "}
                  <div className="w-12 h-0.5 bg-yellow-400 rounded-full"></div>
                </div>
              </div>

              {/* Grid Visi */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700">
                    Pastor-Scholar
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Memiliki{" "}
                    <span className="font-semibold text-blue-900">
                      jiwa gembala
                    </span>{" "}
                    (kepemimpinan yg melayani) dan sekaligus{" "}
                    <span className="font-semibold text-blue-900">
                      pembelajar
                    </span>{" "}
                    dengan daya nalar kritis intelektual Kristen dan kemampuan
                    berkontribusi terhadap ilmu pengetahuan.
                  </p>
                </div>

                <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700">
                    Berita Injil yang Utuh
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kuasa Injil yang mampu{" "}
                    <span className="font-semibold text-blue-900">
                      mentransformasi seluruh aspek hidup
                    </span>{" "}
                    manusia dan seluruh ciptaan yang sudah jatuh dalam dosa (
                    <span className="italic">total depravity</span>).
                  </p>
                </div>

                <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700">
                    Seluruh Umat Allah
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kuasa penebusan Kristus dinyatakan melalui hidup setiap
                    pengikut Kristus, baik di tengah keluarga, gereja, maupun
                    masyarakat.
                  </p>
                </div>

                <div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700">
                    Masyarakat Urban
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fokus mempersiapkan mahasiswa untuk{" "}
                    <span className="font-semibold text-blue-900">
                      melayani masyarakat perkotaan
                    </span>
                    , tanpa menutup kemungkinan tuntunan Tuhan di tempat lain.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-10 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center">
                <div className="md:w-1/3 text-center md:text-left">
                  <h2 className="text-4xl font-extrabold text-blue-900 mb-4 leading-tight">
                    Misi <br className="hidden md:block" /> Utama
                  </h2>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-1.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-1.5 bg-yellow-400 rounded-full"></div>
                  </div>{" "}
                  <p className="text-gray-500">
                    Langkah nyata kami dalam mewujudkan visi transformasi bagi
                    masyarakat.
                  </p>
                </div>

                <div className="md:w-2/3 space-y-12">
                  {[
                    "Mempersiapkan pastor-scholar yang transfomatif untuk melayani dalam konteks urban.",
                    "Memberdayakan seluruh umat Allah untuk menghadirkan Injil seutuhnya di tengah konteks masyarakat urban melalui penelitian dan pendidikan non-formal.",
                    "Mengembangkan tim dosen, struktur organisasi dan keuangan, serta kemitraan untuk mendukung pencapaian visi STTB.",
                  ].map((misi, index) => (
                    <div key={index} className="flex gap-8 items-center group">
                      <span className="text-6xl font-black text-blue-100 group-hover:text-blue-900 transition-colors duration-300 min-w-[80px]">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium group-hover:text-blue-900 transition-colors">
                          {misi}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/campus-tour-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Konten di Atas Video */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Jelajahi Kehidupan di STTB
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Lihat lebih dekat fasilitas kami dan rasakan atmosfer belajar yang
            transformatif di jantung kota Bandung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full transition-all">
              Mulai Virtual Tour
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-full transition-all">
              Lihat Fasilitas
            </button>
          </div>
        </div>
      </section>

      {/* Section Fasilitas Singkat di Bawahnya */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item Fasilitas 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-yellow-400">
            <h4 className="font-bold text-xl text-blue-900 mb-2">
              Perpustakaan Digital
            </h4>
            <p className="text-gray-600 text-sm">
              Akses ke ribuan jurnal teologi internasional dan koleksi buku
              fisik yang lengkap.
            </p>
          </div>
          {/* ... Fasilitas lainnya */}
        </div>
      </section>

      {/* Panggil Komponen Testimonials di sini */}
      <Testimonials />

      {/* Latest News & Events */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-left">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Berita & Kegiatan Terkini
              </h2>
              <p className="text-gray-600">Informasi terbaru dari STTB</p>
            </div>
            <Link to="/berita">
              <Button variant="outline">
                Lihat Semua <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <div className="aspect-video bg-gray-200 animate-pulse" />
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {latestNews.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {item.featuredImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.featuredImage}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(item.publishedAt || "").toLocaleDateString(
                          "id-ID",
                          { year: "numeric", month: "long", day: "numeric" },
                        )}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 text-left">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-left">
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {item.excerpt || item.content}
                    </p>
                    <Button variant="link" className="p-0">
                      Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
