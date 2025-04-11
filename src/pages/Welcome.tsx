import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setFadeIn(true);
    }, 300);
  }, []);

  const sections = [
    {
      title: "Rory Geddes",
      icon: "💼",
      link: "/home",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className={`max-w-4xl mx-auto p-6 pt-12 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} style={{fontFamily: "'Times New Roman', Times, serif"}}>
        <div className="text-center mb-8">
          <h1 className="text-6xl font-normal mb-3" style={{fontFamily: "'Times New Roman', Times, serif"}}>RORY GEDDES</h1>
          
          <p className="mb-6 text-lg">
            Welcome to my personal website!
          </p>
          
          <div className="flex justify-center items-center mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <p className="text-base">
              Currently based in Halifax, NS | Open to internships Fall 2025
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-6 text-base">
            <p>
              Hi! I'm a Commerce Co-op student at Dalhousie University, majoring in Finance and minoring in Computer Science. 
              I'm passionate about exploring innovative solutions at the intersection of business and technology.
            </p>
          </div>
          
          <p className="mb-4 text-sm">Navigate to my portfolio:</p>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          {sections.map((section, index) => (
            <Link 
              key={index}
              to={section.link} 
              className="flex flex-col items-center hover:opacity-80 transition-all"
            >
              <div className="text-4xl mb-2 p-4 bg-gray-50 rounded-full shadow-sm">{section.icon}</div>
              <p className="text-sm font-medium">{section.title}</p>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>rory.geddes@dal.ca | (613)-981-6164</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 