/**
 * SenatPage - Student Senate Page
 * Dynamic and organized page showcasing student leadership and activities
 */

import { ChevronRight, Users, Heart, Calendar, Sparkles, Target } from 'lucide-react';

export default function SenatPage() {
  // Activity divisions data
  const divisions = [
    {
      id: 1,
      title: 'Training Group',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRyYWluaW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzczMjQ3Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Leadership Development Workshop',
        'Public Speaking & Communication Training',
        'Organizational Management Seminar',
        'Team Building & Collaboration Skills',
        'Conflict Resolution Training',
        'Strategic Planning Workshop',
      ],
    },
    {
      id: 2,
      title: 'Pembinaan & Pelayanan',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1561346745-5db62ae43861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbWVudG9yaW5nJTIwZ3VpZGFuY2V8ZW58MXx8fHwxNzczMjQ3Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Spiritual Formation & Discipleship',
        'Pastoral Care & Counseling Program',
        'Community Outreach & Ministry',
        'Mentoring & Peer Support Groups',
        'Character Development Sessions',
        'Service Learning Opportunities',
      ],
    },
    {
      id: 3,
      title: 'Perayaan & Peringatan',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1771605609561-c853e748397d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBjZWxlYnJhdGlvbiUyMGV2ZW50fGVufDF8fHx8MTc3MzI0NzY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Welcoming New Students Celebration',
        'Graduation & Commencement Ceremonies',
        'Christmas & Easter Celebrations',
        'Independence Day Commemoration',
        'Academic Achievement Awards',
        'Alumni Homecoming Events',
      ],
    },
    {
      id: 4,
      title: 'Kehidupan Kampus',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1763890498955-13f109b2fbd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBsaWZlJTIwYWN0aXZpdGllcyUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzI0NzY3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      activities: [
        'Sports & Recreation Activities',
        'Arts & Cultural Performances',
        'Campus Clean-up & Green Initiatives',
        'Student Welfare & Well-being Programs',
        'Social & Networking Events',
        'Campus Newsletter & Media',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900 transition-colors">
              Beranda
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-blue-900 transition-colors">
              Kehidupan Kampus
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Senat</span>
          </div>
        </div>
      </section>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630331513451-829c6ba030c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhZGVyc2hpcCUyMHRlYW0lMjBncm91cHxlbnwxfHx8fDE3NzMyNDc2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Student Leadership"
            className="w-full h-full object-cover"
          />
          {/* 60% Black Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 tracking-wide">
            SENAT MAHASISWA
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Students Today,<br />Leaders Tomorrow!
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Membentuk pemimpin masa depan melalui pengembangan karakter, keterampilan kepemimpinan, 
            dan pelayanan kepada komunitas
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Tentang Senat Mahasiswa STTB
            </h2>
            <p className="text-gray-700 mb-4" style={{ lineHeight: '1.6' }}>
              Senat Mahasiswa STTB adalah organisasi yang mewakili suara dan kepentingan seluruh mahasiswa. 
              Kami berkomitmen untuk menciptakan lingkungan kampus yang kondusif, mengembangkan potensi 
              mahasiswa, dan memfasilitasi berbagai kegiatan yang mendukung pertumbuhan akademik, spiritual, 
              dan kepemimpinan.
            </p>
            <p className="text-gray-700" style={{ lineHeight: '1.6' }}>
              Melalui berbagai program dan kegiatan, Senat Mahasiswa menjadi wadah bagi mahasiswa untuk 
              mengembangkan keterampilan organisasi, kepemimpinan, dan pelayanan yang akan berguna dalam 
              kehidupan dan pelayanan masa depan.
            </p>
          </div>
        </div>
      </section>

      {/* Activity Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Divisi & Kegiatan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
              Senat Mahasiswa STTB mengorganisir berbagai kegiatan melalui empat divisi utama yang 
              dirancang untuk mengembangkan seluruh aspek kehidupan mahasiswa
            </p>
          </div>

          {/* 3-Column Grid (2x2 on smaller screens) */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {divisions.map((division) => {
                const Icon = division.icon;
                return (
                  <div
                    key={division.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Image on Top - Fixed Height */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={division.image}
                        alt={division.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay for Icon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-blue-900" />
                        </div>
                      </div>
                    </div>

                    {/* White Body Below */}
                    <div className="p-8">
                      {/* Navy Blue Title */}
                      <h3 className="text-2xl font-bold text-blue-900 mb-6">
                        {division.title}
                      </h3>

                      {/* Crimson Red Bullet Points */}
                      <ul className="space-y-3">
                        {division.activities.map((activity, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-red-700 font-bold text-lg mt-0.5">•</span>
                            <span className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-red-700 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Visi</h3>
                <p style={{ lineHeight: '1.6' }}>
                  Menjadi organisasi mahasiswa yang unggul dalam membentuk pemimpin Kristen yang 
                  berkarakter, kompeten, dan berdedikasi untuk melayani Tuhan dan sesama melalui 
                  berbagai program pembinaan dan pengembangan kepemimpinan.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-red-700 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Misi</h3>
                <ul className="space-y-3" style={{ lineHeight: '1.6' }}>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-red-300">•</span>
                    <span>Mengembangkan potensi kepemimpinan mahasiswa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-red-300">•</span>
                    <span>Memfasilitasi kegiatan spiritual dan akademik</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-red-300">•</span>
                    <span>Mewakili aspirasi dan kepentingan mahasiswa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-red-300">•</span>
                    <span>Menciptakan lingkungan kampus yang kondusif</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Struktur Organisasi
            </h2>
            <p className="text-gray-700 mb-12" style={{ lineHeight: '1.6' }}>
              Senat Mahasiswa STTB dipimpin oleh mahasiswa terpilih yang memiliki visi dan dedikasi 
              untuk melayani komunitas kampus dengan integritas dan keunggulan.
            </p>

            {/* Organization Chart */}
            <div className="space-y-8">
              {/* President */}
              <div className="flex justify-center">
                <div className="bg-blue-900 text-white px-8 py-6 rounded-xl shadow-lg max-w-xs w-full">
                  <div className="text-sm font-semibold mb-2 text-blue-200">Ketua</div>
                  <div className="text-xl font-bold">Senat Mahasiswa</div>
                </div>
              </div>

              {/* Vice President */}
              <div className="flex justify-center">
                <div className="bg-red-700 text-white px-8 py-6 rounded-xl shadow-lg max-w-xs w-full">
                  <div className="text-sm font-semibold mb-2 text-red-200">Wakil Ketua</div>
                  <div className="text-xl font-bold">Senat Mahasiswa</div>
                </div>
              </div>

              {/* Divisions */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {divisions.map((division) => {
                  const Icon = division.icon;
                  return (
                    <div
                      key={division.id}
                      className="bg-gray-100 px-6 py-6 rounded-xl border-2 border-gray-200 hover:border-blue-900 transition-colors"
                    >
                      <div className="flex justify-center mb-3">
                        <Icon className="w-6 h-6 text-blue-900" />
                      </div>
                      <div className="text-sm font-semibold text-gray-600 mb-1">Divisi</div>
                      <div className="text-base font-bold text-blue-900">{division.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Bergabung dengan Senat Mahasiswa STTB
          </h3>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Kembangkan potensi kepemimpinan Anda dan berkontribusi untuk komunitas kampus. 
            Jadilah bagian dari perubahan positif di STTB!
          </p>
          <a href="/kontak">
            <button className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Hubungi Kami
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}