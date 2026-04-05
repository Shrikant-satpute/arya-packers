"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/slide-1.jpg",
    alt: "Arya Packers and Movers - Professional packing service",
    title: "Professional Packing",
    subtitle: "Premium materials for maximum safety of your belongings",
  },
  {
    src: "/images/slide-2.jpg",
    alt: "Arya Packers and Movers - Safe household shifting",
    title: "Household Shifting",
    subtitle: "Complete home relocation handled with care",
  },
  {
    src: "/images/slide-3.jpg",
    alt: "Arya Packers and Movers - Loading and transportation",
    title: "Safe Transportation",
    subtitle: "Careful loading and GPS-tracked delivery across India",
  },
  {
    src: "/images/slide-4.jpg",
    alt: "Arya Packers and Movers - Expert team at work",
    title: "Expert Team",
    subtitle: "Trained professionals for damage-free moving",
  },
  {
    src: "/images/slide-5.png",
    alt: "Arya Packers and Movers - Business poster and services overview",
    title: "Arya Packers & Movers",
    subtitle: "Your trusted partner for all relocation needs across India",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f59e0b]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#f59e0b] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
            See Us in Action
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            From careful packing to safe delivery — real glimpses of how we handle every move with precision.
          </p>
        </motion.div>

        {/* Main Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
            {slides.map((slide, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  opacity: i === current ? 1 : 0,
                  scale: i === current ? 1 : 1.1,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{ zIndex: i === current ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={i <= 1}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Text overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={i === current ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-10"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={i === current ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="inline-block bg-[#f59e0b] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                  >
                    {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </motion.span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-white/80 text-base md:text-lg">{slide.subtitle}</p>
                </motion.div>
              </motion.div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-6 flex gap-3 justify-center">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  i === current
                    ? "w-20 h-14 md:w-28 md:h-20 ring-2 ring-[#f59e0b] ring-offset-2 shadow-lg scale-105"
                    : "w-16 h-12 md:w-24 md:h-16 opacity-50 hover:opacity-80 grayscale hover:grayscale-0"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
                {i === current && (
                  <motion.div
                    layoutId="activeThumb"
                    className="absolute inset-0 border-2 border-[#f59e0b] rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6 max-w-md mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#1e3a5f] to-[#f59e0b] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
