'use client';

import { useState } from 'react';
import { ChatBubbleLeftIcon, UserGroupIcon, TagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface DiscussionTopic {
  id: string;
  title: string;
  category: string;
  lastUpdated: string;
  commentCount: number;
  viewCount: number;
}

const discussionTopics: DiscussionTopic[] = [
  {
    id: '1',
    title: 'Best resources for learning financial modeling?',
    category: 'Resources',
    lastUpdated: '2 hours ago',
    commentCount: 24,
    viewCount: 142,
  },
  {
    id: '2',
    title: 'How to prepare for investment banking interviews?',
    category: 'Career Advice',
    lastUpdated: '1 day ago',
    commentCount: 37,
    viewCount: 283,
  },
  {
    id: '3',
    title: 'Discussion: Impact of recent Fed interest rate changes',
    category: 'Market Discussion',
    lastUpdated: '3 hours ago',
    commentCount: 18,
    viewCount: 97,
  },
  {
    id: '4',
    title: 'Summer internship opportunities 2025',
    category: 'Opportunities',
    lastUpdated: '7 hours ago',
    commentCount: 29,
    viewCount: 215,
  },
  {
    id: '5',
    title: 'Excel vs. Python for financial analysis - which should I learn?',
    category: 'Tools & Software',
    lastUpdated: '2 days ago',
    commentCount: 43,
    viewCount: 326,
  },
  {
    id: '6',
    title: 'Study group for CFA Level I - June 2025',
    category: 'Study Groups',
    lastUpdated: '5 hours ago',
    commentCount: 12,
    viewCount: 78,
  },
];

const categories = [
  'All Topics',
  'Career Advice',
  'Resources',
  'Market Discussion',
  'Opportunities',
  'Tools & Software',
  'Study Groups',
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  
  const filteredTopics = selectedCategory === 'All Topics' 
    ? discussionTopics 
    : discussionTopics.filter(topic => topic.category === selectedCategory);
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Community Discussions</h1>
          <p className="text-gray-600 max-w-3xl">
            Join conversations with other finance students and professionals. Share your insights, ask questions, 
            and learn from the community.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="mb-6 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* New discussion button */}
        <div className="mb-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Start New Discussion
          </button>
        </div>
        
        {/* Discussion list */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {filteredTopics.map((topic, index) => (
            <div 
              key={topic.id}
              className={`p-4 hover:bg-gray-50 transition-colors ${
                index !== filteredTopics.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <Link href={`/community/discussion/${topic.id}`} className="block">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{topic.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="flex items-center mr-4">
                        <TagIcon className="w-4 h-4 mr-1" />
                        {topic.category}
                      </span>
                      <span className="mr-4">Updated {topic.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-4">
                      <ChatBubbleLeftIcon className="w-4 h-4 mr-1" />
                      {topic.commentCount}
                    </span>
                    <span className="flex items-center">
                      <UserGroupIcon className="w-4 h-4 mr-1" />
                      {topic.viewCount}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 