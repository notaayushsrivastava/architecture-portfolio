import { StudioInfo, StatMetric, Testimonial, ClientPartner } from './types';

export const studioInfo: StudioInfo = {
  name: 'VALE ARCHITECTURE ATELIER',
  architect: 'Elena Vance',
  credentials: 'Dipl. Arch. ETH / SIA / RIBA Hon.',
  positioning: 'Innovative architecture atelier specializing in modern, sustainable, and tectonic designs.',
  manifesto: 'Architecture is the slowest of the arts, and its greatest virtue is permanence. I design spaces not as statements of novelty, but as quiet instruments of light, mass, and time.',
  bio: 'Elena Vance is an independent architect whose built monographs explore the boundaries of tectonic mass, local geology, and natural light. Following studies at ETH Zurich and research in Kyoto, she established her private atelier to personally guide commissions of profound spatial intimacy.',
  address: {
    street: 'Limmatstrasse 264',
    city: 'Zürich',
    country: 'Switzerland',
    coordinates: '47°22\'N, 8°32\'E',
  },
  contact: {
    email: 'atelier@studiovale.ch',
    phone: '+41 44 288 9120',
    workingHours: 'Mon – Fri: 09:00 – 18:00 CET',
    timezone: 'CET (UTC+1)',
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
    subtext: '70 rating',
    hasArrow: true,
  },
  {
    id: 'stat-02',
    index: '02',
    value: '12',
    label: 'Award & Achievement',
    subtext: 'Best Studio Awards',
    hasArrow: true,
  },
  {
    id: 'stat-03',
    index: '03',
    value: '07',
    label: 'Expertise & Experience',
    subtext: 'Years of Services',
    hasArrow: true,
  },
  {
    id: 'stat-04',
    index: '04',
    value: '370+',
    label: 'Completed Projects',
    subtext: 'Projects',
    hasArrow: true,
  },
];

export const clientTestimonials: Testimonial[] = [
  {
    id: 'test-01',
    quote: 'Incredible architects, seamless process, & stunning designs—our dream space became a reality!',
    author: 'Maria Gomez',
    role: 'Private Patron',
    location: 'London, UK',
    rating: 5,
    ratingBadgeText: '4.9 Rating',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Architectural stone loggia and pool at Villa Solarium',
    projectSlug: 'jungle-villa-housing',
  },
  {
    id: 'test-02',
    quote: 'Elena Vance and her atelier crafted our alpine residence with extreme sensitivity to wind, stone, and Nordic winter light.',
    author: 'Dr. Henrik Lindqvist',
    role: 'Trustee, Nordic Arts Foundation',
    location: 'Bergen, Norway',
    rating: 5,
    ratingBadgeText: '5.0 Rating',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Double-height living space framing fjord mountain panorama',
    projectSlug: 'nordic-light-house',
  },
  {
    id: 'test-03',
    quote: 'The Obsidian Pavilion has become a sacred architectural touchstone for our artists. A masterclass in silence and shadow.',
    author: 'Kenjiro Takahashi',
    role: 'Curator, Kyoto Cultural Trust',
    location: 'Kyoto, Japan',
    rating: 5,
    ratingBadgeText: '4.95 Rating',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Minimalist stone tea platform hovering above water court in Kyoto',
    projectSlug: 'the-obsidian-pavilion',
  },
];

export const clientTestimonial: Testimonial = clientTestimonials[0];

export const associatedClients: ClientPartner[] = [
  { id: 'client-1', name: 'ETH Tectonic Lab' },
  { id: 'client-2', name: 'Adobe Spatial' },
  { id: 'client-3', name: 'LADSPA' },
  { id: 'client-4', name: 'Link Architecture' },
  { id: 'client-5', name: 'Sass Group' },
  { id: 'client-6', name: 'Mori Foundation' },
  { id: 'client-7', name: 'Vitra Council' },
  { id: 'client-8', name: 'Swiss Heritage Trust' },
  { id: 'client-9', name: 'Arup Structural' },
  { id: 'client-10', name: 'Buro Happold' },
];
