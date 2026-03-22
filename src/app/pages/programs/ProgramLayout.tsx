import { ChevronDown, X, Download, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { CourseTable } from "../../components/CourseTable";
import { useState } from "react";

const ProgramLayout = ({ data }) => {
   const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section
        className={`${data.heroGradient} text-white py-12 relative overflow-hidden`}
      >
        {/* Dekorasi Background Halus */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">
              {data.title}
            </h1>
            <p className="text-2xl text-blue-100 mb-4">{data.degree}</p>
            <p className="text-lg text-blue-100 max-w-3xl">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: PROFIL LULUSAN (Style: Numbered Cards) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900">Profil Lulusan</h2>
            <p className="text-3xl text-red-700 font-bold  mt-3">
              Transformative Pastor-Scholar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {data.profiles.map((profile, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-2xl transition-all duration-500"
              >
                {/* Aksesoris Nomor sebagai pengganti Ikon */}
                <span className="absolute top-8 right-8 text-6xl font-black text-gray-50 group-hover:text-red-50 transition-colors duration-500">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-red-700 transition-colors">
                    {profile.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-24 bg-slate-50">
  <div className="container mx-auto px-4">
    {/* Gunakan items-start agar tidak memanjang bareng saat dibuka */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-start"> 
      {data.programInfo.map((info, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={index} className="flex flex-col">
            {/* Label */}
            <h3 className="text-sm font-bold text-red-700 mb-4 uppercase tracking-[0.2em]">
              {info.label}
            </h3>

            {/* Card */}
            <div className={`bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 ${
              isOpen ? "ring-2 ring-blue-900/5 shadow-xl" : "hover:shadow-md"
            }`}>
              
              {/* Main Content Area dengan MIN-HEIGHT */}
              {/* h-[80px] atau min-h-[100px] disesuaikan dengan teks terpanjang Anda */}
              <div className="min-h-[85px] mb-4 flex items-start">
                <p className="text-gray-900 font-bold text-lg leading-tight">
                  {info.value || info.shortValue}
                </p>
              </div>

              {/* Action Area */}
              {info.details ? (
                <div className="flex flex-col">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="text-blue-900 text-sm font-bold flex items-center gap-2 group hover:text-red-700 transition-colors"
                  >
                    {isOpen ? "SEMBUNYIKAN" : "DETAIL SELENGKAPNYA"}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-red-700" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-5 border-t border-gray-100">
                      {Array.isArray(info.details) ? (
                        <ul className="space-y-3">
                          {info.details.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {info.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Spacer transparan agar kartu tanpa detail tetap punya area 'bawah' yang sejajar */
                <div className="h-[18px]"></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* SECTION 3: KURIKULUM (Style: Rumpun Ilmu Accordion) */}
<section className="py-24">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Struktur Kurikulum
        </h2>
        <p className="text-gray-500 font-medium">
          Daftar mata kuliah berdasarkan pengelompokan rumpun ilmu teologi
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-5">
        {data.curriculum.map((group, index) => (
          <AccordionItem
            key={index}
            value={`group-${index}`}
            className="border border-gray-200 rounded-3xl overflow-hidden px-4 transition-all data-[state=open]:border-blue-900 data-[state=open]:ring-1 data-[state=open]:ring-blue-900"
          >
            <AccordionTrigger className="py-8 hover:no-underline group">
              <div className="flex justify-between items-center w-full pr-6">
                <div className="flex items-center gap-6">
                  {/* Indikator Nomor Urut Rumpun */}
                  <span className="text-3xl font-black text-gray-100 group-hover:text-blue-100 transition-colors">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  
                  {/* Nama Kategori */}
                  <span className="text-xl font-bold text-blue-900">
                    {group.category}
                  </span>
                </div>
                
                {/* Badge SKS */}
                <span className="text-sm font-bold text-blue-800 bg-blue-50 px-4 py-1 rounded-full">
                  {group.sks} SKS
                </span>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="pb-8 px-4">
              <div className="rounded-2xl overflow-hidden border border-gray-100">
                {/* CourseTable sekarang menerima courses dari group kategori */}
                <CourseTable 
                  courses={group.courses} 
                  semesterKey={`group-${index}`} 
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>
    </div>
  );
};

export default ProgramLayout;
