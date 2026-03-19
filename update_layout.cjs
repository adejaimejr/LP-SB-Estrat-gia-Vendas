const fs = require('fs');
const file = 'client/src/components/sections/ServicesSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldString = `          <div className="max-w-[860px] mx-auto flex flex-col">
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

const newString = `          <div className="max-w-[960px] mx-auto flex flex-col relative">
            {/* Subtle vertical guide line for the section */}
            <div className="hidden md:block absolute left-[45%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent pointer-events-none" />

            {problems.map((prob, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] } } }}
                className="group relative border-b border-white/[0.06] last:border-0 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all duration-700 hover:bg-white/[0.015] -mx-6 px-6 sm:mx-0 sm:px-8 rounded-2xl md:rounded-none"
              >
                {/* Accent glow line on hover */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-0 group-hover:bottom-0 transition-all duration-700 ease-in-out" />
                
                {/* Huge Conceptual Number Background */}
                <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-serif font-black text-white/[0.02] group-hover:text-[#C9A84C]/[0.04] transition-colors duration-700 pointer-events-none select-none tracking-tighter">
                  {prob.num}
                </div>

                <div className="w-full md:w-[45%] flex flex-col relative z-10 pl-2 md:pl-4">
                  <div className="flex items-center gap-4 mb-5 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[#C9A84C] font-serif italic text-lg">{prob.num}</span>
                    <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A84C]/60 to-transparent"></span>
                  </div>
                  <h3 className="text-[26px] md:text-[32px] font-serif font-semibold text-white/90 group-hover:text-white transition-colors duration-500 leading-tight tracking-tight">
                    {prob.title}
                  </h3>
                </div>
                
                <div className="w-full md:w-[45%] flex items-start relative z-10 pr-2 md:pr-4">
                  <p className="text-[#888888] group-hover:text-[#D1D5DB] transition-colors duration-500 text-[16px] md:text-[17px] leading-relaxed w-full font-light">
                    {prob.desc}
                  </p>
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
