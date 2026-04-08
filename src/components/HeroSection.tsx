import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import logo from "@/assets/logo-viva-festas.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511947018465";
const CATALOG_URL = "#galeria";

const HERO_VIDEOS = [
  "/videos/hero-5.mp4",
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
  "/videos/hero-4.mp4",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isMobile = useIsMobile();

  const handleVideoEnd = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  }, []);

  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      {!isMobile ? (
        <AnimatePresence mode="sync">
          {HERO_VIDEOS.map((src, i) =>
            i === currentIndex ? (
              <motion.video
                key={src}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                autoPlay
                loop={false}
                muted
                playsInline
                onEnded={handleVideoEnd}
                src={src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : null,
          )}
        </AnimatePresence>
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEOS[0]}
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="metadata"
          onLoadedMetadata={(event) => {
            const video = event.currentTarget;
            video.play().catch(() => {});
          }}
        />
      )}

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* <motion.img
          src={logo}
          alt="Viva Festas Decora"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 rounded-full shadow-2xl border-4 border-white/30 object-cover"
        /> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white max-w-4xl mx-auto drop-shadow-lg"
        >
          Sua festa dos{" "}
          <span className="font-serif-italic font-normal text-black/90">
            sonhos
          </span>{" "}
          começa aqui! 🎈
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow"
        >
          Decoração criativa e divertida para aniversários, casamentos e eventos
          especiais — com carinho em cada detalhe! ✨
        </motion.p>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 text-sm text-white/80 tracking-widest uppercase drop-shadow"
        >
          🥳 + de 100 festas incríveis realizadas!
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={CATALOG_URL}
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-full shadow-lg"
          >
            Ver Catálogo
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-full shadow-lg"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() =>
          document
            .getElementById("galeria")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-ui text-white/40 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-white/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
