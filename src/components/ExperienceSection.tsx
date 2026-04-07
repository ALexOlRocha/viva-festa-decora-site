import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const words = [
  { text: "A gente cria ", highlight: false },
  { text: "momentos mágicos ✨ ", highlight: true },
  { text: "onde sua festa ganha vida, ", highlight: false },
  { text: "alegria 🎉 ", highlight: true },
  { text: "e muita diversão — e cada detalhe vira uma lembrança ", highlight: false },
  { text: "especial 💛", highlight: true },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencias" className="py-32 md:py-48 bg-card" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.p className="text-2xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed font-light text-center">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.15 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className={
                w.highlight
                  ? "font-serif-italic text-primary font-medium"
                  : "text-muted-foreground"
              }
            >
              {w.text}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
};

export default ExperienceSection;
