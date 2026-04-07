import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import galleryButterfly from "@/assets/gallery-butterfly.jpg";
import gallerySol from "@/assets/gallery-sol.jpg";
import gallerySofia from "@/assets/gallery-sofia.jpg";
import gallerySpiderman from "@/assets/gallery-spiderman.jpg";
import galleryHotwheels from "@/assets/gallery-hotwheels.jpg";
import gallerySonic from "@/assets/gallery-sonic.jpg";

const images = [
  {
    src: galleryButterfly,
    alt: "Festa tema borboletas",
    label: "🦋 Borboletas",
  },
  { src: gallerySol, alt: "Festa tema sol", label: "☀️ Volta ao Sol" },
  { src: gallerySofia, alt: "Festa 365 sorrisos", label: "🌈 365 Sorrisos" },
  {
    src: gallerySpiderman,
    alt: "Festa Homem-Aranha",
    label: "🕷️ Homem-Aranha",
  },
  { src: galleryHotwheels, alt: "Festa Hot Wheels", label: "🏎️ Hot Wheels" },
  { src: gallerySonic, alt: "Festa Sonic", label: "💙 Sonic" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="galeria"
      className="py-24 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 " />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Cada detalhe feito com{" "}
            <span className="font-serif-italic font-normal text-primary">
              carinho
            </span>{" "}
            💕
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Do simples ao especial — criamos cenários que encantam!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-primary/30 transition-all duration-500" />
              <span className="absolute bottom-4 left-4 text-base tracking-wide text-white font-bold drop-shadow-lg bg-primary/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
