import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { motion } from 'motion/react';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative font-sans min-h-screen bg-bg-deep overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
        <div className="mesh-glow-purple" />
        <div className="mesh-glow-blue" />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
