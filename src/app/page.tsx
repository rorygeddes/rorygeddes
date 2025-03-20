'use client';

import StudentCarousel from '@/components/StudentCarousel';
import UserProfile from '@/components/UserProfile';
import SidebarNav from '@/components/SidebarNav';
import PostCard from '@/components/PostCard';
import NewsCard from '@/components/NewsCard';

// Sample data
const students = [
  {
    id: '1',
    name: 'Sarah Johnson',
    university: 'Harvard Business School',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/sarah-johnson',
  },
  {
    id: '2',
    name: 'Michael Chen',
    university: 'Stanford University',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/michael-chen',
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    university: 'Wharton School of Business',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/alex-rodriguez',
  },
  {
    id: '4',
    name: 'Rory Geddes',
    university: 'New York University',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/rory-geddes',
  },
  {
    id: '5',
    name: 'Emily Zhang',
    university: 'MIT Sloan',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/emily-zhang',
  },
  {
    id: '6',
    name: 'David Kim',
    university: 'Columbia Business School',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/david-kim',
  },
  {
    id: '7',
    name: 'Sophia Patel',
    university: 'Chicago Booth',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/sophia-patel',
  },
];

const posts = [
  {
    type: 'system',
    author: 'System Admin',
    timestamp: '2h ago',
    content: 'We\'ve just released our new messaging system! Check it out in the messaging tab.',
  },
  {
    type: 'tech',
    author: 'Tech Team',
    timestamp: '5h ago',
    content: 'Server maintenance scheduled for tomorrow at 2 AM EST. Expected downtime: 30 minutes.',
  },
];

const newsItems = [
  {
    title: 'New features coming soon to the platform!',
    timeAgo: '1d ago',
    readers: 1234,
  },
  {
    title: 'Top companies hiring this week',
    timeAgo: '2d ago',
    readers: 6678,
  },
  {
    title: 'Industry trends for 2025',
    timeAgo: '3d ago',
    readers: 9012,
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Student carousel section */}
      <StudentCarousel students={students} title="Finance Students" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar */}
          <div className="lg:w-1/4">
            <UserProfile 
              name="Rory"
              imagePath="/profile.jpg"
              resumeUrl="/resume"
              resumePdfUrl="/resume.pdf"
            />
            
            <SidebarNav />
          </div>
          
          {/* Main feed */}
          <div className="lg:w-2/4">
            {/* New post input */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus-within:border-blue-500">
                <input 
                  type="text" 
                  placeholder="Start a post" 
                  className="bg-transparent w-full outline-none text-gray-700" 
                />
              </div>
            </div>
            
            {/* Posts feed */}
            <div className="space-y-4">
              {posts.map((post, index) => (
                <PostCard
                  key={index}
                  type={post.type}
                  author={post.author}
                  timestamp={post.timestamp}
                  content={post.content}
                />
              ))}
            </div>
          </div>
          
          {/* Right sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h2 className="text-xl font-bold mb-4 text-blue-600">Luni News</h2>
              
              {newsItems.map((item, index) => (
                <NewsCard 
                  key={index}
                  title={item.title}
                  timeAgo={item.timeAgo}
                  readers={item.readers}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
