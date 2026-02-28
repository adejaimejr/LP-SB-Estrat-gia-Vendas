import { motion } from "framer-motion";
import { Fingerprint, Award, Heart, TrendingUp, BookOpen, Star, Linkedin, Instagram, MessageCircle } from "lucide-react";
import aboutImg from "@assets/WhatsApp_Image_2026-02-28_at_17.19.01_1772314657032.jpeg";
import ctaImg from "@assets/WhatsApp_Image_2026-02-08_at_09.58.19_1772310789154.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutSection() {
  const testimonials = [
    { 
      author: "Dr. José Cabral", 
      role: "Clínica Dr. José Cabral Jr.", 
      text: "Samara deu show! Que profissional incrível. Ps.: indico",
      time: "21:43",
      initials: "JC"
    },
    { 
      author: "Cliente", 
      role: "Setor de Saúde", 
      text: "Parabéns pelo relatório @Samara Benevides, fundamental os 2 últimos slides. Pra entender como estamos na relação com o ano passado e quanto precisamos pro restante dos meses.",
      time: "14:20",
      initials: "CS"
    },
    { 
      author: "Empresário", 
      role: "Setor de Varejo", 
      text: "A Samara reestruturou toda nossa operação de vendas pelo WhatsApp. Em menos de 3 meses, nosso time já estava batendo meta com folga. Recomendo de olhos fechados.",
      time: "10:15",
      initials: "EV"
    }
  ];

  const differentials = [
    { num: "01", icon: <Fingerprint size={28} />, title: "Abordagem Personalizada", desc: "Analisamos seu mercado, seu público e suas métricas para criar uma estratégia exclusiva pro seu negócio." },
    { num: "02", icon: <Award size={28} />, title: "Experiência e Autoridade", desc: "Mais de 10 anos de experiência em vendas online e off, com mais de 50 empresas transformadas." },
    { num: "03", icon: <Heart size={28} />, title: "Humanização do Atendimento", desc: "Tecnologia sem perder o toque humano. Seus clientes se sentem acolhidos em cada etapa, do primeiro contato ao pós-venda." },
    { num: "04", icon: <TrendingUp size={28} />, title: "Foco em Resultados", desc: "Cada ação tem métrica, cada decisão tem dado por trás. Se não está gerando resultado, ajustamos até gerar." }
  ];

  return (
    <>
      {/* About */}
      <section id="sobre" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2 order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-[#C9A84C]/5 blur-[80px] rounded-full"></div>
              <img src={aboutImg} alt="Samara Benevides Sobre" className="relative z-10 rounded-2xl shadow-[0_0_40px_rgba(201,168,76,0.1)] w-full max-w-md mx-auto border border-[#C9A84C]/10" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
                <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Sobre Samara Benevides</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight mb-8 font-serif">
                Especialista que transforma <span className="text-gradient-gold italic">atendimento em resultado</span>
              </h2>
              <div className="space-y-6 text-[#B8B8B8] text-lg text-left">
                <p>Samara Benevides fundou a SB Estratégia & Vendas com um objetivo claro: mudar a forma como empresas vendem no digital. Com mais de 10 anos de experiência em vendas, CRM e atendimento comercial, já são mais de 50 empresas nos setores de saúde, estética, varejo, educação e tecnologia que passaram pelo seu método.</p>
                <p>Lado a lado com cada cliente, ela combina estratégia, humanização e tecnologia para criar processos que realmente funcionam. Do primeiro contato no WhatsApp até o fechamento, cada etapa é desenhada para converter mais e fidelizar melhor.</p>
              </div>
              <blockquote className="mt-8 border-l-4 border-[#C9A84C] pl-6 py-2 text-left">
                <p className="text-2xl font-serif italic text-[#C9A84C] leading-relaxed">
                  "Vendas não são apenas números. São conexões que geram confiança e fidelidade."
                </p>
              </blockquote>
              <div className="mt-10 lg:text-left">
                <a href="#contato" className="inline-block border border-[#C9A84C]/40 text-[#C9A84C] font-bold px-8 py-4 rounded-full hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] hover:shadow-[0_0_20px_rgba(201,168,76,0.1)] transition-all duration-300">
                  Saiba mais sobre meu trabalho
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-[#141414] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
              <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">O que dizem nossos clientes</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight font-serif">
              Quem trabalha com a SB Vendas, <span className="text-gradient-gold italic">recomenda</span>
            </h2>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scroll">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: idx * 0.15 } } }}
                className="min-w-[340px] md:min-w-[420px] max-w-[420px] flex-none snap-center flex flex-col"
              >
                <div className="bg-[#1E3A2F] p-7 md:p-8 rounded-[16px_16px_16px_4px] shadow-lg relative mb-6 flex-grow flex flex-col border border-[#25D366]/10">
                  <p className="text-white text-lg leading-relaxed flex-grow">{test.text}</p>
                  <div className="text-right mt-3 text-[#B8B8B8] text-xs font-mono opacity-60">{test.time}</div>
                  
                  {/* WhatsApp tail */}
                  <svg className="absolute -bottom-4 -left-[1px] w-6 h-6 text-[#1E3A2F]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0,0 L24,0 L24,24 L0,0 Z" />
                  </svg>
                </div>
                
                <div className="pl-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0A0A0A] font-bold text-lg border-2 border-[#141414] shadow-md shrink-0">
                    {test.initials}
                  </div>
                  <div>
                    <div className="flex text-[#C9A84C] mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="font-bold text-white text-sm md:text-base">{test.author}</p>
                    <p className="text-xs text-[#888888]">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="pt-24 pb-12 bg-[#0A0A0A] relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#C9A84C_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
              <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Nossos Diferenciais</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight font-serif">
              Por que escolher a <span className="text-gradient-gold italic">SB Vendas</span>?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {differentials.map((diff, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } } }}
                className="differential-item flex items-start gap-6 relative overflow-hidden"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[5rem] font-serif font-black text-[#C9A84C] opacity-[0.03] select-none pointer-events-none">
                  {diff.num}
                </div>
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center icon-container z-10 border border-[#C9A84C]/10">
                  {diff.icon}
                </div>
                <div className="pt-2 z-10">
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">{diff.title}</h3>
                  <p className="text-[#888888] leading-relaxed">{diff.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="pt-16 pb-24 lg:pt-20 lg:pb-32 cta-section">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-4xl mx-auto">
            <div className="relative inline-block mb-10">
              <div className="absolute inset-0 bg-[#C9A84C] rounded-full blur-[20px] opacity-30"></div>
              <img src={ctaImg} alt="Samara" className="relative w-[160px] h-[160px] rounded-full mx-auto object-cover border-[3px] border-[#C9A84C]/60 shadow-[0_0_40px_rgba(201,168,76,0.25)]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-tight mb-6 font-serif">
              Sua próxima venda começa com uma <span className="text-gradient-gold italic">conversa</span>
            </h2>
            <p className="text-[#B8B8B8] text-xl mb-12 max-w-2xl mx-auto">
              Agende uma reunião e descubra como potencializar os resultados do seu negócio. Sem compromisso, sem enrolação.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a href="https://wa.me/5592981112101?text=Olá! Gostaria de agendar uma reunião." target="_blank" rel="noreferrer" className="bg-[#C9A84C] text-[#0A0A0A] font-bold px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] flex items-center justify-center gap-2">
                Agendar Reunião
              </a>
              <a href="https://wa.me/5592981112101" target="_blank" rel="noreferrer" className="bg-transparent border-2 border-[#25D366] text-[#25D366] font-bold px-10 py-5 rounded-full hover:bg-[#25D366]/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3">
                <MessageCircle size={20} />
                Falar pelo WhatsApp
              </a>
            </div>
            <p className="text-[0.9rem] text-white/60 font-medium tracking-wide">
              ✓ Sem compromisso &nbsp;·&nbsp; ✓ 100% gratuita &nbsp;·&nbsp; ✓ Resposta em até 24h
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/20 pt-16 pb-8 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="text-[#C9A84C] font-serif font-bold text-3xl mb-4 tracking-tighter">SB</div>
              <p className="text-[#888888]">Estratégias que transformam vendas em resultados.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Links Rápidos</h4>
              <ul className="space-y-3">
                {['Início', 'Serviços', 'Resultados', 'Sobre', 'Contato'].map(link => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="text-[#888888] hover:text-[#C9A84C] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contato</h4>
              <ul className="space-y-3 text-[#888888]">
                <li>(92) 98111-2101</li>
                <li>samarabenevides@gmail.com</li>
                <li>www.samarabenevides.com.br</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#141414] border border-white/5 flex items-center justify-center text-white hover:bg-[#C9A84C] hover:text-[#0A0A0A] hover:border-[#C9A84C] transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#141414] border border-white/5 flex items-center justify-center text-white hover:bg-[#C9A84C] hover:text-[#0A0A0A] hover:border-[#C9A84C] transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#C9A84C]/10 text-center">
            <p className="text-[#666666] text-sm">
              &copy; 2026 SB Vendas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}