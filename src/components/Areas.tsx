"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, CheckCircle2 } from "lucide-react";

const areas = [
  {
    name: "Kamothe",
    tag: "Headquarters",
    description: "Our base of operations. Same-day service available for all sectors.",
    highlighted: true,
  },
  {
    name: "Panvel",
    tag: "High Demand",
    description: "Frequent service routes with dedicated teams for Panvel and New Panvel.",
  },
  {
    name: "Kharghar",
    tag: "Popular",
    description: "Regular service covering all sectors and nearby areas in Kharghar.",
  },
  {
    name: "Taloja",
    tag: "Industrial",
    description: "Specialized in both residential and commercial moves across Taloja.",
  },
  {
    name: "Vashi",
    tag: "Commercial Hub",
    description: "Office relocation experts for Vashi's business district.",
  },
  {
    name: "Belapur",
    tag: "CBD Area",
    description: "Serving residential complexes and corporate offices in CBD Belapur.",
  },
  {
    name: "Nerul",
    tag: "Residential",
    description: "Door-to-door household shifting across all Nerul sectors.",
  },
  {
    name: "Airoli",
    tag: "IT Hub",
    description: "Corporate and household relocation for Airoli and MIDC areas.",
  },
];

function AreaCard({
  area,
  index,
}: {
  area: (typeof areas)[number];
  index: number;
}) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={cardInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative p-5 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1 ${
        area.highlighted
          ? "bg-gradient-to-br from-[#1e3a5f] to-[#2a5298] border-transparent text-white"
          : "bg-white border-gray-100 hover:border-[#f59e0b]/30"
      }`}
    >
      {area.highlighted && (
        <div className="absolute -top-2 -right-2 bg-[#f59e0b] text-white text-[10px] font-bold px-2 py-1 rounded-full">
          HQ
        </div>
      )}
      <div className="flex items-start gap-3">
        <MapPin
          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
            area.highlighted ? "text-[#f59e0b]" : "text-[#1e3a5f]"
          }`}
        />
        <div>
          <h3 className={`font-bold text-lg ${area.highlighted ? "" : "text-gray-900"}`}>
            {area.name}
          </h3>
          <span
            className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1 mb-2 ${
              area.highlighted
                ? "bg-white/20 text-white/90"
                : "bg-[#f59e0b]/10 text-[#d97706]"
            }`}
          >
            {area.tag}
          </span>
          <p
            className={`text-sm leading-relaxed ${
              area.highlighted ? "text-white/80" : "text-gray-500"
            }`}
          >
            {area.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Areas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="areas" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#f59e0b] font-semibold text-sm uppercase tracking-wider mb-3">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
            Serving All of Navi Mumbai
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Based in Kamothe, we provide reliable packing and moving services across
            all major locations in Navi Mumbai.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, i) => (
            <AreaCard key={area.name} area={area} index={i} />
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                Don&apos;t see your area listed?
              </h3>
              <p className="text-gray-600">
                We serve all locations across Navi Mumbai and can arrange moves to any destination in
                Maharashtra.
              </p>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2a5298] text-white px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap"
            >
              <CheckCircle2 className="w-4 h-4" />
              Check Availability
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
