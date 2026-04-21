import { motion } from 'motion/react';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Designer.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl w-full">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-12 overflow-hidden pointer-events-none select-none">
            <span className="text-[180px] font-black text-white/5 leading-none">ART</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-purple-400 font-mono text-xs tracking-[0.3em] uppercase mb-6"
          >
            <span className="w-8 h-px bg-purple-500/50" />
            Hello, I'm Jatin
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8"
          >
            Graphic & Web <br/>
            <span className="text-gradient inline-block min-w-[200px]">{text}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
          >
            I design visuals that tell stories and websites that convert. <br className="hidden md:block" />
            <span className="text-white/80">High-performance experiences for modern brands.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#portfolio"
              className="px-10 py-5 bg-purple-600 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-purple-500 transition-all shadow-xl shadow-purple-500/20 active:scale-95"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <div className="flex -space-x-4">
              {['Ai', 'Ps', 'Fi'].map((tech, i) => (
                <div 
                  key={tech}
                  className="w-12 h-12 rounded-full border-2 border-bg-deep glass flex items-center justify-center text-[10px] font-bold text-slate-300"
                  style={{ zIndex: 10 - i }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
