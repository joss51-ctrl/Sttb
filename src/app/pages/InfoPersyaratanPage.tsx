/**
 * InfoPersyaratanPage - Admission Requirements Page
 * Two-section layout: General Requirements + Program-Specific Requirements
 */

import { useState } from 'react';
import { ChevronRight, GraduationCap, Building2, Globe, CheckCircle } from 'lucide-react';

type ProgramLevel = 'S1' | 'S2';

interface Requirement {
  text: string;
}

interface Program {
  title: string;
  degree: string;
  requirements: Requirement[];
}

export default function InfoPersyaratanPage() {
  const [activeTab, setActiveTab] = useState<ProgramLevel>('S1');

  const programsS1: Program[] = [
    {
      title: 'SARJANA TEOLOGI',
      degree: '(S.Th.)',
      requirements: [
        { text: 'Minimal lulusan SMA/sederajat' },
        { text: 'Memiliki pengalaman pelayanan gerejawi/lembaga Kristen minimal 2 tahun.' },
        { text: 'Memiliki panggilan jelas sebagai hamba Tuhan penuh waktu.' },
        { text: 'Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca dan memahami teks berbahasa Inggris.' },
        { text: 'Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.' }
      ]
    },
    {
      title: 'SARJANA PENDIDIKAN KRISTEN',
      degree: '(S.Pd.K.)',
      requirements: [
        { text: 'Minimal lulusan SMA/sederajat' },
        { text: 'Memiliki pengalaman pelayanan gerejawi/lembaga Kristen minimal 2 tahun.' },
        { text: 'Memiliki panggilan jelas sebagai pendidik Kristen penuh waktu.' },
        { text: 'Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca dan memahami teks berbahasa Inggris.' },
        { text: 'Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.' }
      ]
    }
  ];

  const programsS2: Program[] = [
    {
      title: 'MAGISTER PENDIDIKAN KRISTEN',
      degree: '(M.Pd.)',
      requirements: [
        { text: 'Lulus program S1 (semua jurusan)' },
        { text: 'Memiliki pengalaman pelayanan di sekolah/gereja minimal 2 tahun.' },
        { text: 'Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca dan memahami teks berbahasa Inggris.' },
        { text: 'Menyerahkan book review saat mendaftar di STTB.' },
        { text: 'Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.' }
      ]
    },
    {
      title: 'MAGISTER MINISTRI MARKETPLACE',
      degree: '(M.Min.)',
      requirements: [
        { text: 'Lulusan S-1 Teologi/Umum' },
        { text: 'Memiliki pengalaman bekerja minimal 2 tahun' },
        { text: 'Memiliki pengalaman pelayanan di gereja atau lembaga pelayanan minimal 1 tahun' },
        { text: 'Menyerahkan book review saat mendaftar di STTB.' }
      ]
    }
  ];

  const generalRequirements = [
    {
      icon: GraduationCap,
      text: 'Calon mahasiswa S1 wajib lulus SMU/sederajat; S2 wajib lulus S1.'
    },
    {
      icon: Building2,
      text: 'Lulusan harus berasal dari sekolah/universitas yang terdaftar dan diakui pemerintah.'
    },
    {
      icon: Globe,
      text: 'Lulusan luar negeri (B.A., M.A., dsb) akan dipertimbangkan kasus per kasus.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900 transition-colors">Beranda</a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-blue-900 transition-colors">Admisi</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Info Persyaratan</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
            Info Persyaratan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ketahui persyaratan lengkap untuk mendaftar di STTB
          </p>
        </div>
      </section>

      {/* Section 1: Persyaratan Umum */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl font-bold text-blue-900 mb-3 text-center">
              PERSYARATAN UMUM
            </h2>
            <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-12"></div>

            {/* Vertical Icon List */}
            <div className="space-y-8">
              {generalRequirements.map((requirement, index) => {
                const Icon = requirement.icon;
                return (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                        <Icon className="w-7 h-7 text-red-700" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1 pt-3">
                      <p className="text-lg text-gray-700" style={{ lineHeight: '1.6' }}>
                        {requirement.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Persyaratan Per Program Studi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              PERSYARATAN PER PROGRAM STUDI
            </h2>

            {/* Horizontal Tab System */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab('S1')}
                className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${
                  activeTab === 'S1'
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-white text-gray-600 border-2 border-gray-300 hover:border-blue-900'
                }`}
              >
                PROGRAM S1
              </button>
              <button
                onClick={() => setActiveTab('S2')}
                className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${
                  activeTab === 'S2'
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-white text-gray-600 border-2 border-gray-300 hover:border-blue-900'
                }`}
              >
                PROGRAM S2
              </button>
            </div>

            {/* Tab Content */}
            <div className="animate-in fade-in duration-300">
              {/* S1 Programs */}
              {activeTab === 'S1' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {programsS1.map((program, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8"
                    >
                      {/* Header */}
                      <div className="mb-6 pb-4 border-b border-gray-200">
                        <h3 className="text-xl font-bold text-blue-900 mb-1">
                          {program.title}
                        </h3>
                        <p className="text-lg text-red-700 font-semibold">
                          {program.degree}
                        </p>
                      </div>

                      {/* Requirements List */}
                      <ul className="space-y-4">
                        {program.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700" style={{ lineHeight: '1.6' }}>
                              {req.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* S2 Programs */}
              {activeTab === 'S2' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {programsS2.map((program, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8"
                    >
                      {/* Header */}
                      <div className="mb-6 pb-4 border-b border-gray-200">
                        <h3 className="text-xl font-bold text-blue-900 mb-1">
                          {program.title}
                        </h3>
                        <p className="text-lg text-red-700 font-semibold">
                          {program.degree}
                        </p>
                      </div>

                      {/* Requirements List */}
                      <ul className="space-y-4">
                        {program.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700" style={{ lineHeight: '1.6' }}>
                              {req.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Siap Mendaftar?
              </h3>
              <p className="text-gray-700 mb-6" style={{ lineHeight: '1.6' }}>
                Jika Anda memenuhi persyaratan di atas, segera daftar dan mulai perjalanan akademik Anda di STTB!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://sis.sttb.ac.id/pmb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Daftar Sekarang
                </a>
                <a 
                  href="/prosedur-admisi"
                  className="inline-block bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Lihat Prosedur Pendaftaran
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
