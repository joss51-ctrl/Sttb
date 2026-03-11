/**
 * DukungSTTBPage - Support STTB Page
 * Minimalist donation-focused page with multi-step form
 */

import { useState } from 'react';
import { ChevronRight, Copy, Check, Upload, Heart, BookOpen, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

// Form validation schema
const formSchema = z.object({
  donorType: z.enum(['lembaga', 'individu']),
  name: z.string().min(1, 'Nama wajib diisi'),
  phone: z.string().min(10, 'Nomor kontak minimal 10 digit'),
  email: z.string().email('Email tidak valid'),
  donationArea: z.string().min(1, 'Area donasi wajib dipilih'),
  studentName: z.string().optional(),
  studentProgram: z.string().optional(),
  needReceipt: z.enum(['ya', 'tidak']),
  transferProof: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function DukungSTTBPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      donorType: 'individu',
      needReceipt: 'tidak',
      donationArea: '',
    },
  });

  const donorType = watch('donorType');
  const donationArea = watch('donationArea');

  // Impact areas
  const impactAreas = [
    {
      title: 'BEASISWA',
      image: 'https://images.unsplash.com/photo-1589268022628-d0fa3fd7340f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwc2Nob2xhcnNoaXB8ZW58MXx8fHwxNzczMjQ0MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      impact: 'Membantu mahasiswa berprestasi menyelesaikan pendidikan teologi',
      icon: Heart,
    },
    {
      title: 'PERPUSTAKAAN DIGITAL',
      image: 'https://images.unsplash.com/photo-1599389153811-fe7586739184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGlicmFyeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczMTc2NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      impact: 'Mengembangkan koleksi digital dan akses literatur teologi modern',
      icon: BookOpen,
    },
    {
      title: 'DUKUNGAN LAIN',
      image: 'https://images.unsplash.com/photo-1763355873417-1e0926397851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwaGVscGluZyUyMGhhbmRzfGVufDF8fHx8MTc3MzIwMjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      impact: 'Mendukung operasional dan pengembangan institusi secara menyeluruh',
      icon: Users,
    },
  ];

  const copyAccountNumber = () => {
    navigator.clipboard.writeText('1234567890');
    setCopiedAccount(true);
    toast.success('Nomor rekening berhasil disalin');
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue('transferProof', file);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast.success('Terima kasih atas dukungan Anda! Tim kami akan segera menghubungi Anda.');
    // Reset form or redirect
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900 transition-colors">Beranda</a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-blue-900 transition-colors">Keuangan</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Dukung STTB</span>
          </div>
        </div>
      </section>

      {/* Hero Section with Campus Photography */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczMTcxODQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="STTB Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Dukung STTB
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Bersama kita mempersiapkan pemimpin gereja dan masyarakat yang transformatif melalui pendidikan teologi berkualitas
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section - 3 Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
              Prioritas Penggunaan Donasi
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Dukungan Anda akan dialokasikan sesuai pilihan untuk memaksimalkan dampak positif bagi STTB
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-red-700" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {area.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {area.impact}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Action Section - Form & Payment */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* LEFT SIDE - Payment Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-2">
                    Informasi Transfer
                  </h2>
                  <p className="text-gray-600">
                    Pilih metode pembayaran yang tersedia
                  </p>
                </div>

                {/* QRIS Code */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-900 font-bold">QR</span>
                    </div>
                    QRIS Code
                  </h3>
                  <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
                    {/* Placeholder for QRIS - In production, use actual QRIS image */}
                    <div className="w-64 h-64 bg-white border-4 border-blue-900 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-48 h-48 bg-gray-200 mx-auto mb-2 rounded"></div>
                        <p className="text-xs text-gray-500">Scan QRIS untuk donasi</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bank Transfer */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-900 font-bold">BCA</span>
                    </div>
                    Transfer Bank
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Nama Rekening</p>
                      <p className="font-bold text-gray-900">Yayasan STT Bandung</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Nomor Rekening</p>
                      <div className="flex items-center gap-3">
                        <p className="font-bold text-2xl text-blue-900">1234567890</p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={copyAccountNumber}
                          className="flex items-center gap-2"
                        >
                          {copiedAccount ? (
                            <>
                              <Check className="w-4 h-4 text-green-600" />
                              <span className="text-green-600">Tersalin</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Salin</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Catatan:</span> Setelah transfer, mohon konfirmasi melalui formulir di samping
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Multi-step Form */}
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  Konfirmasi Dukungan
                </h2>
                <p className="text-gray-600 mb-8">
                  Isi formulir untuk konfirmasi donasi Anda
                </p>

                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          currentStep >= step
                            ? 'bg-blue-900 text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {step}
                      </div>
                      {step < 3 && (
                        <div
                          className={`w-16 h-1 mx-2 ${
                            currentStep > step ? 'bg-blue-900' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1 - Basic Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                          Ingin Mendukung STTB atas nama
                        </Label>
                        <RadioGroup
                          value={donorType}
                          onValueChange={(value) => setValue('donorType', value as 'lembaga' | 'individu')}
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="lembaga" id="lembaga" />
                            <Label htmlFor="lembaga" className="font-normal cursor-pointer">
                              Lembaga
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="individu" id="individu" />
                            <Label htmlFor="individu" className="font-normal cursor-pointer">
                              Individu
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                          Nama {donorType === 'lembaga' ? 'Lembaga' : 'Lengkap'}
                        </Label>
                        <Input
                          id="name"
                          {...register('name')}
                          className="mt-2"
                          placeholder={donorType === 'lembaga' ? 'Contoh: Gereja XYZ' : 'Contoh: John Doe'}
                        />
                        {errors.name && (
                          <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                          No Kontak
                        </Label>
                        <Input
                          id="phone"
                          {...register('phone')}
                          className="mt-2"
                          placeholder="08123456789"
                          type="tel"
                        />
                        {errors.phone && (
                          <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                          Email
                        </Label>
                        <Input
                          id="email"
                          {...register('email')}
                          className="mt-2"
                          placeholder="email@example.com"
                          type="email"
                        />
                        {errors.email && (
                          <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <Button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-blue-900 hover:bg-red-700"
                      >
                        Lanjut ke Step 2
                      </Button>
                    </div>
                  )}

                  {/* Step 2 - Donation Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r mb-6">
                        <p className="text-sm text-gray-700">
                          Apabila Bapak/Ibu memilih area donasi untuk beasiswa dan memiliki nama khusus (calon) mahasiswa yang akan didukung, 
                          maka Anda dapat menuliskan nama lengkap (calon) mahasiswa tersebut dan program studi yang diambil di kolom isian di bawah ini.
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="donationArea" className="text-sm font-semibold text-gray-700">
                          Area Donasi
                        </Label>
                        <Select
                          value={donationArea}
                          onValueChange={(value) => setValue('donationArea', value)}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Pilih area donasi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beasiswa">Beasiswa</SelectItem>
                            <SelectItem value="perpustakaan">Perpustakaan Digital</SelectItem>
                            <SelectItem value="dukungan-lain">Dukungan STTB</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.donationArea && (
                          <p className="text-red-600 text-xs mt-1">{errors.donationArea.message}</p>
                        )}
                      </div>

                      {donationArea === 'beasiswa' && (
                        <>
                          <div>
                            <Label htmlFor="studentName" className="text-sm font-semibold text-gray-700">
                              Nama Mahasiswa Yang Didukung (Opsional)
                            </Label>
                            <Input
                              id="studentName"
                              {...register('studentName')}
                              className="mt-2"
                              placeholder="Nama lengkap mahasiswa"
                            />
                          </div>

                          <div>
                            <Label htmlFor="studentProgram" className="text-sm font-semibold text-gray-700">
                              Program Studi Mahasiswa Didukung
                            </Label>
                            <Select
                              value={watch('studentProgram') || ''}
                              onValueChange={(value) => setValue('studentProgram', value)}
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Pilih program studi" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sarjana-teologi">Sarjana Teologi</SelectItem>
                                <SelectItem value="magister-teologi">Magister Teologi</SelectItem>
                                <SelectItem value="sarjana-pendidikan">Sarjana Pendidikan</SelectItem>
                                <SelectItem value="magister-pendidikan">Magister Pendidikan</SelectItem>
                                <SelectItem value="magister-ministri">Magister Ministri</SelectItem>
                                <SelectItem value="audit">Audit</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </>
                      )}

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="flex-1"
                        >
                          Kembali
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="flex-1 bg-blue-900 hover:bg-red-700"
                        >
                          Lanjut ke Step 3
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 - Receipt & Proof */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                          Apakah Bapak/Ibu membutuhkan bukti tanda terima kasih atas dukungan yang diberikan?
                        </Label>
                        <RadioGroup
                          value={watch('needReceipt')}
                          onValueChange={(value) => setValue('needReceipt', value as 'ya' | 'tidak')}
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ya" id="receipt-ya" />
                            <Label htmlFor="receipt-ya" className="font-normal cursor-pointer">
                              Ya
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="tidak" id="receipt-tidak" />
                            <Label htmlFor="receipt-tidak" className="font-normal cursor-pointer">
                              Tidak
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label htmlFor="transferProof" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Tanda Bukti Transfer
                        </Label>
                        <p className="text-xs text-gray-600 mb-3">
                          Jika Bapak/Ibu telah melakukan transfer dukungan, mohon dapat mengirimkan foto bukti transfer tersebut
                        </p>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                          <input
                            type="file"
                            id="transferProof"
                            onChange={handleFileChange}
                            accept="image/*,.pdf"
                            className="hidden"
                          />
                          <label
                            htmlFor="transferProof"
                            className="cursor-pointer flex flex-col items-center"
                          >
                            <Upload className="w-12 h-12 text-gray-400 mb-3" />
                            {selectedFile ? (
                              <p className="text-sm text-blue-900 font-semibold">
                                {selectedFile.name}
                              </p>
                            ) : (
                              <>
                                <p className="text-sm text-gray-600 font-semibold">
                                  Klik untuk upload bukti transfer
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Format: JPG, PNG, PDF (Max 5MB)
                                </p>
                              </>
                            )}
                          </label>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <span className="font-semibold block mb-2">Terima kasih atas dukungan dan perhatian Bapak/Ibu kepada STTB.</span>
                          Kami percaya Tuhan akan selalu memelihara dan memberkati kita semua.
                          <span className="block mt-3 text-xs">
                            <strong>Salam hormat,</strong><br />
                            Wemmy Prayogo, M.Ed.<br />
                            Wakil Ketua II Bidang Adm. & Keuangan
                          </span>
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="flex-1"
                        >
                          Kembali
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-blue-900 hover:bg-red-700"
                        >
                          Kirim Konfirmasi
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Transparansi & Akuntabilitas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Setiap donasi yang kami terima dikelola dengan penuh tanggung jawab dan transparansi. 
              Laporan keuangan dan penggunaan dana dapat diakses oleh para donatur melalui sistem pelaporan berkala.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
