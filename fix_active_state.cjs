const fs = require('fs');
const file = 'client/src/components/sections/ServicesSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldComponent = `function ProblemItem({ prob, idx }: { prob: any, idx: number }) {
  const ref = useRef(null);
  // Restringe a margem vertical para que apenas um item (o que está no centro da tela) fique ativo
  const isInView = useInView(ref, { margin: "-49% 0px -49% 0px" });

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={\`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none \${isInView ? 'bg-white/[0.025]' : 'hover:bg-white/[0.02]'}\`}
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
}`;

const newComponent = `function ProblemItem({ prob, idx }: { prob: any, idx: number }) {
  // Controle de estado local se o item está focado
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Define a "zona de foco" como o centro da tela (entre 40% e 60% da altura da janela)
      const isFocused = rect.top <= viewHeight * 0.6 && rect.bottom >= viewHeight * 0.4;
      
      setIsActive(isFocused);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Checa no carregamento inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={\`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none \${isActive ? 'bg-white/[0.025]' : 'hover:bg-white/[0.02]'}\`}
    >
      <div className={\`absolute left-0 w-[2px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent transition-all duration-700 ease-in-out \${isActive ? 'opacity-100 top-0 bottom-0' : 'opacity-0 top-1/4 bottom-1/4 group-hover:opacity-100 group-hover:top-0 group-hover:bottom-0'}\`} />
      
      <div className={\`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-colors duration-700 pointer-events-none select-none tracking-tighter \${isActive ? 'text-[#C9A84C]/[0.05]' : 'text-white/[0.02] group-hover:text-[#C9A84C]/[0.05]'}\`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className={\`flex items-center gap-4 mb-5 transition-opacity duration-500 \${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}\`}>
          <span className="text-[#C9A84C] font-serif italic text-lg">{prob.num}</span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A84C]/60 to-transparent"></span>
        </div>
        <h3 className={\`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight \${isActive ? 'text-white' : 'text-white/40 group-hover:text-white'}\`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className={\`transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light \${isActive ? 'text-[#D1D5DB]' : 'text-[#555555] group-hover:text-[#D1D5DB]'}\`}>
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}`;

if (content.includes(oldComponent)) {
  content = content.replace(oldComponent, newComponent);
  fs.writeFileSync(file, content);
  console.log('Fixed highlight behavior with custom scroll logic');
} else {
  console.log('could not find it');
}
