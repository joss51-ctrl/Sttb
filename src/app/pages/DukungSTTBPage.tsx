/**
 * DukungSTTBPage - Support STTB Page
 * Minimalist donation-focused page with multi-step form
 */

import { useState } from "react";
import {
  ChevronRight,
  Copy,
  Check,
  Upload,
  Heart,
  BookOpen,
  Users,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";


// Form validation schema
const formSchema = z.object({
  donorType: z.enum(["lembaga", "individu"]),
  name: z.string().min(1, "Nama wajib diisi"),
  phone: z.string().min(10, "Nomor kontak minimal 10 digit"),
  email: z.string().email("Email tidak valid"),
  donationArea: z.string().min(1, "Area donasi wajib dipilih"),
  studentName: z.string().optional(),
  studentProgram: z.string().optional(),
  needReceipt: z.enum(["ya", "tidak"]),
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
      donorType: "individu",
      needReceipt: "tidak",
      donationArea: "",
    },
  });

  const donorType = watch("donorType");
  const donationArea = watch("donationArea");

  // Impact areas
  const impactAreas = [
    {
      title: "BEASISWA",
      image: "https://sttb.ac.id/storage/2022/06/beasiswa-pastor-scholar.png",
      impact: [
        "Sebagian pribadi yang Tuhan panggil untuk melanjutkan ke jenjang pendidikan S1 bahkan S2 terkadang terkendala dengan pendanaan, dan mereka tidak tahu bagaimana dan kemana mereka bisa mendapat dukungan untuk mewujudkan panggilan tersebut.",
        "Dukungan beasiswa terbuka bagi mahasiswa yang yang sudah menjalani proses belajar sampai dengan semester ke-2 dengan minimal IPK 3,0 dan telah lulus proses seleksi serta wawancara dengan Tim Beasiswa sebelumnya. Hal ini ditetapkan agar hanya mahasiswa- mahasiswa terpilih yang bisa mendapatkan beasiswa.",
        "Biaya yang dibutuhkan oleh mahasiswa yang termasuk dalam kategori beasiswa bersifat bulanan (biaya kuliah), biaya administrasi dan buku (per semester), biaya skripsi dan wisuda (semester akhir). Untuk nominal dan jenis biaya dapat dilihat dalam keterangan biaya kuliah per program studi.",
      ],
    },
    {
      title: "PERPUSTAKAAN DIGITAL",
      image: "https://sttb.ac.id/storage/2022/08/fasilitas-10.png",
      impact: [
        "Perpustakaan STTB memiliki sekitar 50.000 buku dan terus berusaha memperkaya koleksi buku- buku baru yang dibutuhkan. Selain koleksi buku fisik, STTB juga menyediakan akses layanan e- book dan e-journal. Melalui provider Ebscohost, saat ini STTB memiliki e-library yang berisi koleksi e-books yang relevan untuk pendidikan teologi dan juga berlangganan akses terhadap database jurnal ATLA (Database Jurnal Teologi dan Pendidikan Kristen).",
        "Koleksi e-books tersebut dapat dimanfaatkan oleh dosen, mahasiswa, dan alumni. Ketersediaan buku baik fisik, e-book maupun jurnal yang tepat merupakan salah satu syarat utama dari terwujudnya kualitas pendidikan yang baik. Kerinduan kami dapat menambah koleksi e-books secara regular setiap tahun.",
      ],
    },
    {
      title: "DUKUNGAN LAIN",
      image:
        "https://images.unsplash.com/photo-1763355873417-1e0926397851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwaGVscGluZyUyMGhhbmRzfGVufDF8fHx8MTc3MzIwMjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      impact: [
        "Sebagai lembaga pendidikan yang terus menciptakan pendidik-pendidik yang bukan saja bertambah secara kuantitas tapi secara kualitas semakin baik. STTB tentunya tidak akan berhenti berinovasi dan berkembang sesuai dengan kemajuan dan kebutuhan jaman.",
        "Oleh karena itu berbagai perencanaan ke depan telah kami persiapkan untuk mengembangkan semua sumber daya termasuk pembangunan, digital ministry, pembuatan studio rekaman video dan audio, pembinaan Hamba-hamba Tuhan di daerah- daerah, pelaksanaan seminar/perkuliahan langsung di tempat-tempat terpilih dan program-program lainnya.",
      ],
    },
  ];

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("1234567890");
    setCopiedAccount(true);
    toast.success("Nomor rekening berhasil disalin");
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue("transferProof", file);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success(
      "Terima kasih atas dukungan Anda! Tim kami akan segera menghubungi Anda.",
    );
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
      {/* Hero Section with Campus Photography */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-3">
            Dukung STTB
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bersama kita mempersiapkan pemimpin gereja dan masyarakat yang
            transformatif melalui pendidikan teologi berkualitas
          </p>
        </div>
      </section>

      {/* Impact Section - 3 Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-left mb-4">
              Prioritas Penggunaan Donasi
            </h2>
            <p className="text-gray-600 text-left mb-12 max-w-2xl">
              Dukungan Anda akan dialokasikan sesuai pilihan untuk memaksimalkan
              dampak positif bagi STTB
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => {
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
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col h-full">
                      <h3 className="text-xl font-extrabold uppercase tracking-wider text-blue-900 mb-4 border-b-2 border-blue-100 pb-2">
                        {area.title}
                      </h3>

                      {/* Gunakan div pembungkus dengan space-y-4 untuk memberi jarak antar paragraf */}
                      <div className="space-y-4">
                        {Array.isArray(area.impact) ? (
                          area.impact.map((paragraph, i) => (
                            <p
                              key={i}
                              className="text-gray-600 leading-[1.7] text-sm text-left antialiased"
                            >
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          // Fallback jika datanya masih berupa string biasa
                          <p className="text-gray-600 leading-[1.7] text-sm text-left antialiased">
                            {area.impact}
                          </p>
                        )}
                      </div>
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
                    <div className="w-84 h-auto bg-white border-4 border-blue-900 rounded-lg overflow-hidden flex flex-col items-center p-4">
                      {/* Gambar QRIS yang sesungguhnya */}
                      <img
                        src="https://sttb.ac.id/storage/2022/06/QR-Code-Rek-STTB.jpeg"
                        alt="QRIS STTB"
                        className="w-full h-auto object-contain mb-4"
                      />
                      <p className="text-xs text-gray-500 text-center font-medium">
                        Scan QRIS untuk donasi
                      </p>
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
                      <p className="text-sm text-gray-600 mb-1">
                        Nama Rekening
                      </p>
                      <p className="font-bold text-gray-900">
                        Yayasan STT Bandung
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Nomor Rekening
                      </p>
                      <div className="flex items-center gap-3">
                        <p className="font-bold text-2xl text-blue-900">
                          1234567890
                        </p>
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
                        <span className="font-semibold">Catatan:</span> Setelah
                        transfer, mohon konfirmasi melalui formulir di samping
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Multi-step Form */}
              <div className="bg-white rounded-xl shadow-2xl p-8 h-fit self-center">
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
                            ? "bg-blue-900 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {step}
                      </div>
                      {step < 3 && (
                        <div
                          className={`w-16 h-1 mx-2 ${
                            currentStep > step ? "bg-blue-900" : "bg-gray-200"
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
                          onValueChange={(value) =>
                            setValue(
                              "donorType",
                              value as "lembaga" | "individu",
                            )
                          }
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="lembaga" id="lembaga" />
                            <Label
                              htmlFor="lembaga"
                              className="font-normal cursor-pointer"
                            >
                              Lembaga
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="individu" id="individu" />
                            <Label
                              htmlFor="individu"
                              className="font-normal cursor-pointer"
                            >
                              Individu
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label
                          htmlFor="name"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Nama {donorType === "lembaga" ? "Lembaga" : "Lengkap"}
                        </Label>
                        <Input
                          id="name"
                          {...register("name")}
                          className="mt-2"
                          placeholder={
                            donorType === "lembaga"
                              ? "Contoh: Gereja XYZ"
                              : "Contoh: John Doe"
                          }
                        />
                        {errors.name && (
                          <p className="text-red-600 text-xs mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-sm font-semibold text-gray-700"
                        >
                          No Kontak
                        </Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          className="mt-2"
                          placeholder="08123456789"
                          type="tel"
                        />
                        {errors.phone && (
                          <p className="text-red-600 text-xs mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          {...register("email")}
                          className="mt-2"
                          placeholder="email@example.com"
                          type="email"
                        />
                        {errors.email && (
                          <p className="text-red-600 text-xs mt-1">
                            {errors.email.message}
                          </p>
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
                          Apabila Bapak/Ibu memilih area donasi untuk beasiswa
                          dan memiliki nama khusus (calon) mahasiswa yang akan
                          didukung, maka Anda dapat menuliskan nama lengkap
                          (calon) mahasiswa tersebut dan program studi yang
                          diambil di kolom isian di bawah ini.
                        </p>
                      </div>

                      <div>
                        <Label
                          htmlFor="donationArea"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Area Donasi
                        </Label>
                        <Select
                          value={donationArea}
                          onValueChange={(value) =>
                            setValue("donationArea", value)
                          }
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Pilih area donasi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beasiswa">Beasiswa</SelectItem>
                            <SelectItem value="perpustakaan">
                              Perpustakaan Digital
                            </SelectItem>
                            <SelectItem value="dukungan-lain">
                              Dukungan STTB
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.donationArea && (
                          <p className="text-red-600 text-xs mt-1">
                            {errors.donationArea.message}
                          </p>
                        )}
                      </div>

                      {donationArea === "beasiswa" && (
                        <>
                          <div>
                            <Label
                              htmlFor="studentName"
                              className="text-sm font-semibold text-gray-700"
                            >
                              Nama Mahasiswa Yang Didukung (Opsional)
                            </Label>
                            <Input
                              id="studentName"
                              {...register("studentName")}
                              className="mt-2"
                              placeholder="Nama lengkap mahasiswa"
                            />
                          </div>

                          <div>
                            <Label
                              htmlFor="studentProgram"
                              className="text-sm font-semibold text-gray-700"
                            >
                              Program Studi Mahasiswa Didukung
                            </Label>
                            <Select
                              value={watch("studentProgram") || ""}
                              onValueChange={(value) =>
                                setValue("studentProgram", value)
                              }
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Pilih program studi" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sarjana-teologi">
                                  Sarjana Teologi
                                </SelectItem>
                                <SelectItem value="magister-teologi">
                                  Magister Teologi
                                </SelectItem>
                                <SelectItem value="sarjana-pendidikan">
                                  Sarjana Pendidikan
                                </SelectItem>
                                <SelectItem value="magister-pendidikan">
                                  Magister Pendidikan
                                </SelectItem>
                                <SelectItem value="magister-ministri">
                                  Magister Ministri
                                </SelectItem>
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
                          Apakah Bapak/Ibu membutuhkan bukti tanda terima kasih
                          atas dukungan yang diberikan?
                        </Label>
                        <RadioGroup
                          value={watch("needReceipt")}
                          onValueChange={(value) =>
                            setValue("needReceipt", value as "ya" | "tidak")
                          }
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ya" id="receipt-ya" />
                            <Label
                              htmlFor="receipt-ya"
                              className="font-normal cursor-pointer"
                            >
                              Ya
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="tidak" id="receipt-tidak" />
                            <Label
                              htmlFor="receipt-tidak"
                              className="font-normal cursor-pointer"
                            >
                              Tidak
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label
                          htmlFor="transferProof"
                          className="text-sm font-semibold text-gray-700 mb-2 block"
                        >
                          Tanda Bukti Transfer
                        </Label>
                        <p className="text-xs text-gray-600 mb-3">
                          Jika Bapak/Ibu telah melakukan transfer dukungan,
                          mohon dapat mengirimkan foto bukti transfer tersebut
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
                          <span className="font-semibold block mb-2">
                            Terima kasih atas dukungan dan perhatian Bapak/Ibu
                            kepada STTB.
                          </span>
                          Kami percaya Tuhan akan selalu memelihara dan
                          memberkati kita semua.
                          <span className="block mt-3 text-xs">
                            <strong>Salam hormat,</strong>
                            <br />
                            Wemmy Prayogo, M.Ed.
                            <br />
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
              Setiap donasi yang kami terima dikelola dengan penuh tanggung
              jawab dan transparansi. Laporan keuangan dan penggunaan dana dapat
              diakses oleh para donatur melalui sistem pelaporan berkala.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
