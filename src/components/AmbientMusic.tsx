import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const AmbientMusic = () => {
  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/ambient-music.mp3");
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (showHint) {
      const t = setTimeout(() => setShowHint(false), 5000);
      return () => clearTimeout(t);
    }
  }, [showHint]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
    setShowHint(false);
  };

  // No arquivo AmbientMusic.jsx, mude a div principal para:
  return (
    <div className="flex items-center gap-2">
      <AnimatePresence>
        {showHint && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-card/90 backdrop-blur-sm text-xs text-muted-foreground px-3 py-1.5 rounded-full shadow border border-border"
          >
            🎵 Música ambiente
          </motion.span>
        )}
      </AnimatePresence>
      <button
        onClick={toggle}
        className="w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
        aria-label={playing ? "Pausar música" : "Tocar música"}
      >
        {playing ? <Volume2 size={14} /> : <VolumeX size={14} />}
      </button>
    </div>
  );
};

export default AmbientMusic;
