"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Kamothe to Kharghar",
    rating: 5,
    text: "Excellent service! The team was very professional and careful with all our belongings. Everything reached safely without a single scratch. Highly recommended!",
    service: "Household Shifting",
  },
  {
    name: "Priya Deshmukh",
    location: "Panvel to Vashi",
    rating: 5,
    text: "We were worried about our glass furniture and electronic items, but Arya Packers handled everything perfectly. Great packing quality and on-time delivery.",
    service: "Household Shifting",
  },
  {
    name: "Amit Patil",
    location: "Taloja to Airoli",
    rating: 5,
    text: "Used their service for office relocation. The team was punctual, efficient, and very organized. Minimal downtime for our business. Will use again!",
    service: "Office Relocation",
  },
  {
    name: "Sneha Kulkarni",
    location: "Kharghar to Nerul",
    rating: 5,
    text: "The pricing was very transparent - no hidden charges at all. The packers were skilled and friendly. Made our move completely stress-free!",
    service: "Household Shifting",
  },
  {
    name: "Vikram Joshi",
    location: "Belapur to Kamothe",
    rating: 5,
    text: "Third time using Arya Packers and they never disappoint. Consistent quality, reasonable prices, and most importantly - they care about your stuff.",
    service: "Household Shifting",
  },
  {
    name: "Neha Pawar",
    location: "Kamothe to Pune",
    rating: 5,
    text: "Long distance move handled brilliantly. Every item was properly labeled and packed. The team even helped us arrange furniture at the new place!",
    service: "Long Distance Move",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-[#1e3a5f] to-[#0f2440]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#f59e0b] font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what families across Navi Mumbai say about us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${current * (100 / 3 + 1.5)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full md:w-[calc(33.333%-16px)] flex-shrink-0"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                    <Quote className="w-8 h-8 text-[#f59e0b]/40 mb-4" />
                    <p className="text-white/80 leading-relaxed mb-6">{t.text}</p>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                      ))}
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-white/50 text-sm">{t.location}</div>
                      <span className="inline-block mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-1 rounded-full">
                        {t.service}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={current === 0}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
