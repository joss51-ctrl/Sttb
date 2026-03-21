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
} from "lucide-react";
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
import ProgramStudiHomePage from "../components/public/ProgramStudiHomePage";
import KehidupanKampusHomePage from "../components/public/KehidupanKampusHomePage";
import BeritaHomePage from "../components/public/BeritaHomePage";
import HeroHomePage from "../components/public/HeroHomePage";
import DecorativeUnderline from "../components/ui/decorativeunderline";
import Decorativestarline from "../components/ui/decorativestarline";
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
      <HeroHomePage />

      {/* Stats Section / Tentang STTB */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* --- Section: Penjelasan Singkat (Split Layout) --- */}
          <section className="pt-20 pb-32 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* KIRI: Teks Penjelasan */}
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                    Tentang STTB
                  </h2>
                  <DecorativeUnderline />
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
          <section className="bg-slate-40 py-24 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
                  Visi Kami
                </h2>
                <Decorativestarline />
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

          <section className="bg-white px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center">
                <div className="md:w-1/3 text-center md:text-left">
                  <h2 className="text-5xl font-bold text-blue-900 mb-4 leading-tight">
                    Misi <br className="hidden md:block" /> Utama
                  </h2>
                  <DecorativeUnderline />
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
                      <span className="text-6xl font-black text-blue-100 group-hover:text-blue-700 transition-colors duration-300 min-w-[80px]">
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
      <ProgramStudiHomePage />
      <KehidupanKampusHomePage />
      <Testimonials />
      <BeritaHomePage />
    </div>
  );
}
