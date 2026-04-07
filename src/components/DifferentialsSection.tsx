import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { emoji: "💛", text: "Atendimento com muito carinho e atenção", color: "from-secondary/20 to-secondary/5" },
  { emoji: "✅", text: "Praticidade do início ao fim", color: "from-primary/20 to-primary/5" },
  { emoji: "💰", text: "Economia sem abrir mão da beleza", color: "from-secondary/20 to-secondary/5" },
  { emoji: "🎨", text: "Decorações criativas e exclusivas", color: "from-accent/30 to-accent/5" },
  { emoji: "⭐", text: "Experiência profissional e cuidadosa", color: "from-primary/20 to-primary/5" },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-12"
        >
          Por que a galera ama a{" "}
          <span className="font-serif-italic font-normal text-primary">Viva Festas</span>? 🥰
        </motion.h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex items-center gap-4 text-left bg-gradient-to-r ${item.color} backdrop-blur-sm border border-primary/10 rounded-2xl p-5 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-300`}
            >
              <span className="text-3xl flex-shrink-0">{item.emoji}</span>
              <span className="text-foreground text-lg font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
