const fs = require('fs');
const file = 'client/src/components/sections/ServicesSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const solutionsData = `
  const solutions = [
    { num: "01", title: "Respostas que não param", desc: "Todo lead que chega recebe atenção imediata. Automações inteligentes garantem que nenhuma oportunidade esfrie enquanto sua equipe dorme." },
    { num: "02", title: "Funil que fecha", desc: "Script validado, abordagem estruturada e CRM configurado pro seu negócio. Sua equipe para de improvisar e começa a converter." },
    { num: "03", title: "Equipe que sabe o que fazer", desc: "Cada vendedor com processo definido, meta clara e ferramentas certas. Você enxerga o gargalo antes de ele virar prejuízo." },
    { num: "04", title: "Negócio no piloto automático", desc: "Automações cuidam do operacional. Você e sua equipe focam no que importa: estratégia e fechamento." },
  ];
`;

const solutionItemComponent = `
function SolutionItem({ prob, idx, activeIndex }: { prob: any, idx: number, activeIndex: number }) {
  const ref = useRef(null);
  
  // Apenas o scroll define o foco
  const isActive = activeIndex === idx;

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={\`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none \${isActive ? 'bg-[#C9A84C]/5' : 'opacity-30 blur-[0.5px]'}\`}
      data-solution-item={idx}
    >
      <div className={\`absolute left-0 w-[3px] bg-gradient-to-b from-transparent \${isActive ? 'via-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.5)]' : 'via-transparent'} to-transparent transition-all duration-700 ease-in-out \${isActive ? 'opacity-100 top-0 bottom-0 animate-pulse' : 'opacity-0 top-1/4 bottom-1/4'}\`} />
      
      {/* Glitch/Danger Subtle Effect - changed to Gold for positive */}
      {isActive && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(201,168,76,0.06),transparent_60%)] pointer-events-none mix-blend-screen" />
      )}

      <div className={\`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-all duration-1000 pointer-events-none select-none tracking-tighter \${isActive ? 'text-[#C9A84C]/[0.04] scale-105' : 'text-white/[0.02] scale-100'}\`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className="flex items-center gap-4 mb-5">
          <span className={\`font-serif italic text-lg transition-colors duration-700 \${isActive ? 'text-[#C9A84C] font-bold' : 'text-[#C9A84C]'}\`}>{prob.num}</span>
          <span className={\`h-[1px] w-12 bg-gradient-to-r transition-colors duration-700 \${isActive ? 'from-[#C9A84C]/80' : 'from-[#C9A84C]/60'} to-transparent\`}></span>
        </div>
        <h3 className={\`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight \${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'text-white/80'}\`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className={\`transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light \${isActive ? 'text-[#e2e8f0]' : 'text-[#9CA3AF]'}\`}>
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}
`;

// Insert the new component above export default function ServicesSection
content = content.replace('export default function ServicesSection() {', solutionItemComponent + '\nexport default function ServicesSection() {');

// Insert solutionsData inside ServicesSection
content = content.replace('const problems = [', solutionsData + '\n  const problems = [');

// Update activeIndex to handle both lists independently
// To keep it simple, we can have activeProblemIndex and activeSolutionIndex
content = content.replace('const [activeIndex, setActiveIndex] = useState(0);', 'const [activeProblemIndex, setActiveProblemIndex] = useState(0);\n  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);');

const oldScrollEffect = `    const handleScroll = () => {
      const items = document.querySelectorAll('[data-problem-item]');
      if (!items.length) return;

      const viewHeight = window.innerHeight;
      let closestIdx = 0;
      let closestDistance = Infinity;

      items.forEach((item, idx) => {
        const rect = item.getBoundingClientRect();
        const elementCenter = rect.top + (rect.height / 2);
        const screenCenter = viewHeight / 2;
        
        // Calcular a distância do centro do elemento até o centro da tela
        const distance = Math.abs(screenCenter - elementCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIdx = idx;
        }
      });

      // Se o scroll está no topo da tela, garantir que o primeiro fique ativo
      if (window.scrollY < 100) {
        setActiveIndex(0);
      } else {
        setActiveIndex(closestIdx);
      }
    };`;

const newScrollEffect = `    const handleScroll = () => {
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
    };`;

content = content.replace(oldScrollEffect, newScrollEffect);

// Update ProblemItem usage
content = content.replace(/<ProblemItem key=\{idx\} prob=\{prob\} idx=\{idx\} activeIndex=\{activeIndex\} \/>/g, '<ProblemItem key={idx} prob={prob} idx={idx} activeIndex={activeProblemIndex} />');

// Insert new Solutions section HTML right after Problem Section HTML
const solutionsHTML = `

      {/* Solutions Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-1.5 rounded-full mb-6">
              <span className="text-[#C9A84C] uppercase text-[0.75rem] font-bold tracking-[0.15em]">A Virada</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight font-serif text-white">
              É exatamente isso que a gente resolve.
            </h2>
            <p className="text-[#9CA3AF] text-lg mt-6">
              Cada problema tem um processo testado por trás.
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
`;

content = content.replace('</section>\n\n      {/* Services Section */}', '</section>' + solutionsHTML + '\n\n      {/* Services Section */}');

fs.writeFileSync(file, content);
console.log('Added solutions section successfully!');
