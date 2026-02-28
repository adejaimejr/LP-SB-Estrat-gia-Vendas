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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="24" height="24" className="ml-[1px] mb-[1px]">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 448l85.5-22.3c32.5 18 69.4 27.5 107.5 27.5 122.3 0 222-99.6 222-222 0-59.3-23.1-115-65.1-156.9zM223.9 414.9c-33 0-65.3-8.9-93.5-25.7l-6.7-4-69.5 18.2L72.9 335l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
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