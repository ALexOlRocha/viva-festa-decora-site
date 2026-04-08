import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FestiveBackground from "@/components/FestiveBackground";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <FestiveBackground />
    <Navbar />
    <HeroSection />
    <GallerySection />
    <ServicesSection />
    <DifferentialsSection />
    <ExperienceSection />
    <CTASection />
    <ContactSection />
    <WhatsAppButton />
    <Footer />
  </div>
);

export default Index;
