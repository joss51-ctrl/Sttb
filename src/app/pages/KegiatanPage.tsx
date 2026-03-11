/**
 * KegiatanPage - Events Calendar & List Page
 * Professional interactive calendar with sticky sidebar and filterable event list
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

// Mock events data
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Orientasi Mahasiswa Baru',
    date: new Date(2026, 2, 15),
    time: '08:00 - 16:00',
    organizer: 'Bagian Akademik',
    category: 'Akademik',
    location: 'Auditorium STTB',
    description: 'Pengenalan kehidupan kampus untuk mahasiswa baru',
    status: 'expired',
  },
  {
    id: '2',
    title: 'Seminar Teologi Kontemporer',
    date: new Date(2026, 2, 20),
    time: '13:00 - 15:00',
    organizer: 'Dr. Paulus Gunawan',
    category: 'Akademik',
    location: 'Ruang Seminar',
    description: 'Diskusi mendalam tentang isu-isu teologi masa kini',
    status: 'ongoing',
  },
  {
    id: '3',
    title: 'Rapat Senat Mahasiswa',
    date: new Date(2026, 2, 22),
    time: '14:00 - 16:00',
    organizer: 'Senat Mahasiswa',
    category: 'Senat',
    location: 'Ruang Senat',
    description: 'Rapat koordinasi senat mahasiswa periode Maret',
    status: 'ongoing',
  },
  {
    id: '4',
    title: 'Retreat Rohani Dosen',
    date: new Date(2026, 2, 25),
    time: '09:00 - 17:00',
    organizer: 'Tim Pembinaan',
    category: 'Pembinaan',
    location: 'Ciater, Subang',
    description: 'Pembinaan rohani dan fellowship dosen',
    status: 'ongoing',
  },
  {
    id: '5',
    title: 'Workshop Hermeneutika',
    date: new Date(2026, 3, 5),
    time: '10:00 - 15:00',
    organizer: 'Dr. Elisabeth Chen',
    category: 'Akademik',
    location: 'Lab Komputer',
    description: 'Pelatihan metode penafsiran Alkitab',
    status: 'ongoing',
  },
  {
    id: '6',
    title: 'Bakti Sosial Mahasiswa',
    date: new Date(2026, 3, 10),
    time: '07:00 - 14:00',
    organizer: 'Senat Mahasiswa',
    category: 'Senat',
    location: 'Desa Cibiru',
    description: 'Kegiatan pengabdian masyarakat',
    status: 'ongoing',
  },
  {
    id: '7',
    title: 'Ibadah Paskah Kampus',
    date: new Date(2026, 3, 12),
    time: '10:00 - 12:00',
    organizer: 'Tim Pembinaan',
    category: 'Pembinaan',
    location: 'Kapel STTB',
    description: 'Perayaan Paskah bersama sivitas akademika',
    status: 'ongoing',
  },
  {
    id: '8',
    title: 'Ujian Tengah Semester',
    date: new Date(2026, 3, 15),
    time: '08:00 - 12:00',
    organizer: 'Bagian Akademik',
    category: 'Akademik',
    location: 'Ruang Kuliah',
    description: 'UTS untuk semua program studi',
    status: 'ongoing',
  },
  {
    id: '9',
    title: 'Gathering Alumni',
    date: new Date(2026, 3, 18),
    time: '17:00 - 21:00',
    organizer: 'Humas & Alumni',
    category: 'Umum',
    location: 'Gedung Serba Guna',
    description: 'Pertemuan alumni dan networking',
    status: 'ongoing',
  },
  {
    id: '10',
    title: 'Konferensi Nasional Teologi',
    date: new Date(2026, 3, 25),
    time: '08:00 - 17:00',
    organizer: 'STTB',
    category: 'Akademik',
    location: 'Auditorium STTB',
    description: 'Konferensi teologi tingkat nasional',
    status: 'ongoing',
  },
];

// Category colors
const categoryColors = {
  Akademik: 'bg-blue-100 text-blue-700 border-blue-200',
  Senat: 'bg-red-100 text-red-700 border-red-200',
  Pembinaan: 'bg-green-100 text-green-700 border-green-200',
  Umum: 'bg-gray-100 text-gray-700 border-gray-200',
};

export default function KegiatanPage() {
  // State
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [organizerFilter, setOrganizerFilter] = useState<string>('all');
  
  // Refs for scrolling
  const eventRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Get unique organizers
  const organizers = Array.from(new Set(mockEvents.map(e => e.organizer)));

  // Filter events
  const filteredEvents = mockEvents.filter(event => {
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

  // Group events by month
  const groupedEvents = filteredEvents.reduce((groups, event) => {
    const monthYear = `${event.date.toLocaleString('id-ID', { month: 'long', year: 'numeric' })}`;
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(event);
    return groups;
  }, {} as { [key: string]: Event[] });

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const hasEventOnDate = (date: Date, day: number) => {
    return mockEvents.some(event => 
      event.date.getDate() === day &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
    
    // Find first event on this date and scroll to it
    const dateStr = clickedDate.toDateString();
    if (eventRefs.current[dateStr]) {
      eventRefs.current[dateStr]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
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

  // Render calendar days
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square" />);
    }

    // Days of month
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
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Kegiatan</h1>
          <p className="text-xl text-blue-100">
            Kalender dan daftar kegiatan akademik, rohani, dan kemahasiswaan di STTB
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari kegiatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
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

            {/* Organizer Filter */}
            <Select value={organizerFilter} onValueChange={setOrganizerFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Penyelenggara" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Penyelenggara</SelectItem>
                {organizers.map((org) => (
                  <SelectItem key={org} value={org}>{org}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            {(searchQuery || categoryFilter !== 'all' || organizerFilter !== 'all' || selectedDate) && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('all');
                  setOrganizerFilter('all');
                  setSelectedDate(null);
                }}
                className="whitespace-nowrap"
              >
                Reset Filter
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content - Sidebar + Event List */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Sidebar - Sticky Calendar */}
          <aside className="w-full lg:w-80 lg:sticky lg:top-28 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg text-blue-900">
                  {currentDate.toLocaleString('id-ID', { month: 'long', year: 'numeric' })}
                </h2>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={previousMonth}
                    className="h-8 w-8"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextMonth}
                    className="h-8 w-8"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="space-y-2">
                {/* Day names */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
                    <div key={day} className="text-center text-xs font-semibold text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-1">
                  {renderCalendar()}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-3 h-3 rounded-full bg-red-700" />
                  <span>Ada kegiatan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-3 h-3 rounded-full bg-blue-100 border-2 border-blue-900" />
                  <span>Hari ini</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Area - Event List */}
          <main className="flex-1 min-w-0">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16">
                <CalendarIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">Tidak ada kegiatan yang sesuai filter</p>
              </div>
            ) : (
              <div className="space-y-8">
                {Object.entries(groupedEvents).map(([monthYear, events]) => (
                  <div key={monthYear} className="space-y-4">
                    {/* Month Header */}
                    <h3 className="text-2xl font-bold text-blue-900 pb-2 border-b-2 border-blue-900">
                      {monthYear}
                    </h3>

                    {/* Events in this month */}
                    <div className="space-y-4">
                      {events.map((event) => {
                        const dateStr = event.date.toDateString();
                        return (
                          <div
                            key={event.id}
                            ref={(el) => { eventRefs.current[dateStr] = el; }}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                          >
                            <div className="flex flex-col md:flex-row gap-6">
                              {/* Time Column */}
                              <div className="md:w-48 flex-shrink-0">
                                <div className="text-4xl font-bold text-blue-900 mb-1">
                                  {event.date.getDate()}
                                </div>
                                <div className="text-sm text-gray-600 mb-2">
                                  {event.date.toLocaleString('id-ID', { month: 'long', year: 'numeric' })}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                  <Clock className="w-4 h-4" />
                                  <span>{event.time}</span>
                                </div>
                              </div>

                              {/* Info Column */}
                              <div className="flex-1 min-w-0">
                                {/* Title and Category */}
                                <div className="flex flex-wrap items-start gap-3 mb-3">
                                  <h4 className="text-xl font-bold text-gray-900 flex-1">
                                    {event.title}
                                  </h4>
                                  <Badge
                                    variant="outline"
                                    className={cn('font-semibold', categoryColors[event.category])}
                                  >
                                    {event.category}
                                  </Badge>
                                  <Badge
                                    variant="outline"
                                    className={cn(
                                      'font-semibold',
                                      event.status === 'ongoing'
                                        ? 'bg-green-50 text-green-700 border-green-200'
                                        : 'bg-gray-50 text-gray-500 border-gray-200'
                                    )}
                                  >
                                    {event.status === 'ongoing' ? 'Berlangsung' : 'Selesai'}
                                  </Badge>
                                </div>

                                {/* Organizer */}
                                <div className="flex items-center gap-2 text-gray-700 mb-2">
                                  <User className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm font-medium">{event.organizer}</span>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-gray-700 mb-3">
                                  <MapPin className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm">{event.location}</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.6' }}>
                                  {event.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}