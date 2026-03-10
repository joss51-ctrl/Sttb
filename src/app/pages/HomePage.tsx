'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Calendar, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { mockApi } from '../../utils/mockApi';
import type { ContentItem } from '../../types';

/**
 * HomePage - Main landing page for STTB website
 * Displays hero section, latest news, events, and key information
 * Features clean, academic design with generous whitespace
 */
export default function HomePage() {
  const [latestNews, setLatestNews] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Data fetching state: loading, error, success
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const content = await mockApi.getPublicContent();
        // Get latest 3 published items
        const latest = content
          .sort((a, b) => new Date(b.publishedAt || '').getTime() - new Date(a.publishedAt || '').getTime())
          .slice(0, 3);
        setLatestNews(latest);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Selamat Datang di Sekolah Tinggi Teologi Bandung
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Membentuk pemimpin rohani yang berkualitas untuk melayani gereja dan masyarakat
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/kegiatan">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Lihat Kegiatan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="#programs">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Program Studi
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">8+</p>
                    <p className="text-sm text-gray-600">Program Studi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Mahasiswa Aktif</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">A</p>
                    <p className="text-sm text-gray-600">Akreditasi Unggul</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">40+</p>
                    <p className="text-sm text-gray-600">Tahun Pengalaman</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Berita & Kegiatan Terkini</h2>
              <p className="text-gray-600">Informasi terbaru dari STTB</p>
            </div>
            <Link to="/berita">
              <Button variant="outline">
                Lihat Semua
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <div className="aspect-video bg-gray-200 animate-pulse" />
                  <CardHeader>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestNews.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {item.featuredImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.featuredImage}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(item.publishedAt || '').toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3 mb-4">{item.excerpt || item.content}</p>
                    <Button variant="link" className="p-0">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Studi Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih program studi yang sesuai dengan panggilan pelayanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sarjana Teologi', level: 'S1', duration: '4 Tahun' },
              { title: 'Sarjana Pendidikan Kristen', level: 'S1', duration: '4 Tahun' },
              { title: 'Magister Teologi Pelayanan Pastoral', level: 'S2', duration: '2 Tahun' },
              { title: 'Magister Pendidikan Kristen', level: 'S2', duration: '2 Tahun' },
            ].map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Jenjang: <span className="font-medium text-gray-900">{program.level}</span></p>
                    <p>Durasi: <span className="font-medium text-gray-900">{program.duration}</span></p>
                  </div>
                  <Button variant="link" className="mt-4 p-0">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Siap Bergabung dengan STTB?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Daftar sekarang dan mulai perjalanan pendidikan teologi Anda bersama kami
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
