'use client';

import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

interface PostCardProps {
  type: 'system' | 'user' | 'tech';
  author: string;
  timestamp: string;
  content: string;
}

export default function PostCard({ type, author, timestamp, content }: PostCardProps) {
  const getTypeIcon = () => {
    switch (type) {
      case 'system':
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
            <span className="font-bold">System</span>
          </div>
        );
      case 'tech':
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg">
            <span className="font-bold">Tech</span>
          </div>
        );
      case 'user':
      default:
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-lg">
            <UserIcon className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-start">
        {getTypeIcon()}
        
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-gray-900">{author}</h4>
            <div className="flex items-center text-gray-500 text-sm">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>{timestamp}</span>
            </div>
          </div>
          
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
} 