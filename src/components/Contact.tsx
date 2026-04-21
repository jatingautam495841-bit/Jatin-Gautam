import { motion } from 'motion/react';
import { Send, Instagram, Linkedin, Dribbble, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-purple-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">Get In Touch</h4>
          <h2 className="text-4xl md:text-6xl font-black text-white">Let's Build <span className="text-gradient">Something.</span></h2>
        </div>

        <div className="bg-linear-to-br from-purple-900/10 to-blue-900/10 glass-card p-10 md:p-14 flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's talk about your project</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
                Currently available for freelance opportunities and long-term contracts. High-performance experiences for modern brands.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Open to new projects</span>
              </div>
              
              <div className="flex gap-4">
                {['Dribbble', 'Be', 'IG'].map((social) => (
                  <div key={social} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-4">
              {[
                { icon: Mail, value: 'hello@jatin.studio', label: 'Email' },
                { icon: Phone, value: '+91 9517652657', label: 'Phone' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={16} className="text-purple-400" />
                  </div>
                  <p className="text-sm font-bold text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[450px] flex flex-col gap-4"
          >
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-white/20" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-white/20" 
            />
            <textarea 
              placeholder="Message" 
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500 resize-none min-h-[160px] placeholder:text-white/20"
            ></textarea>
            <button className="w-full py-4 bg-white text-black font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95">
              SEND MESSAGE
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
