import React from 'react';
import { ChevronRight, Users, Heart, Calendar, Sparkles } from 'lucide-react';

export default function SenatPage() {
  const divisions = [
    {
      id: 1,
      title: 'Training Group',
      icon: Users,
      images: [
        'https://sttb.ac.id/storage/2022/08/senat-7.png',
        'https://sttb.ac.id/storage/2022/08/senat-22.png',
        'https://sttb.ac.id/storage/2022/08/senat-3.png',
      ],
      activities: [
        'TRAINING GROUP MEDIA & AU-VI',
        'TRAINING GROUP PANGGUNG BONEKA',
        'TRAINING GROUP MUSIK IBADAH',
      ],
    },
    {
      id: 2,
      title: 'Pembinaan & Pelayanan',
      icon: Heart,
      images: [
        'https://sttb.ac.id/storage/2022/08/senat-16.png',
        'https://sttb.ac.id/storage/2022/08/senat-4.png',
        'https://sttb.ac.id/storage/2022/08/senat-10.png',
      ],
      activities: [
        'PAMERAN BUKU',
        'PELATIHAN/LOKAKARYA',
        'PELAYANAN GEREJA',
        'PELAYANAN MASYARAKAT',
      ],
    },
    {
      id: 3,
      title: 'Perayaan & Peringatan',
      icon: Calendar,
      images: [
        'https://sttb.ac.id/storage/2022/08/senat-2.png',
        'https://sttb.ac.id/storage/2022/08/senat-31.png',
        'https://sttb.ac.id/storage/2022/08/senat-29.png',
      ],
      activities: [
        'UPACARA HUT RI',
        'MALAM BUDAYA',
        'HARI REFORMASI',
        'HARI NATAL/PASKAH',
      ],
    },
    {
      id: 4,
      title: 'Kehidupan Kampus',
      icon: Sparkles,
      images: [
        'https://sttb.ac.id/storage/2022/08/senat-30.png',
        'https://sttb.ac.id/storage/2022/08/senat-9-1.png',
        'https://sttb.ac.id/storage/2022/08/senat-12.png',
      ],
      activities: [
        'ORIENTASI MAHASISWA BARU',
        'PEMILIHAN SENAT',
        'WISUDA & DIES NATALIS STTB',
        'GAMES/SPORT DAY',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630331513451-829c6ba030c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhZGVyc2hpcCUyMHRlYW0lMjBncm91cHxlbnwxfHx8fDE3NzMyNDc2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Student Leadership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 tracking-wide">
            SENAT MAHASISWA
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Students Today,<br />Leaders Tomorrow!
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto tracking-wide leading-relaxed">
            Membentuk pemimpin masa depan melalui pengembangan karakter, keterampilan kepemimpinan, 
            dan pelayanan kepada komunitas.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-black text-blue-900 uppercase tracking-tight">
              Tentang Senat Mahasiswa STTB
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Senat Mahasiswa STTB adalah organisasi yang mewakili suara dan kepentingan seluruh mahasiswa. 
              Kami berkomitmen untuk menciptakan lingkungan kampus yang kondusif, mengembangkan potensi 
              mahasiswa, dan memfasilitasi berbagai kegiatan yang mendukung pertumbuhan akademik, spiritual, 
              dan kepemimpinan.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Melalui berbagai program dan kegiatan, Senat Mahasiswa menjadi wadah bagi mahasiswa untuk 
              mengembangkan keterampilan organisasi, kepemimpinan, dan pelayanan yang akan berguna dalam 
              kehidupan dan pelayanan masa depan.
            </p>
          </div>
        </div>
      </section>

      {/* Activity Mosaic Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-blue-900 mb-5 uppercase tracking-tighter">
              Divisi & Kegiatan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Eksplorasi berbagai inisiatif kami yang dirancang untuk memperkaya pengalaman kampus 
              melalui empat pilar utama pengembangan mahasiswa.
            </p>
            <div className="h-1.5 w-24 bg-red-600 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-36">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={division.id} 
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                >
                  {/* Visual Gallery (Mosaic) - Memperbesar kontainer gambar */}
                  <div className="w-full lg:w-[58%] flex-shrink-0">
                    <div className="grid grid-cols-2 grid-rows-2 gap-5 h-[500px]"> {/* Tinggi container */}
                      {/* Foto Utama - Sekarang Col-span 1, Row-span 2 */}
                      <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-2xl relative group">
                        <img 
                          src={division.images[0]} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                          alt="Activity 1" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      
                      {/* Foto Sekunder 1 */}
                      <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg group">
                        <img 
                          src={division.images[1]} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          alt="Activity 2" 
                        />
                      </div>

                      {/* Foto Sekunder 2 */}
                      <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg group transform translate-y-3">
                        <img 
                          src={division.images[2]} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          alt="Activity 3" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Area - Memperkecil kontainer teks dan font */}
                  <div className="w-full lg:w-[42%] space-y-8 px-2 flex flex-col justify-center">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-100 transform -rotate-3 flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl font-extrabold text-blue-900 uppercase tracking-tight">
                        {division.title}
                      </h3>
                    </div>

                    <div className="bg-slate-50 p-7 rounded-3xl border-l-8 border-red-600 shadow-inner">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                        {division.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-3 group">
                            <div className="mt-1.5 min-w-[7px] h-[7px] bg-red-600 rounded-full group-hover:scale-125 transition-transform"></div>
                            <span className="text-gray-700 text-xs font-semibold leading-relaxed group-hover:text-blue-900 transition-colors">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}