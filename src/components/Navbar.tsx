import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, MessageCircle, Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-viva-festas.png";
import { FaWhatsapp } from "react-icons/fa";
import AmbientMusic from "./AmbientMusic";

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Catálogo", href: "#galeria" },
  { label: "Festa Pronta", href: "#servicos" },
  { label: "Personalizada", href: "#experiencias" },
  // { label: "Locação", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" },
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-lg  shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Viva Festas Decora"
            className="h-12 w-12 rounded-full object-cover"
          />
          {/* <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white drop-shadow-lg"}`}>
            Viva Festas{" "}
            <span className="font-serif-italic font-normal text-secondary">Decora</span>
          </span> */}
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === link.href
                  ? scrolled
                    ? "text-primary bg-primary/10"
                    : "text-white bg-white/20"
                  : scrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Social */}
        <div className="hidden lg:flex items-center gap-3">
          <AmbientMusic />
          <a
            href="https://instagram.com/vivafestasdecora"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-primary hover:bg-primary/10"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://wa.me/5511947018465"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-secondary-foreground text-sm font-bold rounded-full hover:brightness-110 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {/* <FaWhatsapp size={14} /> */}
            Faça seu Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
            scrolled
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-4 px-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-3 pt-3 px-4 border-t border-border mt-2">
                <a
                  href="https://instagram.com/vivafestasdecora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/5511947018465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-secondary text-secondary-foreground text-sm font-bold rounded-full"
                >
                  <MessageCircle size={16} />
                  Faça seu Orçamento
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
