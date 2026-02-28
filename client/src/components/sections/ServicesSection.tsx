import { motion } from "framer-motion";
import { MessageCircleX, TrendingDown, UserX, Clock, Target, Workflow, GraduationCap, MessagesSquare, Headphones, BarChart3 } from "lucide-react";
import resultsImg from "@assets/WhatsApp_Image_2026-02-08_at_09.58.19_(1)_1772248771761.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ServicesSection() {
  const problems = [
    { icon: <MessageCircleX className="text-[#C9A84C]" size={24} />, title: "Leads que não respondem", desc: "Seus potenciais clientes entram em contato mas a equipe não faz follow-up adequado, e as oportunidades morrem no WhatsApp." },
    { icon: <TrendingDown className="text-[#C9A84C]" size={24} />, title: "Conversão baixa", desc: "Muitos leads chegam, mas poucos se tornam clientes. Falta um script estruturado e um fluxo que conduza o cliente até o fechamento." },
    { icon: <UserX className="text-[#C9A84C]" size={24} />, title: "Equipe sem direcionamento", desc: "Seus vendedores não sabem como abordar, quando fazer follow-up ou como usar as ferramentas de atendimento com eficiência." },
    { icon: <Clock className="text-[#C9A84C]" size={24} />, title: "Tempo perdido com manual", desc: "Tarefas repetitivas que poderiam ser automatizadas tomam horas da sua equipe, impedindo o foco em fechar negócios." },
  ];

  const services = [
    { icon: <Target className="text-[#C9A84C]" size={24} />, title: "Consultoria Comercial Estratégica", desc: "Diagnóstico completo das operações de vendas, estruturação de processos e criação de estratégias personalizadas para crescimento.", tags: ["Diagnóstico", "Playbook", "Estratégia"] },
    { icon: <Workflow className="text-[#C9A84C]" size={24} />, title: "Automação & CRM", desc: "Implantação de CRM, automação de WhatsApp, chatbots inteligentes e agentes de IA que trabalham 24h para sua empresa.", tags: ["WhatsApp", "Chatbot", "Agente IA"] },
    { icon: <GraduationCap className="text-[#C9A84C]" size={24} />, title: "Treinamento de Equipes", desc: "Capacitação de equipes comerciais em vendas online, scripts de atendimento e uso eficiente de ferramentas tecnológicas.", tags: ["Scripts", "Role-play", "Mentoria"] },
    { icon: <MessagesSquare className="text-[#C9A84C]" size={24} />, title: "Fluxos Conversacionais", desc: "Criação de scripts e fluxos para WhatsApp que conduzem o lead do primeiro contato ao fechamento com abordagem humanizada.", tags: ["Follow-up", "Omnichannel", "Funil"] },
    { icon: <Headphones className="text-[#C9A84C]" size={24} />, title: "SDR / Closer / Secretária Online", desc: "Serviço remoto de pré-venda, fechamento e atendimento. Verificamos o perfil da sua operação e indicamos a melhor solução.", tags: ["Remoto", "Terceirização", "Atendimento"] },
    { icon: <BarChart3 className="text-[#C9A84C]" size={24} />, title: "Acompanhamento de Resultados", desc: "Dashboards e relatórios com análise de dados, métricas de conversão e insights para otimização contínua das vendas.", tags: ["KPIs", "Relatórios", "Data-driven"] },
  ];

  const steps = [
    { num: "01", title: "Diagnóstico", desc: "Analisamos sua operação comercial, identificamos gargalos e mapeamos oportunidades de melhoria." },
    { num: "02", title: "Estratégia", desc: "Criamos um plano personalizado com scripts, fluxos e ferramentas ideais para o seu negócio." },
    { num: "03", title: "Implantação", desc: "Implementamos CRM, automações, chatbots e treinamos sua equipe para operar tudo com excelência." },
    { num: "04", title: "Acompanhamento", desc: "Monitoramos resultados, ajustamos estratégias e garantimos crescimento contínuo." },
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
              Sua empresa perde vendas todos os dias por falta de <span className="text-gradient-gold italic">processo e estratégia</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {problems.map((prob, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } } }}
                className="bg-[#1A1A1A] p-8 rounded-2xl card-hover-effect"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mb-6">
                  {prob.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{prob.title}</h3>
                <p className="text-[#888888] leading-relaxed">{prob.desc}</p>
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
              Soluções completas para <span className="text-gradient-gold italic">escalar suas vendas</span>
            </h2>
            <p className="text-[#B8B8B8] text-lg">
              Do diagnóstico à execução — implantamos processos, ferramentas e treinamentos que transformam seu comercial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } } }}
                className="bg-[#1A1A1A] p-8 rounded-2xl card-hover-effect flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mb-6">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{svc.title}</h3>
                <p className="text-[#888888] leading-relaxed flex-grow mb-6">{svc.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {svc.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-bold uppercase tracking-wider text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Stats */}
      <section id="resultados" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
              <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
                <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Resultados Comprovados</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight mb-6 font-serif">
                Números que falam por <span className="text-gradient-gold italic">nós</span>
              </h2>
              <p className="text-[#B8B8B8] text-lg mb-10">
                Nossos clientes não apenas melhoram processos — eles transformam resultados financeiros reais.
              </p>
              <img src={resultsImg} alt="Samara Benevides Resultados" className="rounded-2xl shadow-2xl w-full max-w-md" />
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="border-l border-[#C9A84C]/30 pl-6">
                <div className="text-5xl lg:text-6xl font-serif font-extrabold text-[#C9A84C] mb-2">+50%</div>
                <div className="text-[#888888] font-semibold">Aumento médio no faturamento online</div>
              </div>
              <div className="border-l border-[#C9A84C]/30 pl-6">
                <div className="text-5xl lg:text-6xl font-serif font-extrabold text-[#C9A84C] mb-2">40%</div>
                <div className="text-[#888888] font-semibold">Aumento na taxa de retenção de clientes</div>
              </div>
              <div className="border-l border-[#C9A84C]/30 pl-6">
                <div className="text-5xl lg:text-6xl font-serif font-extrabold text-[#C9A84C] mb-2">+50</div>
                <div className="text-[#888888] font-semibold">Empresas atendidas com sucesso</div>
              </div>
              <div className="border-l border-[#C9A84C]/30 pl-6">
                <div className="text-5xl lg:text-6xl font-serif font-extrabold text-[#C9A84C] mb-2">24/7</div>
                <div className="text-[#888888] font-semibold">Automações trabalhando para nossos clientes</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#141414]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
              <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">Como Funciona</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight font-serif">
              Do diagnóstico aos <span className="text-gradient-gold italic">resultados</span> em 4 passos
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[1px] bg-[#C9A84C]/20 z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.2 } } }}
                  className="relative"
                >
                  <div className="w-20 h-20 bg-[#0A0A0A] border border-[#C9A84C]/30 rounded-full flex items-center justify-center text-3xl font-serif font-bold text-[#C9A84C] mb-6 lg:mx-auto shadow-[0_0_20px_rgba(201,168,76,0.15)]">
                    {step.num}
                  </div>
                  <div className="lg:text-center">
                    <h3 className="text-xl font-serif font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-[#888888] leading-relaxed">{step.desc}</p>
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