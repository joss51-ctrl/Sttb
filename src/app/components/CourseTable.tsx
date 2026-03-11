/**
 * CourseTable - Interactive course table with expandable descriptions
 * 
 * Features:
 * - Click on any course row to expand its description
 * - Single-expand rule: only one course can be expanded per table
 * - Visual feedback: blue left border and background for expanded row
 * - Smooth slide-down animation
 * - Info icon that rotates when expanded
 */

import { useState } from 'react';
import { Info } from 'lucide-react';

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
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-2 text-sm font-semibold text-gray-700">Kode</th>
          <th className="text-left py-2 text-sm font-semibold text-gray-700">Mata Kuliah</th>
          <th className="text-right py-2 text-sm font-semibold text-gray-700">SKS</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, idx) => {
          const isExpanded = expandedCourse === course.code;
          return (
            <>
              <tr 
                key={idx} 
                onClick={() => toggleCourse(course.code)}
                className={`border-b border-gray-100 cursor-pointer transition-colors ${ 
                  isExpanded ? 'bg-blue-50 border-l-4 border-l-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <td className="py-2 text-sm text-gray-600">{course.code}</td>
                <td className="py-2 text-sm text-gray-900">
                  <div className="flex items-center justify-between">
                    <span>{course.name}</span>
                    <Info className={`w-4 h-4 ml-2 text-blue-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </td>
                <td className="py-2 text-sm text-gray-600 text-right">{course.sks}</td>
              </tr>
              {isExpanded && (
                <tr className="bg-gray-50">
                  <td colSpan={3} className="px-4 py-3">
                    <div className="animate-in slide-in-from-top-2 duration-300">
                      <p className="text-xs text-[#555555] leading-relaxed italic">
                        {course.description}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </>
          );
        })}
      </tbody>
    </table>
  );
}
