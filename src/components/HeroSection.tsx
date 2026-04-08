import { useState, useRef, useCallback, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, Sparkles, Gift, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511947018465";
const CATALOG_URL = "#galeria";

// Pré-carregar vídeos para melhor performance
const HERO_VIDEOS = [
  "/videos/hero-5.mp4",
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
  "/videos/hero-4.mp4",
];

// Componente de vídeo otimizado
const OptimizedVideo = memo(
  ({
    src,
    isActive,
    onEnded,
  }: {
    src: string;
    isActive: boolean;
    onEnded: () => void;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      if (isActive && videoRef.current) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    }, [isActive]);

    return (
      <motion.video
        ref={videoRef}
        src={src}
        autoPlay={isActive}
        loop={false}
        muted
        playsInline
        onEnded={onEnded}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.05 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover"
        preload={isActive ? "auto" : "none"}
      />
    );
  },
);

OptimizedVideo.displayName = "OptimizedVideo";

// Componente de partículas flutuantes
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();

  const handleVideoEnd = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  }, []);

  // Pré-carregar próximo vídeo
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % HERO_VIDEOS.length;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = HERO_VIDEOS[nextIndex];
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [currentIndex]);

  const scrollToGallery = useCallback(() => {
    const element = document.getElementById("galeria");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black/80 via-primary/80 to-secondary/90"
    >
      {/* Video background */}
      <AnimatePresence mode="wait">
        {!isMobile ? (
          <OptimizedVideo
            key={currentIndex}
            src={HERO_VIDEOS[currentIndex]}
            isActive={true}
            onEnded={handleVideoEnd}
          />
        ) : (
          <video
            key="mobile-video"
            className="absolute inset-0 w-full h-full object-cover"
            src={HERO_VIDEOS[0]}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        )}
      </AnimatePresence>

      {/* Overlay gradiente melhorado */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Partículas flutuantes */}
      <FloatingParticles />

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Ícones decorativos animados */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          {[Gift, Sparkles, Star].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                delay: index * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <Icon className="w-8 h-8 text-white/60" />
            </motion.div>
          ))}
        </motion.div>

        {/* Título principal com efeito de brilho */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl space-x-4 font-bold leading-tight tracking-tight max-w-5xl mx-auto"
        >
          <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent drop-shadow-2xl">
            Sua festa dos
          </span>
          <motion.span
            className="inline-block bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent font-serif"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200%" }}
          >
            sonhos
          </motion.span>
          <br />

          <p className="text-white/90 drop-shadow-lg">
            {" "}
            começa aqui!{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-800 to-accent bg-clip-text text-transparent">
              🎈
            </span>
          </p>
        </motion.h1>

        {/* Descrição com efeito de digitação suave */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg backdrop-blur-sm bg-black/20 rounded p-4"
        >
          Decoração criativa e divertida para aniversários, casamentos e eventos
          especiais — com carinho em cada detalhe! ✨
        </motion.p>

        {/* Social proof com contador animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full"
        >
          <span className="text-sm text-white/90 tracking-wide">
            🥳 + de 100 festas incríveis realizadas!
          </span>
        </motion.div>

        {/* CTAs com efeito hover melhorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.a
            href={CATALOG_URL}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-bold text-sm tracking-wide rounded-full shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <span className="relative z-10 flex items-center gap-2 hover:text-white">
              <Gift className="w-4 h-4" />
              Ver Catálogo
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-400 "
              initial={{ x: "100%" }}
              animate={{ x: isHovering ? "0%" : "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-sm tracking-wide rounded-full shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Falar no WhatsApp
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator melhorado */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToGallery}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.3em] group-hover:text-white/80 transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(HeroSection);
