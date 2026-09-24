import { StudioInfo, StatMetric, Testimonial, ClientPartner } from './types';

export const studioInfo: StudioInfo = {
  name: 'AAYUSH SRIVASTAVA ARCHITECTURE ATELIER',
  architect: 'Aayush Srivastava',
  credentials: 'B.Arch (VIT Vellore) · COA In-Training',
  positioning: 'Innovative architecture studio specializing in tropical modernism, tectonic mass, and sustainable bioclimatic designs across India.',
  manifesto: 'Architecture is the slowest of the arts, and its greatest virtue is permanence. I design spaces not as statements of novelty, but as quiet instruments of light, mass, and time.',
  bio: 'Aayush Srivastava is an architectural designer and spatial researcher with a Bachelor of Architecture (B.Arch) from Vellore Institute of Technology (VIT), Vellore. His monographs explore the synthesis of contemporary tropical modernism, tectonic materiality, and passive bioclimatic cooling calibrated for diverse microclimates across the Indian subcontinent.',
  address: {
    street: 'Vellore Institute of Technology, Katpadi',
    city: 'Vellore, Tamil Nadu',
    country: 'India',
    coordinates: '12°58\'N, 79°09\'E',
  },
  contact: {
    email: 'aayush.srivastava2026@vitstudent.ac.in',
    phone: '+91 9155834066',
    workingHours: 'Mon – Sat: 09:00 – 18:30 IST',
    timezone: 'IST (UTC+5:30)',
  },
  socials: [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'ArchDaily', url: 'https://archdaily.com' },
    { name: 'El Croquis', url: 'https://elcroquis.es' },
  ],
};

export const studioStats: StatMetric[] = [
  {
    id: 'stat-01',
    index: '01',
    value: '5.00',
    label: 'Client Satisfaction',
    subtext: '70+ Design Reviews',
    hasArrow: true,
  },
  {
    id: 'stat-02',
    index: '02',
    value: '12',
    label: 'Award & Achievement',
    subtext: 'Design Citations & Awards',
    hasArrow: true,
  },
  {
    id: 'stat-03',
    index: '03',
    value: '05',
    label: 'Expertise & Research',
    subtext: 'Years of Architectural Focus',
    hasArrow: true,
  },
  {
    id: 'stat-04',
    index: '04',
    value: '24+',
    label: 'Built & Conceptual Monographs',
    subtext: 'Projects',
    hasArrow: true,
  },
];

export const clientTestimonials: Testimonial[] = [
  {
    id: 'test-01',
    quote: 'Incredible architects, seamless process, & stunning designs—our dream coastal residence became a reality!',
    author: 'Sunil & Ananya Rao',
    role: 'Private Commission',
    location: 'Alibaug, Maharashtra',
    rating: 5,
    ratingBadgeText: '4.9 Rating',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Architectural stone loggia and pool at Villa Solarium',
    projectSlug: 'jungle-villa-housing',
  },
  {
    id: 'test-02',
    quote: 'Aayush Srivastava crafted our Himalayan ridge residence with extreme sensitivity to slope contours, local stone, and winter solar gain.',
    author: 'Vikramaditya Singhania',
    role: 'Patron & Conservationist',
    location: 'Kasauli, Himachal Pradesh',
    rating: 5,
    ratingBadgeText: '5.0 Rating',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Double-height living space framing mountain valley panorama',
    projectSlug: 'nordic-light-house',
  },
  {
    id: 'test-03',
    quote: 'The Aravalli Obsidian Pavilion has become a quiet architectural touchstone for our design symposiums. A masterclass in shadow and breeze circulation.',
    author: 'Dr. Rajesh Pillai',
    role: 'Curator, Deccan Design Trust',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    ratingBadgeText: '4.95 Rating',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Minimalist stone pavilion hovering above water court in India',
    projectSlug: 'the-obsidian-pavilion',
  },
];

export const clientTestimonial: Testimonial = clientTestimonials[0];

export const associatedClients: ClientPartner[] = [
  { id: 'client-1', name: 'VIT School of Planning' },
  { id: 'client-2', name: 'Council of Architecture' },
  { id: 'client-3', name: 'IIA India Chapter' },
  { id: 'client-4', name: 'TERI Griha Council' },
  { id: 'client-5', name: 'Tata Housing Trust' },
  { id: 'client-6', name: 'Adobe Spatial' },
  { id: 'client-7', name: 'Arup Structural India' },
  { id: 'client-8', name: 'Godrej Design Lab' },
  { id: 'client-9', name: 'Buro Happold' },
  { id: 'client-10', name: 'Deccan Heritage Trust' },
];
