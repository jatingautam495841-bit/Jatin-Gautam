import { motion } from 'motion/react';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Palette, Share2, Layout, ShieldCheck, Star, Quote } from 'lucide-react';

const IconMap: Record<string, any> = {
  Palette,
  Share2,
  Layout,
  ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-purple-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">My Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-black">Solutions for <span className="text-gradient">Growth.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {SERVICES.map((service, i) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 glass-card border-white/5 hover:border-white/20 transition-all"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-xs mb-8 leading-relaxed">
                  {service.description}
                </p>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  {service.priceHint}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h4 className="text-slate-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Success Stories</h4>
          <h2 className="text-4xl font-black">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-10 glass-card relative bg-linear-to-br from-white/[0.03] to-transparent"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-16 h-16" />
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill={i < t.rating ? '#9333ea' : 'transparent'} className={i < t.rating ? 'text-purple-500' : 'text-white/10'} />
                ))}
              </div>
              <p className="text-base text-slate-300 mb-10 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border border-white/10" />
                <div>
                  <h4 className="font-bold text-xs">{t.name}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
