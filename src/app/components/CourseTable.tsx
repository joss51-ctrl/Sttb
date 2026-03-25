import { Info, ChevronDown } from 'lucide-react';
import React, { useState } from 'react'; // Tambahkan React di sini
export interface Course {
  code: string;
  name: string;
  sks: number;
  description: string;
}

interface CourseTableProps {
  courses: Course[];
  semesterKey?: string;
}

export function CourseTable({ courses }: CourseTableProps) {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (courseCode: string) => {
    setExpandedCourse(expandedCourse === courseCode ? null : courseCode);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-slate-500 uppercase tracking-widest text-[10px] font-black">
            <th className="px-4 py-3 text-center w-12">No</th>
            <th className="px-4 py-3 text-left">Kode</th>
            <th className="px-4 py-3 text-left">Mata Kuliah</th>
            <th className="px-4 py-3 text-right">SKS</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, idx) => {
            const isExpanded = expandedCourse === course.code;
            return (
              <React.Fragment key={course.code}>
                <tr 
                  onClick={() => toggleCourse(course.code)}
                  className={`group cursor-pointer transition-all duration-300 ${ 
                    isExpanded 
                      ? 'bg-blue-50/50 shadow-sm' 
                      : 'hover:bg-slate-50 bg-white'
                  }`}
                >
                  {/* Kolom Nomor dengan Background Blue-800 */}
                  <td className="py-3 px-2 text-center">
                    <div className={`w-8 h-8 mx-auto flex items-center justify-center rounded-lg font-bold text-xs transition-colors ${
                      isExpanded ? 'bg-blue-800 text-white' : 'bg-blue-800 text-white'
                    }`}>
                      {idx + 1}
                    </div>
                  </td>

                  {/* Kode Mata Kuliah */}
                  <td className="py-3 px-4 text-sm font-mono font-medium text-slate-500 uppercase">
                    {course.code}
                  </td>

                  {/* Nama Mata Kuliah */}
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold transition-colors ${
                        isExpanded ? 'text-blue-900' : 'text-slate-700'
                      }`}>
                        {course.name}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'
                      }`} />
                    </div>
                  </td>

                  {/* SKS */}
                  <td className="py-3 px-4 text-sm font-black text-slate-700 text-right">
                    {course.sks}
                  </td>
                </tr>

                {/* Baris Deskripsi (Expanded) */}
                {isExpanded && (
                  <tr>
                    <td colSpan={4} className="px-4 pb-4 pt-0 bg-blue-50/50 rounded-b-2xl">
                      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100 shadow-inner animate-in fade-in zoom-in-95 duration-300">
                        <div className="flex items-start gap-3">
                          <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            {course.description}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}