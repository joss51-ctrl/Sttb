/**
 * KontakKamiPage - Contact Us Page
 * Highly functional and organized contact page with Google Maps, contact form, and departmental contacts
 */

import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Nama harus minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  message: z.string().min(10, 'Pesan harus minimal 10 karakter'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function KontakKamiPage() {
  // Form handling
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    toast.success('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    reset();
  };

  // Departmental contacts data
  const departments = [
    {
      id: 1,
      title: 'ADMISI',
      whatsapp: 'https://wa.me/628123456789',
      email: 'admisi@sttb.ac.id',
      services: [
        'Informasi Pendaftaran',
        'Prosedur Admisi',
        'Persyaratan Dokumen',
        'Jadwal Tes Masuk',
        'Info Program Studi',
      ],
    },
    {
      id: 2,
      title: 'KEUANGAN',
      whatsapp: 'https://wa.me/628123456790',
      email: 'keuangan@sttb.ac.id',
      services: [
        'Info Biaya Studi',
        'Info Beasiswa',
        'Pembayaran SPP',
        'Cicilan Kuliah',
        'Donasi & Dukungan',
      ],
    },
    {
      id: 3,
      title: 'AKADEMIK',
      whatsapp: 'https://wa.me/628123456791',
      email: 'akademik@sttb.ac.id',
      services: [
        'Kurikulum Program',
        'Jadwal Perkuliahan',
        'Konseling Akademik',
        'Transkrip & Sertifikat',
        'Info Dosen',
      ],
    },
    {
      id: 4,
      title: 'PERPUSTAKAAN',
      whatsapp: 'https://wa.me/628123456792',
      email: 'perpustakaan@sttb.ac.id',
      services: [
        'Koleksi Buku',
        'Peminjaman',
        'Ruang Baca',
        'Database Digital',
        'Jam Operasional',
      ],
    },
    {
      id: 5,
      title: 'KEMAHASISWAAN',
      whatsapp: 'https://wa.me/628123456793',
      email: 'kemahasiswaan@sttb.ac.id',
      services: [
        'Kegiatan Mahasiswa',
        'Organisasi Kampus',
        'Pembinaan Rohani',
        'Konseling Pastoral',
        'Fasilitas Kampus',
      ],
    },
    {
      id: 6,
      title: 'HUMAS & PUBLIKASI',
      whatsapp: 'https://wa.me/628123456794',
      email: 'humas@sttb.ac.id',
      services: [
        'Kerjasama Institusi',
        'Media & Publikasi',
        'Event Kampus',
        'Alumni Relations',
        'Partnership',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Google Maps Section - Full Width */}
      <section className="w-full h-[500px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.746825869293!2d107.58583731463896!3d-6.898277069426315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6657fced08b%3A0xb0a7274675724c5a!2sSekolah%20Tinggi%20Teologi%20Bandung%20(Bandung%20Theological%20Seminary)!5e0!3m2!1sen!2sid!4v1710234567890!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="STTB Location"
        ></iframe>
      </section>

      {/* Main Contact Section - 2 Column Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Side - Institutional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-blue-900 mb-6">
                    Hubungi Kami
                  </h2>
                  <p className="text-gray-600" style={{ lineHeight: '1.6' }}>
                    Kami siap melayani Anda. Hubungi kami untuk informasi lebih lanjut 
                    tentang program studi, admisi, dan layanan kami.
                  </p>
                </div>

                {/* Contact Information with Icons */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-1">Alamat</h3>
                      <p className="text-gray-700" style={{ lineHeight: '1.6' }}>
                        Jl. Durian No. 44<br />
                        Bandung, Jawa Barat 40264<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-1">Telepon</h3>
                      <a 
                        href="tel:+62227317343" 
                        className="text-gray-700 hover:text-red-700 transition-colors"
                        style={{ lineHeight: '1.6' }}
                      >
                        +62 22 7317343
                      </a>
                      <br />
                      <a 
                        href="tel:+6281234567890" 
                        className="text-gray-700 hover:text-red-700 transition-colors"
                        style={{ lineHeight: '1.6' }}
                      >
                        +62 812-3456-7890 (WhatsApp)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-1">Email</h3>
                      <a 
                        href="mailto:info@sttb.ac.id" 
                        className="text-gray-700 hover:text-red-700 transition-colors"
                        style={{ lineHeight: '1.6' }}
                      >
                        info@sttb.ac.id
                      </a>
                      <br />
                      <a 
                        href="mailto:contact@sttb.ac.id" 
                        className="text-gray-700 hover:text-red-700 transition-colors"
                        style={{ lineHeight: '1.6' }}
                      >
                        contact@sttb.ac.id
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-1">Jam Operasional</h3>
                      <p className="text-gray-700" style={{ lineHeight: '1.6' }}>
                        Senin - Jumat: 08:00 - 16:00 WIB<br />
                        Sabtu: 08:00 - 12:00 WIB<br />
                        Minggu & Libur: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Message Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Kirim Pesan
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-blue-900 font-semibold mb-2 block">
                      Nama Lengkap
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                      {...register('name')}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-blue-900 font-semibold mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contoh@email.com"
                      {...register('email')}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="text-blue-900 font-semibold mb-2 block">
                      Pesan
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={6}
                      {...register('message')}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-6 rounded-lg shadow-md transition-colors"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Mengirim...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Kirim Pesan
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departmental Contacts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Hubungi Departemen Terkait
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
                Dapatkan informasi spesifik dengan menghubungi departemen yang sesuai dengan 
                kebutuhan Anda
              </p>
            </div>

            {/* 3-Column Grid of Department Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {/* Header */}
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 pb-4 border-b-2 border-blue-900">
                    {dept.title}
                  </h3>

                  {/* Direct Actions - Red Links */}
                  <div className="mb-6 space-y-3">
                    <a
                      href={dept.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-700 font-bold hover:text-red-800 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${dept.email}`}
                      className="flex items-center gap-2 text-red-700 font-bold hover:text-red-800 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      {dept.email}
                    </a>
                  </div>

                  {/* Bullet List of Services */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-600 mb-3">
                      Layanan:
                    </p>
                    <ul className="space-y-2">
                      {dept.services.map((service, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-700 font-bold text-lg mt-0.5">•</span>
                          <span className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}