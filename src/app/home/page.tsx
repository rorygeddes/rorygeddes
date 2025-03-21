'use client';

import ProfileSection from '@/components/ProfileSection';
import ResumeSection from '@/components/ResumeSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import StudentCarousel from '@/components/StudentCarousel';
import UserProfile from '@/components/UserProfile';
import SidebarNav from '@/components/SidebarNav';
import PostCard from '@/components/PostCard';
import NewsCard from '@/components/NewsCard';

// Sample data - you'll replace this with your actual information
const profile = {
  name: 'Rory Geddes',
  title: 'Commerce Student at Dalhousie University',
  bio: 'Third-year Commerce student with a major in Finance and a concentration in Data Analytics. Experience in financial analysis, data-driven insights, and customer service. Passionate about combining business knowledge with analytical skills to drive strategic decision-making.',
  imagePath: '/profile.jpg', // Make sure to add your profile image to the public folder
};

const experiences = [
  {
    id: '1',
    company: 'Bank of Montreal',
    title: 'Summer Intern',
    period: 'May 2023 - August 2023',
    description: 'Utilized Excel to evaluate customer segments, identify growth opportunities, and create automated reports for branch performance. Developed SQL queries to analyze transaction data and generate business insights.',
    technologies: ['Excel', 'SQL', 'Data Analysis', 'Financial Services'],
  },
  {
    id: '2',
    company: 'Golf Town',
    title: 'Sales Associate',
    period: 'March 2022 - August 2022',
    description: 'Managed customer service inquiries and provided product expertise on golf equipment. Processed transactions and maintained store inventory levels.',
    technologies: ['Customer Service', 'Sales', 'Retail Operations'],
  },
  {
    id: '3',
    company: 'Lawtons Drugs',
    title: 'Front Store Clerk',
    period: 'June 2021 - February 2022',
    description: 'Operated checkout systems, processed transactions, and assisted customers with product information. Contributed to store merchandising and inventory management.',
    technologies: ['Customer Service', 'Retail', 'Inventory Management'],
  }
];

const projects = [
  {
    id: '1',
    title: 'Financial Portfolio Analysis',
    description: 'Conducted in-depth analysis of a diversified investment portfolio, examining risk metrics, returns, and recommending optimization strategies to maximize risk-adjusted performance.',
    technologies: ['Financial Analysis', 'Excel', 'Risk Assessment', 'Investment Strategies'],
    imagePath: '/projects/project1.jpg', // Add project images to public/projects/
    projectUrl: '#',
  },
  {
    id: '2',
    title: 'Banking Customer Segmentation',
    description: 'Analyzed banking customer data to identify distinct customer segments, their specific needs, and developed targeted service strategies to improve customer satisfaction and retention.',
    technologies: ['SQL', 'Data Analysis', 'Customer Analytics', 'Excel'],
    imagePath: '/projects/project2.jpg',
    projectUrl: '#',
  },
  {
    id: '3',
    title: 'Market Research Report',
    description: 'Researched emerging market trends in the financial technology sector, analyzing competitive landscape and identifying growth opportunities for established banking institutions.',
    technologies: ['Market Research', 'Industry Analysis', 'Trend Forecasting'],
    imagePath: '/projects/project3.jpg',
    projectUrl: '#',
  }
];

const skillCategories = [
  {
    id: '1',
    name: 'Finance',
    skills: ['Financial Analysis', 'Budgeting', 'Investment Analysis', 'Financial Modeling', 'Risk Assessment', 'Banking'],
  },
  {
    id: '2',
    name: 'Data & Analytics',
    skills: ['SQL', 'Excel', 'Data Analysis', 'Business Intelligence', 'Data Visualization', 'Reporting'],
  },
  {
    id: '3',
    name: 'Business',
    skills: ['Strategic Planning', 'Market Research', 'Customer Service', 'Project Management', 'Business Development'],
  },
  {
    id: '4',
    name: 'Software & Tools',
    skills: ['Microsoft Office Suite', 'Power BI', 'Tableau', 'Bloomberg Terminal', 'Financial Databases'],
  },
  {
    id: '5',
    name: 'Soft Skills',
    skills: ['Communication', 'Problem Solving', 'Teamwork', 'Critical Thinking', 'Attention to Detail', 'Time Management'],
  },
];

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
    university: 'Dalhousie University',
    imagePath: '/profile.jpg',
    profileUrl: '/about',
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
    type: 'system' as const,
    author: 'System Admin',
    timestamp: '2h ago',
    content: 'Welcome to the Finance Student Community Hub! Connect with peers, share insights, and discover opportunities in finance.',
  },
  {
    type: 'user' as const,
    author: 'Emily Zhang',
    timestamp: '5h ago',
    content: 'Just finished my financial analysis project on sustainable investing trends. Would love to connect with others interested in ESG investing!',
  },
  {
    type: 'user' as const,
    author: 'Michael Chen',
    timestamp: '1d ago',
    content: 'Has anyone used Bloomberg Terminal for portfolio optimization? Looking for tips on efficient frontier calculation.',
  },
];

const newsItems = [
  {
    title: 'Top Finance Internships for Summer 2024',
    timeAgo: '1d ago',
    readers: 1234,
  },
  {
    title: 'New Financial Analysis Tools for Students',
    timeAgo: '2d ago',
    readers: 987,
  },
  {
    title: 'Finance Industry Outlook: 2024-2025',
    timeAgo: '3d ago',
    readers: 2189,
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Student carousel section */}
      <StudentCarousel students={students} title="Connect with Finance Students" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar */}
          <div className="lg:w-1/4">
            <UserProfile 
              name={profile.name}
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
                  placeholder="Share insights or ask questions..." 
                  className="bg-transparent w-full outline-none text-gray-700" 
                />
              </div>
              <div className="flex justify-end mt-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Post
                </button>
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
              <h2 className="text-xl font-bold mb-4 text-blue-600">Finance News</h2>
              
              {newsItems.map((item, index) => (
                <NewsCard 
                  key={index}
                  title={item.title}
                  timeAgo={item.timeAgo}
                  readers={item.readers}
                />
              ))}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold mb-4 text-blue-600">Upcoming Events</h2>
              <ul className="space-y-3">
                <li className="pb-3 border-b">
                  <p className="font-semibold">Finance Career Fair</p>
                  <p className="text-sm text-gray-600">Oct 15, 2023 • Virtual</p>
                </li>
                <li className="pb-3 border-b">
                  <p className="font-semibold">Investment Strategy Workshop</p>
                  <p className="text-sm text-gray-600">Oct 22, 2023 • Online</p>
                </li>
                <li>
                  <p className="font-semibold">Financial Modeling Competition</p>
                  <p className="text-sm text-gray-600">Nov 5-7, 2023 • Registration Open</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 