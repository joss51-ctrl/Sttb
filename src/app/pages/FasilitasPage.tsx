import { useState } from "react";
import { ChevronRight, BookOpen, Users, Sparkles, Home } from "lucide-react";
import Masonry from "react-responsive-masonry";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";

// Define facility type
interface Facility {
  id: number;
  name: string;
  image: string;
  category: "ruang-belajar" | "area-komunitas" | "fasilitas-kreatif" | "asrama";
}

export default function FasilitasPage() {
  const [activeCategory, setActiveCategory] = useState("semua");

  // Facilities data
  const facilities: Facility[] = [
    // Ruang Belajar
    {
      id: 1,
      name: "Perpustakaan STTB",
      image:
        "https://images.unsplash.com/photo-1762732526878-3dd89d99c904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwcmVhZGluZyUyMHJvb218ZW58MXx8fHwxNzczMjM2NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "ruang-belajar",
    },
    {
      id: 2,
      name: "Ruang Kelas Digital",
      image:
        "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2xhc3Nyb29tJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczMTk1NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "ruang-belajar",
    },
    {
      id: 3,
      name: "Ruang Belajar Kolaboratif",
      image:
        "https://images.unsplash.com/photo-1763890699359-8c8a4e7288bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGxvdW5nZSUyMGNhbXB1c3xlbnwxfHx8fDE3NzMyNDUzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "ruang-belajar",
    },
    {
      id: 4,
      name: "Lab Komputer",
      image:
        "https://images.unsplash.com/photo-1764025130362-0162c3dd2035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMG1vZGVybnxlbnwxfHx8fDE3NzMyNDUzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "ruang-belajar",
    },
    // Area Komunitas
    {
      id: 5,
      name: "Kantin & Area Makan",
      image:
        "https://images.unsplash.com/photo-1769456164543-59aac9d09256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBjYWZldGVyaWElMjBkaW5pbmd8ZW58MXx8fHwxNzczMjQ1Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "area-komunitas",
    },
    {
      id: 6,
      name: "Student Lounge",
      image:
        "https://images.unsplash.com/photo-1763890763377-abd05301034d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbG91bmdlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MzI0NTM3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "area-komunitas",
    },
    {
      id: 7,
      name: "Kapel & Ruang Ibadah",
      image:
        "https://images.unsplash.com/photo-1763410723546-db98ef034af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFwZWwlMjB3b3JzaGlwJTIwc3BhY2V8ZW58MXx8fHwxNzczMjQ1Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "area-komunitas",
    },
    {
      id: 8,
      name: "Taman Kampus",
      image:
        "https://images.unsplash.com/photo-1764025851527-78f9d7c52bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY2FtcHVzJTIwZ2FyZGVufGVufDF8fHx8MTc3MzI0NTM4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "area-komunitas",
    },
    // Fasilitas Kreatif
    {
      id: 9,
      name: "Studio Musik",
      image:
        "https://images.unsplash.com/photo-1637071220527-fbb98fa15892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZ3xlbnwxfHx8fDE3NzMxNDY0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "fasilitas-kreatif",
    },
    {
      id: 10,
      name: "Studio Green Screen",
      image: "https://sttb.ac.id/storage/2022/08/fasilitas-19.png",
      category: "fasilitas-kreatif",
    },
    {
      id: 11,
      name: "Podcast Studio",
      image: "https://sttb.ac.id/storage/2022/08/fasilitas-2.png",
      category: "fasilitas-kreatif",
    },
    // Asrama
    {
      id: 12,
      name: "Kamar Asrama",
      image: "https://sttb.ac.id/storage/2022/08/fasilitas-18.png",
      category: "asrama",
    },
  ];

  // Filter facilities by category
  const filteredFacilities =
    activeCategory === "semua"
      ? facilities
      : facilities.filter((facility) => facility.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 ">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] md:h-[450px] group cursor-pointer">
                <div className="absolute top-0 left-0 w-2/3 z-10 transition-all duration-500 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:rotate-[-2deg]">
                  <img
                    src="https://sttb.ac.id/storage/2022/08/fasilitas-9.png"
                    alt="Fasilitas STTB 1"
                    className="rounded-2xl shadow-xl border-4 border-white object-cover h-64 w-full transition-shadow group-hover:shadow-2xl"
                  />
                </div>

                <div className="absolute bottom-0 right-0 w-2/3 z-20 transition-all duration-500 ease-in-out group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-[2deg]">
                  <img
                    src="https://sttb.ac.id/storage/2022/08/fasilitas-2.png"
                    alt="Fasilitas STTB 2"
                    className="rounded-2xl shadow-2xl border-4 border-white object-cover h-64 w-full transition-shadow group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                  />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -z-10 transition-colors duration-500 group-hover:bg-blue-500/20"></div>
              </div>

              <div className="text-left">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
                  Fasilitas STTB
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Kami menyediakan lingkungan belajar yang mendukung
                  perkembangan akademik, spiritual, dan kreativitas mahasiswa
                  melalui fasilitas modern dan berkualitas.
                </p>

                {/* Garis pemanis */}
                <div className="flex gap-4 items-center">
                  <div className="h-[2px] w-12 bg-red-500 transition-all duration-500 group-hover:w-20"></div>
                  <p className="text-sm font-medium text-blue-900 uppercase tracking-tight">
                    Pembentukan pribadi dan pemerlengkapan pelayanan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 mt-16">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Kolom 1: Belajar Bersama */}
              <div className="group">
                <div className="mb-4">
                  <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">
                    01. Fasilitas
                  </span>
                  <h3 className="text-2xl font-extrabold text-blue-900 mt-1">
                    Belajar Bersama
                  </h3>
                  <div className="h-1 w-12 bg-red-500 mt-2 transition-all group-hover:w-20"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base antialiased text-justify">
                  Sebagai sebuah kampus perguruan tinggi, STTB menyediakan
                  fasilitas yang optimal bagi kegiatan belajar-mengajar. Format
                  ruang kelas didesain untuk mengakomodasi berbagai metode
                  pembelajaran.
                  <span className="block mt-2 font-medium text-blue-900/80 italic text-sm">
                    * Perpustakaan nyaman, Ruang Teleconference, & Studio
                    Audio-Visual Didasko.
                  </span>
                </p>
              </div>

              {/* Kolom 2: Bertumbuh Bersama */}
              <div className="group">
                <div className="mb-4">
                  <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">
                    02. Karakter
                  </span>
                  <h3 className="text-2xl font-extrabold text-blue-900 mt-1">
                    Bertumbuh Bersama
                  </h3>
                  <div className="h-1 w-12 bg-red-500 mt-2 transition-all group-hover:w-20"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base antialiased text-justify">
                  Pembelajaran tidak hanya menekankan sisi akademik, melainkan
                  pembentukan pribadi pelayan secara utuh. Tersedia fasilitas
                  pendukung rohani seperti ruang konseling pribadi/kelompok,
                  area komunitas, hingga aula seminar.
                  <span className="block mt-2 font-medium text-blue-900/80 italic text-sm">
                    * Fasilitas Luar Kampus: Rumah Doa Bethel.
                  </span>
                </p>
              </div>

              {/* Kolom 3: Hidup Bersama */}
              <div className="group">
                <div className="mb-4">
                  <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">
                    03. Komunitas
                  </span>
                  <h3 className="text-2xl font-extrabold text-blue-900 mt-1">
                    Hidup Bersama
                  </h3>
                  <div className="h-1 w-12 bg-red-500 mt-2 transition-all group-hover:w-20"></div>
                </div>
                <div className="text-gray-700 leading-relaxed text-sm md:text-base antialiased">
                  <p className="mb-3 text-justify">
                    Pendidikan diselenggarakan secara residensial penuh dalam
                    satu komunitas asrama terintegrasi (Dosen, Aspra, Aspri, &
                    Pascasarjana).
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-blue-900 uppercase tracking-tighter">
                    <div className="bg-gray-100 p-2 rounded">⚽ Olahraga</div>
                    <div className="bg-gray-100 p-2 rounded">
                      🏊 Kolam Renang
                    </div>
                    <div className="bg-gray-100 p-2 rounded">
                      🛌 Kamar Lengkap
                    </div>
                    <div className="bg-gray-100 p-2 rounded">
                      🥗 Ruang Makan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs & Gallery */}
      <section className="py-6 bg-white mb-6">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6 text-center">
              Galeri Fasilitas
            </h1>{" "}
            <Tabs
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              {/* Minimalist Tab Navigation */}
              <TabsList className="w-full justify-center mb-12 bg-white p-2 rounded-lg">
                <TabsTrigger
                  value="semua"
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Semua
                </TabsTrigger>
                <TabsTrigger
                  value="ruang-belajar"
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Ruang Belajar
                </TabsTrigger>
                <TabsTrigger
                  value="area-komunitas"
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Area Komunitas
                </TabsTrigger>
                <TabsTrigger
                  value="fasilitas-kreatif"
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Fasilitas Kreatif
                </TabsTrigger>
                <TabsTrigger
                  value="asrama"
                  className="px-6 py-2 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Asrama
                </TabsTrigger>
              </TabsList>

              {/* Gallery Content */}
              <TabsContent value={activeCategory} className="mt-0">
                {filteredFacilities.length > 0 ? (
                  <Masonry columnsCount={3} gutter="32px">
                    {filteredFacilities.map((facility) => (
                      <div
                        key={facility.id}
                        className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                      >
                        {/* Image */}
                        <img
                          src={facility.image}
                          alt={facility.name}
                          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Semi-transparent Overlay with Caption */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                          <h3 className="text-white font-bold text-lg">
                            {facility.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </Masonry>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">
                      Tidak ada fasilitas dalam kategori ini
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
