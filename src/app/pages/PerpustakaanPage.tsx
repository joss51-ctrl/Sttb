/**
 * PerpustakaanPage - Perpustakaan Transformatio Landing Page
 * Modern academic catalog layout with sidebar, search, and book collections
 */

import { useState } from "react";
import {
  Search,
  BookOpen,
  FileText,
  Database,
  Globe,
  UserPlus,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  MessageCircle,
  Clock,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

// Mock book data
const featuredBooks = [
  {
    id: 1,
    title: "Teologi Sistematika: Doktrin Allah",
    author: "Wayne Grudem",
    cover:
      "https://images.unsplash.com/photo-1597149305660-78eb2b9aa78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NzMyNTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Teologi Sistematika",
  },
  {
    id: 2,
    title: "Hermeunetika: Prinsip & Metode Penafsiran Alkitab",
    author: "Gordon D. Fee & Douglas Stuart",
    cover:
      "https://images.unsplash.com/photo-1682235336380-f6ccad180553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rcyUyMHN0YWNrZWR8ZW58MXx8fHwxNzczMjU3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Hermeneutika",
  },
  {
    id: 3,
    title: "Sejarah Gereja: Dari Abad Pertama hingga Abad 21",
    author: "Justo L. González",
    cover:
      "https://images.unsplash.com/photo-1580699228119-7be487b3137f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwYm9va3N8ZW58MXx8fHwxNzczMjU3ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Sejarah Gereja",
  },
  {
    id: 4,
    title: "Etika Kristen Kontemporer",
    author: "Norman L. Geisler",
    cover:
      "https://images.unsplash.com/photo-1772452591742-711023a30e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY29sbGVjdGlvbiUyMGFjYWRlbWljfGVufDF8fHx8MTc3MzI1Nzg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Etika Kristen",
  },
  {
    id: 5,
    title: "Teologi Perjanjian Baru",
    author: "George Eldon Ladd",
    cover:
      "https://images.unsplash.com/photo-1764509422504-f9aee0a1dd76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYm9va3MlMjBsZWF0aGVyfGVufDF8fHx8MTc3MzI1Nzg0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Teologi Alkitab",
  },
  {
    id: 6,
    title: "Misiologi: Teologi dan Praktik Misi Kristen",
    author: "Stephen Neill",
    cover:
      "https://images.unsplash.com/photo-1597149305660-78eb2b9aa78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVvbG9neSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NzMyNTc4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Misiologi",
  },
  {
    id: 7,
    title: "Kepemimpinan Kristen yang Efektif",
    author: "John Maxwell",
    cover:
      "https://images.unsplash.com/photo-1682235336380-f6ccad180553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rcyUyMHN0YWNrZWR8ZW58MXx8fHwxNzczMjU3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Kepemimpinan",
  },
  {
    id: 8,
    title: "Pastoral Care: Konseling & Penggembalaan",
    author: "Gary Collins",
    cover:
      "https://images.unsplash.com/photo-1580699228119-7be487b3137f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwYm9va3N8ZW58MXx8fHwxNzczMjU3ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Pastoral",
  },
];

// Recent library activities
const recentActivities = [
  {
    id: 1,
    title: "Workshop Literasi Digital untuk Mahasiswa",
    image:
      "https://images.unsplash.com/photo-1702974915123-16739a9c3577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwd29ya3Nob3AlMjBldmVudHxlbnwxfHx8fDE3NzMyNTc4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "15 Februari 2026",
  },
  {
    id: 2,
    title: "Peluncuran Koleksi Baru: Teologi Kontekstual Asia",
    image:
      "https://images.unsplash.com/photo-1766506075730-f1d871df530a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwcm9vbSUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzI1Nzg0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "8 Februari 2026",
  },
  {
    id: 3,
    title: "Seminar Penggunaan Database EBSCO & ATLA",
    image:
      "https://images.unsplash.com/photo-1772452591742-711023a30e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY29sbGVjdGlvbiUyMGFjYWRlbWljfGVufDF8fHx8MTc3MzI1Nzg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "1 Februari 2026",
  },
];

export default function PerpustakaanPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  // Carousel navigation
  const nextActivity = () => {
    setCurrentActivityIndex((prev) => (prev + 1) % recentActivities.length);
  };

  const prevActivity = () => {
    setCurrentActivityIndex(
      (prev) => (prev - 1 + recentActivities.length) % recentActivities.length,
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://sttb.ac.id/storage/2022/08/fasilitas-10.png"
            alt="Perpustakaan STTB"
            className="w-full h-full object-cover"
          />
          {/* Overlay biar teks kebaca */}
          <div className="absolute inset-0 bg-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-white/10"></div>
        </div>
        {/* Background Decor - Abstract Light Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />

        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* LEFT COLUMN: Brand & Main Actions */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600 rounded-full"></div>
                  <span className="text-blue-900 font-bold tracking-[0.2em] text-xs uppercase">
                    Sekolah Tinggi Teologi Bandung
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-blue-950 leading-[1.1] tracking-tighter">
                  Perpustakaan <br />
                  <span className="text-red-600">Transformatio</span>
                </h1>

                <div className="max-w-2xl">
                  <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
                    Menjadi wadah transformasi pemikiran dan kehidupan melalui
                    akses literatur teologi yang komprehensif.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-red-600 italic text-slate-500 text-sm shadow-sm">
                    "Semua yang benar, semua yang mulia, semua yang adil, semua
                    yang suci... pikirkanlah semuanya itu."
                    <span className="not-italic font-bold text-blue-900 mt-2 block">
                      — Filipi 4:8
                    </span>
                  </div>
                </div>
              </div>

              {/* MAIN BUTTONS */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all font-black text-sm shadow-xl shadow-red-200 group">
                  KATALOG{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-3 px-8 py-4 bg-blue-950 text-white rounded-2xl hover:bg-blue-900 transition-all font-black text-sm shadow-xl shadow-blue-100">
                  PUSTAKA PINTAR
                </button>
                <button className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl hover:border-red-600 hover:text-red-600 transition-all font-black text-sm">
                  PERPANJANG
                </button>
              </div>

              {/* CONTACT & HOURS - Modern Horizontal Card */}
              <div className="flex flex-wrap gap-8 pt-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      WhatsApp Center
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      0851-7305-7735
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Jam Layanan
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      Senin - Jumat | 08.00 - 17.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Stats & Digital Resources */}
            <div className="lg:col-span-5 relative">
              {/* Stats Card */}
              <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 p-10 space-y-10 relative z-10">
                <div className="space-y-8">
                  <h4 className="text-xs font-black text-blue-900 uppercase tracking-[0.3em] flex items-center gap-2">
                    <ShieldCheck size={16} className="text-red-600" /> Statistik
                    Koleksi
                  </h4>

                  <div className="grid grid-cols-1 gap-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                          <BookOpen size={24} />
                        </div>
                        <span className="font-bold text-slate-500 uppercase text-xs tracking-wider">
                          Judul Buku
                        </span>
                      </div>
                      <span className="text-3xl font-black text-blue-950">
                        47.254
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                          <FileText size={24} />
                        </div>
                        <span className="font-bold text-slate-500 uppercase text-xs tracking-wider">
                          Eksemplar
                        </span>
                      </div>
                      <span className="text-3xl font-black text-blue-950">
                        51.932
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center">
                          <Database size={24} />
                        </div>
                        <span className="font-bold text-slate-500 uppercase text-xs tracking-wider">
                          Sirkulasi
                        </span>
                      </div>
                      <span className="text-3xl font-black text-blue-950">
                        39.913
                      </span>
                    </div>
                  </div>
                </div>

                {/* Digital Resources Grid */}
                <div className="pt-10 border-t border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                    Perpustakaan Digital:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "EBSCO Host",
                      "Jurnal ATLA",
                      "OJS / Transform",
                      "SINTA Portal",
                    ].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl text-[11px] font-bold text-slate-600 hover:bg-red-600 hover:text-white transition-all group"
                      >
                        {item}{" "}
                        <ExternalLink
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Image/Pattern behind the card */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-red-50 rounded-[3rem] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA - Two Column Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto">
            {/* LEFT SIDEBAR - 250px Fixed Card */}
            <aside className="lg:w-[250px] flex-shrink-0">
              <div className="bg-white border-2 border-blue-900 rounded-xl p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <UserPlus className="w-6 h-6 text-blue-900" />
                  <h3 className="text-lg font-bold text-blue-900">
                    Pendaftaran Anggota
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Daftarkan diri Anda untuk mendapatkan akses penuh ke seluruh
                  koleksi perpustakaan.
                </p>

                {/* 3 Simple Steps */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      1
                    </div>
                    <p className="text-sm text-gray-700">
                      Isi formulir pendaftaran online
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      2
                    </div>
                    <p className="text-sm text-gray-700">
                      Upload foto & dokumen identitas
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      3
                    </div>
                    <p className="text-sm text-gray-700">
                      Dapatkan kartu anggota perpustakaan
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-red-700 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition-colors">
                  Daftar Sekarang
                </button>
              </div>
            </aside>

            {/* MAIN CONTENT - Right Side (850px) */}
            <main className="flex-1 lg:max-w-[850px]">
              {/* FEATURED COLLECTIONS - 4-Column Grid */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">
                  Koleksi Terbaru & Rekomendasi
                </h2>

                {/* Book Cards Grid - 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredBooks.map((book) => (
                    <div
                      key={book.id}
                      className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 group"
                    >
                      {/* Book Cover - 3:4 Portrait Ratio */}
                      <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Book Info */}
                      <div className="p-4">
                        {/* Title - Bold Navy */}
                        <h3 className="text-sm font-bold text-blue-900 mb-2 line-clamp-2 leading-tight">
                          {book.title}
                        </h3>

                        {/* Author - Grey */}
                        <p className="text-xs text-gray-600 mb-3 line-clamp-1">
                          {book.author}
                        </p>

                        {/* Category Badge */}
                        <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded mb-3">
                          {book.category}
                        </span>

                        {/* Lihat Detail Button */}
                        <button className="w-full bg-red-700 text-white text-sm font-semibold py-2 rounded-lg hover:bg-red-800 transition-colors">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* RECENT ACTIVITIES - Carousel at Bottom */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Kegiatan Perpustakaan
            </h2>

            {/* Carousel Container */}
            <div className="relative">
              {/* Carousel Track */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentActivityIndex * 100}%)`,
                  }}
                >
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow max-w-2xl mx-auto">
                        <div className="flex flex-col md:flex-row">
                          {/* Image - Landscape */}
                          <div className="md:w-1/2 aspect-video md:aspect-auto bg-gray-100">
                            <img
                              src={activity.image}
                              alt={activity.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Content */}
                          <div className="md:w-1/2 p-8 flex flex-col justify-center">
                            <p className="text-sm text-red-700 font-semibold mb-2">
                              {activity.date}
                            </p>
                            <h3 className="text-xl font-bold text-blue-900 leading-tight">
                              {activity.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevActivity}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border-2 border-blue-900 text-blue-900 p-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                aria-label="Previous activity"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextActivity}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border-2 border-blue-900 text-blue-900 p-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                aria-label="Next activity"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {recentActivities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentActivityIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentActivityIndex
                        ? "bg-blue-900"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to activity ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
