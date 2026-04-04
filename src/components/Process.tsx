"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, ClipboardList, PackageCheck, Truck, type LucideIcon } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Book Your Move",
    description:
      "Call us or send a WhatsApp message. Share your requirements and get a free instant quote.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Survey & Planning",
    description:
      "Our team visits your location, assesses items, and creates a detailed moving plan.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Pack & Load",
    description:
      "Professional packing with premium materials. Careful loading with proper labeling of every box.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Truck,
    step: "04",
    title: "Move & Deliver",
    description:
      "Safe transportation in GPS-tracked vehicles. Unloading and arrangement at your new place.",
    color: "from-green-500 to-emerald-600",
  },
];

function StepCard({
  step,
  index,
}: {
  step: { icon: LucideIcon; step: string; title: string; description: string; color: string };
  index: number;
}) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative text-center group"
    >
      <div className="relative z-10 mx-auto w-20 h-20 mb-6">
        <div
          className={`w-full h-full rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
          {step.step}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
      <p className="text-gray-600 leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="process" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#f59e0b] font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
            Simple 4-Step Process
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Moving doesn&apos;t have to be complicated. Here&apos;s our straightforward process.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <PhoneCall className="w-5 h-5" />
            Start Your Move Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
