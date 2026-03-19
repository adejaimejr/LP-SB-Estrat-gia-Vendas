import { motion } from "framer-motion";
import { Crosshair, LayoutTemplate, Workflow, Puzzle, KanbanSquare, BarChart3, Fingerprint, Award, Heart, TrendingUp, Instagram, MessageCircle } from "lucide-react";
import aboutImg from "@assets/WhatsApp_Image_2026-02-28_at_17.19.01_1772314657032.jpeg";
import ctaImg from "@assets/WhatsApp_Image_2026-02-08_at_09.58.19_1772310789154.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutSection() {
  const infrastructureCards = [
    { 
      icon: <Crosshair className="text-[#C9A84C]" size={20} />, 
      title: "Rastreamento de Leads", 
      desc: "UTMs, pixel de conversão e dashboards para saber exatamente de onde vem cada lead. Google, Instagram, indicação, tráfego orgânico. Tudo rastreado."
    },
    { 
      icon: <LayoutTemplate className="text-[#C9A84C]" size={20} />, 
      title: "Landing Pages de Conversão", 
      desc: "Páginas de captura profissionais, otimizadas para conversão e integradas com seu CRM. Design premium que transmite confiança e gera leads qualificados."
    },
    { 
      icon: <Workflow className="text-[#C9A84C]" size={20} />, 
      title: "Automações com n8n", 
      desc: "Fluxos automatizados que distribuem leads, disparam mensagens, atualizam CRM e notificam sua equipe em tempo real. Tudo rodando 24 horas no piloto automático."
    },
    { 
      icon: <Puzzle className="text-[#C9A84C]" size={20} />, 
      title: "Integrações entre Plataformas", 
      desc: "WhatsApp, Instagram, Facebook Ads, Google Ads, CRM, planilhas, e-mail marketing. Todas as suas ferramentas conversando entre si sem retrabalho manual."
    },
    { 
      icon: <KanbanSquare className="text-[#C9A84C]" size={20} />, 
      title: "CRM e Funil Estruturado", 
      desc: "Pipeline visual com cada lead no estágio certo. Sua equipe sabe exatamente quem abordar, quando e como. Nenhuma oportunidade passa despercebida."
    },
    { 
      icon: <BarChart3 className="text-[#C9A84C]" size={20} />, 
      title: "Dashboards em Tempo Real", 
      desc: "Painéis visuais com taxa de conversão, custo por lead, ROI por canal e desempenho da equipe. Decisões baseadas em dados, não em achismo."
    }
  ];

  const flowNodes = [
    { label: "Origem", num: "01", desc: "De onde vem o lead" },
    { label: "Captura", num: "02", desc: "Landing page + formulário" },
    { label: "Automação", num: "03", desc: "n8n + webhooks + API" },
    { label: "Atendimento", num: "04", desc: "WhatsApp + CRM" },
    { label: "Conversão", num: "05", desc: "Script + follow-up" },
    { label: "Análise", num: "06", desc: "Dashboard + relatórios" }
  ];

  const differentials = [
    { num: "01", icon: <Fingerprint size={28} />, title: "Abordagem Personalizada", desc: "Analisamos seu mercado, seu público e suas métricas para criar uma estratégia exclusiva pro seu negócio." },
    { num: "02", icon: <Award size={28} />, title: "Experiência e Autoridade", desc: "Mais de 10 anos de experiência em vendas online e off, com mais de 45 empresas transformadas." },
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
                <p>Samara Benevides fundou a SB Estratégia & Vendas com um objetivo claro: mudar a forma como empresas vendem no digital. Com mais de 10 anos de experiência em vendas, CRM e atendimento comercial, já são mais de 45 empresas nos setores de saúde, estética, varejo, educação e tecnologia que passaram pelo seu método.</p>
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

      {/* Infrastructure Ecosystem (Desktop Layout matches screenshot) */}
      <section id="ecossistema" className="py-20 md:py-32 bg-[#0A0A0A] overflow-hidden min-h-screen flex items-center justify-center relative">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-center">
            
            {/* Left Side: Text and Simple Flow */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-[35%] flex flex-col">
              <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-4 py-1.5 rounded-full mb-8 self-start">
                <span className="text-[#C9A84C] uppercase text-[0.65rem] font-bold tracking-[0.2em]">Nossa Infraestrutura</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold leading-[1.1] font-serif mb-6 text-white tracking-tight">
                Controle da origem à <span className="text-gradient-gold italic font-normal">conversão</span> do lead
              </h2>
              <p className="text-[#888888] text-[15px] mb-10 leading-relaxed max-w-[400px]">
                Implantamos o ecossistema tecnológico que sua empresa precisa para rastrear, nutrir e converter com previsibilidade.
              </p>

              {/* Connected Flow - Desktop */}
              <div className="hidden lg:block relative pl-1 mb-12 w-full max-w-sm">
                <div className="absolute left-[13px] top-[14px] bottom-[14px] w-[1px] bg-gradient-to-b from-[#C9A84C]/30 via-[#C9A84C]/10 to-transparent z-0"></div>

                <div className="flex flex-col space-y-4 relative z-10">
                  {[
                    "Origem",
                    "Captura",
                    "Automação",
                    "Atendimento",
                    "Conversão",
                    "Análise"
                  ].map((label, idx, arr) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="relative flex items-center gap-5 group cursor-default py-0.5"
                    >
                      <div className="w-[18px] h-[18px] rounded-full border-[1.5px] border-[#C9A84C] bg-[#0A0A0A] flex-shrink-0 flex items-center justify-center relative z-10 shadow-[0_0_10px_rgba(201,168,76,0.15)] group-hover:border-[#C9A84C] transition-colors duration-300">
                        <div className="w-[6px] h-[6px] bg-[#C9A84C] rounded-full"></div>
                      </div>
                      <span className="text-[#E5E7EB] font-medium text-[16px] tracking-wide group-hover:text-white transition-colors duration-300">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Connected Flow - Mobile (Alternating Timeline) */}
              <div className="lg:hidden relative w-full max-w-[280px] mx-auto mt-10 mb-8">
                {/* Center Line */}
                <div className="absolute top-3 bottom-3 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#C9A84C]/0 via-[#C9A84C]/40 to-[#C9A84C]/0 z-0"></div>

                <div className="flex flex-col gap-y-7 relative z-10">
                  {[
                    "Origem",
                    "Captura",
                    "Automação",
                    "Atendimento",
                    "Conversão",
                    "Análise"
                  ].map((label, idx) => {
                    const isRight = idx % 2 !== 0;
                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className={`w-full flex ${isRight ? 'justify-end' : 'justify-start'} relative items-center min-h-[24px]`}
                      >
                        {/* Connecting subtle line to the dot */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-[1px] bg-[#C9A84C]/20 ${isRight ? 'left-[calc(50%+8px)]' : 'right-[calc(50%+8px)]'}`}></div>

                        {/* Center Dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full border border-[#C9A84C]/60 bg-[#141414] flex items-center justify-center shadow-[0_0_12px_rgba(201,168,76,0.3)] z-10">
                          <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></div>
                        </div>

                        {/* Label Container */}
                        <div className={`w-[calc(50%-24px)] flex ${isRight ? 'justify-start' : 'justify-end'}`}>
                          <span className="text-[#E5E7EB] font-medium text-[15px] tracking-wide shadow-sm">{label}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <a href="https://wa.me/5592981112101?text=Oi, Samara! Quero entender como implementar o ecossistema de automação e CRM no meu negócio. Como funciona?" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0A0A0A] font-bold px-8 py-3.5 rounded-full hover:bg-[#E2C873] transition-all duration-300 w-full sm:w-max shadow-[0_4px_20px_rgba(201,168,76,0.2)] text-[15px]">
                Quero Essa Estrutura no Meu Negócio &rarr;
              </a>
            </motion.div>

            {/* Right Side: 2x3 Grid of Cards */}
            <div className="lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 w-full">
              {infrastructureCards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.1 } } }}
                  className="bg-[#171717]/80 backdrop-blur-sm p-6 lg:p-7 rounded-[16px] border border-white/[0.03] hover:border-[#C9A84C]/20 transition-all duration-300 flex flex-col group h-full shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#C9A84C] opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="scale-100 transform origin-left">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-[17px] font-serif font-bold text-white leading-tight">{card.title}</h3>
                  </div>
                  <p className="text-[#888888] text-[14px] leading-[1.6] flex-grow font-light">{card.desc}</p>
                </motion.div>
              ))}
            </div>
            
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
              <a href="https://wa.me/5592981112101?text=Oi, Samara! Quero agendar meu diagnóstico gratuito. Tenho interesse em estruturar meu processo comercial com vocês." target="_blank" rel="noreferrer" className="bg-[#C9A84C] text-[#0A0A0A] font-bold px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] flex items-center justify-center gap-2">
                Agendar Meu Diagnóstico Gratuito
              </a>
              <a href="https://wa.me/5592981112101" target="_blank" rel="noreferrer" className="bg-transparent border-2 border-[#25D366] text-[#25D366] font-bold px-10 py-5 rounded-full hover:bg-[#25D366]/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3">
                <MessageCircle size={20} />
                Falar Agora pelo WhatsApp
              </a>
            </div>
            <p className="text-[0.9rem] text-white/60 font-medium tracking-wide">
              ✓ Sem compromisso &nbsp;·&nbsp; ✓ 100% gratuita &nbsp;·&nbsp; ✓ Resposta em até 24h
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/20 pt-8 lg:pt-20 pb-24 lg:pb-8 relative z-20">
        <div className="container mx-auto px-6">
          <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20 mb-16 lg:mb-20 text-center lg:text-left">
            <div className="max-w-md w-full flex flex-col items-center lg:items-start">
              <div className="text-[#C9A84C] font-serif font-bold text-6xl lg:text-[4.5rem] leading-none mb-4 lg:mb-6 tracking-tighter">SB</div>
              <p className="text-[#888888] text-[14px] lg:text-[15px] leading-relaxed max-w-[320px]">
                Metodologia comprovada para transformar seu atendimento em uma máquina de vendas previsível e lucrativa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-12 lg:gap-32 w-full lg:w-auto pt-2">
              <div className="w-full flex flex-col items-center lg:items-start">
                <h4 className="text-white font-bold mb-6 lg:mb-8 uppercase tracking-[0.2em] text-[11px] lg:text-xs">Contato</h4>
                <ul className="space-y-4 lg:space-y-5 text-[#888888] text-[14px] lg:text-[15px] flex flex-col items-center lg:items-start w-full">
                  <li>
                    <a href="https://wa.me/5592981112101?text=Oi, Samara! Quero saber mais sobre como a SB Vendas pode ajudar meu negócio." target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 hover:text-[#C9A84C] transition-colors group">
                      <span className="w-10 h-10 shrink-0 rounded-full bg-[#141414] border border-white/5 flex items-center justify-center text-[#C9A84C] group-hover:border-[#C9A84C]/30 group-hover:bg-[#C9A84C]/5 transition-all">
                        <MessageCircle size={18} />
                      </span>
                      <span>(92) 98111-2101</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:atendimento@sbestrategiaevendas.com.br" className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 hover:text-[#C9A84C] transition-colors group">
                      <span className="w-10 h-10 shrink-0 rounded-full bg-[#141414] border border-white/5 flex items-center justify-center text-[#C9A84C] group-hover:border-[#C9A84C]/30 group-hover:bg-[#C9A84C]/5 transition-all">
                        <span className="font-serif text-lg">@</span>
                      </span>
                      <span className="break-all sm:break-normal text-[14px] lg:text-[15px]">atendimento@sbestrategiaevendas.com.br</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/samarabeneviides" target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 hover:text-[#C9A84C] transition-colors group">
                      <span className="w-10 h-10 shrink-0 rounded-full bg-[#141414] border border-white/5 flex items-center justify-center text-[#C9A84C] group-hover:border-[#C9A84C]/30 group-hover:bg-[#C9A84C]/5 transition-all">
                        <Instagram size={18} />
                      </span>
                      <span className="break-all sm:break-normal text-[14px] lg:text-[15px]">@samarabeneviides</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-4">
            <p className="text-[#666666] text-[12px] lg:text-[13px] text-center md:text-left">
              &copy; 2026 SB Estratégia & Vendas.
            </p>
            <p className="text-[#666666] text-[12px] lg:text-[13px] flex items-center justify-center md:justify-end gap-1.5">
              Criado com <span className="text-[#994747] text-[10px] lg:text-xs">❤</span> por <span className="text-white font-semibold ml-0.5 tracking-wide">i92Tech</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}