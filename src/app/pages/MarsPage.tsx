import { useState, useRef } from "react";
import { ChevronRight, Play, Pause, Download, ZoomIn, X } from "lucide-react";
import { Button } from "../components/ui/button";

export default function MarsPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold">Mars STTB</h1>
          <p className="text-xl text-blue-100 mt-4 max-w-3xl">
            Hymne resmi Sekolah Tinggi Teologi Bandung
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Musical Score */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Partitur Mars STTB
                </h2>

                {/* Musical Score Image with Click to Enlarge */}
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <img
                    src="https://sttb.ac.id/storage/2022/01/09-MARS-STTB.jpg"
                    alt="Partitur Mars STTB"
                    className="w-full h-auto rounded-lg shadow-lg border border-gray-300 transition-transform group-hover:scale-[1.02]"
                  />

                  {/* Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors rounded-lg flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <ZoomIn className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>

                  {/* Click to Enlarge Label */}
                  <div className="absolute bottom-4 right-4 bg-blue-900/90 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Klik untuk memperbesar
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Title, Audio Player, and Lyrics */}
            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <h2 className="text-4xl font-serif font-bold text-blue-900 mb-2">
                  Mars STT Bandung
                </h2>
                <p className="text-lg text-gray-600 italic">
                  Oleh Dorothy I. Marx
                </p>
              </div>

              {/* Audio Player */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Dengarkan Mars STTB
                </h3>

                {/* Custom Audio Player */}
                <div className="space-y-4">
                  {/* Play/Pause Button and Progress */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePlayPause}
                      className="w-12 h-12 rounded-full bg-red-700 hover:bg-red-800 transition-colors flex items-center justify-center text-white shadow-lg flex-shrink-0"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" fill="white" />
                      ) : (
                        <Play className="w-5 h-5 ml-0.5" fill="white" />
                      )}
                    </button>

                    {/* Progress Bar */}
                    <div className="flex-1">
                      <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-red-700"
                        style={{
                          background: `linear-gradient(to right, #b91c1c 0%, #b91c1c ${(currentTime / duration) * 100}%, #d1d5db ${(currentTime / duration) * 100}%, #d1d5db 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hidden Audio Element */}
                  <audio
                    ref={audioRef}
                    src="https://sttb.ac.id/storage/2022/05/Audio-Mars-STTB.mp3?_=1"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://sttb.ac.id/storage/2022/01/09-MARS-STTB.jpg"
                  download
                  className="flex-1 min-w-[200px]"
                >
                  <Button
                    variant="outline"
                    className="w-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors py-6 text-base font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF Partitur
                  </Button>
                </a>

                <a
                  href="https://sttb.ac.id/storage/2022/05/Audio-Mars-STTB.mp3?_=1"
                  download
                  className="flex-1 min-w-[200px]"
                >
                  <Button
                    variant="outline"
                    className="w-full border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-colors py-6 text-base font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download MP3
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal (Lightbox) */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setIsImageModalOpen(false)}
        >
          {/* Tombol Close */}
          <button className="absolute top-5 right-5 text-white hover:text-red-500 z-[110]">
            <X size={40} />
          </button>

          {/* Kontainer Scroll */}
          <div
            className="relative max-w-5xl max-h-full overflow-auto rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Agar klik gambar tidak menutup modal
          >
            <img
              src="https://sttb.ac.id/storage/2022/01/09-MARS-STTB.jpg"
              alt="Partitur Zoom"
              className="min-w-[800px] h-auto" // Memberikan lebar minimum agar scroll muncul di mobile/layar kecil
            />
          </div>
        </div>
      )}
    </div>
  );
}
