import { motion } from 'motion/react';

export default function About() {
  const skills = [
    { name: 'Graphic Design', level: 98, color: 'from-purple-500 to-purple-400' },
    { name: 'UI/UX Design', level: 92, color: 'from-blue-500 to-blue-400' },
    { name: 'Web Development', level: 85, color: 'from-cyan-500 to-cyan-400' },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
          {/* Skill Bento Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">Top Expertises</h3>
              <div className="space-y-8">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-3 items-end">
                      <span className="text-sm font-semibold tracking-wide">{skill.name}</span>
                      <span className="text-xs font-mono text-white/50">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full bg-linear-to-r ${skill.color} rounded-full shadow-[0_0_10px_rgba(147,51,234,0.3)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-xs italic text-slate-400 leading-relaxed">
                "Jatin's eye for detail is unmatched. They turned our vague concept into a world-class brand identity."
              </p>
              <p className="text-[10px] font-bold mt-4 tracking-widest text-white uppercase opacity-70">— J. Carter, CEO Vanguard</p>
            </div>
          </motion.div>

          {/* About Bento Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 md:p-14 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h4 className="text-purple-400 font-mono text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-purple-500/50" />
                Who I Am
              </h4>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1]">
                A Designer Who Thrives <br/>
                On <span className="text-gradient">Innovation.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  I specialize in blending creative aesthetics with functional design. My journey began with a pencil and a dream, evolving into a digital playground where I build brand identities and user-centric websites.
                </p>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  I believe that design is not just about how it looks, but how it works and feels. Every project is a new story waiting to be told through pixels and paths.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Founded', val: '2024' },
                  { label: 'Projects', val: '120+' },
                  { label: 'Clients', val: '45' }
                ].map(stat => (
                  <div key={stat.label} className="p-4 rounded-2xl glass border-white/5 text-center">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-2xl font-black text-white">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
