const fs = require('fs');
const file = 'client/src/components/sections/ServicesSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldString = `          <div className="max-w-[720px] mx-auto flex flex-col">
            {problems.map((prob, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } } }}
                className={\`py-8 \${idx !== 0 ? 'border-t border-white/10' : ''}\`}
              >
                <div className="text-[#C9A84C] text-[13px] font-bold uppercase tracking-[0.15em] mb-4 text-left">
                  {prob.num}
                </div>
                <h3 className="text-[24px] font-semibold text-white mb-3 leading-tight">{prob.title}</h3>
                <p className="text-[#B8B8B8] text-[16px] leading-relaxed max-w-2xl">{prob.desc}</p>
              </motion.div>
            ))}
          </div>`;

const newString = `          <div className="max-w-[860px] mx-auto flex flex-col">
            {problems.map((prob, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } } }}
                className={\`py-8 md:py-10 \${idx !== 0 ? 'border-t border-white/10' : ''} flex flex-col md:flex-row items-start justify-between gap-4 md:gap-[5%]\`}
              >
                <div className="w-full md:w-[40%] flex flex-col">
                  <div className="text-[#C9A84C] text-[13px] font-bold uppercase tracking-[0.15em] mb-2 text-left">
                    {prob.num}
                  </div>
                  <h3 className="text-[22px] md:text-[24px] font-semibold text-white leading-tight">{prob.title}</h3>
                </div>
                <div className="w-full md:w-[55%] flex items-start">
                  <p className="text-[#9CA3AF] text-[15px] md:text-[16px] leading-relaxed w-full pt-1">{prob.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>`;

if(content.includes(oldString)) {
  content = content.replace(oldString, newString);
  fs.writeFileSync(file, content);
  console.log('Successfully updated the file!');
} else {
  console.log('Could not find the target string. Check exact match.');
}
