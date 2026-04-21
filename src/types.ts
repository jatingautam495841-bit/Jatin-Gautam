export type Category = 'All' | 'Logo Design' | 'Social Media' | 'Web UI' | 'Branding';

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  image: string;
  caseStudy?: {
    problem: string;
    process: string;
    solution: string;
    images: string[];
  };
}

export interface Service {
  title: string;
  description: string;
  priceHint: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}
