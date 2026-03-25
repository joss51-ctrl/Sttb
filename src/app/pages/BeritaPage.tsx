import React, { useState } from "react";
import { Calendar, ArrowRight, Hash, ChevronDown, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const BeritaHomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeTag, setActiveTag] = useState("Semua");
  const [activeArchive, setActiveArchive] = useState("Semua Waktu");
  
  // State untuk mengontrol dropdown mana yang terbuka
  const [openDropdown, setOpenDropdown] = useState<null | 'archive' | 'tag'>(null);

  const categories = ["Semua", "Civitas", "Akademik", "Kemahasiswaan", "Institusi", "Alumni"];
  const tags = ["Semua", "Paskah", "STTB", "Seminar", "Beasiswa", "Workshop", "Dosen", "Inovasi", "Internasional"];
  const archives = ["Maret 2026", "Februari 2026", "Januari 2026", "Semua Waktu"];

  const newsData = [
    {
      id: 1,
      category: "Civitas",
      tag: "Seminar",
      title: "Seminar Teologi Transformatif 2026: Menjawab Tantangan Zaman",
      publishedAt: "2026-03-15",
      excerpt: "Seminar tahunan ini menghadirkan pembicara internasional untuk membahas peran teologi dalam masyarakat urban modern...",
      featuredImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
    },
    {
      id: 2,
      category: "Kemahasiswaan",
      tag: "Beasiswa",
      title: "Penerimaan Mahasiswa Baru Gelombang 2 Telah Dibuka",
      publishedAt: "2026-03-10",
      excerpt: "Bergabunglah bersama komunitas pembelajar yang transformatif. Dapatkan beasiswa khusus bagi aktivis gereja...",
      featuredImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    },
    {
      id: 3,
      category: "Institusi",
      tag: "STTB",
      title: "STTB Menjalin Kerja Sama Internasional dengan University of Oxford",
      publishedAt: "2026-02-28",
      excerpt: "Kolaborasi ini mencakup pertukaran pelajar dan riset bersama dalam bidang studi biblika dan etika Kristen...",
      featuredImage: "https://images.unsplash.com/photo-1541339907198-e0875ebafe3?q=80&w=800",
    },
  ];

  const featuredTop = newsData[0];
  const sideTop = newsData.slice(1, 3);

  const filteredAllNews = newsData.filter((item) => {
    const matchCat = activeCategory === "Semua" || item.category === activeCategory;
    const matchTag = activeTag === "Semua" || item.tag === activeTag;
    return matchCat && matchTag;
  });

  // Fungsi toggle dropdown agar tidak terbuka bersamaan
  const toggleDropdown = (name: 'archive' | 'tag') => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* SECTION 1: BERITA TERKINI */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="text-left">
              <h2 className="text-4xl font-extrabold text-blue-950 mb-4 leading-tight uppercase tracking-tighter">
                Berita & Kegiatan <span className="text-red-600">Terkini</span>
              </h2>
              <div className="h-1.5 w-20 bg-red-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/8] overflow-hidden">
                <img
                  src={featuredTop.featuredImage}
                  alt={featuredTop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <Calendar className="w-4 h-4 text-red-600" />
                  {new Date(featuredTop.publishedAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
                </div>
                <h3 className="text-3xl font-black text-blue-950 mb-4 group-hover:text-red-600 transition leading-tight uppercase tracking-tighter">
                  {featuredTop.title}
                </h3>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">{featuredTop.excerpt}</p>
                <Link to={`/berita/${featuredTop.id}`} className="text-red-600 font-black flex items-center gap-2 uppercase text-xs tracking-widest border-b-2 border-red-50 w-fit pb-1 hover:border-red-600 transition-all">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            <div className="flex flex-col gap-8">
              {sideTop.map((item) => (
                <article key={item.id} className="flex gap-5 items-start group border-b border-gray-100 pb-6 last:border-0">
                  <img
                    src={item.featuredImage}
                    alt={item.title}
                    className="w-28 h-24 object-cover rounded-2xl flex-shrink-0 shadow-md group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{item.category}</span>
                    <h4 className="font-bold text-blue-950 text-sm group-hover:text-red-600 transition line-clamp-2 mt-1 uppercase leading-snug">
                      {item.title}
                    </h4>
                    <Link to={`/berita/${item.id}`} className="text-red-600 text-[10px] font-black mt-2 inline-flex items-center gap-1 uppercase tracking-widest">
                      Detail <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SEARCH & FILTER BAR */}
      <section className="sticky top-0 z-40 bg-white border-y border-slate-100 shadow-sm py-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Kategori Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all border ${
                    activeCategory === cat
                      ? "bg-blue-950 border-blue-950 text-white shadow-lg"
                      : "bg-slate-50 border-slate-100 text-slate-500 hover:border-red-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Dropdown Group */}
            <div className="flex items-center gap-3">
              
              {/* Dropdown Tags */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('tag')}
                  className={`flex items-center gap-3 px-5 py-2 border rounded-xl text-[11px] font-bold transition-all ${
                    activeTag !== "Semua" ? "border-red-600 text-red-600 bg-red-50" : "bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-900"
                  }`}
                >
                  <Tag className="w-3.5 h-3.5" />
                  {activeTag === "Semua" ? "Pilih Tag" : activeTag}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'tag' ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'tag' && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    <div className="max-h-60 overflow-y-auto">
                      {tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => { setActiveTag(tag); setOpenDropdown(null); }}
                          className={`w-full text-left px-5 py-3 text-[11px] font-bold transition-colors border-b border-slate-50 last:border-0 flex items-center gap-2 ${
                            activeTag === tag ? "bg-red-50 text-red-600" : "hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          <Hash size={12} className={activeTag === tag ? "text-red-600" : "text-slate-300"} />
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dropdown Archive */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('archive')}
                  className={`flex items-center gap-3 px-5 py-2 border rounded-xl text-[11px] font-bold transition-all ${
                    activeArchive !== "Semua Waktu" ? "border-red-600 text-red-600 bg-red-50" : "bg-slate-50 border-slate-200 text-slate-700 hover:border-red-600"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {activeArchive}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'archive' ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'archive' && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    {archives.map((month) => (
                      <button
                        key={month}
                        onClick={() => { setActiveArchive(month); setOpenDropdown(null); }}
                        className={`w-full text-left px-5 py-3 text-[11px] font-bold transition-colors border-b border-slate-50 last:border-0 ${
                            activeArchive === month ? "bg-red-50 text-red-600" : "hover:bg-slate-50 text-slate-700"
                          }`}
                      >
                        {month}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SEMUA BERITA */}
      <section className="py-20 px-4 bg-slate-50/30">
        <div className="container mx-auto max-w-7xl">
          {/* Header Status Filter jika aktif */}
          {(activeCategory !== "Semua" || activeTag !== "Semua" || activeArchive !== "Semua Waktu") && (
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Menampilkan hasil untuk: 
                <span className="font-bold text-blue-950 ml-1">
                  {activeCategory !== "Semua" && `${activeCategory}`}
                  {activeTag !== "Semua" && ` • #${activeTag}`}
                  {activeArchive !== "Semua Waktu" && ` • ${activeArchive}`}
                </span>
              </p>
              <button 
                onClick={() => { setActiveCategory("Semua"); setActiveTag("Semua"); setActiveArchive("Semua Waktu"); }}
                className="text-[10px] font-black text-red-600 uppercase tracking-widest hover:underline"
              >
                Reset Filter
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredAllNews.length > 0 ? (
              filteredAllNews.map((news) => (
                <article key={news.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img src={news.featuredImage} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-black text-blue-900 uppercase tracking-widest shadow-sm">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                      <Calendar size={13} className="text-red-600" />
                      {news.publishedAt}
                    </div>
                    <h3 className="text-md font-bold text-blue-950 mb-3 group-hover:text-red-600 transition-colors line-clamp-2 uppercase leading-tight tracking-tight">
                      {news.title}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {news.excerpt}
                    </p>
                    <Link to={`/berita/${news.id}`} className="inline-flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-widest group/btn border-b border-transparent hover:border-red-600 pb-0.5 w-fit transition-all">
                      Detail Berita 
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 italic">Tidak ada berita yang ditemukan dengan filter ini.</p>
              </div>
            )}
          </div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 bg-blue-950 text-white font-black rounded-2xl hover:bg-red-600 transition-all shadow-xl shadow-blue-100 uppercase text-[10px] tracking-[0.2em]">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeritaHomePage;