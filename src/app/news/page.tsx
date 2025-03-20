'use client';

import { CalendarIcon, NewspaperIcon, UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imagePath: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'New features coming soon to Luni Community platform',
    excerpt: 'We\'re excited to announce several new features that will enhance collaboration and networking opportunities for finance students on our platform.',
    category: 'Platform Updates',
    author: 'Luni Team',
    date: 'May 15, 2023',
    readTime: '3 min read',
    imagePath: '/news/placeholder.jpg',
  },
  {
    id: '2',
    title: 'Top financial firms recruiting for summer 2025 internships',
    excerpt: 'Discover which major financial institutions are actively recruiting for their summer 2025 internship programs and how to prepare your applications.',
    category: 'Career Opportunities',
    author: 'Career Services',
    date: 'May 12, 2023',
    readTime: '5 min read',
    imagePath: '/news/placeholder.jpg',
  },
  {
    id: '3',
    title: 'Industry trends shaping finance careers in 2025 and beyond',
    excerpt: 'From AI-driven analytics to sustainable finance, explore the key trends that will shape career opportunities in the financial sector over the next few years.',
    category: 'Industry Insights',
    author: 'Market Analysis Team',
    date: 'May 10, 2023',
    readTime: '7 min read',
    imagePath: '/news/placeholder.jpg',
  },
  {
    id: '4',
    title: 'Upcoming virtual networking events with industry professionals',
    excerpt: 'Mark your calendars for these exclusive networking opportunities with professionals from top financial institutions around the world.',
    category: 'Events',
    author: 'Events Team',
    date: 'May 8, 2023',
    readTime: '2 min read',
    imagePath: '/news/placeholder.jpg',
  },
  {
    id: '5',
    title: 'How recent regulatory changes impact financial job markets',
    excerpt: 'An analysis of how new financial regulations are creating new job opportunities and changing skill requirements across the industry.',
    category: 'Regulatory Updates',
    author: 'Regulatory Affairs',
    date: 'May 5, 2023',
    readTime: '6 min read',
    imagePath: '/news/placeholder.jpg',
  },
  {
    id: '6',
    title: 'Student spotlight: How Maria Chen secured her dream role at Goldman Sachs',
    excerpt: 'Learn how one Luni Community member leveraged the platform and its resources to land a highly competitive position at a leading investment bank.',
    category: 'Success Stories',
    author: 'Community Team',
    date: 'May 2, 2023',
    readTime: '4 min read',
    imagePath: '/news/placeholder.jpg',
  },
];

const categories = [
  'All News',
  'Platform Updates',
  'Career Opportunities',
  'Industry Insights',
  'Events',
  'Regulatory Updates',
  'Success Stories',
];

export default function NewsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Luni News</h1>
          <p className="text-gray-600 max-w-3xl">
            Stay updated with the latest news, trends, and opportunities in the finance industry, 
            as well as platform updates and community highlights.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="mb-8 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  category === 'All News'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsArticles.map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={article.imagePath}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {article.category}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="flex items-center text-gray-500 text-sm">
                    <NewspaperIcon className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </span>
                  
                  <Link 
                    href={`/news/${article.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 