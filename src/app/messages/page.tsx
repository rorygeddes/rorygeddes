'use client';

import { useState } from 'react';
import { PaperAirplaneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface User {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
}

const users: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: '/students/placeholder.jpg',
    lastMessage: 'Thanks for sharing those resources!',
    timestamp: '2m ago',
    unread: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: '/students/placeholder.jpg',
    lastMessage: 'Are you attending the virtual networking event tomorrow?',
    timestamp: '1h ago',
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    avatar: '/students/placeholder.jpg',
    lastMessage: 'I found a great internship opportunity you might be interested in.',
    timestamp: '3h ago',
  },
  {
    id: '4',
    name: 'Emily Zhang',
    avatar: '/students/placeholder.jpg',
    lastMessage: 'Have you started preparing for the case interviews?',
    timestamp: '1d ago',
  },
  {
    id: '5',
    name: 'David Kim',
    avatar: '/students/placeholder.jpg',
    lastMessage: 'Let me know when you\'re free to discuss the group project.',
    timestamp: '2d ago',
  },
];

// Sample conversation with Sarah Johnson
const conversation = [
  {
    id: '1',
    sender: 'Sarah Johnson',
    message: 'Hi! I saw you\'re also interested in investment banking. What specific area are you focusing on?',
    timestamp: '2:30 PM',
    isMe: false,
  },
  {
    id: '2',
    sender: 'Me',
    message: 'Hey Sarah! I\'m particularly interested in M&A advisory. How about you?',
    timestamp: '2:32 PM',
    isMe: true,
  },
  {
    id: '3',
    sender: 'Sarah Johnson',
    message: 'That\'s great! I\'m leaning towards capital markets. By the way, I found some really helpful resources for interview prep that I thought you might like.',
    timestamp: '2:35 PM',
    isMe: false,
  },
  {
    id: '4',
    sender: 'Me',
    message: 'That would be super helpful! I\'m starting to prepare for summer internship applications.',
    timestamp: '2:38 PM',
    isMe: true,
  },
  {
    id: '5',
    sender: 'Sarah Johnson',
    message: 'Here\'s a link to a collection of case studies and technical questions from recent interviews. It helped me a lot!',
    timestamp: '2:40 PM',
    isMe: false,
  },
  {
    id: '6',
    sender: 'Me',
    message: 'Thanks for sharing those resources!',
    timestamp: '2:45 PM',
    isMe: true,
  },
];

export default function MessagesPage() {
  const [selectedUserId, setSelectedUserId] = useState('1'); // Default to first user
  
  const selectedUser = users.find(user => user.id === selectedUserId);
  
  return (
    <div className="bg-gray-50 min-h-screen py-4">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex h-[calc(100vh-12rem)]">
            {/* User list sidebar */}
            <div className="w-1/3 border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search messages"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(100%-4rem)]">
                {users.map(user => (
                  <div 
                    key={user.id}
                    onClick={() => setSelectedUserId(user.id)}
                    className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedUserId === user.id ? 'bg-blue-50' : ''
                    } ${user.unread ? 'font-semibold' : ''}`}
                  >
                    <div className="relative w-12 h-12 mr-3">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        fill
                        className="object-cover rounded-full"
                      />
                      {user.unread && (
                        <span className="absolute top-0 right-0 w-3 h-3 bg-blue-600 rounded-full border-2 border-white" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium text-gray-900 truncate">{user.name}</h3>
                        <span className="text-xs text-gray-500">{user.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{user.lastMessage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Conversation area */}
            <div className="w-2/3 flex flex-col">
              {selectedUser && (
                <>
                  {/* Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center">
                    <div className="relative w-10 h-10 mr-3">
                      <Image
                        src={selectedUser.avatar}
                        alt={selectedUser.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{selectedUser.name}</h3>
                    </div>
                  </div>
                  
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {conversation.map(message => (
                      <div 
                        key={message.id}
                        className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                            message.isMe 
                              ? 'bg-blue-600 text-white rounded-br-none' 
                              : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                          }`}
                        >
                          <p>{message.message}</p>
                          <p className={`text-xs mt-1 ${message.isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Input area */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-l-lg"
                      />
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                        <PaperAirplaneIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 