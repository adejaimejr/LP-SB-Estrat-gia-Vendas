const fs = require('fs');
const file = 'client/src/components/sections/ServicesSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldComponent = `function ProblemItem({ prob, idx }: { prob: any, idx: number }) {
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
  }, []);`;

const newComponent = `function ProblemItem({ prob, idx }: { prob: any, idx: number }) {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate the exact middle of the element
      const elementCenter = rect.top + (rect.height / 2);
      
      // Define a strict "focus zone" exactly in the middle of the screen (e.g. 40% to 60%)
      const isFocused = elementCenter > (viewHeight * 0.4) && elementCenter < (viewHeight * 0.6);
      
      setIsActive(isFocused);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);`;

if (content.includes(oldComponent)) {
  content = content.replace(oldComponent, newComponent);
  fs.writeFileSync(file, content);
  console.log('Fixed center active logic');
} else {
  console.log('could not find it');
}
