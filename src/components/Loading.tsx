import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATING_WORDS = ["Decorar", "Criar", "Encantar", "Celebrar"];
const DURATION_MS = 2700;

interface LoadingScreenProps {
  onComplete: () => void;
}

const Loading = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 400);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((p) => (p + 1) % ROTATING_WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  // Cálculos para o círculo
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-foreground"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Brand */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute top-8 left-8 text-sm font-bold tracking-widest uppercase text-background/50"
      >
        Viva Festas Decora
      </motion.p>

      {/* Rotating word */}
      <div className="h-20 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1
            key={wordIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="text-5xl md:text-7xl font-serif-italic text-background/90"
          >
            {ROTATING_WORDS[wordIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Circular Progress */}
      <div className="relative mt-8">
        {/* SVG do círculo */}
        <svg className="w-48 h-48 md:w-56 md:h-56 transform -rotate-90">
          {/* Círculo de fundo */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
          />
          {/* Círculo de progresso */}
          <motion.circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            initial={false}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
          {/* Gradiente */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(170, 45%, 35%)" />
              <stop offset="100%" stopColor="hsl(45, 60%, 55%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Porcentagem no centro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-4xl md:text-5xl font-bold tabular-nums text-background/80">
            {String(progress).padStart(3, "0")}
          </span>
        </motion.div>
      </div>

      {/* Decorative emoji */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-2xl"
      >
        🎈✨🎉
      </motion.p>
    </motion.div>
  );
};

export default Loading;
