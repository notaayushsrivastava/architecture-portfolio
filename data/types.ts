export type ProjectCategory = 
  | 'Architecture'
  | 'Residential' 
  | 'Cultural' 
  | 'Adaptive Reuse' 
  | 'Interior' 
  | 'Exterior'
  | 'Floor Planing'
  | 'Research & Pavilion';

export type ProjectStatus = 'Completed' | 'In Construction' | 'Commission';

export interface ProjectImage {
  url: string;
  alt: string;
  aspectRatio: '16/10' | '16/9' | '3/4' | '4/5' | '1/1' | '21/9';
  caption?: string;
  isHero?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  location: {
    city: string;
    country: string;
    coordinates: string;
  };
  area: string; // e.g. "820 m² / 8,820 sqft"
  clientType: string;
  status: ProjectStatus;
  materials: string[];
  awards: string[];
  summary: string;
  concept: string;
  challenge?: string;
  solution?: string;
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  metrics: ProjectMetric[];
  featured: boolean;
  order: number;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  verticalLabel: string;
  category: string;
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  featuredProjectSlug: string;
}

export interface StatMetric {
  id: string;
  index: string;
  value: string;
  label: string;
  subtext: string;
  hasArrow?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  ratingBadgeText?: string;
  image: string;
  imageAlt: string;
  projectSlug?: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  logoSvg?: string;
}

export interface StudioInfo {
  name: string;
  architect: string;
  credentials: string;
  positioning: string;
  manifesto: string;
  bio: string;
  address: {
    street: string;
    city: string;
    country: string;
    coordinates: string;
  };
  contact: {
    email: string;
    phone: string;
    workingHours: string;
    timezone: string;
  };
  socials: {
    name: string;
    url: string;
  }[];
}
