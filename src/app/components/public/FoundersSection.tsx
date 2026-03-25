import React from "react";
// Import DecorativeUnderline yang sudah kita buat tadi
// import DecorativeUnderline from "../ui/DecorativeUnderline"; 

const FoundersSection: React.FC = () => {
  const founders = [
    {
      name: "Rev. DR. Caleb Tong (Alm.)",
      image: "https://sttb.ac.id/storage/2022/06/caleb-tong-rev-1.png",
    },
    {
      name: "Rev. DR. Joseph Tong, Ph.D.",
      image: "https://sttb.ac.id/storage/2022/06/joseph-tong-rev-1.png",
    },
    {
      name: "Rev. Dorothy I. Marx (Alm.)",
      image: "https://sttb.ac.id/storage/2022/06/dorothy-marx-rev-1.png",
    },
  ];

  return (
    <section className="py-8 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Pendiri <span className="text-blue-800">STTB</span>
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="group relative">
              {/* Frame Foto */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img
                  src={founder.image}
                  alt={founder.name}
 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradien Halus di bagian bawah */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Nama Tokoh di Luar Frame agar lebih bersih */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 px-2">
                  {founder.name}
                </h3>
                <div className="w-8 h-0.5 bg-slate-300 mx-auto mt-3 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;