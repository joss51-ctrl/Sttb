import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface BoardMember {
  name: string;
  title?: string;
  image: string;
}

export default function YayasanPage() {
  // DEWAN PEMBINA - Advisory Board
  const dewanPembina: BoardMember[] = [
    {
      name: "Pdt. Dr. Agus Gunawan, Ph.D.",
      image: "senior asian male pastor formal",
    },
    {
      name: "Pdt. Dr. Elisabeth Tanujaya, M.Th.",
      image: "senior asian female pastor formal",
    },
    {
      name: "Pdt. Dr. Petrus Widjaja, D.Min.",
      image: "senior asian male theology professor formal",
    },
  ];

  // KETUA YAYASAN - Foundation Chairman
  const ketuaYayasan: BoardMember = {
    name: "Pne. Benny Soenarjo",
    title: "KETUA",
    image: "senior asian male executive chairman",
  };

  // KEY OFFICERS - Vice Chair, Secretary, Treasurer
  const keyOfficers: BoardMember[] = [
    {
      name: "Pnts. Benny Soenarjo",
      title: "KETUA",
      image: "asian male executive vice chairman",
    },
    {
      name: "Pne. Gunawan Chandra",
      title: "WAKIL KETUA",
      image: "asian male executive vice chairman",
    },
    {
      name: "Pne. Susanti Wijaya",
      title: "SEKRETARIS",
      image: "asian female secretary professional",
    },
    {
      name: "Pne. Hendrik Kusuma",
      title: "BENDAHARA",
      image: "asian male treasurer professional",
    },
  ];

  // ANGGOTA - Board Members
  const anggota: BoardMember[] = [
    {
      name: "Pdt. Simon Hartono, M.Th.",
      image: "asian male pastor board member",
    },
    {
      name: "Pne. Catherine Liem",
      image: "asian female elder church",
    },
    {
      name: "Pdt. Joshua Tanuwidjaja, M.Div.",
      image: "asian male minister professional",
    },
    {
      name: "Pne. Margaret Setiawan",
      image: "asian female church leader",
    },
    {
      name: "Pdt. David Sutanto, M.Th.",
      image: "asian male pastor leader",
    },
    {
      name: "Pne. Grace Halim",
      image: "asian female professional elder",
    },
    {
      name: "Pdt. Thomas Wibowo, M.Div.",
      image: "asian male theology minister",
    },
    {
      name: "Pne. Victoria Tanujaya",
      image: "asian female board member professional",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold">Yayasan</h1>
          <p className="text-xl text-blue-100 mt-4 max-w-3xl">
            Berkomitmen tetap setia pada panggilan untuk mendidik hamba-hamba
            Tuhan yang kompeten dan berkarakter Kristus.{" "}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* ROW 1 - DEWAN PEMBINA (Advisory Board) */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Dewan Pembina
            </h2>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {dewanPembina.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    {/* Large Profile Image - 3:4 Aspect Ratio */}
                    <div className="mb-4 border border-gray-200 rounded overflow-hidden">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/600x800/?${encodeURIComponent(member.image)}`}
                        alt={member.name}
                        className="w-full aspect-[3/4] object-cover"
                      />
                    </div>

                    {/* Name in Bold Navy Blue */}
                    <h3 className="text-xl font-bold text-blue-900 text-center">
                      {member.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacing - 80px vertical gap */}
          <div className="h-20" />

{/* ROW 2 - DEWAN PENGURUS (Executive Board) */}
<div className="mb-20">
  <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
    Dewan Pengurus
  </h2>

  {/* KEY OFFICERS - Diubah menjadi 4 kolom (grid-cols-4) */}
  {/* max-w-7xl digunakan agar kontainer lebih lebar untuk menampung 4 kartu */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
    {keyOfficers.map((officer, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
      >
        <div className="p-5">
          {/* Role Title - Small Caps Crimson Red */}
          <h3 className="text-xs font-bold text-red-700 text-center mb-4 uppercase tracking-widest min-h-[32px] flex items-center justify-center">
            {officer.title}
          </h3>

          {/* Medium Profile Image - 3:4 Aspect Ratio */}
          <div className="mb-4 border border-gray-100 rounded-lg overflow-hidden shadow-inner">
            <ImageWithFallback
              src={`https://source.unsplash.com/500x667/?${encodeURIComponent(officer.image)}`}
              alt={officer.name}
              className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Name in Navy Blue */}
          <h4 className="text-base font-bold text-blue-900 text-center leading-tight">
            {officer.name}
          </h4>
        </div>
      </div>
    ))}
  </div>
</div>

          {/* Spacing - 80px vertical gap */}
          <div className="h-20" />

          {/* ROW 3 - ANGGOTA (Members) */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Anggota
            </h2>

            {/* 4-Column Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {anggota.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded shadow hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="p-4">
                    {/* Profile Image - 3:4 Aspect Ratio */}
                    <div className="mb-3 border border-gray-200 rounded overflow-hidden">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/400x533/?${encodeURIComponent(member.image)}`}
                        alt={member.name}
                        className="w-full aspect-[3/4] object-cover"
                      />
                    </div>

                    {/* Name Only */}
                    <h3 className="text-sm font-bold text-blue-900 text-center leading-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
