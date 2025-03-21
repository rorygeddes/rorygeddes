'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section with blue background */}
      <section className="bg-blue-600 py-32 flex-grow flex flex-col items-center justify-center text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">Luni Community</h1>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Showcase your financial analysis projects, connect with peers, and build your
            professional portfolio.
          </p>
          <Link 
            href="/home" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Join Our Community
          </Link>
        </div>
      </section>

      {/* Featured projects section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">Featured Projects</h2>
          
          {/* You can add featured projects here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* This is a placeholder for featured projects */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Financial Analysis Project {item}</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive analysis of market trends and investment opportunities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Financial Analysis', 'Data Visualization', 'Investment'].map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
