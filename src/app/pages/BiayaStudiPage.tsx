/**
 * BiayaStudiPage - Study Fees Page
 * Tabbed table system for different programs
 */

import { useState } from 'react';
import { ChevronRight, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface FeeItem {
  no: number;
  komponen: string;
  nominal: string;
}

export default function BiayaStudiPage() {
  const [activeTab, setActiveTab] = useState('sarjana-teologi');

  // Sarjana Teologi Fees
  const sarjanaTeologiFees: FeeItem[] = [
    { no: 1, komponen: 'Biaya Pendaftaran', nominal: '500.000' },
    { no: 2, komponen: 'Uang Pangkal (dibayar sekali)', nominal: '5.000.000' },
    { no: 3, komponen: 'SPP per Semester', nominal: '8.500.000' },
    { no: 4, komponen: 'Biaya Praktikum per Semester', nominal: '750.000' },
    { no: 5, komponen: 'Biaya Laboratorium Bahasa per Semester', nominal: '500.000' },
    { no: 6, komponen: 'Biaya Perpustakaan per Semester', nominal: '300.000' },
    { no: 7, komponen: 'Biaya Kemahasiswaan per Semester', nominal: '400.000' },
    { no: 8, komponen: 'Biaya Field Education (Semester 5-6)', nominal: '1.500.000' },
    { no: 9, komponen: 'Biaya Wisuda', nominal: '2.500.000' },
  ];

  // Sarjana Pendidikan Kristen Fees
  const sarjanaPendidikanFees: FeeItem[] = [
    { no: 1, komponen: 'Biaya Pendaftaran', nominal: '500.000' },
    { no: 2, komponen: 'Uang Pangkal (dibayar sekali)', nominal: '5.000.000' },
    { no: 3, komponen: 'SPP per Semester', nominal: '8.000.000' },
    { no: 4, komponen: 'Biaya Praktikum per Semester', nominal: '750.000' },
    { no: 5, komponen: 'Biaya Laboratorium Bahasa per Semester', nominal: '500.000' },
    { no: 6, komponen: 'Biaya Perpustakaan per Semester', nominal: '300.000' },
    { no: 7, komponen: 'Biaya Kemahasiswaan per Semester', nominal: '400.000' },
    { no: 8, komponen: 'Biaya Teaching Practice (Semester 5-6)', nominal: '1.500.000' },
    { no: 9, komponen: 'Biaya Wisuda', nominal: '2.500.000' },
  ];

  // Magister Teologi Fees
  const magisterTeologiFees: FeeItem[] = [
    { no: 1, komponen: 'Biaya Pendaftaran', nominal: '750.000' },
    { no: 2, komponen: 'Uang Pangkal (dibayar sekali)', nominal: '8.000.000' },
    { no: 3, komponen: 'SPP per Semester', nominal: '12.000.000' },
    { no: 4, komponen: 'Biaya Perpustakaan per Semester', nominal: '500.000' },
    { no: 5, komponen: 'Biaya Penelitian Tesis', nominal: '3.000.000' },
    { no: 6, komponen: 'Biaya Bimbingan Tesis per Semester', nominal: '2.000.000' },
    { no: 7, komponen: 'Biaya Sidang Tesis', nominal: '2.500.000' },
    { no: 8, komponen: 'Biaya Wisuda', nominal: '3.000.000' },
  ];

  // Additional table for M.Th.
  const magisterTeologiMatrikulasi: FeeItem[] = [
    { no: 1, komponen: 'Pengantar Perjanjian Lama', nominal: '1.200.000' },
    { no: 2, komponen: 'Pengantar Perjanjian Baru', nominal: '1.200.000' },
    { no: 3, komponen: 'Teologi Sistematika Dasar', nominal: '1.200.000' },
    { no: 4, komponen: 'Hermeneutika Alkitab', nominal: '1.200.000' },
    { no: 5, komponen: 'Sejarah Gereja', nominal: '1.200.000' },
  ];

  // Magister Pendidikan Kristen Fees
  const magisterPendidikanFees: FeeItem[] = [
    { no: 1, komponen: 'Biaya Pendaftaran', nominal: '750.000' },
    { no: 2, komponen: 'Uang Pangkal (dibayar sekali)', nominal: '8.000.000' },
    { no: 3, komponen: 'SPP per Semester', nominal: '11.500.000' },
    { no: 4, komponen: 'Biaya Perpustakaan per Semester', nominal: '500.000' },
    { no: 5, komponen: 'Biaya Penelitian Tesis', nominal: '3.000.000' },
    { no: 6, komponen: 'Biaya Bimbingan Tesis per Semester', nominal: '2.000.000' },
    { no: 7, komponen: 'Biaya Sidang Tesis', nominal: '2.500.000' },
    { no: 8, komponen: 'Biaya Wisuda', nominal: '3.000.000' },
  ];

  // Magister Ministri Fees
  const magisterMinistriFees: FeeItem[] = [
    { no: 1, komponen: 'Biaya Pendaftaran', nominal: '750.000' },
    { no: 2, komponen: 'Uang Pangkal (dibayar sekali)', nominal: '8.000.000' },
    { no: 3, komponen: 'SPP per Semester', nominal: '13.000.000' },
    { no: 4, komponen: 'Biaya Perpustakaan per Semester', nominal: '500.000' },
    { no: 5, komponen: 'Biaya Penelitian Tesis', nominal: '3.000.000' },
    { no: 6, komponen: 'Biaya Bimbingan Tesis per Semester', nominal: '2.000.000' },
    { no: 7, komponen: 'Biaya Ministry Project', nominal: '2.000.000' },
    { no: 8, komponen: 'Biaya Sidang Tesis', nominal: '2.500.000' },
    { no: 9, komponen: 'Biaya Wisuda', nominal: '3.000.000' },
  ];

  const formatCurrency = (value: string) => {
    return `Rp ${parseInt(value).toLocaleString('id-ID')}`;
  };

  const renderTable = (fees: FeeItem[], title: string) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-900">
            <th className="text-white font-bold py-4 px-6 text-left border border-blue-800 w-16">
              No
            </th>
            <th className="text-white font-bold py-4 px-6 text-left border border-blue-800">
              Komponen Biaya
            </th>
            <th className="text-white font-bold py-4 px-6 text-left border border-blue-800 w-48">
              Nominal
            </th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr 
              key={index}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="py-3 px-6 border border-gray-200 text-center text-gray-700">
                {fee.no}
              </td>
              <td className="py-3 px-6 border border-gray-200 text-gray-800">
                {fee.komponen}
              </td>
              <td className="py-3 px-6 border border-gray-200 text-gray-800 font-medium">
                <div className="flex justify-between items-center">
                  <span>Rp</span>
                  <span>{parseInt(fee.nominal).toLocaleString('id-ID')}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderNotes = (notes: string[]) => (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-bold text-blue-900 mb-3">Catatan:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {notes.map((note, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
            Biaya Studi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Informasi lengkap mengenai biaya pendidikan di STTB untuk berbagai program studi
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-5 gap-2 bg-gray-100 p-2 rounded-lg mb-8 h-auto">
                <TabsTrigger 
                  value="sarjana-teologi"
                  className="data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md py-3 px-4 text-sm font-semibold transition-all"
                >
                  Sarjana Teologi
                </TabsTrigger>
                <TabsTrigger 
                  value="sarjana-pendidikan"
                  className="data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md py-3 px-4 text-sm font-semibold transition-all"
                >
                  Sarjana Pendidikan
                </TabsTrigger>
                <TabsTrigger 
                  value="magister-teologi"
                  className="data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md py-3 px-4 text-sm font-semibold transition-all"
                >
                  Magister Teologi
                </TabsTrigger>
                <TabsTrigger 
                  value="magister-pendidikan"
                  className="data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md py-3 px-4 text-sm font-semibold transition-all"
                >
                  Magister Pendidikan
                </TabsTrigger>
                <TabsTrigger 
                  value="magister-ministri"
                  className="data-[state=active]:bg-red-700 data-[state=active]:text-white data-[state=active]:shadow-md py-3 px-4 text-sm font-semibold transition-all"
                >
                  Magister Ministri
                </TabsTrigger>
              </TabsList>

              {/* Sarjana Teologi Content */}
              <TabsContent value="sarjana-teologi" className="space-y-8">
                {renderTable(sarjanaTeologiFees, 'Biaya Program Sarjana Teologi (S.Th.)')}
                {renderNotes([
                  'Biaya di atas berlaku untuk Tahun Akademik 2025/2026 dan dapat berubah sewaktu-waktu.',
                  'Uang Pangkal dibayarkan hanya satu kali pada saat registrasi awal mahasiswa baru.',
                  'SPP dibayarkan setiap awal semester (8 kali selama masa studi normal 4 tahun).',
                  'Biaya Field Education dibayarkan pada semester 5 dan 6 ketika mahasiswa melakukan praktik pelayanan lapangan.',
                  'Biaya Wisuda dibayarkan pada semester akhir sebelum pelaksanaan wisuda.',
                  'Tersedia berbagai program beasiswa untuk meringankan biaya studi. Hubungi bagian Kemahasiswaan untuk informasi lebih lanjut.',
                  'Pembayaran dapat dilakukan melalui transfer bank atau langsung ke kasir kampus.',
                ])}
              </TabsContent>

              {/* Sarjana Pendidikan Kristen Content */}
              <TabsContent value="sarjana-pendidikan" className="space-y-8">
                {renderTable(sarjanaPendidikanFees, 'Biaya Program Sarjana Pendidikan Kristen (S.Pd.K.)')}
                {renderNotes([
                  'Biaya di atas berlaku untuk Tahun Akademik 2025/2026 dan dapat berubah sewaktu-waktu.',
                  'Uang Pangkal dibayarkan hanya satu kali pada saat registrasi awal mahasiswa baru.',
                  'SPP dibayarkan setiap awal semester (8 kali selama masa studi normal 4 tahun).',
                  'Biaya Teaching Practice dibayarkan pada semester 5 dan 6 ketika mahasiswa melakukan praktik mengajar di sekolah atau gereja.',
                  'Biaya Wisuda dibayarkan pada semester akhir sebelum pelaksanaan wisuda.',
                  'Tersedia berbagai program beasiswa untuk meringankan biaya studi. Hubungi bagian Kemahasiswaan untuk informasi lebih lanjut.',
                  'Pembayaran dapat dilakukan melalui transfer bank atau langsung ke kasir kampus.',
                ])}
              </TabsContent>

              {/* Magister Teologi Content */}
              <TabsContent value="magister-teologi" className="space-y-8">
                {renderTable(magisterTeologiFees, 'Biaya Program Magister Teologi (M.Th.)')}
                {renderNotes([
                  'Biaya di atas berlaku untuk Tahun Akademik 2025/2026 dan dapat berubah sewaktu-waktu.',
                  'Uang Pangkal dibayarkan hanya satu kali pada saat registrasi awal mahasiswa baru.',
                  'SPP dibayarkan setiap awal semester (4 kali selama masa studi normal 2 tahun).',
                  'Biaya Bimbingan Tesis dibayarkan pada semester 3 dan 4.',
                  'Biaya Penelitian Tesis dan Sidang Tesis dibayarkan pada semester 4.',
                  'Mahasiswa dari latar belakang non-teologi diwajibkan mengambil mata kuliah matrikulasi (lihat tabel di bawah).',
                  'Tersedia program beasiswa parsial untuk mahasiswa berprestasi dan pelayanan.',
                ])}

                {/* Additional Matrikulasi Table */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">
                    Biaya Mata Kuliah Matrikulasi (untuk Mahasiswa Non-Teologi)
                  </h3>
                  {renderTable(magisterTeologiMatrikulasi, 'Mata Kuliah Matrikulasi')}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700">
                          <strong className="text-yellow-900">Catatan Matrikulasi:</strong> Mahasiswa dengan latar belakang S1 non-teologi wajib mengambil minimal 3 mata kuliah matrikulasi sebelum mengambil mata kuliah inti. Pemilihan mata kuliah matrikulasi akan ditentukan berdasarkan hasil tes masuk dan konsultasi dengan Koordinator Program Studi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Magister Pendidikan Kristen Content */}
              <TabsContent value="magister-pendidikan" className="space-y-8">
                {renderTable(magisterPendidikanFees, 'Biaya Program Magister Pendidikan Kristen (M.Pd.K.)')}
                {renderNotes([
                  'Biaya di atas berlaku untuk Tahun Akademik 2025/2026 dan dapat berubah sewaktu-waktu.',
                  'Uang Pangkal dibayarkan hanya satu kali pada saat registrasi awal mahasiswa baru.',
                  'SPP dibayarkan setiap awal semester (4 kali selama masa studi normal 2 tahun).',
                  'Biaya Bimbingan Tesis dibayarkan pada semester 3 dan 4.',
                  'Biaya Penelitian Tesis dan Sidang Tesis dibayarkan pada semester 4.',
                  'Program ini terbuka untuk lulusan S1 Pendidikan, PAK, Teologi, dan jurusan terkait lainnya.',
                  'Tersedia program beasiswa parsial untuk mahasiswa berprestasi dan pelayanan.',
                ])}
              </TabsContent>

              {/* Magister Ministri Content */}
              <TabsContent value="magister-ministri" className="space-y-8">
                {renderTable(magisterMinistriFees, 'Biaya Program Magister Ministri (M.Min.)')}
                {renderNotes([
                  'Biaya di atas berlaku untuk Tahun Akademik 2025/2026 dan dapat berubah sewaktu-waktu.',
                  'Uang Pangkal dibayarkan hanya satu kali pada saat registrasi awal mahasiswa baru.',
                  'SPP dibayarkan setiap awal semester (4 kali selama masa studi normal 2 tahun).',
                  'Biaya Ministry Project adalah biaya untuk proyek pelayanan praktis yang wajib dilakukan mahasiswa.',
                  'Biaya Bimbingan Tesis dibayarkan pada semester 3 dan 4.',
                  'Biaya Penelitian Tesis dan Sidang Tesis dibayarkan pada semester 4.',
                  'Program Magister Ministri memiliki 3 konsentrasi: Marketplace, Kepemimpinan Pastoral, dan Pelayanan Gerejawi.',
                  'Kuliah dilaksanakan dalam format intensive/blok pada hari Jumat-Sabtu atau Sabtu-Minggu.',
                ])}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Butuh Informasi Lebih Lanjut?
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Tim bagian Keuangan dan Kemahasiswaan kami siap membantu Anda untuk informasi lebih detail mengenai biaya studi dan program beasiswa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Hubungi via WhatsApp
              </a>
              <a 
                href="mailto:keuangan@sttb.ac.id"
                className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Email Bagian Keuangan
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
