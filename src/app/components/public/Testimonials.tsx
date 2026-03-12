"use client";

import useEmblaCarousel from "embla-carousel-react";

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  const reviews = [
    {
      name: "Alfed Juan",
      role: "S.Pd.2014",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      text: "Belajar di STTB memberikan saya fondasi teologis yang kuat dan karakter pelayanan yang benar-benar transformatif bagi masyarakat.",
    },
    {
      name: "Siska Amelia",
      role: "S.Td.2015",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      text: "Kurikulum yang relevan dan lingkungan kampus yang inklusif membuat masa studi saya menjadi perjalanan pertumbuhan iman yang tak terlupakan.",
    },
    {
      name: "Budi Santoso",
      role: "M.Th.2015",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      text: "Fasilitas perpustakaan dan dukungan dewan dosen sangat membantu saya dalam menyelesaikan riset teologi urban yang sedang saya kerjakan.",
    },
    {
      name: "Dewi Lestari",
      role: "M.Pd.2016",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      text: "STTB bukan sekadar tempat kuliah, tapi komunitas yang membentuk visi pelayanan saya untuk menjadi berkat bagi bangsa.",
    },
    {
      name: "Andi Pratama",
      role: "M.Th.2017",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      text: "Pengalaman belajar di STTB membuka wawasan teologi saya dan memperkuat panggilan pelayanan saya di tengah masyarakat.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-xl mx-auto italic">
            "Pengalaman nyata dari mereka yang telah menjadi bagian dari
            keluarga besar STTB."
          </p>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex h-[280px] transition hover:border-blue-200">
                  {/* Image */}
                  <div className="w-2/5 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-3/5 p-8 flex flex-col justify-between text-left">
                    <p className="text-gray-600 text-sm md:text-base italic leading-relaxed">
                      "{item.text}"
                    </p>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {item.name}
                      </h4>
                      <p className="text-blue-700 text-xs font-bold uppercase tracking-widest mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
