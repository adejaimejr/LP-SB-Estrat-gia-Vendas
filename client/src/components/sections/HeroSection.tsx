import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, TrendingUp, Star } from "lucide-react";
import heroImg from "@assets/WhatsApp_Image_2026-02-08_at_09.58.19_(2)_1772248771761.jpeg";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
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

  const trustedLogos = [
    "BotoClinic", "Débora Russo", "Minas de Ouro", "TransbyShop", 
    "EasyCon", "Dr. José Cabral Jr.", "Gastric", "Pensare", 
    "Luiza Mota", "Grupo Pemar", "Mais Vida", "Clinicor", 
    "Fernanda do Valle", "Manoela Cordeiro", "Refinatto", "Sculptlife", 
    "Medinova", "Dr. Tiago Cardoso", "Dr. Miguel Moura", "Infinita Saúde",
    "KL Rent a Car", "Best Car"
  ];
  
  const midPoint = Math.ceil(trustedLogos.length / 2);
  const logosRow1 = trustedLogos.slice(0, midPoint);
  const logosRow2 = trustedLogos.slice(midPoint);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 glass-nav ${scrolled ? "nav-scrolled h-20" : "h-24"}`}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="text-[#C9A84C] font-serif font-bold text-3xl tracking-tighter">SB</div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[#B8B8B8] hover:text-[#C9A84C] font-semibold uppercase text-[11px] tracking-[0.15em] transition-colors relative group">
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
        <div className="fixed inset-0 z-[10000] bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col justify-center items-center">
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-hero-glow border-b border-[#C9A84C]/15">
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
                Ajudo empresas a vender mais todos os dias com estratégia comercial, automação de WhatsApp e processos que realmente funcionam. Mais de 50 negócios já passaram por aqui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start relative z-20">
                <a href="#contato" className="bg-[#C9A84C] text-[#0A0A0A] text-center font-bold px-8 py-4 rounded-full hover:bg-[#E2C873] transition-all duration-300 btn-primary-glow shadow-[0_4px_20px_rgba(201,168,76,0.2)]">
                  Agendar Reunião
                </a>
                <a href="#resultados" className="border border-[#C9A84C]/40 text-[#C9A84C] text-center font-bold px-8 py-4 rounded-full hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-300">
                  Veja os Resultados
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm md:text-base font-semibold text-[#888888] justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A84C]">+50</span> empresas transformadas
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A84C]">+50%</span> de aumento médio em faturamento
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:w-[45%] relative w-full flex justify-center"
            >
              <div className="absolute inset-0 bg-[#C9A84C]/10 blur-[100px] rounded-full"></div>
              
              {/* Floating Badges */}
              <div className="hidden lg:flex absolute -right-6 top-10 animate-float bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-xl p-3 items-center gap-3 shadow-xl z-20">
                <div className="w-10 h-10 rounded-full bg-[#4ADE80]/10 flex items-center justify-center text-[#4ADE80]">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">+50%</div>
                  <div className="text-[#888888] text-xs">Faturamento</div>
                </div>
              </div>

              <div className="hidden lg:flex absolute -left-6 top-[15%] animate-float-delayed bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-full p-2 pr-4 items-center gap-2 shadow-xl z-20">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C]">
                  <Star size={14} fill="currentColor" />
                </div>
                <div className="text-white font-bold text-sm">4.9/5 <span className="text-[#888888] font-normal">Rating</span></div>
              </div>

              <div className="hidden lg:flex absolute right-0 bottom-24 animate-float bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-xl p-3 pr-5 items-center gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.5)] z-20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366]/20 to-transparent flex items-center justify-center text-[#25D366] border border-[#25D366]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm tracking-wide">Lead convertido</div>
                </div>
              </div>

              <img 
                src={heroImg} 
                alt="Samara Benevides" 
                className="relative z-10 w-full max-w-md object-cover aspect-[3/4] lg:aspect-auto drop-shadow-2xl pointer-events-none"
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
      <section className="py-12 bg-[#0A0A0A] overflow-hidden relative border-b border-[#C9A84C]/10">
        <div className="text-center mb-8">
          <p className="text-[#666666] uppercase text-xs font-bold tracking-[0.2em]">Quem já confiou na nossa estratégia</p>
        </div>
        
        {/* Row 1 */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-6">
          <div className="flex items-center justify-center md:justify-start [&_div]:mx-10 marquee-scroll">
            {logosRow1.concat(logosRow1).concat(logosRow1).map((logo, idx) => (
              <div key={`r1-${idx}`} className="text-xl md:text-2xl font-sans font-bold tracking-widest text-white/30 whitespace-nowrap hover:text-white/80 transition-colors duration-300 cursor-default">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Reverse) */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex items-center justify-center md:justify-start [&_div]:mx-10 marquee-scroll-reverse">
            {logosRow2.concat(logosRow2).concat(logosRow2).map((logo, idx) => (
              <div key={`r2-${idx}`} className="text-xl md:text-2xl font-sans font-bold tracking-widest text-white/30 whitespace-nowrap hover:text-white/80 transition-colors duration-300 cursor-default">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}