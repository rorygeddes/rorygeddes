import { Metadata } from 'next';
import CardCarousel from '@/components/CardCarousel';

export const metadata: Metadata = {
  title: 'About - Rory Geddes',
  description: 'Learn more about Rory Geddes',
};

const cards = [
  { id: 1, title: 'About Me', content: '' },
  { id: 2, title: 'Education', content: '' },
  { id: 3, title: 'Experience', content: '' },
  { id: 4, title: 'Projects', content: '' },
  { id: 5, title: 'Skills', content: '' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <CardCarousel cards={cards} />
    </div>
  );
} 