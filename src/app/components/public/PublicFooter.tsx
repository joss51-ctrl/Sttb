import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';

/**
 * PublicFooter - Comprehensive footer for the university website
 * Features:
 * - Resources, help links, program studies sections
 * - Bank account information
 * - Newsletter subscription
 * - Contact information
 * - Social media links
 * - Copyright notice
 */
export default function PublicFooter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to newsletter API
    console.log('Newsletter subscription:', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Sumber Daya */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sumber Daya</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/perpustakaan" className="hover:text-white transition-colors">
                  Perpustakaan
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Perpustakaan Digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Jurnal Transformatio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <Link to="/media" className="hover:text-white transition-colors">
                  Video
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Buletin
                </a>
              </li>
            </ul>
          </div>

          {/* Link Bantuan */}
          <div>
            <h3 className="text-white font-semibold mb-4">Link Bantuan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sistem Informasi Akademik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sistem E-Learning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sistem Perpustakaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sistem Kolaborasi Terpadu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Portal Alumni
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mail Server
                </a>
              </li>
            </ul>
          </div>

          {/* Program Studi */}
          <div>
            <h3 className="text-white font-semibold mb-4">Program Studi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sarjana Teologi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sarjana Pendidikan Kristen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Magister Teologi Pelayanan Pastoral Gereja Urban
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Magister Teologi Transformasi Budaya & Masyarakat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Magister Pendidikan Kristen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Magister Ministri Pastoral
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Magister Ministri Marketplace
                </a>
              </li>
            </ul>
          </div>

          {/* No. Rekening */}
          <div>
            <h3 className="text-white font-semibold mb-4">No. Rekening</h3>
            <div className="text-sm space-y-1">
              <p className="font-medium text-white">BCA cab. Surya Sumantri</p>
              <p>Bandung</p>
              <p>a/c 282.300.5555</p>
              <p>a/n Yayasan STT Bandung</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Information & Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>Jl. Dr. Djunjunan No. 105, Bandung 40173, Indonesia</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p>Phone: (+62) 22 601-6454, 607-7920</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p>WhatsApp: (+62) 815 7336 0009, (+62) 851-8302-6009</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:official@sttb.ac.id" className="hover:text-white transition-colors">
                  official@sttb.ac.id
                </a>
              </div>
            </div>

            {/* Social Media & Copyright */}
            <div className="flex flex-col items-start lg:items-end gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm">
                Copyright 2026 Sekolah Tinggi Teologi Bandung. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
