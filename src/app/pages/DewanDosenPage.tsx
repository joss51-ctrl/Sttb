import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface FacultyMember {
  name: string;
  title: string;
  expertise?: string;
  education: string[];
  image: string;
}

export default function DewanDosenPage() {
  // KETUA - The Head
  const ketua: FacultyMember = {
    name: "Dr. Pdt. Johanes Waldes Hasugian, M.Th.",
    title: "Ketua Sekolah Tinggi Teologi Bandung",
    expertise: "Teologi Sistematika & Kepemimpinan Gereja",
    education: [
      "S.Th., Sekolah Tinggi Teologi Bandung",
      "M.Th., Sekolah Tinggi Teologi Jakarta",
      "D.Min., Asia Theological Seminary",
      "Ph.D., Theological Studies, Trinity Theological College",
    ],
    image: "professional asian theology professor",
  };

  // WAKIL KETUA - Vice Chairs
  const wakilKetua: FacultyMember[] = [
    {
      name: "Dr. Pdt. Samuel Tandiasa, M.Div.",
      title: "Wakil Ketua I Bidang Akademik",
      expertise: "Perjanjian Baru & Hermeneutika",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.Div., Reformed Theological Seminary",
        "Th.M., Princeton Theological Seminary",
        "Ph.D., Biblical Studies, University of Edinburgh",
      ],
      image: "asian male professor theology",
    },
    {
      name: "Pdt. Dr. Esther Christiani, M.Th.",
      title: "Wakil Ketua II Bidang Kemahasiswaan",
      expertise: "Pendidikan Kristen & Pastoral Care",
      education: [
        "S.Pd.K., Universitas Kristen Indonesia",
        "M.Th., Sekolah Tinggi Teologi Bandung",
        "D.Min., Fuller Theological Seminary",
        "Ph.D., Christian Education, Biola University",
      ],
      image: "asian female professor academic",
    },
    {
      name: "Dr. Pdt. Markus Setiawan, M.A.",
      title: "Wakil Ketua III Bidang Administrasi & Keuangan",
      expertise: "Manajemen Institusi Teologi",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.A., Organizational Leadership, Regent University",
        "D.Min., Leadership Studies, Gordon-Conwell",
        "Ph.D., Higher Education Management, Liberty University",
      ],
      image: "asian male administrator professional",
    },
  ];

  // KETUA PROGRAM STUDI - Program Heads
  const ketuaProdi: FacultyMember[] = [
    {
      name: "Dr. Pdt. Daniel Hartono, M.Th.",
      title: "Ketua Program Studi S1 Teologi",
      expertise: "Teologi Sistematika Reformed",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.Th., Calvin Theological Seminary",
        "Ph.D., Systematic Theology, Westminster Seminary",
      ],
      image: "asian male theology teacher",
    },
    {
      name: "Pdt. Dr. Ruth Sihombing, M.Pd.K.",
      title: "Ketua Program Studi S1 Pendidikan Kristen",
      expertise: "Pendidikan Agama Kristen",
      education: [
        "S.Pd.K., Institut Agama Kristen Negeri",
        "M.Pd.K., Universitas Kristen Satya Wacana",
        "Ph.D., Christian Education, Talbot School of Theology",
      ],
      image: "asian female teacher education",
    },
    {
      name: "Dr. Pdt. Abraham Kusuma, M.Div.",
      title: "Ketua Program Studi S2 Teologi",
      expertise: "Teologi Kontekstual Asia",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.Div., Asian Theological Seminary",
        "Ph.D., Contextual Theology, Oxford Centre",
      ],
      image: "asian male academic scholar",
    },
    {
      name: "Dr. Maria Magdalena, M.A.",
      title: "Ketua Program Studi S2 Pendidikan Kristen",
      expertise: "Kurikulum & Pedagogi Kristen",
      education: [
        "S.Pd.K., Universitas Pelita Harapan",
        "M.A., Christian Education, Wheaton College",
        "Ph.D., Curriculum Studies, Trinity Evangelical",
      ],
      image: "asian female professor education",
    },
  ];

  // JAJARAN DOSEN - Faculty Members
  const dosenTetap: FacultyMember[] = [
    {
      name: "Pdt. Timotius Wijaya, M.Th.",
      title: "Dosen Perjanjian Lama",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.Th., Hebrew Union College",
        "Kandidat Ph.D., Old Testament, Duke University",
      ],
      image: "asian male theology lecturer",
    },
    {
      name: "Pdt. Debora Situmorang, M.Div.",
      title: "Dosen Misiologi",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.Div., Fuller School of World Mission",
        "Kandidat D.Miss., Intercultural Studies",
      ],
      image: "asian female missionary professor",
    },
    {
      name: "Dr. Petrus Setiabudi, M.A.",
      title: "Dosen Sejarah Gereja",
      education: [
        "S.Th., Universitas Kristen Duta Wacana",
        "M.A., Church History, Yale Divinity School",
        "Ph.D., Historical Theology, Cambridge",
      ],
      image: "asian male history professor",
    },
    {
      name: "Pdt. Ester Liem, M.Th.",
      title: "Dosen Etika Kristen",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.Th., Christian Ethics, Boston University",
        "Kandidat Ph.D., Moral Theology",
      ],
      image: "asian female ethics teacher",
    },
    {
      name: "Dr. Yohanes Pranoto, M.Div.",
      title: "Dosen Homiletika",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.Div., Gordon-Conwell Seminary",
        "D.Min., Preaching, Princeton Seminary",
      ],
      image: "asian male preaching professor",
    },
    {
      name: "Pdt. Lydia Kusuma, M.Th.",
      title: "Dosen Musik Gereja",
      education: [
        "S.Sn., Institut Seni Indonesia",
        "M.Th., Church Music, Westminster Choir College",
        "Kandidat D.M.A., Sacred Music",
      ],
      image: "asian female music teacher",
    },
    {
      name: "Dr. Andreas Gunawan, M.A.",
      title: "Dosen Bahasa Alkitab",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.A., Biblical Languages, Wheaton College",
        "Ph.D., Ancient Languages, University of Chicago",
      ],
      image: "asian male language professor",
    },
    {
      name: "Pdt. Sarah Tanuwidjaja, M.Div.",
      title: "Dosen Konseling Pastoral",
      education: [
        "S.Psi., Universitas Indonesia",
        "M.Div., Pastoral Counseling, Fuller Seminary",
        "Kandidat D.Min., Clinical Pastoral Care",
      ],
      image: "asian female counseling teacher",
    },
    {
      name: "Dr. Stefanus Chandra, M.Th.",
      title: "Dosen Apologetika",
      education: [
        "S.Th., Sekolah Tinggi Teologi Bandung",
        "M.Th., Apologetics, Southern Seminary",
        "Ph.D., Philosophy of Religion, Notre Dame",
      ],
      image: "asian male philosophy professor",
    },
    {
      name: "Pdt. Priskila Setiawan, M.A.",
      title: "Dosen Pelayanan Anak",
      education: [
        "S.Pd.K., Universitas Kristen Indonesia",
        "M.A., Children's Ministry, Talbot Seminary",
        "Kandidat D.Min., Family Ministry",
      ],
      image: "asian female children ministry teacher",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold">Dewan Dosen</h1>
          <p className="text-xl text-blue-100 mt-4 max-w-3xl">
            Tim pengajar berkualitas dengan dedikasi tinggi untuk pendidikan
            teologi Reformed
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* ROW 1 - KETUA (The Head) */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Pimpinan
            </h2>

            {/* Large Centered Feature Card */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded shadow-lg overflow-hidden">
                {/* Red Accent Line */}
                <div className="h-1 bg-red-700" />

                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Large Profile Image */}
                    <div className="w-full md:w-64 flex-shrink-0">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/400x500/?${encodeURIComponent(ketua.image)}`}
                        alt={ketua.name}
                        className="w-full h-80 object-cover rounded"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {ketua.name}
                      </h3>
                      <p className="text-red-700 italic text-lg mb-1">
                        {ketua.expertise}
                      </p>
                      <p className="text-gray-600 mb-6">{ketua.title}</p>

                      {/* Academic Background */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                          Latar Belakang Akademik
                        </h4>
                        <ul className="space-y-2">
                          {ketua.education.map((edu, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-700"
                              style={{ lineHeight: "1.5" }}
                            >
                              <span className="text-red-700 mt-1.5">•</span>
                              <span>{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 - WAKIL KETUA (Vice Chairs) */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Wakil Ketua
            </h2>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {wakilKetua.map((wakil, index) => (
                <div
                  key={index}
                  className="bg-white rounded shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  {/* Red Accent Line */}
                  <div className="h-1 bg-red-700" />

                  {/* Profile Image */}
                  <div className="p-6">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/400x500/?${encodeURIComponent(wakil.image)}`}
                      alt={wakil.name}
                      className="w-full h-72 object-cover rounded mb-4"
                    />

                    {/* Name */}
                    <h3 className="text-xl font-bold text-blue-900 mb-1">
                      {wakil.name}
                    </h3>

                    {/* Job Title */}
                    <p className="text-gray-600 text-sm mb-2">{wakil.title}</p>

                    {/* Expertise */}
                    <p className="text-red-700 italic text-sm mb-4">
                      {wakil.expertise}
                    </p>

                    {/* Academic Background */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        Pendidikan
                      </h4>
                      <ul className="space-y-1.5">
                        {wakil.education.map((edu, eduIndex) => (
                          <li
                            key={eduIndex}
                            className="text-sm text-gray-700"
                            style={{ lineHeight: "1.5" }}
                          >
                            • {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3 - KETUA PROGRAM STUDI (Program Heads) */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Ketua Program Studi
            </h2>

            {/* 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {ketuaProdi.map((kaprodi, index) => (
                <div
                  key={index}
                  className="bg-white rounded shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  {/* Profile Image */}
                  <div className="p-4">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/300x350/?${encodeURIComponent(kaprodi.image)}`}
                      alt={kaprodi.name}
                      className="w-full h-56 object-cover rounded mb-3"
                    />

                    {/* Name */}
                    <h3 className="text-lg font-bold text-blue-900 mb-1">
                      {kaprodi.name}
                    </h3>

                    {/* Job Title */}
                    <p className="text-gray-600 text-sm mb-2">
                      {kaprodi.title}
                    </p>

                    {/* Expertise */}
                    <p className="text-red-700 italic text-xs mb-3">
                      {kaprodi.expertise}
                    </p>

                    {/* Academic Background */}
                    <ul className="space-y-1">
                      {kaprodi.education.map((edu, eduIndex) => (
                        <li
                          key={eduIndex}
                          className="text-xs text-gray-700"
                          style={{ lineHeight: "1.5" }}
                        >
                          • {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 4 - JAJARAN DOSEN (Faculty Members) */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Dosen Tetap
            </h2>

            {/* 5-Column Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
              {dosenTetap.map((dosen, index) => (
                <div
                  key={index}
                  className="bg-white rounded shadow hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Profile Image */}
                  <div className="p-3">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/250x300/?${encodeURIComponent(dosen.image)}`}
                      alt={dosen.name}
                      className="w-full h-48 object-cover rounded mb-2"
                    />

                    {/* Name */}
                    <h3 className="text-sm font-bold text-blue-900 mb-1 leading-tight">
                      {dosen.name}
                    </h3>

                    {/* Job Title */}
                    <p className="text-gray-600 text-xs mb-2">{dosen.title}</p>

                    {/* Academic Background - Simplified */}
                    <ul className="space-y-0.5">
                      {dosen.education.slice(0, 2).map((edu, eduIndex) => (
                        <li
                          key={eduIndex}
                          className="text-xs text-gray-700"
                          style={{ lineHeight: "1.5" }}
                        >
                          • {edu}
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
