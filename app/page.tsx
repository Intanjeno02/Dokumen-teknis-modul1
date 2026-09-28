"use client";

import React, { useState, useEffect } from "react";

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [likes, setLikes] = useState(0);

  // Daftar slide presentasi dengan tema pink & cute
  const slides = [
    {
      id: 1,
      badge: "🌸 Welcome",
      title: "Welcome to Our Presentation",
      subtitle: "Simple, Cute & Interactive Web Presentation",
      content: (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center text-5xl shadow-inner mb-4 animate-bounce">
            🎀
          </div>
          <p className="text-pink-900 font-medium text-lg max-w-md">
            Selamat datang! Presentasi ini dibuat dengan tampilan simpel, bernuansa pink ceria, dan mudah digunakan.
          </p>
          <span className="mt-3 text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-semibold">
            ✨ Tekan Next atau tombol panah untuk mulai ✨
          </span>
        </div>
      ),
    },
    {
      id: 2,
      badge: "📋 Rules",
      title: "Aturan Sederhana Presentasi",
      subtitle: "Mohon patuhi aturan ramah berikut selama presentasi berlangsung 💕",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 w-full">
          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 flex items-start gap-3 hover:shadow-md transition">
            <span className="text-3xl">🔇</span>
            <div>
              <h3 className="font-bold text-pink-900 text-base">1. Mute Mikrofon</h3>
              <p className="text-xs text-pink-700/80 mt-1">
                Matikan mic saat pemateri berbicara agar suara tetap terdengar jelas dan nyaman.
              </p>
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 flex items-start gap-3 hover:shadow-md transition">
            <span className="text-3xl">🙋‍♀️</span>
            <div>
              <h3 className="font-bold text-pink-900 text-base">2. Angkat Tangan (Raise Hand)</h3>
              <p className="text-xs text-pink-700/80 mt-1">
                Gunakan fitur raise hand atau kolom chat saat sesi tanya jawab (Q&A) dibuka.
              </p>
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 flex items-start gap-3 hover:shadow-md transition">
            <span className="text-3xl">💖</span>
            <div>
              <h3 className="font-bold text-pink-900 text-base">3. Saling Menghargai</h3>
              <p className="text-xs text-pink-700/80 mt-1">
                Berikan respon positif, saling mendukung, dan jaga suasana tetap ramah serta asyik!
              </p>
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 flex items-start gap-3 hover:shadow-md transition">
            <span className="text-3xl">☕</span>
            <div>
              <h3 className="font-bold text-pink-900 text-base">4. Nikmati & Rileks</h3>
              <p className="text-xs text-pink-700/80 mt-1">
                Siapkan minuman manis favoritmu, catat poin penting, dan nikmati sesinya!
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      badge: "💡 Topik",
      title: "Poin Pembahasan",
      subtitle: "Ringkasan materi utama yang akan kita diskusikan hari ini",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 w-full">
          <div className="bg-white border-2 border-pink-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="text-3xl mb-2">🌸</div>
            <h4 className="font-bold text-pink-900 text-sm">Cute & Clean</h4>
            <p className="text-xs text-pink-600 mt-2">
              Desain minimalis dengan kombinasi warna pink pastel yang menenangkan mata.
            </p>
          </div>

          <div className="bg-white border-2 border-pink-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-bold text-pink-900 text-sm">Single File</h4>
            <p className="text-xs text-pink-600 mt-2">
              Semua kode berada dalam satu file `page.tsx`, tanpa ribet install library tambahan.
            </p>
          </div>

          <div className="bg-white border-2 border-pink-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="font-bold text-pink-900 text-sm">Interaktif</h4>
            <p className="text-xs text-pink-600 mt-2">
              Mendukung tombol navigasi, indikator halaman, dan tombol panah keyboard.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      badge: "💬 Penutup",
      title: "Terima Kasih Banyak!",
      subtitle: "Ada pertanyaan atau tanggapan? Yuk kita diskusi bareng 💕",
      content: (
        <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
          <div className="text-5xl">🥰</div>
          <p className="text-pink-900 font-medium text-base max-w-md">
            Terima kasih atas perhatian dan antusiasmenya! Jangan lupa untuk tetap semangat dan tersenyum hari ini.
          </p>

          {/* Tombol interaktif love */}
          <button
            onClick={() => setLikes((prev) => prev + 1)}
            className="flex items-center gap-2 px-5 py-2.5 bg-pink-500 hover:bg-pink-600 active:scale-95 text-white font-bold rounded-full shadow-md shadow-pink-300 transition"
          >
            <span>💖 Kirim Love</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
              {likes}
            </span>
          </button>
        </div>
      ),
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Navigasi keyboard (panah kiri / kanan)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const active = slides[currentSlide];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col justify-between font-sans text-pink-950 selection:bg-pink-200 p-4 sm:p-8">
      {/* Header */}
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between py-2 border-b border-pink-200">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="font-extrabold text-pink-700 tracking-wide text-lg">
            CuteSlide
          </span>
        </div>

        {/* Indikator Titik Slide */}
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all ${
                currentSlide === idx
                  ? "w-8 bg-pink-500"
                  : "w-3 bg-pink-200 hover:bg-pink-300"
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <span className="text-xs font-semibold text-pink-500 bg-pink-100 px-3 py-1 rounded-full border border-pink-200">
          Slide {currentSlide + 1} / {totalSlides}
        </span>
      </header>

      {/* Konten Slide (Kartu Utama) */}
      <main className="max-w-4xl w-full mx-auto my-6 bg-white border-2 border-pink-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-pink-100 flex flex-col justify-between min-h-[460px]">
        {/* Judul & Badge */}
        <div>
          <span className="inline-block text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full mb-3">
            {active.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-pink-900 tracking-tight">
            {active.title}
          </h2>
          <p className="text-xs sm:text-sm text-pink-600 mt-1 font-medium">
            {active.subtitle}
          </p>
        </div>

        {/* Konten Dinamis */}
        <div className="my-auto">{active.content}</div>

        {/* Navigasi Bawah */}
        <div className="flex items-center justify-between pt-6 border-t border-pink-100">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 ${
              currentSlide === 0
                ? "opacity-30 cursor-not-allowed bg-pink-50 text-pink-300"
                : "bg-pink-100 hover:bg-pink-200 text-pink-800 shadow-xs"
            }`}
          >
            ← Previous
          </button>

          <span className="text-xs text-pink-400 font-medium hidden sm:inline">
            Gunakan tombol panah keyboard (← / →)
          </span>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`px-6 py-2.5 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 ${
              currentSlide === totalSlides - 1
                ? "opacity-30 cursor-not-allowed bg-pink-50 text-pink-300"
                : "bg-pink-500 hover:bg-pink-600 text-white shadow-md shadow-pink-300"
            }`}
          >
            Next →
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-pink-400 font-medium">
        🌸 Dibuat dengan tema pink & simpel untuk presentasi Anda
      </footer>
    </div>
  );
}
