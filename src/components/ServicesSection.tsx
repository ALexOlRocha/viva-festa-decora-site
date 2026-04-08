import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import galleryFesta from "@/assets/galleryfesta.jpg";
import personalizada from "@/assets/personalizada.jpg";
import PegueMonte from "@/assets/PegueMonte.webp";
import baloes from "@/assets/baloes.jpg";
import locacao from "@/assets/locacao.jpg";

const services = [
  {
    title: "Pegue e Monte",
    desc: "Mais economia e diversão pro seu evento!",
    sub: "Retire os itens e monte sua própria decoração com praticidade. Perfeito pra quem curte botar a mão na massa e criar algo especial! 🎈",
    image: PegueMonte,
  },
  {
    title: "Festa Pronta",
    desc: "A gente cuida de tudo pra você!",
    sub: "Montagem, desmontagem e transporte inclusos. É só curtir a festa sem preocupação! 🎉",
    image: galleryFesta,
  },
  {
    title: "Festa Personalizada",
    desc: "Um projeto exclusivo do jeitinho que você quer!",
    sub: "Cada detalhe pensado para refletir seu estilo. Do tema às cores, tudo feito sob medida pra você! 💎",
    image: personalizada,
  },
  {
    title: "Locação de Peças",
    desc: "Mesas, painéis, bandejas e itens temáticos",
    sub: "Monte sua decoração com qualidade profissional. Peças lindas e bem cuidadas pra deixar tudo perfeito! 🪑",
    image: locacao,
  },
  {
    title: "Balões Decorativos",
    desc: "Arcos, personalizados e gás hélio",
    sub: "Destaque visual colorido e encantador! Balões que transformam qualquer espaço em festa! 🎈",
    image: baloes,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Tudo que você precisa pra sua{" "}
            <span className="font-serif-italic font-normal text-primary">
              festa
            </span>{" "}
            🎊
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Escolha o serviço ideal e deixe a magia acontecer!
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {services.map((s, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Serviço
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-lg font-medium text-primary">{s.desc}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {s.sub}
                  </p>
                  <a
                    href="https://wa.me/5511947018465"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-primary-foreground bg-primary px-6 py-3 rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    Saiba mais →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
