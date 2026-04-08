import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-viva-festas.png";

const Footer = () => (
  <footer className=" py-12 bg-card bg-white/90 backdrop-blur-sm border-t border-border relative z-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Viva Festas Decora"
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="font-bold text-foreground">
          © 2026 Viva Festas Decora
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
        <a
          href="https://instagram.com/vivafestasdecora"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-primary transition-colors"
        >
          <Instagram size={14} /> @vivafestasdecora
        </a>
        <span className="flex items-center gap-1.5">
          <Phone size={14} /> (11) 94701-8465
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={14} /> Cajamar e região
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
