export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  accentIndex: number;
}

export const projects: Project[] = [
  {
    id: 'focal',
    title: 'Focal',
    category: 'Identity & Web',
    year: '2025',
    description: 'Brand identity and digital presence for a Swiss precision engineering firm. Flat typography, deep contrast, zero ornament.',
    tags: ['Identity', 'Web', 'Typography'],
    accentIndex: 0,
  },
  {
    id: 'rieder-fleurs',
    title: 'Rieder Fleurs',
    category: 'E-Commerce & Brand',
    year: '2025',
    description: 'Florist shop and delivery platform. Soft interactions, hard contrast. The flowers do the talking.',
    tags: ['E-Commerce', 'Brand', 'Motion'],
    accentIndex: 1,
  },
  {
    id: 'united-heroes',
    title: 'United Heroes',
    category: 'Campaign & Motion',
    year: '2024',
    description: 'A cultural campaign platform for a non-profit. Bold serif headlines, scroll-driven narrative.',
    tags: ['Campaign', 'Motion', 'Storytelling'],
    accentIndex: 2,
  },
  {
    id: 'gottafriend',
    title: 'GottaFriend',
    category: 'Product & App',
    year: '2024',
    description: 'Community platform design. Flat design system, scroll-reactive cards, accessibility-first.',
    tags: ['Product', 'UX', 'Design System'],
    accentIndex: 0,
  },
  {
    id: 'massimo-furlan',
    title: 'Massimo Furlan',
    category: 'Portfolio & Performance',
    year: '2024',
    description: 'Artist portfolio. Video-portrait driven, minimal chrome, maximum contrast.',
    tags: ['Portfolio', 'Video', 'Minimal'],
    accentIndex: 1,
  },
  {
    id: 'se-bouger',
    title: 'Se Bouger',
    category: 'Web & Motion',
    year: '2023',
    description: 'Activism platform. Flat blocks of color, scroll-triggered reveals, typography as architecture.',
    tags: ['Activism', 'Web', 'Typography'],
    accentIndex: 2,
  },
];
