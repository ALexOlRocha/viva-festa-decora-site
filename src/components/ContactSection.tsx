"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Send, CheckCircle } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha nome, email e mensagem");
      return;
    }

    setIsLoading(true);

    // Simula um pequeno delay para mostrar o loading
    setTimeout(() => {
      handleWhatsAppClick();
      setIsLoading(false);

      // Mostra mensagem de sucesso
      toast.success("Redirecionando para o WhatsApp...");

      // Limpa o formulário
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });

      setIsSent(true);

      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const socialLinks = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/5511947018465?text=Olá%20Viva%20Festas%20Decora!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.",
      color: "hover:bg-green-500/20 hover:text-green-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/vivafestasdecora",
      color: "hover:bg-pink-500/20 hover:text-pink-500",
    },
  ];

  const handleWhatsAppClick = () => {
    const message = `Olá Viva Festas Decora!%0A%0A*Nome:* ${formData.name || ""}%0A*Empresa:* ${formData.company || ""}%0A*Email:* ${formData.email || ""}%0A*Telefone:* ${formData.phone || ""}%0A%0A*Mensagem:*%0A${formData.message || ""}`;
    window.open(`https://wa.me/5511947018465?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="py-12 md:py-24 relative overflow-hidden">
      <Toaster position="top-right" />

      {/* Background */}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16 px-4"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-7xl font-bold mb-3 md:mb-4">
            Vamos{" "}
            <span className=" bg-gradient-to-r from-primary to-primary/80 text-clipping bg-clip-text text-transparent font-serif-italic font-normal">
              conversar?
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Entre em contato e transforme sua festa em um momento inesquecível.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 bg-white rounded-lg shadow-lg p-6 md:p-10">
          {/* Left - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="glass-card rounded-xl md:rounded-xl overflow-hidden h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] relative">
              {/* Google Maps Embed */}
              <div className="absolute inset-0">
                <iframe
                  src="https://www.google.com/maps?q=Avenida%20das%20A%C3%A7ucenas%2C%20179%20-%20Portal%20Ip%C3%AAs%2C%20Cajamar%2C%2007790820&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(20%) contrast(110%) saturate(120%)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Viva Festas Decora"
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent pointer-events-none" />

              {/* Location info overlay */}
              <div className="absolute mx-auto justify-center flex bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 md:p-6 pointer-events-none">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="pointer-events-auto">
                    <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-black mb-1">
                      Viva Festas Decora
                    </h3>
                    <p className=" text-xs sm:text-sm text-gray-700">
                      Avenida das Açucenas, 179 - Portal Ipês
                      <br />
                      Cajamar - SP
                      <br className="hidden sm:block" />
                      CEP: 07790-820
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid pattern overlay (subtle) */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(13,79,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,79,79,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
            </div>
          </motion.div>

          {/* Right - Form & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="glass-card rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8">
              {isSent && (
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm rounded-2xl md:rounded-3xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 z-10 animate-fadeIn">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4 md:mb-6 animate-scaleIn">
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 text-center">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-muted-foreground text-center text-sm sm:text-base mb-3 md:mb-4">
                    Você será redirecionado para o WhatsApp para finalizar o
                    contato.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Seu nome *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="bg-secondary/80 border-border/30 h-10 sm:h-12 rounded-lg sm:rounded-xl placeholder:text-muted-foreground/80 focus:border-primary text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Input
                      name="company"
                      placeholder="Nome da empresa (opcional)"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="bg-secondary/80 border-border/30 h-10 sm:h-12 rounded-lg sm:rounded-xl placeholder:text-muted-foreground/80 focus:border-primary text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Telefone/WhatsApp *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="bg-secondary/80 border-border/30 h-10 sm:h-12 rounded-lg sm:rounded-xl placeholder:text-muted-foreground/80 focus:border-primary text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="bg-secondary/80 border-border/30 h-10 sm:h-12 rounded-lg sm:rounded-xl placeholder:text-muted-foreground/80 focus:border-primary text-sm sm:text-base"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="bg-secondary/80 border-border/30 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] rounded-lg sm:rounded-xl placeholder:text-muted-foreground/80 focus:border-primary resize-none text-sm sm:text-base"
                    rows={3}
                  />
                </div>

                <div className="space-y-3 sm:space-y-0">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="
                      w-full h-11 sm:h-12
                      rounded-full
                     bg-primary
                      text-white
                      font-medium
                      hover:bg-primary/90
                      transition-all duration-300 ease-out
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                      flex items-center justify-center gap-2
                      text-sm sm:text-base
                    "
                  >
                    {isLoading ? (
                      <span className="animate-pulse">Redirecionando...</span>
                    ) : (
                      <>
                        <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Enviar pelo WhatsApp</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 sm:gap-4 my-6 md:my-8">
                <div className="flex-1 h-px bg-border/60" />
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                  ou conecte-se
                </span>
                <div className="flex-1 h-px bg-border/60" />
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground transition-all duration-300 ${
                      social.color
                    } ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .glass-card {
            backdrop-filter: blur(8px);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
