import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircleX, TrendingDown, UserX, Clock, Target, Workflow, GraduationCap, MessagesSquare, Headphones, BarChart3, ArrowRight } from "lucide-react";
import resultsImg from "@assets/WhatsApp_Image_2026-02-08_at_09.58.19_(1)_1772248771761.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const fps = 30;
      const increment = value / (duration / (1000 / fps));
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / fps);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}



function ProblemItem({ prob, idx, activeIndex }: { prob: any, idx: number, activeIndex: number }) {
  const ref = useRef(null);
  
  // Apenas o scroll define o foco
  const isActive = activeIndex === idx;

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none ${isActive ? 'bg-gradient-to-r from-red-950/10 to-transparent' : 'opacity-30 blur-[0.5px]'}`}
      data-problem-item={idx}
    >
      <div className={`absolute left-0 w-[3px] bg-gradient-to-b from-transparent ${isActive ? 'via-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'via-transparent'} to-transparent transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 top-0 bottom-0 animate-pulse' : 'opacity-0 top-1/4 bottom-1/4'}`} />
      
      {/* Glitch/Danger Subtle Effect */}
      {isActive && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(220,38,38,0.06),transparent_60%)] pointer-events-none mix-blend-screen" />
      )}

      <div className={`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-all duration-1000 pointer-events-none select-none tracking-tighter ${isActive ? 'text-red-500/[0.04] scale-105' : 'text-white/[0.02] scale-100'}`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className="flex items-center gap-4 mb-5">
          <span className={`font-serif italic text-lg transition-colors duration-700 ${isActive ? 'text-red-500 font-bold' : 'text-[#C9A84C]'}`}>{prob.num}</span>
          <span className={`h-[1px] w-12 bg-gradient-to-r transition-colors duration-700 ${isActive ? 'from-red-500/80' : 'from-[#C9A84C]/60'} to-transparent`}></span>
        </div>
        <h3 className={`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'text-white/80'}`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className={`transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light ${isActive ? 'text-red-50/80' : 'text-[#9CA3AF]'}`}>
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}


function SolutionItem({ prob, idx, activeIndex }: { prob: any, idx: number, activeIndex: number }) {
  const ref = useRef(null);
  
  // Apenas o scroll define o foco
  const isActive = activeIndex === idx;

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none ${isActive ? 'bg-[#C9A84C]/5' : 'opacity-30 blur-[0.5px]'}`}
      data-solution-item={idx}
    >
      <div className={`absolute left-0 w-[3px] bg-gradient-to-b from-transparent ${isActive ? 'via-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.5)]' : 'via-transparent'} to-transparent transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 top-0 bottom-0 animate-pulse' : 'opacity-0 top-1/4 bottom-1/4'}`} />
      
      {/* Glitch/Danger Subtle Effect - changed to Gold for positive */}
      {isActive && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(201,168,76,0.06),transparent_60%)] pointer-events-none mix-blend-screen" />
      )}

      <div className={`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-all duration-1000 pointer-events-none select-none tracking-tighter ${isActive ? 'text-[#C9A84C]/[0.04] scale-105' : 'text-white/[0.02] scale-100'}`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className="flex items-center gap-4 mb-5">
          <span className={`font-serif italic text-lg transition-colors duration-700 ${isActive ? 'text-[#C9A84C] font-bold' : 'text-[#C9A84C]'}`}>{prob.num}</span>
          <span className={`h-[1px] w-12 bg-gradient-to-r transition-colors duration-700 ${isActive ? 'from-[#C9A84C]/80' : 'from-[#C9A84C]/60'} to-transparent`}></span>
        </div>
        <h3 className={`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'text-white/80'}`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className={`transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light ${isActive ? 'text-[#e2e8f0]' : 'text-[#9CA3AF]'}`}>
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [activeProblemIndex, setActiveProblemIndex] = useState(0);
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewHeight = window.innerHeight;
      const screenCenter = viewHeight / 2;

      // Update Problems
      const problemItems = document.querySelectorAll('[data-problem-item]');
      if (problemItems.length) {
        let closestIdx = 0;
        let closestDistance = Infinity;

        problemItems.forEach((item, idx) => {
          const rect = item.getBoundingClientRect();
          const elementCenter = rect.top + (rect.height / 2);
          const distance = Math.abs(screenCenter - elementCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIdx = idx;
          }
        });
        setActiveProblemIndex(closestIdx);
      }

      // Update Solutions
      const solutionItems = document.querySelectorAll('[data-solution-item]');
      if (solutionItems.length) {
        let closestIdx = 0;
        let closestDistance = Infinity;

        solutionItems.forEach((item, idx) => {
          const rect = item.getBoundingClientRect();
          const elementCenter = rect.top + (rect.height / 2);
          const distance = Math.abs(screenCenter - elementCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIdx = idx;
          }
        });
        setActiveSolutionIndex(closestIdx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // setTimeout to ensure elements are rendered
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const solutions = [
    { num: "01", title: "Lead respondido em segundos", desc: "WhatsApp, Instagram e e-mail integrados num único fluxo automatizado. Nenhum lead fica sem resposta enquanto sua equipe está ocupada." },
    { num: "02", title: "CRM que mostra onde está cada lead", desc: "Pipeline visual com cada oportunidade no estágio certo. Sua equipe sabe exatamente quem abordar, quando e com qual abordagem - sem improviso." },
    { num: "03", title: "Processo que não depende de um vendedor bom", desc: "Playbook definido, scripts validados e follow-up automático. A operação roda mesmo quando o melhor vendedor está de folga." },
    { num: "04", title: "Relatório que aponta onde está o dinheiro", desc: "Taxa de conversão por canal, tempo de resposta e custo por lead em tempo real. Você decide com dado, não com achismo." },
  ];

  const problems = [
    { num: "01", icon: <MessageCircleX className="text-[#EF4444]" size={28} />, title: "Leads que não respondem", desc: "O lead chega quente, mas ninguém responde a tempo. Sem follow-up estruturado, a oportunidade esfria e vira venda do concorrente." },
    { num: "02", icon: <TrendingDown className="text-[#EF4444]" size={28} />, title: "Conversão baixa", desc: "Muito lead entrando, pouco cliente saindo. Sem um script e um funil claro, sua equipe atende no improviso e perde venda todo dia." },
    { num: "03", icon: <UserX className="text-[#EF4444]" size={28} />, title: "Equipe sem direcionamento", desc: "Sua equipe vende no improviso, sem processo definido. Cada vendedor faz do seu jeito e você não consegue identificar onde está o gargalo." },
    { num: "04", icon: <Clock className="text-[#EF4444]" size={28} />, title: "Tempo perdido", desc: "Horas do seu dia vão embora respondendo mensagem por mensagem. O tempo que deveria ir pra estratégia é consumido pelo operacional." },
  ];

  const services = [
    { 
      icon: <Target className="text-[#C9A84C]" size={24} />, 
      title: "Assessoria Comercial Estratégica", 
      desc: "Analisamos sua operação de vendas do zero, identificamos gargalos e criamos uma estratégia personalizada focada em crescimento real.", 
      tags: ["Diagnóstico", "Playbook", "Estratégia"],
      featured: true 
    },
    { icon: <Workflow className="text-[#C9A84C]" size={24} />, title: "Automação / CRM", desc: "Implantamos CRM, automação de WhatsApp, chatbots inteligentes e agentes de IA que trabalham 24h vendendo pelo seu negócio.", tags: ["WhatsApp", "Chatbot", "Agente IA"] },
    { icon: <Headphones className="text-[#C9A84C]" size={24} />, title: "SDR / Closer / Secretária Online", desc: "Serviço remoto de pré-venda, fechamento e atendimento. Verificamos o perfil da sua operação e indicamos a melhor solução.", tags: ["Remoto", "Terceirização", "Atendimento"] },
    { icon: <MessagesSquare className="text-[#C9A84C]" size={24} />, title: "Fluxos Conversacionais", desc: "Criamos scripts e fluxos para WhatsApp que conduzem o lead do primeiro contato ao fechamento, com abordagem humanizada e personalizada.", tags: ["Follow-up", "Omnichannel", "Funil"] },
    { icon: <GraduationCap className="text-[#C9A84C]" size={24} />, title: "Treinamento de Equipes", desc: "Capacitamos sua equipe com scripts de atendimento, técnicas de vendas online e uso eficiente das ferramentas que implantamos.", tags: ["Scripts", "Capacitação"] },
    { icon: <BarChart3 className="text-[#C9A84C]" size={24} />, title: "Acompanhamento de Resultados", desc: "Dashboards e relatórios com análise de dados, métricas de conversão e insights para otimização contínua das suas vendas.", tags: ["KPIs", "Relatórios", "BI"] },
  ];

  const steps = [
    { num: "01", period: "Semana 1", title: "Diagnóstico", desc: "Analisamos toda a sua operação comercial, identificamos gargalos e mapeamos as melhores oportunidades de crescimento." },
    { num: "02", period: "Semana 2-3", title: "Estratégia", desc: "Criamos um plano personalizado com scripts, fluxos e ferramentas ideais pro seu modelo de negócio." },
    { num: "03", period: "Semana 3-4", title: "Implantação", desc: "Implementamos CRM, automações, chatbots e treinamos sua equipe para operar tudo com excelência." },
    { num: "04", period: "Contínuo", title: "Acompanhamento", desc: "Monitoramos seus resultados de perto, ajustamos o que for necessário e garantimos que o crescimento não pare." },
  ];

  return (
    <>
      {/* Problem Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
              <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Você se identifica?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight font-serif">
              Quantas vendas sua empresa perdeu só <span className="text-gradient-gold italic">esta semana</span>?
            </h2>
          </motion.div>

          <div className="max-w-[960px] mx-auto flex flex-col relative">
            {/* Subtle vertical guide line for the section */}
            <div className="hidden md:block absolute left-[45%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent pointer-events-none" />

            {problems.map((prob, idx) => (
              <ProblemItem key={idx} prob={prob} idx={idx} activeIndex={activeProblemIndex} />
            ))}
          </div>
        </div>
      </section>

      {/* Transition Separator */}
      <div className="bg-[#0A0A0A] py-12 relative flex justify-center items-center">
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[860px] h-[1px] bg-[#C9A84C]/40"></div>
        <div className="relative bg-[#0A0A0A] px-4 text-[#C9A84C]/60 text-[11px] font-bold uppercase tracking-[0.2em] z-10">
          MAS ISSO TEM SOLUÇÃO
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center w-full max-w-[1000px] mx-auto mb-16">
            <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
              <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">A Virada</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight font-serif text-white">
              Seu comercial no controle.
            </h2>
            <p className="text-[#E5E7EB] text-[16px] mt-6 max-w-[560px] mx-auto">
              WhatsApp respondendo, CRM funcionando, funil mapeado e relatório em tempo real.
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto flex flex-col relative">
            {/* Subtle vertical guide line for the section */}
            <div className="hidden md:block absolute left-[45%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent pointer-events-none" />

            {solutions.map((prob, idx) => (
              <SolutionItem key={idx} prob={prob} idx={idx} activeIndex={activeSolutionIndex} />
            ))}
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="servicos" className="py-24 bg-[#141414]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
              <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Nossos Serviços</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight mb-6 font-serif">
              O Método SB: da estratégia à <span className="text-gradient-gold italic">execução real</span>
            </h2>
            <p className="text-[#B8B8B8] text-lg">
              Diagnóstico, processos, ferramentas, treinamento e acompanhamento. Tudo que seu comercial precisa pra vender mais, melhor e com previsibilidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } } }}
                className="service-card p-8 rounded-2xl flex flex-col h-full group relative"
              >
                {svc.featured && (
                  <div className="inline-block bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-6 self-start">
                    ⭐ Mais Procurado
                  </div>
                )}
                <div className={`w-12 h-12 rounded-full bg-[#C9A84C]/15 flex items-center justify-center ${!svc.featured && 'mb-6'}`}>
                  {svc.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 pr-6 mt-4">{svc.title}</h3>
                <p className="text-[#888888] leading-relaxed flex-grow mb-6">{svc.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {svc.tags.map(tag => (
                    <span key={tag} className="service-tag text-[10px] font-bold uppercase tracking-wider text-[#C9A84C] bg-[#C9A84C]/5 px-3 py-1 rounded-full cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-8 right-8 text-[#C9A84C] service-arrow">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mt-16"
          >
            <a href="https://wa.me/5592981112101?text=Olá! Gostaria de agendar uma reunião." target="_blank" rel="noreferrer" className="inline-block bg-[#C9A84C] text-[#0A0A0A] font-bold px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 btn-primary-glow shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)]">
              Agendar Reunião de Diagnóstico
            </a>
          </motion.div>
        </div>
      </section>

      {/* Results / Stats */}
      <section id="resultados" className="pt-24 pb-16 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
                <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Resultados Comprovados</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight mb-6 font-serif">
                O que acontece quando a SB entra na <span className="text-gradient-gold italic">sua operação</span>
              </h2>
              <p className="text-[#B8B8B8] text-lg mb-10">
                Nossos clientes não apenas melhoram processos. Eles colhem resultados financeiros reais, mês após mês.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }} 
              className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 order-2 lg:order-1"
            >
              <motion.div variants={fadeUp} className="border-l border-[#C9A84C]/25 pl-6">
                <div className="text-5xl lg:text-6xl font-serif font-extrabold text-[#C9A84C] mb-2 tracking-tighter">
                  <AnimatedCounter value={50} prefix="+" suffix="%" />
                </div>
                <div className="text-[#888888] font-medium leading-tight">Aumento médio na conversão de leads</div>
              </motion.div>
              <motion.div variants={fadeUp} className="border-l border-[#C9A84C]/25 pl-6">
                <div className="text-5xl lg:text-6xl font-serif font-extrabold text-[#C9A84C] mb-2 tracking-tighter">
                  <AnimatedCounter value={3} prefix="X" />
                </div>
                <div className="text-[#888888] font-medium leading-tight">Mais velocidade no tempo de resposta</div>
              </motion.div>
              <motion.div variants={fadeUp} className="border-l border-[#C9A84C]/25 pl-6">
                <div className="text-5xl lg:text-6xl font-serif font-extrabold text-[#C9A84C] mb-2 tracking-tighter">
                  <AnimatedCounter value={45} prefix="+" />
                </div>
                <div className="text-[#888888] font-medium leading-tight">Empresas operando com nossa metodologia</div>
              </motion.div>
              <motion.div variants={fadeUp} className="border-l border-[#C9A84C]/25 pl-6">
                <div className="text-5xl lg:text-6xl font-serif font-extrabold text-[#C9A84C] mb-2 tracking-tighter">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-[#888888] font-medium leading-tight">De processos comerciais mapeados e estruturados</div>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <img src={resultsImg} alt="Samara Benevides Resultados" className="rounded-2xl shadow-[0_0_30px_rgba(201,168,76,0.1)] border border-[#C9A84C]/10 w-full max-w-md lg:max-w-lg object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pt-20 pb-24 bg-[#141414] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
              <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Como Funciona</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight font-serif">
              Do diagnóstico aos <span className="text-gradient-gold italic">resultados</span> <br className="hidden md:block" /> em 4 passos
            </h2>
          </motion.div>

          <div className="relative">
            {/* Animated connecting line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="hidden lg:block absolute top-[40px] left-0 right-0 timeline-line z-0 origin-left"
            ></motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: idx * 0.2 + 0.3 } } }}
                  className="relative"
                >
                  <div className="w-20 h-20 bg-[#1A1A1A] border-2 border-[#C9A84C]/40 rounded-full flex items-center justify-center text-3xl font-serif font-bold text-[#C9A84C] mb-4 lg:mx-auto shadow-[0_0_25px_rgba(201,168,76,0.15)] relative">
                    <div className="absolute inset-0 rounded-full bg-[#C9A84C]/5"></div>
                    {step.num}
                  </div>
                  <div className="lg:text-center">
                    <div className="text-[#C9A84C] text-[0.75rem] font-semibold uppercase tracking-wider mb-1">{step.period}</div>
                    <h3 className="text-xl font-serif font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-[#888888] leading-relaxed text-sm md:text-base">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}