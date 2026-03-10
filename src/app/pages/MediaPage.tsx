export default function MediaPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Media</h1>
          <p className="text-xl text-purple-100">
            Galeri foto dan video kegiatan STTB
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1520000000000 + i * 100000}?w=800&h=600&fit=crop`}
                  alt={`Media ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
