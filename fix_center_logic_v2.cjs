const fs = require('fs');
const file = 'client/src/components/sections/ServicesSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldComponent = `function ProblemItem({ prob, idx }: { prob: any, idx: number }) {
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
      
      // Narrowing the focus zone to an extremely thin strip right at the middle of the screen (45% to 55%)
      // This guarantees only one element can possibly fit in this zone at a time
      const isFocused = elementCenter > (viewHeight * 0.45) && elementCenter < (viewHeight * 0.55);
      
      setIsActive(isFocused);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);`;

if (content.includes(oldComponent)) {
  content = content.replace(oldComponent, newComponent);
  fs.writeFileSync(file, content);
  console.log('Made active logic extremely strict');
} else {
  console.log('could not find it');
}
