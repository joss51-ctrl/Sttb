import React, { useState } from "react";
import { Calendar, ArrowRight, Hash, ChevronDown, PlayCircle, FileText, Book, ExternalLink, GraduationCap, Newspaper, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const MediaPage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeTopic, setActiveTopic] = useState("Semua");
  const [openDropdown, setOpenDropdown] = useState<null | 'topic'>(null);

  const categories = ["Semua", "Artikel", "Video"];
  const topics = ["Semua", "Teologi", "Misi", "Kepemimpinan", "Pendidikan", "Keluarga", "Sejarah"];

  const mediaData = [
    {
      id: 1,
      format: "Video",
      topic: "Misi",
      title: "City TransForMission #02: Fokus Strategis Misi Urban",
      publishedAt: "2026-03-20",
      featuredImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
      link: "/media/video-1"
    },
    {
      id: 2,
      format: "Artikel",
      topic: "Teologi",
      title: "Integrasi Iman dan Ilmu: Menuju Pendekatan yang Holistik",
      publishedAt: "2026-03-12",
      featuredImage: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800",
      link: "/media/artikel-1"
    },
    {
      id: 3,
      format: "Video",
      topic: "Pendidikan",
      title: "Unboxing Lifeguide Bible Studies: Bahan Pemuridan Terbaru",
      publishedAt: "2026-03-05",
      featuredImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
      link: "/media/video-2"
    },
    {
      id: 4,
      format: "Artikel",
      topic: "Sejarah",
      title: "Mengenal Siapa STTB dan Visi Nya (Profil STTB 2026)",
      publishedAt: "2026-02-28",
      featuredImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
      link: "/media/buletin-1"
    },
  ];

  const resourceGroups = [
    {
      title: "Perpustakaan",
      icon: <Book className="w-4 h-4" />,
      links: [
        { label: "Katalog Fisik", href: "https://katalog.sttb.ac.id", isExternal: true },
        { label: "EBSCO Host", href: "#", isExternal: true },
        { label: "Jurnal ATLA", href: "#", isExternal: true },
      ]
    },
    {
      title: "Jurnal & Publikasi",
      icon: <FileText className="w-4 h-4" />,
      links: [
        { label: "Jurnal STULOS", href: "/stulos" },
        { label: "OJS (Open Journal System)", href: "https://ojs.sttb.ac.id", isExternal: true },
        { label: "Buletin STTB", href: "/buletin" },
        { label: "Monograf", href: "/monograf" },
      ]
    }
  ];

  const filteredMedia = mediaData.filter((item) => {
    const matchCat = activeCategory === "Semua" || item.format === activeCategory;
    const matchTopic = activeTopic === "Semua" || item.topic === activeTopic;
    return matchCat && matchTopic;
  });

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* HEADER SECTION */}
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10">
            <h1 className="text-5xl font-black text-blue-950 uppercase tracking-tighter mb-4">
              Format <span className="text-red-600">Media</span>
            </h1>
            <div className="h-2 w-24 bg-red-600 rounded-full"></div>
          </div>

          {/* FILTER BAR */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
            {/* Format Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all border ${
                    activeCategory === cat
                      ? "bg-blue-950 border-blue-950 text-white shadow-lg shadow-blue-200"
                      : "bg-white border-slate-200 text-slate-500 hover:border-red-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Topic Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'topic' ? null : 'topic')}
                className={`flex items-center gap-4 px-6 py-2.5 bg-white border rounded-2xl text-xs font-bold transition-all ${
                  activeTopic !== "Semua" ? "border-red-600 text-red-600" : "border-slate-200 text-slate-700 shadow-sm"
                }`}
              >
                <Layers className="w-4 h-4 text-red-600" />
                {activeTopic === "Semua" ? "Pilih Topik" : activeTopic}
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'topic' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'topic' && (
                <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="max-h-64 overflow-y-auto">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => { setActiveTopic(topic); setOpenDropdown(null); }}
                        className={`w-full text-left px-6 py-3.5 text-xs font-bold transition-colors border-b border-slate-50 last:border-0 flex items-center gap-3 ${
                          activeTopic === topic ? "bg-red-50 text-red-600" : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <Hash size={14} className={activeTopic === topic ? "text-red-600" : "text-slate-300"} />
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SIDEBAR LEFT (Sumber Daya) */}
            <div className="lg:col-span-3 space-y-8">
              <div className="sticky top-24 space-y-8">
                {resourceGroups.map((group, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                      <div className="p-2 bg-white rounded-xl text-red-600 shadow-sm">
                        {group.icon}
                      </div>
                      <h3 className="font-black text-blue-950 text-xs uppercase tracking-widest">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-col py-2">
                      {group.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.href}
                          className="px-6 py-3 text-xs font-bold text-slate-600 hover:text-red-600 hover:bg-red-50/50 flex items-center justify-between group transition-all"
                        >
                          {link.label}
                          {link.isExternal ? <ExternalLink size={12} className="opacity-40" /> : <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MEDIA GRID RIGHT */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredMedia.length > 0 ? (
                  filteredMedia.map((item) => (
                    <article key={item.id} className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={item.featuredImage} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        {/* Format Badge Overlay */}
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
                          {item.format === "Video" ? <PlayCircle size={14} className="text-red-600" /> : <FileText size={14} className="text-blue-900" />}
                          <span className="text-[9px] font-black text-blue-950 uppercase tracking-widest">{item.format}</span>
                        </div>
                      </div>
                      
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">#{item.topic}</span>
                          <span className="text-slate-200">•</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.publishedAt}</span>
                        </div>
                        
                        <h3 className="text-md font-black text-blue-950 uppercase leading-tight tracking-tight mb-6 group-hover:text-red-600 transition-colors flex-1 line-clamp-3">
                          {item.title}
                        </h3>
                        
                        <Link 
                          to={item.link} 
                          className="inline-flex items-center gap-2 text-blue-950 font-black text-[10px] uppercase tracking-widest group/btn border-b-2 border-slate-100 pb-1 hover:border-red-600 transition-all"
                        >
                          Lihat Konten <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 italic font-medium">Tidak ada konten media yang sesuai dengan filter.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex justify-center gap-2">
                {[1, 2, 3].map((num) => (
                  <button key={num} className={`w-10 h-10 rounded-xl font-bold text-xs transition-all ${num === 1 ? 'bg-red-600 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-500 hover:border-red-600 hover:text-red-600'}`}>
                    {num}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;