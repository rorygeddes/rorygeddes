import React from 'react';
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/24/solid';

const Updates: React.FC = () => {
  const updates = [
    {
      title: 'Setup Buymeacoffee account for support payments!',
      date: 'April 12, 2025',
      content: 'Excited to announce that I\'ve set up a Buy Me A Coffee account to make supporting my projects easier than ever. Now you can directly contribute to my work with just a few clicks!'
    },
    {
      title: 'Bought Luni.dev Domain',
      date: 'April 9, 2025',
      content: 'Working on the backend to release it... Stay tuned for more updates as I build out this exciting platform!'
    },
    {
      title: 'Created first version of Manual Starter Excel Template for Managing Budget',
      date: 'March 30, 2025',
      content: 'I\'ve created the first version of my Manual Starter Excel Template for Managing Budget. This template is designed to help beginners track their expenses and plan their finances effectively. Looking forward to your feedback!'
    },
    {
      title: 'New Project Launch: Luni 2.0',
      date: 'March 15, 2025',
      content: 'I\'m thrilled to announce the launch of Luni 2.0, the next generation of my personal finance manager. This update includes a completely redesigned interface, new budgeting tools, and enhanced transaction categorization.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Latest Updates</h1>
            <p className="mb-8 text-xl text-gray-600">
              Follow my journey as I build and grow products that solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Updates List */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {updates.slice(0, 3).map((update, index) => (
              <div key={index} className="p-6 mb-8 bg-white rounded-lg shadow">
                <h3 className="mb-2 text-xl font-bold">{update.title}</h3>
                <p className="mb-4 text-sm text-gray-500">Posted on {update.date}</p>
                <p className="text-gray-700">{update.content}</p>
              </div>
            ))}

            {/* Locked Section */}
            <div className="p-6 mt-12 mb-8 text-center bg-gray-100 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <LockClosedIcon className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Premium Updates</h3>
              <p className="mb-6 text-gray-700">
                Become an investor to access exclusive updates, behind-the-scenes content, and early access to new features and products.
              </p>
              <Link 
                to="/invest" 
                className="px-6 py-3 font-medium text-white transition-duration-300 rounded bg-accent hover:bg-opacity-90"
              >
                Invest in Rory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Updates; 