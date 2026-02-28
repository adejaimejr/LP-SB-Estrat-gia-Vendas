import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#C9A84C] selection:text-[#0A0A0A] overflow-hidden">
      <div className="noise-overlay"></div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FloatingWhatsApp />
    </div>
  );
}