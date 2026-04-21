import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { Category, Project } from '../types';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Category[] = ['All', 'Logo Design', 'Social Media', 'Web UI', 'Branding'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-purple-400 font-mono text-xs tracking-[0.3em] uppercase mb-4"
            >
              Creative Work
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Digital <span className="text-gradient">Portfolio.</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                  activeCategory === cat 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 border border-white/10 text-white/40 hover:text-white'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group glass-card overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-2 py-1 bg-purple-500 rounded text-[9px] font-black uppercase tracking-widest mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex justify-between items-center bg-white/5 group-hover:bg-white/10 transition-colors">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">View Details</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-600/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-xl bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              className="w-full max-w-6xl max-h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-[40px] overflow-hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0c0c0c] to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <X />
                </button>
                <div className="absolute bottom-12 left-12">
                  <span className="text-sm font-bold uppercase tracking-widest text-accent-blue mb-4 block">{selectedProject.category}</span>
                  <h2 className="text-4xl md:text-6xl font-display font-bold">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-12">
                {selectedProject.caseStudy ? (
                  <div className="grid md:grid-cols-[1.5fr_1fr] gap-16">
                    <div className="space-y-12">
                      <section>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span className="w-8 h-px bg-accent-blue" />
                          The Problem
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed">{selectedProject.caseStudy.problem}</p>
                      </section>
                      <section>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span className="w-8 h-px bg-accent-purple" />
                          The Process
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed">{selectedProject.caseStudy.process}</p>
                      </section>
                      <section>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span className="w-8 h-px bg-accent-orange" />
                          The Solution
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed">{selectedProject.caseStudy.solution}</p>
                      </section>
                    </div>

                    <div className="space-y-8">
                      <div className="glass p-8 rounded-3xl">
                        <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/50">Services Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {['Branding', 'UI Design', 'Illustration'].map(s => (
                            <span key={s} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedProject.caseStudy.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            className="rounded-2xl w-full aspect-square object-cover border border-white/5"
                            alt="Process"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-white/50 text-lg mb-8">{selectedProject.description}</p>
                    <button className="px-10 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 mx-auto">
                      Launch Project <ExternalLink size={18} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
