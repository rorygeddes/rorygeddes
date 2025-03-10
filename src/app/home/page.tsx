import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Rory Geddes',
  description: 'Welcome to my portfolio',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">Home</h1>
    </div>
  );
} 