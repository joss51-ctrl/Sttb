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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tentang STTB
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 max-w-6xl mx-auto">
            {[
              { value: "3", title: "Fakultas" },
              { value: "8", title: "Program Studi" },
              { value: "2", title: "Program Sarjana" },
              { value: "6", title: "Program Magister" },
              { value: "30.000", title: "Alumni & Mahasiswa" },
              { value: "100+", title: "Dosen Pengajar" },
              { value: "#1.904", title: "Peringkat Indonesia" },
              { value: "#8.742", title: "Peringkat Asia" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <span className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-2">
                  {item.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-blue-100 leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
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
