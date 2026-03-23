import { ChevronRight } from "lucide-react";
import ProgramLayout from "./ProgramLayout";
import { programsData } from "./ProgramData";
export default function SarjanaTeologiPage() {
  const pageData = programsData["sarjana-pendidikan-kristen"];
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <ProgramLayout data={pageData} />{" "}
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Bergabung dengan Program Sarjana Pendidikan Kristen?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan Anda untuk menjadi hamba Tuhan yang setia dan
            kompeten
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Daftar Sekarang
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
