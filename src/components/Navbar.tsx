import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'glass py-4' : 'bg-transparent py-8'
      )}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center text-slate-50">
        <Link to="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-tr from-purple-500 to-blue-500 rounded-lg"></div>
          JATIN / STUDIO
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="hover:text-white transition-colors relative"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-3 ml-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a
              href="#contact"
              className="px-6 py-2 bg-white text-black font-bold rounded-full text-xs"
            >
              HIRE ME
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass md:hidden py-6 px-6 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold hover:text-accent-blue"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-white text-black text-center font-bold rounded-xl"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
