/**
 * YayasanPage - Board of Trustees (Foundation) Page
 * 
 * Features:
 * - Hierarchical structure for foundation governance
 * - ROW 1: DEWAN PEMBINA (Advisory Board) - 3-column grid
 * - ROW 2: DEWAN PENGURUS (Executive Board)
 *   - KETUA YAYASAN - Single centered prominent card
 *   - KEY OFFICERS - 3-column grid (Vice Chair, Secretary, Treasurer)
 * - ROW 3: ANGGOTA (Members) - 4-column grid
 * 
 * Design:
 * - Clean academic style
 * - Navy Blue and Crimson Red accents
 * - Pure white cards with subtle shadows
 * - 3:4 aspect ratio for all photos
 * - 80px vertical gaps between sections
 * - Vertical stack layout (Title -> Image -> Name)
 */

import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface BoardMember {
  name: string;
  title?: string;
  image: string;
}

export default function YayasanPage() {
  // DEWAN PEMBINA - Advisory Board
  const dewanPembina: BoardMember[] = [
    {
      name: 'Pdt. Dr. Agus Gunawan, Ph.D.',
      image: 'senior asian male pastor formal'
    },
    {
      name: 'Pdt. Dr. Elisabeth Tanujaya, M.Th.',
      image: 'senior asian female pastor formal'
    },
    {
      name: 'Pdt. Dr. Petrus Widjaja, D.Min.',
      image: 'senior asian male theology professor formal'
    }
  ];

  // KETUA YAYASAN - Foundation Chairman
  const ketuaYayasan: BoardMember = {
    name: 'Pne. Benny Soenarjo',
    title: 'KETUA',
    image: 'senior asian male executive chairman'
  };

  // KEY OFFICERS - Vice Chair, Secretary, Treasurer
  const keyOfficers: BoardMember[] = [
    {
      name: 'Pne. Gunawan Chandra',
      title: 'WAKIL KETUA',
      image: 'asian male executive vice chairman'
    },
    {
      name: 'Pne. Susanti Wijaya',
      title: 'SEKRETARIS',
      image: 'asian female secretary professional'
    },
    {
      name: 'Pne. Hendrik Kusuma',
      title: 'BENDAHARA',
      image: 'asian male treasurer professional'
    }
  ];

  // ANGGOTA - Board Members
  const anggota: BoardMember[] = [
    {
      name: 'Pdt. Simon Hartono, M.Th.',
      image: 'asian male pastor board member'
    },
    {
      name: 'Pne. Catherine Liem',
      image: 'asian female elder church'
    },
    {
      name: 'Pdt. Joshua Tanuwidjaja, M.Div.',
      image: 'asian male minister professional'
    },
    {
      name: 'Pne. Margaret Setiawan',
      image: 'asian female church leader'
    },
    {
      name: 'Pdt. David Sutanto, M.Th.',
      image: 'asian male pastor leader'
    },
    {
      name: 'Pne. Grace Halim',
      image: 'asian female professional elder'
    },
    {
      name: 'Pdt. Thomas Wibowo, M.Div.',
      image: 'asian male theology minister'
    },
    {
      name: 'Pne. Victoria Tanujaya',
      image: 'asian female board member professional'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <a href="/" className="hover:text-white transition-colors">
              Beranda
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-white transition-colors">
              Tentang Kami
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Yayasan</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold">Yayasan</h1>
          <p className="text-xl text-blue-100 mt-4 max-w-3xl">
            Dewan pengurus dan pembina yang membawa visi dan misi STTB
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-lg text-gray-700 leading-relaxed">
              Yayasan Sekolah Tinggi Teologi Bandung berkomitmen untuk memastikan institusi tetap setia pada panggilan 
              untuk mendidik hamba-hamba Tuhan yang kompeten dan berkarakter Kristus.
            </p>
          </div>

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

            {/* KETUA YAYASAN - Single Centered */}
            <div className="max-w-md mx-auto mb-16">
              <div className="bg-white rounded shadow-lg overflow-hidden">
                <div className="p-8">
                  {/* Title in Crimson Red - Centered */}
                  <h3 className="text-2xl font-bold text-red-700 text-center mb-6 uppercase tracking-wide">
                    {ketuaYayasan.title}
                  </h3>
                  
                  {/* Large Profile Image - 3:4 Aspect Ratio with border */}
                  <div className="mb-6 border-2 border-gray-200 rounded overflow-hidden shadow-md">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/600x800/?${encodeURIComponent(ketuaYayasan.image)}`}
                      alt={ketuaYayasan.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                  
                  {/* Name in Bold Navy Blue - Centered */}
                  <h4 className="text-2xl font-bold text-blue-900 text-center">
                    {ketuaYayasan.name}
                  </h4>
                </div>
              </div>
            </div>

            {/* KEY OFFICERS - 3-Column Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {keyOfficers.map((officer, index) => (
                <div
                  key={index}
                  className="bg-white rounded shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    {/* Role Title - Small Caps Crimson Red */}
                    <h3 className="text-sm font-bold text-red-700 text-center mb-4 uppercase tracking-wider">
                      {officer.title}
                    </h3>
                    
                    {/* Medium Profile Image - 3:4 Aspect Ratio */}
                    <div className="mb-4 border border-gray-200 rounded overflow-hidden">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/500x667/?${encodeURIComponent(officer.image)}`}
                        alt={officer.name}
                        className="w-full aspect-[3/4] object-cover"
                      />
                    </div>
                    
                    {/* Name in Navy Blue */}
                    <h4 className="text-lg font-bold text-blue-900 text-center">
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

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Komitmen Yayasan
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-500 mb-2">🎓</div>
                  <h3 className="font-bold mb-2">Pendidikan Berkualitas</h3>
                  <p className="text-sm text-blue-100">
                    Memastikan standar akademik yang tinggi dan pengajaran yang alkitabiah
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-500 mb-2">🙏</div>
                  <h3 className="font-bold mb-2">Integritas Rohani</h3>
                  <p className="text-sm text-blue-100">
                    Membentuk karakter Kristus dalam setiap mahasiswa dan pengajar
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-500 mb-2">🌍</div>
                  <h3 className="font-bold mb-2">Pelayanan Global</h3>
                  <p className="text-sm text-blue-100">
                    Melengkapi hamba Tuhan untuk melayani gereja di Indonesia dan dunia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Hubungi Yayasan STTB
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Untuk informasi lebih lanjut tentang Yayasan STTB dan kemitraan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
            >
              Hubungi Kami
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Dukung STTB
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
