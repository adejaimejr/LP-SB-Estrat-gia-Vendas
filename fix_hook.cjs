const fs = require('fs');
const file = 'client/src/components/sections/ServicesSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldMapBody = `            {problems.map((prob, idx) => (
              <ProblemItem key={idx} prob={prob} idx={idx} />
            ))}`;

const newMapBody = `            {problems.map((prob, idx) => (
              <ProblemItem key={idx} prob={prob} idx={idx} />
            ))}`; // kept the same, just making sure we have it right

const newComponent = `
function ProblemItem({ prob, idx }: { prob: any, idx: number }) {
  const ref = useRef(null);
  // Ativa quando o item entra na faixa central (ignora os 40% do topo e 40% da base)
  // isso faz com que ele acenda apenas quando estiver bem no centro da tela
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={\`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none \${isInView ? 'bg-white/[0.02]' : 'hover:bg-white/[0.02]'}\`}
    >
      <div className={\`absolute left-0 w-[2px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent transition-all duration-700 ease-in-out \${isInView ? 'opacity-100 top-0 bottom-0' : 'opacity-0 top-1/4 bottom-1/4 group-hover:opacity-100 group-hover:top-0 group-hover:bottom-0'}\`} />
      
      <div className={\`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-colors duration-700 pointer-events-none select-none tracking-tighter \${isInView ? 'text-[#C9A84C]/[0.05]' : 'text-white/[0.02] group-hover:text-[#C9A84C]/[0.05]'}\`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className={\`flex items-center gap-4 mb-5 transition-opacity duration-500 \${isInView ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}\`}>
          <span className="text-[#C9A84C] font-serif italic text-lg">{prob.num}</span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A84C]/60 to-transparent"></span>
        </div>
        <h3 className={\`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight \${isInView ? 'text-white' : 'text-white/40 group-hover:text-white'}\`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className={\`transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light \${isInView ? 'text-[#D1D5DB]' : 'text-[#555555] group-hover:text-[#D1D5DB]'}\`}>
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
`;

// Substituir apenas a declaração de ProblemItem
const oldComponent = `function ProblemItem({ prob, idx }: { prob: any, idx: number }) {
  const ref = useRef(null);
  // Ativa quando o item entra na faixa central (ignora os 30% do topo e 30% da base)
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={\`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none \${isInView ? 'bg-white/[0.02]' : 'hover:bg-white/[0.02]'}\`}
    >
      <div className={\`absolute left-0 w-[2px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent transition-all duration-700 ease-in-out \${isInView ? 'opacity-100 top-0 bottom-0' : 'opacity-0 top-1/4 bottom-1/4 group-hover:opacity-100 group-hover:top-0 group-hover:bottom-0'}\`} />
      
      <div className={\`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-colors duration-700 pointer-events-none select-none tracking-tighter \${isInView ? 'text-[#C9A84C]/[0.05]' : 'text-white/[0.02] group-hover:text-[#C9A84C]/[0.05]'}\`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className={\`flex items-center gap-4 mb-5 transition-opacity duration-500 \${isInView ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}\`}>
          <span className="text-[#C9A84C] font-serif italic text-lg">{prob.num}</span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A84C]/60 to-transparent"></span>
        </div>
        <h3 className={\`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight \${isInView ? 'text-white' : 'text-white/40 group-hover:text-white'}\`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className={\`transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light \${isInView ? 'text-[#D1D5DB]' : 'text-[#555555] group-hover:text-[#D1D5DB]'}\`}>
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
`;

if (content.includes(oldComponent)) {
  content = content.replace(oldComponent, newComponent);
  fs.writeFileSync(file, content);
  console.log('Fixed margins');
} else {
  console.log('could not find it');
}
