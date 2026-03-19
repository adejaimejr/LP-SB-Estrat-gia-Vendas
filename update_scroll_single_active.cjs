const fs = require('fs');
const file = 'client/src/components/sections/ServicesSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldComponent = `function ProblemItem({ prob, idx }: { prob: any, idx: number }) {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate the exact middle of the element
      const elementCenter = rect.top + (rect.height / 2);
      
      // Narrowing the focus zone to an extremely thin strip right at the middle of the screen (40% to 60%)
      const isCurrentlyFocused = elementCenter > (viewHeight * 0.35) && elementCenter < (viewHeight * 0.65);
      
      setIsFocused(isCurrentlyFocused);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = isFocused || isHovered;

  return (
    <motion.div 
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={\`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none \${isActive ? 'bg-white/[0.025]' : ''}\`}
    >
      <div className={\`absolute left-0 w-[2px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent transition-all duration-700 ease-in-out \${isActive ? 'opacity-100 top-0 bottom-0' : 'opacity-0 top-1/4 bottom-1/4'}\`} />
      
      <div className={\`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-colors duration-700 pointer-events-none select-none tracking-tighter \${isActive ? 'text-[#C9A84C]/[0.05]' : 'text-white/[0.02]'}\`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className={\`flex items-center gap-4 mb-5 transition-opacity duration-500 \${isActive ? 'opacity-100' : 'opacity-40'}\`}>
          <span className="text-[#C9A84C] font-serif italic text-lg">{prob.num}</span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A84C]/60 to-transparent"></span>
        </div>
        <h3 className={\`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight \${isActive ? 'text-white' : 'text-white/40'}\`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className={\`transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light \${isActive ? 'text-[#D1D5DB]' : 'text-[#555555]'}\`}>
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {`;

const newComponent = `function ProblemItem({ prob, idx, activeIndex }: { prob: any, idx: number, activeIndex: number }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const isFocused = activeIndex === idx;
  const isActive = isFocused || isHovered;

  return (
    <motion.div 
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
      className={\`group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none \${isActive ? 'bg-white/[0.025]' : ''}\`}
      data-problem-item={idx}
    >
      <div className={\`absolute left-0 w-[2px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent transition-all duration-700 ease-in-out \${isActive ? 'opacity-100 top-0 bottom-0' : 'opacity-0 top-1/4 bottom-1/4'}\`} />
      
      <div className={\`absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black transition-colors duration-700 pointer-events-none select-none tracking-tighter \${isActive ? 'text-[#C9A84C]/[0.05]' : 'text-white/[0.02]'}\`}>
        {prob.num}
      </div>

      <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
        <div className={\`flex items-center gap-4 mb-5 transition-opacity duration-500 \${isActive ? 'opacity-100' : 'opacity-40'}\`}>
          <span className="text-[#C9A84C] font-serif italic text-lg">{prob.num}</span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A84C]/60 to-transparent"></span>
        </div>
        <h3 className={\`text-[26px] md:text-[32px] font-serif font-semibold transition-colors duration-500 leading-tight tracking-tight \${isActive ? 'text-white' : 'text-white/40'}\`}>
          {prob.title}
        </h3>
      </div>
      
      <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
        <p className={\`transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light \${isActive ? 'text-[#D1D5DB]' : 'text-[#555555]'}\`}>
          {prob.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // setTimeout to ensure elements are rendered
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);`;

if (content.includes(oldComponent)) {
  content = content.replace(oldComponent, newComponent);
  
  // Need to also update the map function to pass activeIndex
  const oldMap = `            {problems.map((prob, idx) => (
              <ProblemItem key={idx} prob={prob} idx={idx} />
            ))}`;
            
  const newMap = `            {problems.map((prob, idx) => (
              <ProblemItem key={idx} prob={prob} idx={idx} activeIndex={activeIndex} />
            ))}`;
            
  content = content.replace(oldMap, newMap);
  
  fs.writeFileSync(file, content);
  console.log('Fixed scroll behavior to strictly select exactly one active item');
} else {
  console.log('could not find it');
}
