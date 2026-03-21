import React, { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DecorativeUnderline from "../ui/decorativeunderline";

const BeritaHomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = [
    "Semua",
    "Civitas",
    "Akademik",
    "Kemahasiswaan",
    "Institusi",
    "Kegiatan",
    "Alumni",
  ];

  const newsData = [
    {
      id: 1,
      category: "Civitas",
      title: "Seminar Teologi Transformatif 2026: Menjawab Tantangan Zaman",
      publishedAt: "2026-03-15",
      excerpt:
        "Seminar tahunan ini menghadirkan pembicara internasional untuk membahas peran teologi dalam masyarakat urban modern...",
      featuredImage:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Kemahasiswaan",
      title: "Penerimaan Mahasiswa Baru Gelombang 2 Telah Dibuka",
      publishedAt: "2026-03-10",
      excerpt:
        "Bergabunglah bersama komunitas pembelajar yang transformatif. Dapatkan beasiswa khusus bagi aktivis gereja...",
      featuredImage:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Institusi",
      title:
        "STTB Menjalin Kerja Sama Internasional dengan University of Oxford",
      publishedAt: "2026-02-28",
      excerpt:
        "Kolaborasi ini mencakup pertukaran pelajar dan riset bersama dalam bidang studi biblika dan etika Kristen...",
      featuredImage:
        "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // Filter
  const filteredNews =
    activeCategory === "Semua"
      ? newsData
      : newsData.filter((item) => item.category === activeCategory);

  // Pisahkan featured & lainnya
  const featuredNews = filteredNews[0];
  const otherNews = filteredNews.slice(1);

  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold text-blue-950 mb-4 leading-tight">
              Berita & Kegiatan <span className="text-red-600">Terkini</span>
            </h2>
            <DecorativeUnderline />

            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-200"
                      : "bg-white border-gray-200 text-gray-500 hover:border-red-600 hover:text-red-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/berita"
            className="hidden md:flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all"
          >
            Lihat Semua Berita <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Layout Baru */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT - Featured */}
          {featuredNews && (
            <article className="lg:col-span-2 group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/7] overflow-hidden">
                <img
                  src={featuredNews.featuredImage}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                  <Calendar className="w-4 h-4 text-red-500" />
                  {new Date(featuredNews.publishedAt).toLocaleDateString(
                    "id-ID",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </div>

                <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-red-600 transition">
                  {featuredNews.title}
                </h3>

                <p className="text-gray-500 mb-6">{featuredNews.excerpt}</p>

                <Link
                  to={`/berita/${featuredNews.id}`}
                  className="text-red-600 font-bold flex items-center gap-2"
                >
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          )}

          {/* RIGHT - List */}
          <div className="flex flex-col gap-6">
            {otherNews.length > 0 ? (
              otherNews.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 items-start group border-b pb-4"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.featuredImage}
                    alt={item.title}
                    className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Content */}
                  <div>
                    <h4 className="font-bold text-blue-950 text-sm group-hover:text-red-600 transition line-clamp-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 text-xs line-clamp-2 mt-1">
                      {item.excerpt}
                    </p>

                    <Link
                      to={`/berita/${item.id}`}
                      className="text-red-600 text-xs font-semibold mt-1 inline-block"
                    >
                      Baca →
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-gray-400 text-sm">
                Tidak ada berita lainnya.
              </div>
            )}
          </div>
        </div>

        {/* Mobile Button */}
        <div className="mt-12 md:hidden flex justify-center">
          <Link
            to="/berita"
            className="px-8 py-3 bg-blue-950 text-white font-bold rounded-full"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeritaHomePage;
