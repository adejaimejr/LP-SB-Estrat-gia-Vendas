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

export default function ServicesSection() {
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {problems.map((prob, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } } }}
                className="pain-card p-8 rounded-2xl"
              >
                <div className="absolute top-4 right-6 text-[4rem] font-serif font-black text-[#C9A84C] opacity-[0.04] leading-none pointer-events-none select-none">
                  {prob.num}
                </div>
                <div className="w-14 h-14 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center mb-6 icon-container relative z-10">
                  {prob.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 relative z-10">{prob.title}</h3>
                <p className="text-[#888888] leading-relaxed relative z-10">{prob.desc}</p>
              </motion.div>
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