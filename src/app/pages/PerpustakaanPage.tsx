export default function PerpustakaanPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Perpustakaan</h1>
          <p className="text-xl text-indigo-100">
            Akses ke ribuan koleksi buku teologi dan sumber daya digital
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Koleksi Buku', count: '10,000+', description: 'Buku teologi dan referensi' },
              { title: 'Jurnal Digital', count: '500+', description: 'Jurnal teologi dan pendidikan' },
              { title: 'E-Books', count: '2,000+', description: 'Buku digital tersedia' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-3xl font-bold text-indigo-600 mb-2">{item.count}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
