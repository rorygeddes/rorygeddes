'use client';

import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Stock Market Analysis Tool',
    description: 'A dashboard for tracking and analyzing stock market trends with technical indicators and predictive analytics.',
    tags: ['Finance', 'Data Analysis', 'Stocks'],
    image: '/images/project-stock.jpg',
  },
  {
    id: 2,
    title: 'Investment Portfolio Optimizer',
    description: 'Tool for optimizing investment portfolios based on risk tolerance, time horizon, and financial goals.',
    tags: ['Portfolio Management', 'Risk Assessment', 'Finance'],
    image: '/images/project-portfolio.jpg',
  },
  {
    id: 3,
    title: 'Cryptocurrency Trend Analysis',
    description: 'Analysis of cryptocurrency markets with price predictions and volatility measurements.',
    tags: ['Cryptocurrency', 'Market Analysis', 'Finance'],
    image: '/images/project-crypto.jpg',
  },
  {
    id: 4,
    title: 'Financial Literacy Education Platform',
    description: 'Interactive learning platform teaching fundamental financial concepts for college students.',
    tags: ['Education', 'Financial Literacy', 'E-Learning'],
    image: '/images/project-education.jpg',
  },
  {
    id: 5,
    title: 'Banking System Simulation',
    description: 'A simulation of banking operations including accounts, transactions, and financial reporting.',
    tags: ['Banking', 'Finance', 'Simulation'],
    image: '/images/project-banking.jpg',
  },
  {
    id: 6,
    title: 'Corporate Financial Analysis',
    description: 'Framework for analyzing corporate financial statements and performance metrics.',
    tags: ['Corporate Finance', 'Financial Analysis', 'Business'],
    image: '/images/project-corporate.jpg',
  },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Extract all unique tags from projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on search term and selected tag
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Financial Analysis Projects</h1>
      
      <div className="flex flex-col md:flex-row mb-8 gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute right-3 top-3.5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        
        <select
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">All Categories</option>
          {allTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-white">{project.title}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/projects/${project.id}`} className="text-blue-600 font-medium hover:text-blue-800">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-10">
          <h3 className="text-xl text-gray-600">No projects found matching your criteria</h3>
          <button 
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => {
              setSearchTerm('');
              setSelectedTag('');
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
} 