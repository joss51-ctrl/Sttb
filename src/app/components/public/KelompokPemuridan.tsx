import React from 'react';

const KelompokPemuridan = () => {
  const images = [
    "https://sttb.ac.id/storage/2022/09/4.png",
    "https://sttb.ac.id/storage/2022/09/3-1.png",
    "https://sttb.ac.id/storage/2022/09/2.png",
    "https://sttb.ac.id/storage/2022/09/5.png",
    "https://sttb.ac.id/storage/2022/09/6.png",
    "https://sttb.ac.id/storage/2022/09/1.png"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* BAGIAN KIRI: Photo Grid Rapi */}
          <div className="relative">
            {/* Judul Section (Positioned Top Left) */}
            <div className="mb-12">
              <span className=" text-red-600 font-bold  text-5xl uppercase block mb-1">
                Kelompok
              </span>
              <h2 className="text-5xl font-bold text-blue-900 leading-none tracking-tighter">
                PEMURIDAN
              </h2>
              <div className="h-1.5 w-32 bg-red-600 mt-4"></div>
            </div>

            {/* Layout Foto yang Rapi & Proporsional */}
            <div className="grid grid-cols-3 gap-4 relative">
              {/* Decorative Dot Pattern Background */}
              <div className="absolute -inset-10 -z-10 opacity-10" 
                   style={{ backgroundImage: 'radial-gradient(#1e3a8a 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
              </div>

              {images.map((src, index) => (
                <div 
                  key={index} 
                  className={`relative group aspect-square rounded-full border-4 border-white shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
                    ${index === 1 ? 'mt-8' : ''} 
                    ${index === 4 ? '-mt-8' : ''}
                  `}
                >
                  <img 
                    src={src} 
                    alt={`Member ${index + 1}`} 
                    className="w-full h-full object-cover bg-gray-50 group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay halus saat di-hover */}
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          {/* BAGIAN KANAN: Konten Teks yang Readable */}
          <div className="flex flex-col space-y-8">
            <div className="relative">
              <p className="text-blue-900 font-extrabold text-xl md:text-2xl leading-snug uppercase">
                Kelompok pemuridan merupakan sarana untuk menolong mahasiswa belajar dan bertumbuh bersama mengenai dasar-dasar pertumbuhan iman kristen.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Setiap kelompok akan dipimpin oleh <span className="text-red-600 font-bold italic">pembimbing pemuridan</span>, yang menjadi "kakak rohani" bagi mahasiswa selama tiga semester pertama di STTB.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-base">
                <div className="bg-gray-50 p-5 rounded-2xl border-l-4 border-blue-900 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-1">Intensitas</h4>
                  <p>Pertemuan kelompok dilakukan satu minggu sekali pada hari yang ditentukan.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-2xl border-l-4 border-red-600 shadow-sm">
                  <h4 className="font-bold text-red-600 mb-1">Mentoring</h4>
                  <p>Para pembimbing dimentor secara khusus oleh pembina putra dan putri.</p>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-500 italic pt-2">
                *Pertemuan pribadi-ke-pribadi dilakukan berdasarkan keperluan.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KelompokPemuridan;