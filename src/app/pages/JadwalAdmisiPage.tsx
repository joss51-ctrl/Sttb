/**
 * JadwalAdmisiPage - Admission Schedule Page
 * Displays admission waves, schedules, and timelines
 */

import { useState } from 'react';
import { ChevronRight, Calendar, Clock, Video, FileText, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';

type WaveStatus = 'Selesai' | 'Berjalan' | 'Akan Datang';
type TimelineStatus = 'Selesai' | 'Berjalan' | 'Akan Datang';

interface Wave {
  id: number;
  title: string;
  openingDate: string;
  status: WaveStatus;
  tests: {
    psikotes: string;
    tertulis: string;
    wawancara: string;
  };
}

interface TimelineActivity {
  period: string;
  title: string;
  method?: string;
  subActivities?: string[];
}

export default function JadwalAdmisiPage() {
  const [activeTab, setActiveTab] = useState<number>(2); // Default to Gelombang II (active)

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const waves: Wave[] = [
    {
      id: 1,
      title: 'GELOMBANG I',
      openingDate: '13 OKT 2025',
      status: 'Selesai',
      tests: {
        psikotes: '17-29 Okt',
        tertulis: '21 Okt',
        wawancara: '20 Nov'
      }
    },
    {
      id: 2,
      title: 'GELOMBANG II',
      openingDate: '2 FEB 2026',
      status: 'Berjalan',
      tests: {
        psikotes: '6-18 Feb',
        tertulis: '10 Feb',
        wawancara: '3 Mar'
      }
    },
    {
      id: 3,
      title: 'GELOMBANG III',
      openingDate: '27 APR 2026',
      status: 'Akan Datang',
      tests: {
        psikotes: '1-12 Mei',
        tertulis: '5 Mei',
        wawancara: '26 & 28 Mei'
      }
    }
  ];

  const timelines: { [key: number]: TimelineActivity[] } = {
    1: [
      { period: 'Oktober, Minggu ke-2', title: 'Pendaftaran Dibuka', method: 'Online' },
      { period: 'Oktober, Minggu ke-3', title: 'Sosialisasi Program Studi', method: 'Via Zoom' },
      { period: 'Oktober, Minggu ke-3-4', title: 'Psikotes', method: 'Online' },
      { period: 'Oktober, Minggu ke-4', title: 'Tes Tertulis', method: 'Offline' },
      { period: 'November, Minggu ke-1', title: 'Pemberkasan' },
      { 
        period: 'November, Minggu ke-2', 
        title: 'Tes Tertulis',
        subActivities: ['Pengetahuan Alkitab', 'Pengetahuan Umum', 'Bahasa Inggris']
      },
      { period: 'November, Minggu ke-3', title: 'Wawancara', method: 'Offline' },
      { period: 'November, Minggu ke-4', title: 'Pengumuman Hasil' },
      { period: 'Desember, Minggu ke-1', title: 'Registrasi & Pembayaran' }
    ],
    2: [
      { period: 'Februari, Minggu ke-1', title: 'Pendaftaran Dibuka', method: 'Online' },
      { period: 'Februari, Minggu ke-1', title: 'Sosialisasi Program Studi', method: 'Via Zoom' },
      { period: 'Februari, Minggu ke-2-3', title: 'Psikotes', method: 'Online' },
      { period: 'Februari, Minggu ke-2', title: 'Tes Tertulis', method: 'Offline' },
      { period: 'Februari, Minggu ke-3', title: 'Pemberkasan' },
      { 
        period: 'Februari, Minggu ke-4', 
        title: 'Tes Tertulis',
        subActivities: ['Pengetahuan Alkitab', 'Pengetahuan Umum', 'Bahasa Inggris']
      },
      { period: 'Maret, Minggu ke-1', title: 'Wawancara', method: 'Offline' },
      { period: 'Maret, Minggu ke-2', title: 'Pengumuman Hasil' },
      { period: 'Maret, Minggu ke-3', title: 'Registrasi & Pembayaran' }
    ],
    3: [
      { period: 'April, Minggu ke-4', title: 'Pendaftaran Dibuka', method: 'Online' },
      { period: 'April, Minggu ke-4', title: 'Sosialisasi Program Studi', method: 'Via Zoom' },
      { period: 'Mei, Minggu ke-1-2', title: 'Psikotes', method: 'Online' },
      { period: 'Mei, Minggu ke-1', title: 'Tes Tertulis', method: 'Offline' },
      { period: 'Mei, Minggu ke-2', title: 'Pemberkasan' },
      { 
        period: 'Mei, Minggu ke-3', 
        title: 'Tes Tertulis',
        subActivities: ['Pengetahuan Alkitab', 'Pengetahuan Umum', 'Bahasa Inggris']
      },
      { period: 'Mei, Minggu ke-4', title: 'Wawancara', method: 'Offline' },
      { period: 'Juni, Minggu ke-1', title: 'Pengumuman Hasil' },
      { period: 'Juni, Minggu ke-2', title: 'Registrasi & Pembayaran' }
    ]
  };

  const getStatusBadgeStyle = (status: WaveStatus) => {
    switch (status) {
      case 'Selesai':
        return 'bg-gray-100 text-gray-600 border-gray-300';
      case 'Berjalan':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Akan Datang':
        return 'bg-blue-100 text-blue-700 border-blue-300';
    }
  };

  const getTabStatusLabel = (id: number): TimelineStatus => {
    if (id === 1) return 'Selesai';
    if (id === 2) return 'Berjalan';
    return 'Akan Datang';
  };

  const getTabStatusBadgeStyle = (status: TimelineStatus) => {
    switch (status) {
      case 'Selesai':
        return 'bg-gray-200 text-gray-600 border-gray-300';
      case 'Berjalan':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Akan Datang':
        return 'bg-blue-100 text-blue-700 border-blue-300';
    }
  };

  const getMethodIcon = (method?: string) => {
    if (!method) return null;
    switch (method.toLowerCase()) {
      case 'via zoom':
      case 'online':
        return <Video className="w-3 h-3" />;
      case 'offline':
        return <Users className="w-3 h-3" />;
      default:
        return <FileText className="w-3 h-3" />;
    }
  };

  return (
    <div className="bg-white">


      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
            PENDAFTARAN MAHASISWA BARU
          </h1>
          <p className="text-2xl lg:text-3xl font-bold text-red-700">
            Tahun Akademik 2026-2027
          </p>
        </div>
      </section>

      {/* Wave Summary Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {waves.map((wave) => (
              <div 
                key={wave.id} 
                className={`bg-white border-2 rounded-xl p-6 transition-all hover:shadow-lg ${
                  wave.status === 'Berjalan' ? 'border-red-700 shadow-md' : 'border-gray-200'
                }`}
              >
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getStatusBadgeStyle(wave.status)}`}>
                    {wave.status}
                  </span>
                  {wave.status === 'Berjalan'}
                </div>

                {/* Wave Title */}
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {wave.title}
                </h3>

                {/* Opening Date */}
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-red-700" />
                  <span className="text-xl font-bold text-gray-900">
                    {wave.openingDate}
                  </span>
                </div>

                {/* Test Details */}
                <div className="space-y-3 border-t pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Tes Masuk:</p>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Psikotes</p>
                      <p className="text-xs text-gray-600">{wave.tests.psikotes}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Tes Tertulis</p>
                      <p className="text-xs text-gray-600">{wave.tests.tertulis}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Wawancara</p>
                      <p className="text-xs text-gray-600">{wave.tests.wawancara}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a href="https://sis.sttb.ac.id/pmb" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8 py-6 text-lg font-bold">
                DAFTAR SEKARANG
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Timeline Pendaftaran
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {waves.map((wave) => {
                const isActive = activeTab === wave.id;
                const status = getTabStatusLabel(wave.id);
                
                return (
                  <div key={wave.id} className="flex flex-col items-center">
                    {/* Status Badge Above Tab */}
                    <span className={`text-[10px] font-semibold px-3 py-1 rounded-full mb-2 ${getTabStatusBadgeStyle(status)}`}>
                      {status}
                    </span>
                    
                    {/* Tab Button */}
                    <button
                      onClick={() => setActiveTab(wave.id)}
                      className={`px-8 py-3 rounded-lg font-bold transition-all ${
                        isActive
                          ? 'bg-red-700 text-white shadow-lg'
                          : 'bg-white text-gray-600 border-2 border-blue-900 hover:bg-gray-50'
                      }`}
                    >
                      {wave.title}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Timeline Content */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 animate-in fade-in duration-300">
              <div className="space-y-8">
                {timelines[activeTab].map((activity, index) => (
                  <div key={index} className="flex gap-6 relative">
                    {/* Timeline Line & Dot */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-red-700 rounded-full border-4 border-white shadow-md z-10"></div>
                      {index < timelines[activeTab].length - 1 && (
                        <div className="w-0.5 h-full bg-blue-900 mt-2"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      {/* Period */}
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">
                          {activity.period}
                        </span>
                      </div>

                      {/* Activity Title */}
                      <h4 className="text-lg font-bold text-blue-900 mb-2">
                        {activity.title}
                      </h4>

                      {/* Method Tag */}
                      {activity.method && (
                        <div className="inline-flex items-center gap-1 bg-red-50 border border-red-200 text-red-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                          {getMethodIcon(activity.method)}
                          <span>{activity.method}</span>
                        </div>
                      )}

                      {/* Sub-activities */}
                      {activity.subActivities && (
                        <div className="bg-gray-50 rounded-lg p-4 mt-3 border border-gray-200">
                          <ul className="space-y-2">
                            {activity.subActivities.map((sub, subIndex) => (
                              <li key={subIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="text-blue-900 mt-1">•</span>
                                <span>{sub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call-out */}
      <section className="py-20 bg-white" id="butuh-bantuan">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Butuh Bantuan?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ lineHeight: '1.6' }}>
              Tim admisi kami siap membantu Anda dalam proses pendaftaran. 
              Jangan ragu untuk menghubungi kami jika memiliki pertanyaan.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-100">
              <p className="text-sm font-semibold text-blue-900 mb-2">Contact Person Admisi:</p>
              <p className="text-2xl font-bold text-blue-900 mb-1">Admin STTB</p>
              <p className="text-gray-600 mb-4">Koordinator Admisi</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <a href="tel:+622012345678" className="inline-flex items-center justify-center gap-2 text-blue-900 font-semibold hover:text-blue-700">
                  <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm">📞</span>
                  (022) 1234-5678
                </a>
                <a href="mailto:admisi@sttb.ac.id" className="inline-flex items-center justify-center gap-2 text-blue-900 font-semibold hover:text-blue-700">
                  <span className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm">✉️</span>
                  admisi@sttb.ac.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}