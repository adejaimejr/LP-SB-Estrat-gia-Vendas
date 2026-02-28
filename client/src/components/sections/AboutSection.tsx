import { motion } from "framer-motion";
import { Fingerprint, Award, Heart, TrendingUp, BookOpen, Star, Linkedin, Instagram } from "lucide-react";
import aboutImg from "@assets/WhatsApp_Image_2026-02-08_at_09.58.18_(1)_1772248771760.jpeg";
import ctaImg from "@assets/WhatsApp_Image_2026-02-08_at_09.58.19_(2)_1772248771761.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutSection() {
  const testimonials = [
    { author: "Dr. José Cabral", role: "Clínica Dr. José Cabral Jr.", text: "Samara deu show! Que profissional incrível. Ps.: indico" },
    { author: "Cliente", role: "Setor de Saúde", text: "Parabéns pelo relatório @Samara Benevides, fundamental os 2 últimos slides. Pra entender como estamos na relação com o ano passado e quanto precisamos pro restante dos meses." },
    { author: "Cliente", role: "Setor Estética", text: "Foi positivo sim, fechamos acima do esperado! Mês passado tinha sido difícil. Estamos crescendo!" }
  ];

  const differentials = [
    { icon: <Fingerprint />, title: "Abordagem Personalizada", desc: "Cada empresa é única. Adaptamos nossas estratégias para atender suas especificidades." },
    { icon: <Award />, title: "Experiência e Autoridade", desc: "Vasta experiência em vendas online e CRM com visão estratégica e técnica." },
    { icon: <Heart />, title: "Humanização do Atendimento", desc: "Transformamos processos de vendas em experiências que fidelizam clientes." },
    { icon: <TrendingUp />, title: "Foco em Resultados", desc: "Abordagem 100% orientada a resultados mensuráveis e crescimento." },
    { icon: <BookOpen />, title: "Capacitação Contínua", desc: "Treinamos equipes para serem autossuficientes e altamente eficientes." }
  ];

  return (
    <>
      {/* About */}
      <section id="sobre" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2 order-2 lg:order-1">
              <img src={aboutImg} alt="Samara Benevides Sobre" className="rounded-2xl shadow-[0_0_40px_rgba(201,168,76,0.1)] w-full max-w-md mx-auto border border-[#C9A84C]/10" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
                <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Sobre Samara Benevides</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight mb-8 font-serif">
                Especialista que transforma <span className="text-gradient-gold italic">atendimento em resultado</span>
              </h2>
              <div className="space-y-6 text-[#B8B8B8] text-lg text-left">
                <p>Com anos de experiência em vendas online, CRM e atendimento comercial, Samara Benevides fundou a SB Vendas com uma missão clara: transformar empresas, potencializando suas operações comerciais e otimizando a experiência de seus clientes.</p>
                <p>Atuando lado a lado com cada cliente, Samara combina estratégia, humanização e tecnologia para criar processos que realmente funcionam — do primeiro contato no WhatsApp até o fechamento da venda.</p>
              </div>
              <blockquote className="mt-8 border-l-4 border-[#C9A84C] pl-6 py-2 text-left">
                <p className="text-2xl font-serif italic text-[#C9A84C] leading-relaxed">
                  "Vendas não são apenas números — são conexões que geram confiança e fidelidade."
                </p>
              </blockquote>
              <div className="mt-10 lg:text-left">
                <a href="#contato" className="inline-block border border-[#C9A84C]/40 text-[#C9A84C] font-bold px-8 py-4 rounded-full hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-300">
                  Conheça minha trajetória
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
              Quem trabalha com a SB, <span className="text-gradient-gold italic">recomenda</span>
            </h2>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scroll">
            {testimonials.map((test, idx) => (
              <div key={idx} className="min-w-[320px] md:min-w-[400px] flex-none snap-center">
                <div className="bg-[#1E3A2F] p-6 rounded-[16px_16px_16px_4px] shadow-lg relative mb-6">
                  <p className="text-white text-lg">{test.text}</p>
                  <div className="absolute -bottom-3 left-0 w-4 h-4 bg-[#1E3A2F]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                </div>
                <div className="pl-2">
                  <div className="flex text-[#C9A84C] mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="font-bold text-white">{test.author}</p>
                  <p className="text-sm text-[#888888]">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-[#0A0A0A] relative">
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

          <div className="max-w-4xl mx-auto space-y-6">
            {differentials.map((diff, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: idx * 0.1 } } }}
                className="flex items-start gap-6 border-b border-[#C9A84C]/10 pb-6 last:border-0"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center">
                  {diff.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">{diff.title}</h3>
                  <p className="text-[#888888]">{diff.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 to-[#0A0A0A] z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto">
            <img src={ctaImg} alt="Samara" className="w-24 h-24 rounded-full mx-auto mb-8 object-cover border-2 border-[#C9A84C]/30 shadow-[0_0_30px_rgba(201,168,76,0.3)]" />
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 font-serif">
              Pronta para transformar suas <span className="text-gradient-gold italic">vendas</span>?
            </h2>
            <p className="text-[#B8B8B8] text-xl mb-10 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como a SB pode potencializar os resultados do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="https://wa.me/5592981112101" target="_blank" rel="noreferrer" className="bg-[#C9A84C] text-[#0A0A0A] font-bold px-8 py-4 rounded-full hover:bg-[#E2C873] transition-all duration-300 btn-primary-glow w-full sm:w-auto">
                Agendar Consultoria Gratuita
              </a>
              <a href="https://wa.me/5592981112101" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all duration-300 w-full sm:w-auto">
                Falar pelo WhatsApp
              </a>
            </div>
            <p className="text-sm text-[#666666] font-medium tracking-wide">
              ✓ Sem compromisso &nbsp;·&nbsp; ✓ 100% gratuita &nbsp;·&nbsp; ✓ Resposta em até 24h
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/20 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="text-[#C9A84C] font-serif font-bold text-3xl mb-4 tracking-tighter">SB</div>
              <p className="text-[#888888]">Estratégias que transformam vendas.</p>
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
                <a href="#" className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center text-white hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center text-white hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#C9A84C]/10 text-center">
            <p className="text-[#666666] text-sm">
              &copy; 2026 SB Vendas — Estratégias & Vendas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}