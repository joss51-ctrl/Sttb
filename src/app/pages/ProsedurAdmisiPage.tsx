/**
 * ProsedurAdmisiPage - Admission Procedure Page
 * 5-stage horizontal stepper system with detailed content for each stage
 */

import { useState } from 'react';
import { ChevronRight, Download, Mail, Phone, FileText, AlertCircle, CheckCircle, Copy, MessageSquare, CreditCard, Users, Bell, FileCheck, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';

type StepNumber = 1 | 2 | 3 | 4 | 5;

interface Step {
  number: StepNumber;
  label: string;
  shortLabel: string;
}

export default function ProsedurAdmisiPage() {
  const [activeStep, setActiveStep] = useState<StepNumber>(1);

  const steps: Step[] = [
    { number: 1, label: 'Memperoleh Form', shortLabel: 'Form' },
    { number: 2, label: 'Kirim Berkas', shortLabel: 'Berkas' },
    { number: 3, label: 'Bayar Biaya', shortLabel: 'Bayar' },
    { number: 4, label: 'Tes Online', shortLabel: 'Tes' },
    { number: 5, label: 'Pengumuman', shortLabel: 'Hasil' }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Nomor rekening berhasil disalin!');
  };

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
            <span className="text-gray-900 font-medium">Prosedur Admisi</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
            Prosedur Admisi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti 5 tahapan mudah untuk menjadi bagian dari keluarga STTB
          </p>
        </div>
      </section>

      {/* Horizontal Stepper */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                <div 
                  className="h-full bg-red-700 transition-all duration-500"
                  style={{ width: `${((activeStep - 1) / 4) * 100}%` }}
                ></div>
              </div>

              {/* Steps */}
              {steps.map((step, index) => {
                const isActive = activeStep === step.number;
                const isPast = activeStep > step.number;
                
                return (
                  <div 
                    key={step.number}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => setActiveStep(step.number)}
                  >
                    {/* Circle */}
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3 transition-all
                      ${isActive ? 'bg-red-700 text-white shadow-lg scale-110' : ''}
                      ${isPast ? 'bg-blue-900 text-white' : ''}
                      ${!isActive && !isPast ? 'bg-gray-200 text-gray-500' : ''}
                      group-hover:scale-105
                    `}>
                      {isPast ? <CheckCircle className="w-6 h-6" /> : `0${step.number}`}
                    </div>

                    {/* Label */}
                    <div className="text-center">
                      <p className={`
                        text-xs font-semibold mb-1
                        ${isActive ? 'text-red-700' : 'text-gray-500'}
                      `}>
                        0{step.number}
                      </p>
                      <p className={`
                        text-sm font-medium hidden md:block
                        ${isActive ? 'text-red-700' : 'text-gray-600'}
                      `}>
                        {step.label}
                      </p>
                      <p className={`
                        text-sm font-medium md:hidden
                        ${isActive ? 'text-red-700' : 'text-gray-600'}
                      `}>
                        {step.shortLabel}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Area */}
      <section className="py-20 bg-gray-50" style={{ marginTop: '0px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* TAHAP 1: Memperoleh Formulir */}
            {activeStep === 1 && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Tahap 1: Memperoleh Formulir
                </h2>

                {/* Top Section - 2 Columns */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Left Column - Online */}
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <h3 className="text-xl font-bold text-blue-900 mb-6">
                      Cara Pendaftaran (Online)
                    </h3>
                    <ol className="space-y-4" style={{ lineHeight: '1.6' }}>
                      <li className="flex gap-3">
                        <span className="text-red-700 font-bold flex-shrink-0">1.</span>
                        <div>
                          <p className="text-gray-700">
                            Akses website pendaftaran di <strong className="text-blue-900">https://sis.sttb.ac.id/pmb</strong>
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-red-700 font-bold flex-shrink-0">2.</span>
                        <div>
                          <p className="text-gray-700">
                            Isi data diri dengan lengkap dan benar. Pastikan email dan nomor WhatsApp aktif untuk komunikasi selanjutnya.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-red-700 font-bold flex-shrink-0">3.</span>
                        <div>
                          <p className="text-gray-700">
                            Setelah selesai, download formulir dalam format PDF untuk dilengkapi dan dikirim kembali.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* Right Column - Alternative */}
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <h3 className="text-xl font-bold text-blue-900 mb-6">
                      Cara Alternatif (Hardcopy/Softcopy)
                    </h3>
                    <ul className="space-y-4" style={{ lineHeight: '1.6' }}>
                      <li className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-700">
                            <strong className="text-blue-900">WhatsApp:</strong> <strong className="text-red-700">+62 812-3456-7890</strong> (kirim pesan untuk mendapatkan formulir)
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-700">
                            <strong className="text-blue-900">Email:</strong> admisi@sttb.ac.id (request formulir pendaftaran)
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-700">
                            <strong className="text-blue-900">Post (Hardcopy):</strong> Ambil langsung formulir di kantor STTB atau kirim surat permintaan
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Section - Important Info Cards */}
                <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: '60px' }}>
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-start gap-4">
                    <CreditCard className="w-8 h-8 text-red-700 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Biaya</h4>
                      <p className="text-gray-700">Gratis (Tidak dipungut biaya)</p>
                    </div>
                  </div>

                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-start gap-4">
                    <FileText className="w-8 h-8 text-red-700 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Foto</h4>
                      <p className="text-gray-700">Format JPEG, maksimal 400 KB</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAHAP 2: Kirim Berkas */}
            {activeStep === 2 && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Tahap 2: Mengisi Form dan Persiapan Berkas
                </h2>

                {/* Documents Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Card - Formulir Pendaftaran */}
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <h3 className="text-xl font-bold text-blue-900 mb-6">
                      Formulir Pendaftaran
                    </h3>
                    <ul className="space-y-3" style={{ lineHeight: '1.4' }}>
                      {[
                        'Formulir Pendaftaran yang telah diisi lengkap',
                        'Pas Foto berwarna ukuran 4x6 (3 lembar)',
                        'Fotokopi KTP yang masih berlaku',
                        'Fotokopi Ijazah terakhir (dilegalisir)',
                        'Fotokopi Transkrip Nilai (dilegalisir)',
                        'Surat Rekomendasi dari Gembala/Pemimpin Gereja',
                        'Surat Pernyataan Kesehatan',
                        'Kartu Keluarga (fotokopi)',
                        'Surat Keterangan Berkelakuan Baik',
                        'Curriculum Vitae (CV) terbaru'
                      ].map((item, index) => (
                        <li key={index} className="flex gap-2 items-start text-gray-700">
                          <CheckCircle className="w-4 h-4 text-red-700 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Card - Dokumen Tambahan */}
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <h3 className="text-xl font-bold text-blue-900 mb-6">
                      Dokumen Tambahan
                    </h3>
                    <ul className="space-y-3" style={{ lineHeight: '1.4' }}>
                      {[
                        'Sertifikat Baptisan (fotokopi)',
                        'Surat Keterangan Aktif Pelayanan di Gereja',
                        'Sertifikat Pelatihan/Seminar (jika ada)',
                        'Fotokopi BPJS/Kartu Asuransi Kesehatan',
                        'Surat Pernyataan Kesanggupan Finansial',
                        'Portfolio Pelayanan (jika ada)',
                        'Surat Izin dari Orang Tua/Wali (jika < 21 tahun)',
                        'Essay Motivasi (500 kata)'
                      ].map((item, index) => (
                        <li key={index} className="flex gap-2 items-start text-gray-700">
                          <CheckCircle className="w-4 h-4 text-red-700 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong className="text-blue-900">Khusus S2:</strong> Tambahan Surat Rekomendasi Akademik dan Proposal Tesis awal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Notices */}
                <div className="space-y-4 mb-8">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        <strong className="text-blue-900">Info Beasiswa:</strong> Jika Anda memerlukan informasi beasiswa, silakan <strong className="text-red-700">Hubungi Petugas Admisi</strong> untuk penjelasan lebih detail mengenai syarat dan ketentuan.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-6">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        <strong className="text-blue-900">Tanda Tangan Digital:</strong> Untuk pengiriman softcopy, gunakan tanda tangan digital. <strong className="text-red-700">Tidak perlu mencetak</strong> semua dokumen jika mengirim via email/WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Special Conditions */}
                <div className="bg-gray-100 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-red-700" />
                    Ketentuan Khusus
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: 'ℹ️', text: 'KTP harus masih berlaku (tidak expired)' },
                      { icon: 'ℹ️', text: 'Ijazah dan transkrip harus dilegalisir oleh institusi asal' },
                      { icon: 'ℹ️', text: 'BPJS/Asuransi: Diperlukan untuk keperluan administrasi kampus' },
                      { icon: 'ℹ️', text: 'Surat rekomendasi harus dari pendeta/pemimpin gereja yang sah' },
                      { icon: 'ℹ️', text: 'Pas foto: Latar belakang merah atau biru, berpakaian rapi' },
                      { icon: 'ℹ️', text: 'Essay motivasi: Tulis tentang panggilan dan visi pelayanan Anda' }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <span className="text-lg flex-shrink-0">{item.icon}</span>
                        <p className="text-sm text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                    Cara Mengirim Berkas
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Physical Address */}
                    <div className="border-2 border-blue-900 rounded-lg p-6 bg-blue-50">
                      <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Alamat Pos (Hardcopy)
                      </h4>
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <p className="font-mono text-sm text-gray-800 leading-relaxed">
                          <strong>Bagian Admisi</strong><br />
                          Sekolah Tinggi Teologi Bandung<br />
                          Jl. Teologi No. 123<br />
                          Bandung 40115<br />
                          Jawa Barat, Indonesia
                        </p>
                      </div>
                    </div>

                    {/* Digital Submission */}
                    <div className="border-2 border-green-600 rounded-lg p-6 bg-green-50">
                      <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Kirim Digital (Softcopy)
                      </h4>
                      <div className="space-y-3">
                        <a 
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                          <MessageSquare className="w-5 h-5" />
                          WhatsApp: +62 812-3456-7890
                        </a>
                        <a 
                          href="mailto:admisi@sttb.ac.id"
                          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                          Email: admisi@sttb.ac.id
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Confirmation Note */}
                  <div className="mt-6 bg-blue-100 border border-blue-300 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-900">Catatan:</strong> Tim Admisi akan menghubungi Anda dalam <strong>3 hari kerja</strong> setelah berkas diterima untuk konfirmasi kelengkapan dokumen.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAHAP 3: Bayar Biaya */}
            {activeStep === 3 && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Tahap 3: Biaya Pendaftaran dan Tes Masuk
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Payment Details */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-900">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-red-700" />
                      Pembayaran Biaya Pendaftaran
                    </h3>

                    <div className="text-center mb-6">
                      <p className="text-sm text-gray-600 mb-2">Total Biaya</p>
                      <p className="text-5xl font-bold text-blue-900">Rp 500.000,-</p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Bank</p>
                        <p className="text-lg font-bold text-blue-900">BCA</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Atas Nama</p>
                        <p className="text-lg font-bold text-blue-900">Yayasan STT Bandung</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Nomor Rekening</p>
                        <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                          <p className="text-2xl font-bold text-blue-900 tracking-wider">282 300 5555</p>
                          <button
                            onClick={() => copyToClipboard('2823005555')}
                            className="text-red-700 hover:text-red-800 transition-colors"
                            title="Salin nomor rekening"
                          >
                            <Copy className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Confirmation */}
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-6">
                      Konfirmasi Pembayaran
                    </h3>

                    <div className="space-y-4">
                      <p className="text-gray-700 mb-6" style={{ lineHeight: '1.6' }}>
                        Setelah melakukan transfer, silakan konfirmasi pembayaran Anda melalui salah satu metode berikut:
                      </p>

                      <Button 
                        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 text-lg font-semibold"
                        onClick={() => window.open('https://sis.sttb.ac.id/pmb/konfirmasi', '_blank')}
                      >
                        <FileCheck className="w-5 h-5 mr-2" />
                        Konfirmasi via Website
                      </Button>

                      <a 
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button 
                          variant="outline"
                          className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-6 text-lg font-semibold"
                        >
                          <MessageSquare className="w-5 h-5 mr-2" />
                          Konfirmasi via WhatsApp
                        </Button>
                      </a>

                      <div className="bg-gray-100 rounded-lg p-4 mt-6">
                        <p className="text-sm text-gray-700">
                          <strong className="text-blue-900">Upload bukti transfer:</strong> Foto/screenshot bukti pembayaran dengan nama pengirim yang jelas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Warning Note */}
                <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6 flex gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-red-700 mb-2">Perhatian Penting!</p>
                    <p className="text-gray-700">
                      Biaya pendaftaran <strong>tidak dapat dikembalikan</strong>. Berkas tanpa bukti pembayaran yang valid <strong>tidak akan diproses</strong> oleh tim admisi.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAHAP 4: Tes Online */}
            {activeStep === 4 && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Tahap 4: Tes Seleksi
                </h2>

                {/* Pre-test Status Banner */}
                <div className="bg-blue-100 border-l-4 border-blue-600 rounded-r-xl p-6 mb-12">
                  <p className="text-gray-800 text-center" style={{ lineHeight: '1.6' }}>
                    <strong className="text-blue-900">Hanya pendaftar yang lolos seleksi dokumen</strong> yang akan dipanggil untuk tes. Instruksi detail dikirim via <strong>WhatsApp & Email</strong>.
                  </p>
                </div>

                {/* 5 Exams Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* 01. PSIKOTES */}
                  <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200 hover:border-red-700 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-red-700">01</span>
                      <h3 className="text-lg font-bold text-blue-900">PSIKOTES</h3>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">Pengisian Form</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">Tes Bersama</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">Wawancara</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                      Psikotes bertujuan mengukur tingkat kecerdasan, sikap dan cara kerja, emosi, relasi sosial calon mahasiswa.
                    </p>
                  </div>

                  {/* 02. Pengetahuan TEOLOGI */}
                  <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200 hover:border-red-700 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-red-700">02</span>
                      <h3 className="text-lg font-bold text-blue-900">Pengetahuan TEOLOGI</h3>
                    </div>

                    <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                      Tes Pengetahuan Teologi menguji pengetahuan calon mahasiswa mengenai tokoh-tokoh Alkitab, ayat-ayat penting dalam Alkitab, serta pemahaman iman Kristen calon mahasiswa.
                    </p>
                  </div>

                  {/* 03. BHS INDONESIA */}
                  <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200 hover:border-red-700 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-red-700">03</span>
                      <h3 className="text-lg font-bold text-blue-900">BHS INDONESIA</h3>
                    </div>

                    <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                      Tes Bahasa Indonesia menguji kemampuan calon mahasiswa dalam menyusun tata bahasa yang baik, memahami bacaan dan menuliskan ide-ide dalam bahasa Indonesia.
                    </p>
                  </div>

                  {/* 04. BHS INGGRIS */}
                  <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200 hover:border-red-700 transition-all md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-red-700">04</span>
                      <h3 className="text-lg font-bold text-blue-900">BHS INGGRIS</h3>
                    </div>

                    <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                      Tes Bahasa Inggris menguji kemampuan calon mahasiswa untuk memahami tata bahasa, bacaan dan menuliskan ide-ide dalam bahasa Inggris.
                    </p>
                  </div>

                  {/* 05. WAWANCARA DOSEN */}
                  <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-700 hover:shadow-xl transition-all md:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-red-700">05</span>
                        <h3 className="text-lg font-bold text-blue-900">WAWANCARA DOSEN</h3>
                      </div>
                      <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Nilai Terbesar
                      </span>
                    </div>

                    <p className="text-sm text-gray-600" style={{ lineHeight: '1.6' }}>
                      Wawancara memiliki <strong className="text-red-700">penilaian terbesar</strong> dalam tes masuk untuk menguji keseriusan panggilan dan rencana pelayanan mahasiswa di masa depan.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAHAP 5: Pengumuman */}
            {activeStep === 5 && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Tahap 5: Pengumuman
                </h2>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8">
                  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Card 1: Pengumuman Hasil */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-blue-200 hover:border-blue-900 transition-all">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bell className="w-8 h-8 text-blue-900" />
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-3">
                        PENGUMUMAN HASIL
                      </h3>
                      <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                        Hasil dikirim dalam <strong className="text-red-700">2-3 minggu</strong> via Email & WhatsApp
                      </p>
                    </div>

                    {/* Card 2: Konfirmasi & Pembayaran */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-blue-200 hover:border-blue-900 transition-all">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileCheck className="w-8 h-8 text-green-700" />
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-3">
                        KONFIRMASI & PEMBAYARAN
                      </h3>
                      <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                        Mengisi form konfirmasi & menyelesaikan administrasi keuangan
                      </p>
                    </div>

                    {/* Card 3: Resmi Menjadi Mahasiswa */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-red-200 hover:border-red-700 transition-all">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="w-8 h-8 text-red-700" />
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-3">
                        RESMI MENJADI MAHASISWA
                      </h3>
                      <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                        Mengikuti orientasi & beralih ke bagian Akademik/Kemahasiswaan
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <div className="inline-block bg-white rounded-xl shadow-md px-8 py-6 border-2 border-blue-900">
                      <p className="text-2xl font-bold text-blue-900 mb-2">
                        🎉 Selamat Datang di Keluarga STTB! 🎉
                      </p>
                      <p className="text-gray-600">
                        Perjalanan Anda sebagai hamba Tuhan dimulai di sini
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => activeStep > 1 && setActiveStep((activeStep - 1) as StepNumber)}
              disabled={activeStep === 1}
              className="border-2 border-blue-900 text-blue-900 disabled:opacity-50"
            >
              ← Tahap Sebelumnya
            </Button>

            <Button
              size="lg"
              onClick={() => activeStep < 5 && setActiveStep((activeStep + 1) as StepNumber)}
              disabled={activeStep === 5}
              className="bg-red-700 hover:bg-red-800 text-white disabled:opacity-50"
            >
              Tahap Selanjutnya →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
