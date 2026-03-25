/**
 * KegiatanPage - Events Calendar & List Page (Static Demo Version)
 */

import { useState, useRef, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, User, MapPin } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { cn } from '../components/ui/utils';

// Event types
interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  organizer: string;
  category: 'Akademik' | 'Senat' | 'Pembinaan' | 'Umum';
  location: string;
  description: string;
  status: 'ongoing' | 'expired';
}

// Data Dummy untuk Keperluan Testing Design
const DUMMY_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Seminar Metodologi Penelitian Teologi',
    date: new Date(2026, 2, 25), // 25 Maret 2026
    time: '09:00 - 12:00',
    organizer: 'Prodi Teologi',
    category: 'Akademik',
    location: 'Aula Lt. 2',
    description: 'Seminar mendalam mengenai pendekatan kualitatif dalam riset teologi kontemporer bagi mahasiswa tingkat akhir.',
    status: 'ongoing'
  },
  {
    id: '2',
    title: 'Rapat Kerja Senat Mahasiswa',
    date: new Date(2026, 2, 28),
    time: '13:00 - 16:00',
    organizer: 'SEMA STTB',
    category: 'Senat',
    location: 'Ruang Rapat SEMA',
    description: 'Pembahasan program kerja semester genap dan evaluasi kegiatan bakti sosial.',
    status: 'ongoing'
  },
  {
    id: '3',
    title: 'Ibadah Padang & Pembinaan Rohani',
    date: new Date(2026, 3, 5), // 5 April 2026
    time: '08:00 - 15:00',
    organizer: 'Bagian Kemahasiswaan',
    category: 'Pembinaan',
    location: 'Lembang, Bandung',
    description: 'Kegiatan tahunan untuk mempererat persekutuan antar mahasiswa dan dosen di alam terbuka.',
    status: 'ongoing'
  },
  {
    id: '4',
    title: 'Workshop Public Speaking',
    date: new Date(2026, 2, 20),
    time: '10:00 - 12:00',
    organizer: 'Umum',
    category: 'Umum',
    location: 'Online (Zoom)',
    description: 'Pelatihan teknik berbicara di depan umum dan presentasi yang efektif untuk pelayanan.',
    status: 'expired'
  }
];

const categoryColors = {
  Akademik: 'bg-blue-100 text-blue-700 border-blue-200',
  Senat: 'bg-red-100 text-red-700 border-red-200',
  Pembinaan: 'bg-green-100 text-green-700 border-green-200',
  Umum: 'bg-gray-100 text-gray-700 border-gray-200',
};

export default function KegiatanPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [organizerFilter, setOrganizerFilter] = useState<string>('all');

  // Gunakan data dummy langsung agar bisa lihat design
  const [events, setEvents] = useState<Event[]>(DUMMY_EVENTS);
  const [loading, setLoading] = useState(false);

  // Bagian API dikomentari sementara
  /*
  useEffect(() => {
    // ... logic API Anda ...
  }, []);
  */

  const eventRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const organizers = Array.from(new Set(events.map(e => e.organizer)));

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    const matchesOrganizer = organizerFilter === 'all' || event.organizer === organizerFilter;
    const matchesDate = !selectedDate ||
      (event.date.getDate() === selectedDate.getDate() &&
        event.date.getMonth() === selectedDate.getMonth() &&
        event.date.getFullYear() === selectedDate.getFullYear());

    return matchesSearch && matchesCategory && matchesOrganizer && matchesDate;
  });

  const groupedEvents = filteredEvents.reduce((groups, event) => {
    const monthYear = `${event.date.toLocaleString('id-ID', { month: 'long', year: 'numeric' })}`;
    if (!groups[monthYear]) groups[monthYear] = [];
    groups[monthYear].push(event);
    return groups;
  }, {} as { [key: string]: Event[] });

  // Calendar functions (sama seperti sebelumnya)
  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const hasEventOnDate = (date: Date, day: number) => {
    return events.some(event =>
      event.date.getDate() === day &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
    const dateStr = clickedDate.toDateString();
    if (eventRefs.current[dateStr]) {
      eventRefs.current[dateStr]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear();
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const hasEvent = hasEventOnDate(currentDate, day);
      const isTodayDate = isToday(day);
      const isSelectedDate = isSelected(day);

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={cn(
            'aspect-square p-2 text-sm rounded-lg transition-all relative',
            'hover:bg-blue-50 hover:text-blue-900',
            isTodayDate && 'bg-blue-100 font-bold text-blue-900',
            isSelectedDate && 'bg-blue-900 text-white hover:bg-blue-800',
            !isTodayDate && !isSelectedDate && 'text-gray-700'
          )}
        >
          {day}
          {hasEvent && (
            <div className={cn(
              'absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full',
              isSelectedDate ? 'bg-white' : 'bg-red-700'
            )} />
          )}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Cari kegiatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                <SelectItem value="Akademik">Akademik</SelectItem>
                <SelectItem value="Senat">Senat</SelectItem>
                <SelectItem value="Pembinaan">Pembinaan</SelectItem>
                <SelectItem value="Umum">Umum</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => {
              setSearchQuery('');
              setCategoryFilter('all');
              setSelectedDate(null);
            }}>Reset</Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Calendar Sidebar */}
          <aside className="w-full lg:w-80 lg:sticky lg:top-28">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg text-blue-900">
                  {currentDate.toLocaleString('id-ID', { month: 'long', year: 'numeric' })}
                </h2>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-semibold text-gray-500">
                {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderCalendar()}
              </div>
            </div>
          </aside>

          {/* Event List */}
          <main className="flex-1">
            {Object.entries(groupedEvents).map(([monthYear, monthEvents]) => (
              <div key={monthYear} className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-900">
                  {monthYear}
                </h3>
                <div className="space-y-4">
                  {monthEvents.map((event) => (
                    <div 
                      key={event.id}
                      ref={(el) => { eventRefs.current[event.date.toDateString()] = el; }}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-4xl font-bold text-blue-900">{event.date.getDate()}</div>
                          <div className="text-sm text-gray-600 uppercase tracking-wide">{event.date.toLocaleString('id-ID', { month: 'short' })}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                            <Badge className={categoryColors[event.category]}>{event.category}</Badge>
                            {event.status === 'expired' && <Badge variant="secondary">Selesai</Badge>}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {event.time}</div>
                            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}</div>
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /> {event.organizer}</div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    </div>
  );
}