import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_URL = "https://wa.me/5511947018465";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contato"
      className="py-24 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Festive gradient background */}
      <div className="absolute inset-0 bg-white/0" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Glass card */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto bg-background/70 backdrop-blur-xl border border-primary/15 rounded-3xl p-10 md:p-16 shadow-2xl shadow-primary/5 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-6xl mb-4"
          >
            🎉
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            Bora fazer sua festa{" "}
            <span className="font-serif-italic font-normal text-primary">
              acontecer
            </span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto"
          >
            Fale com a gente e transforme sua ideia em uma festa incrível! ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:shadow-secondary/20"
            >
              Ver Catálogo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
