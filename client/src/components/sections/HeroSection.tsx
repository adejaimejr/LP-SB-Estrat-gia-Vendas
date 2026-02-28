import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import heroImg from "@assets/WhatsApp_Image_2026-02-08_at_09.58.18_-_cópia_1772248771760.jpeg";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Serviços", href: "#servicos" },
    { name: "Resultados", href: "#resultados" },
    { name: "Sobre", href: "#sobre" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  const trustedLogos = ["TransbyShop", "EasyCon", "Clínica Dr. José Cabral Jr.", "BotoClinic", "Débora Russo", "Minas de Ouro", "Instituto Acesso", "Gastric", "Pensare", "Marília Gabriela"];

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "glass-nav h-20" : "bg-transparent h-24"}`}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="text-[#C9A84C] font-serif font-bold text-3xl tracking-tighter">SB</div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[#B8B8B8] hover:text-white font-semibold uppercase text-[11px] tracking-[0.15em] transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="hidden md:block">
            <a href="#contato" className="bg-[#C9A84C] text-[#0A0A0A] font-bold px-6 py-3 rounded-full hover:bg-[#E2C873] transition-all duration-300 btn-primary-glow">
              Fale Comigo
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col justify-center items-center">
          <button className="absolute top-8 right-6 text-white" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-white font-serif text-2xl">
                {link.name}
              </a>
            ))}
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="bg-[#C9A84C] text-[#0A0A0A] font-bold px-8 py-4 rounded-full mt-4">
              Fale Comigo
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-hero-glow">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="lg:w-[55%] z-10 text-center lg:text-left"
            >
              <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
                <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Estratégias que vendem</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-[1.1] mb-6 tracking-tight">
                Transforme seu atendimento em uma <span className="text-gradient-gold italic font-serif">máquina de vendas</span>
              </h1>
              <p className="text-[#B8B8B8] text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                Sou Samara Benevides — especialista em estratégias comerciais, automação WhatsApp e fluxos conversacionais que aumentam seu faturamento com atendimento humanizado e inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <a href="#contato" className="bg-[#C9A84C] text-[#0A0A0A] text-center font-bold px-8 py-4 rounded-full hover:bg-[#E2C873] transition-all duration-300 btn-primary-glow">
                  Agende uma Consultoria Gratuita
                </a>
                <a href="#servicos" className="border border-[#C9A84C]/40 text-[#C9A84C] text-center font-bold px-8 py-4 rounded-full hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-300">
                  Conheça os Serviços
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm md:text-base font-semibold text-[#888888] justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A84C]">+50</span> empresas atendidas
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A84C]">+50%</span> aumento médio
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A84C]">4</span> anos de experiência
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:w-[45%] relative w-full"
            >
              <div className="absolute inset-0 bg-[#C9A84C]/10 blur-[100px] rounded-full"></div>
              <img 
                src={heroImg} 
                alt="Samara Benevides" 
                className="relative z-10 w-full max-w-md mx-auto object-cover aspect-[3/4] lg:aspect-auto"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 border-b border-[#C9A84C]/20 overflow-hidden relative">
        <div className="text-center mb-6">
          <p className="text-[#666666] uppercase text-sm font-bold tracking-[0.15em]">Empresas que confiam na SB</p>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex items-center justify-center md:justify-start [&_div]:mx-8 animate-[marquee_30s_linear_infinite]">
            {trustedLogos.concat(trustedLogos).map((logo, idx) => (
              <div key={idx} className="text-2xl font-serif text-[#888888]/50 whitespace-nowrap hover:text-[#888888] transition-colors cursor-default">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}