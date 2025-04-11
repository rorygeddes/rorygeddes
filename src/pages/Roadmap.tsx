import React from 'react';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';

interface RoadmapItem {
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

const Roadmap: React.FC = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      title: 'Launch Luni Beta',
      description: 'Release the beta version of Luni to a select group of student testers and gather initial feedback.',
      date: 'January 2023',
      status: 'completed',
    },
    {
      title: 'Rory Ventures Website Launch',
      description: 'Create and launch the personal brand website to showcase projects and connect with supporters.',
      date: 'October 2023',
      status: 'completed',
    },
    {
      title: 'Luni Community Growth',
      description: 'Reach 500 active members in the Luni Community and implement the mentor matching feature.',
      date: 'September 2023',
      status: 'completed',
    },
    {
      title: 'Luni Full Release',
      description: 'Official public launch of Luni with all core features implemented and initial user base established.',
      date: 'March 2023',
      status: 'completed',
    },
    {
      title: 'Raise $10,000 in Community Funding',
      description: 'Secure funding from community supporters to accelerate project development and expansion.',
      date: 'December 2023',
      status: 'in-progress',
    },
    {
      title: 'Excel Budget Template Release',
      description: 'Release a comprehensive Excel budget template for students and young professionals.',
      date: 'January 2024',
      status: 'in-progress',
    },
    {
      title: 'Luni Community Premium Features',
      description: 'Launch premium membership tier with advanced resources and tools for founders.',
      date: 'February 2024',
      status: 'upcoming',
    },
    {
      title: 'Luni Partnership Program',
      description: 'Establish partnerships with universities and student organizations to expand Luni\'s reach.',
      date: 'April 2024',
      status: 'upcoming',
    },
    {
      title: 'Excel Budget Template V2',
      description: 'Release an enhanced version of the budget template with additional features and customization options.',
      date: 'May 2024',
      status: 'upcoming',
    },
    {
      title: 'First Annual Finance Summit',
      description: 'Host a virtual summit for finance enthusiasts and entrepreneurs using my platforms and tools.',
      date: 'June 2024',
      status: 'upcoming',
    },
    {
      title: 'Launch New Project (TBA)',
      description: 'Unveil a new project based on community feedback and emerging opportunities.',
      date: 'Q3 2024',
      status: 'upcoming',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Live Roadmap</h1>
            <p className="mb-8 text-xl text-gray-600">
              Follow my journey and see what's coming next.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-sm text-gray-600">Completed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="ml-2 text-sm text-gray-600">In Progress</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="ml-2 text-sm text-gray-600">Upcoming</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {roadmapItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-5/12 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 z-10 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow">
                      <div
                        className={`w-full h-full rounded-full flex items-center justify-center ${
                          item.status === 'completed'
                            ? 'bg-green-500'
                            : item.status === 'in-progress'
                            ? 'bg-blue-500'
                            : 'bg-gray-300'
                        }`}
                      >
                        {item.status === 'completed' ? (
                          <CheckIcon className="w-5 h-5 text-white" />
                        ) : (
                          <ClockIcon className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Empty Space for the other side */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center">Strategic Goals</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-xl font-bold">Short-Term (6 Months)</h3>
              <ul className="ml-6 space-y-3 list-disc">
                <li className="text-gray-600">Complete funding round of $10,000</li>
                <li className="text-gray-600">Launch enhanced Excel Budget Template</li>
                <li className="text-gray-600">Grow Luni Community to 1,000+ members</li>
                <li className="text-gray-600">Implement premium features across all platforms</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-xl font-bold">Mid-Term (1 Year)</h3>
              <ul className="ml-6 space-y-3 list-disc">
                <li className="text-gray-600">Achieve 5,000+ active users across all platforms</li>
                <li className="text-gray-600">Establish partnerships with 10+ universities</li>
                <li className="text-gray-600">Host first virtual summit for community</li>
                <li className="text-gray-600">Launch at least one new major project</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-xl font-bold">Long-Term (2+ Years)</h3>
              <ul className="ml-6 space-y-3 list-disc">
                <li className="text-gray-600">Build sustainable revenue model across all projects</li>
                <li className="text-gray-600">Expand team with dedicated developers and designers</li>
                <li className="text-gray-600">Reach 50,000+ users across the product ecosystem</li>
                <li className="text-gray-600">Create a venture fund to invest in student entrepreneurs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Input */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Help Shape the Roadmap</h2>
            <p className="mb-8 text-xl text-gray-600">
              As an investor and community member, your input helps prioritize what gets built next.
            </p>
            <a
              href="mailto:feedback@roryventures.com"
              className="px-8 py-3 font-medium transition-colors duration-300 rounded bg-accent text-white hover:bg-opacity-90"
            >
              Submit Feature Request
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap; 