"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Shield,
  Clock,
  Banknote,
  Users,
  Award,
  HeadphonesIcon,
  type LucideIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "100% Safe & Secure",
    description: "Your belongings are insured and handled with premium packing materials.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. Punctual pickup and delivery every single time.",
  },
  {
    icon: Banknote,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges. Get the best value for your move.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Trained professionals who handle every item from fragile goods to heavy furniture.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "A decade of trusted service across Navi Mumbai with thousands of happy customers.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support. We're always here when you need us.",
  },
];

function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-[#f59e0b]">
      {count}
      {suffix}
    </span>
  );
}

function ReasonCard({
  reason,
  index,
}: {
  reason: { icon: LucideIcon; title: string; description: string };
  index: number;
}) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = reason.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors group"
    >
      <div className="flex-shrink-0 w-14 h-14 bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f] rounded-xl flex items-center justify-center transition-colors">
        <Icon className="w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{reason.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 md:p-12 bg-gradient-to-r from-[#1e3a5f] to-[#2a5298] rounded-3xl shadow-2xl">
          {[
            { end: 10, suffix: "+", label: "Years Experience" },
            { end: 5000, suffix: "+", label: "Happy Customers" },
            { end: 50, suffix: "+", label: "Expert Staff" },
            { end: 98, suffix: "%", label: "Satisfaction Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter end={stat.end} suffix={stat.suffix} />
              <p className="text-white/70 mt-2 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#f59e0b] font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
            We Make Moving Stress-Free
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            With years of experience and thousands of successful relocations, here&apos;s why
            families and businesses trust Arya Packers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
