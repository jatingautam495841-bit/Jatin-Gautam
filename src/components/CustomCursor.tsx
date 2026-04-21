import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                         target.tagName === 'A' || 
                         target.tagName === 'BUTTON';
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          borderColor: isPointer ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent-blue rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          backgroundColor: isPointer ? '#8b5cf6' : '#3b82f6',
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 800, mass: 0.1 }}
      />
    </>
  );
}
