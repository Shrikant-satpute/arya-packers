"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  Building2,
  Package,
  Truck,
  ArrowUpDown,
  Warehouse,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Household Shifting",
    description:
      "Complete home relocation with careful packing of furniture, appliances, kitchenware, and personal belongings. Damage-free guaranteed.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Building2,
    title: "Office Relocation",
    description:
      "Seamless office moving with minimal downtime. We handle IT equipment, furniture, files, and sensitive documents with utmost care.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description:
      "High-quality packing using bubble wrap, carton boxes, foam sheets, and protective covers. Every item packed with precision.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Truck,
    title: "Safe Transportation",
    description:
      "GPS-tracked vehicles with experienced drivers ensure your belongings reach safely. Door-to-door pickup and delivery.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: ArrowUpDown,
    title: "Loading & Unloading",
    description:
      "Trained manpower for heavy lifting. We use proper equipment and techniques to handle furniture, appliances, and fragile items.",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: Warehouse,
    title: "Storage & Warehousing",
    description:
      "Secure short-term and long-term storage solutions. Clean, safe, and climate-appropriate warehouse facilities.",
    color: "from-teal-500 to-cyan-600",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#2a5298] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 shadow-lg`}>
          <service.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#f59e0b] font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f]">
            Our Professional Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            From packing to transportation, we provide end-to-end relocation solutions
            tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
