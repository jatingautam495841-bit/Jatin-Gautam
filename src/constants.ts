import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Pulse Branding',
    category: 'Logo Design',
    description: 'A vibrant visual identity for a futuristic streetwear brand.',
    image: 'https://picsum.photos/seed/neon/800/600',
    caseStudy: {
      problem: 'The brand needed to stand out in a saturated market of retro-futuristic streetwear.',
      process: 'I explored cyber-punk aesthetics and neon color palettes to create a sharp, memorable logo.',
      solution: 'A geometric logo with high-contrast gradients that glows on digital screens.',
      images: ['https://picsum.photos/seed/neon1/800/600', 'https://picsum.photos/seed/neon2/800/600']
    }
  },
  {
    id: '2',
    title: 'Skyline Real Estate UI',
    category: 'Web UI',
    description: 'Modern, minimal interface for luxury property listings.',
    image: 'https://picsum.photos/seed/skyline/800/600',
    caseStudy: {
      problem: 'Existing real estate platforms were cluttered and difficult to navigate on mobile.',
      process: 'Mobile-first design approach with emphasis on high-quality imagery and clean typography.',
      solution: 'A seamless property browsing experience with immersive 3D walkthrough integration.',
      images: ['https://picsum.photos/seed/skyline1/800/600', 'https://picsum.photos/seed/skyline2/800/600']
    }
  },
  {
    id: '3',
    title: 'Echo Social Campaign',
    category: 'Social Media',
    description: 'A series of high-engagement posts for a music streaming app.',
    image: 'https://picsum.photos/seed/echo/800/600',
    caseStudy: {
      problem: 'Low user engagement on organic social channels.',
      process: 'Created dynamic, typography-driven templates for weekly music charts.',
      solution: 'A 45% increase in shares and saves within the first month of the new visual style.',
      images: ['https://picsum.photos/seed/echo1/800/600']
    }
  },
  {
    id: '4',
    title: 'Nova Tech Branding',
    category: 'Branding',
    description: 'Complete brand overhaul for an AI startup.',
    image: 'https://picsum.photos/seed/nova/800/600',
    caseStudy: {
      problem: 'The startup looked too corporate and failed to appear innovative.',
      process: 'Shifted focus to abstract organic shapes representing "flowing information".',
      solution: 'A fluid, dynamic brand system that scales across print and web.',
      images: ['https://picsum.photos/seed/nova1/800/600']
    }
  },
  {
    id: '5',
    title: 'Arcade Hub UI',
    category: 'Web UI',
    description: 'Retro-inspired gaming community dashboard.',
    image: 'https://picsum.photos/seed/arcade/800/600'
  },
  {
    id: '6',
    title: 'Leaf & Stem Identity',
    category: 'Logo Design',
    description: 'Organic and sustainable packaging design concepts.',
    image: 'https://picsum.photos/seed/leaf/800/600'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Logo Design',
    description: 'Crafting unique and memorable visual marks that define your brand identity.',
    priceHint: 'Starts at $299',
    icon: 'Palette'
  },
  {
    title: 'Social Media Design',
    description: 'High-impact graphics tailored for Instagram, LinkedIn, and more.',
    priceHint: 'Starts at $150',
    icon: 'Share2'
  },
  {
    title: 'Web UI/UX Design',
    description: 'User-centric interfaces that are beautiful, intuitive, and conversion-focused.',
    priceHint: 'Starts at $899',
    icon: 'Layout'
  },
  {
    title: 'Full Branding',
    description: 'The ultimate identity package: Logo, typography, colors, and guidelines.',
    priceHint: 'Starts at $1499',
    icon: 'ShieldCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    text: 'Working with this designer was a game-changer for our startup. The new brand identity is exactly what we needed.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Lead, Wave',
    text: 'Incredible attention to detail. The UI design for our app is stunning and user-friendly.',
    avatar: 'https://i.pravatar.cc/150?u=michael',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, Bloom',
    text: 'Fast, creative, and professional. The social media assets perfectly captured our brand voice.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    rating: 4
  }
];
