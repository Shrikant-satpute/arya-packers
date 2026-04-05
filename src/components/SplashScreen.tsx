"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import deliveryAnimation from "../../public/delivery.json";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [animationDone, setAnimationDone] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (animationDone) {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [animationDone]);

  useEffect(() => {
    const fallback = setTimeout(() => setIsLoading(false), 8000);
    return () => clearTimeout(fallback);
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.08,
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    }),
  };

  const brandName = "Arya Packers";

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          >
            {/* Subtle background circles */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-[500px] h-[500px] rounded-full bg-[#1e3a5f]/5"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.08, 0.03] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-[700px] h-[700px] rounded-full bg-[#f59e0b]/5"
            />

            {/* Lottie Animation */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-80 h-80 md:w-[420px] md:h-[420px]"
            >
              <Lottie
                lottieRef={lottieRef}
                animationData={deliveryAnimation}
                loop={false}
                autoplay
                onComplete={() => setAnimationDone(true)}
                className="w-full h-full"
              />
            </motion.div>

            {/* Brand Name - Letter by letter animation */}
            <div className="text-center mt-2">
              <h1 className="text-4xl md:text-6xl font-extrabold flex justify-center perspective-[500px]">
                {brandName.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={
                      letter === " "
                        ? "w-3 md:w-4"
                        : i < 4
                          ? "text-[#1e3a5f] drop-shadow-sm"
                          : "text-[#f59e0b] drop-shadow-sm"
                    }
                    style={{ display: "inline-block" }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
                className="mt-1"
              >
                <span className="text-[#f59e0b] text-base md:text-xl font-bold tracking-[0.3em] uppercase">
                  & Movers
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="mt-2 text-gray-400 text-sm md:text-base tracking-wide"
              >
                Safe & Reliable Moving Services
              </motion.p>
            </div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "12rem" }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="mt-8 h-1.5 bg-gray-100 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: animationDone ? "100%" : "75%" }}
                transition={{ duration: animationDone ? 0.4 : 4, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#1e3a5f] via-[#2a5298] to-[#f59e0b] rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
