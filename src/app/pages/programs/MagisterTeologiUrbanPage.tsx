import { ChevronRight, Building2, Users, Heart, MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { CourseTable, Course } from '../../components/CourseTable';
import ProgramLayout from './ProgramLayout';
import { programsData } from './ProgramData';
export default function MagisterTeologiUrbanPage() {
  const pageData = programsData["magister-teologi-urban"];

  return (
    <div className="bg-white">
      <ProgramLayout data={pageData} />

      <section className="py-16 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tingkatkan Pelayanan Anda</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan program magister untuk memperdalam pemahaman teologi urban
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Daftar Sekarang <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
