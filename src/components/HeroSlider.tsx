import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-ashram.jpg";

const slides = [
  {
    title: "Theni Swamigal",
    subtitle: "A Path of Peace & Wisdom",
    description: "Find inner clarity through the divine teachings of Swamigal.",
  },
  {
    title: "Theni Swamigal Ashram",
    subtitle: "A Place of Silence & Blessings",
    description: "Experience meditation, satsang, and spiritual healing.",
  },
  {
    title: "Books, Teachings & Divine Guidance",
    subtitle: "Wisdom for the Soul",
    description: "Download spiritual books and explore the path of self-realization.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* ===== Background Image (FULL IMAGE – NO CROP) ===== */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={heroImage}
          alt="Theni Swamigal Ashram"
          className="max-w-full max-h-full object-contain"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-1000",
              currentSlide === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            )}
          >
            <div className="max-w-4xl mx-auto">
              <span className="inline-block text-primary text-lg md:text-xl mb-4">
                🙏 {slide.subtitle}
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
                {slide.title}
              </h1>

              <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                {slide.description}
              </p>

              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition hover:scale-105 hover:shadow-lg"
              >
                Explore the Ashram
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Navigation Arrows ===== */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        <ChevronRight size={28} />
      </button>

      {/* ===== Dots ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-3 rounded-full transition-all duration-300",
              currentSlide === index
                ? "w-8 bg-primary"
                : "w-3 bg-white/50 hover:bg-white"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
