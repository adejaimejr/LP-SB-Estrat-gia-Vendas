const fs = require('fs');
const file = 'client/src/components/sections/ServicesSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldProblemItem = `function ProblemItem({ prob, idx, activeIndex }: { prob: any, idx: number, activeIndex: number }) {
  const ref = useRef(null);
  
  // Apenas o scroll define o foco
  const isActive = activeIndex === idx;

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={\`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none \${isActive ? 'bg-red-950/5' : 'opacity-30 blur-[0.5px]'}\`}
      data-problem-item={idx}
    >
      <div className={\`absolute left-0 w-[2px] bg-gradient-to-b from-transparent \${isActive ? 'via-red-500/50' : 'via-white/10'} to-transparent transition-all duration-700 ease-in-out \${isActive ? 'opacity-100 top-0 bottom-0' : 'opacity-0 top-1/4 bottom-1/4'}\`} />
      
      <div className={\`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-colors duration-700 pointer-events-none select-none tracking-tighter \${isActive ? 'text-red-500/[0.03]' : 'text-white/[0.02]'}\`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className="flex items-center gap-4 mb-5">
          <span className={\`font-serif italic text-lg transition-colors duration-700 \${isActive ? 'text-red-400' : 'text-[#C9A84C]'}\`}>{prob.num}</span>
          <span className={\`h-[1px] w-12 bg-gradient-to-r transition-colors duration-700 \${isActive ? 'from-red-500/40' : 'from-[#C9A84C]/60'} to-transparent\`}></span>
        </div>
        <h3 className={\`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight \${isActive ? 'text-red-50' : 'text-white'}\`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className="transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light text-[#9CA3AF]">
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}`;

const newProblemItem = `function ProblemItem({ prob, idx, activeIndex }: { prob: any, idx: number, activeIndex: number }) {
  const ref = useRef(null);
  
  // Apenas o scroll define o foco
  const isActive = activeIndex === idx;

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={\`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none \${isActive ? 'bg-[#1a0f0f]' : 'opacity-30 blur-[0.5px]'}\`}
      data-problem-item={idx}
    >
      <div className={\`absolute left-0 w-[2px] bg-gradient-to-b from-transparent \${isActive ? 'via-[#ef4444]' : 'via-transparent'} to-transparent transition-all duration-700 ease-in-out \${isActive ? 'opacity-100 top-0 bottom-0' : 'opacity-0 top-1/4 bottom-1/4'}\`} />
      
      <div className={\`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-colors duration-700 pointer-events-none select-none tracking-tighter \${isActive ? 'text-[#ef4444]/[0.05]' : 'text-white/[0.02]'}\`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className="flex items-center gap-4 mb-5">
          <span className={\`font-serif italic text-lg transition-colors duration-700 \${isActive ? 'text-[#ef4444]' : 'text-[#C9A84C]'}\`}>{prob.num}</span>
          <span className={\`h-[1px] w-12 bg-gradient-to-r transition-colors duration-700 \${isActive ? 'from-[#ef4444]/60' : 'from-[#C9A84C]/60'} to-transparent\`}></span>
        </div>
        <h3 className={\`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight \${isActive ? 'text-white' : 'text-white'}\`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className="transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light text-[#9CA3AF]">
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}`;

if (content.includes(oldProblemItem)) {
  content = content.replace(oldProblemItem, newProblemItem);
  fs.writeFileSync(file, content);
  console.log('Applied subtle red/warning aesthetic to problem section');
} else {
  console.log('could not find it');
}
