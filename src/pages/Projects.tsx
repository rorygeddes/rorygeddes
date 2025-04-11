import React from 'react';
import LuniImage from '../Luni.png';
import LuniCommunityImage from '../LuniCommunity.png';
import ExcelLogoImage from '../Excel Logo.png';

interface ProjectInfo {
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  link: string;
  technologies: string[];
  status: 'In Development' | 'Beta' | 'Live';
}

const Projects: React.FC = () => {
  const projects: ProjectInfo[] = [
    {
      title: 'Luni',
      description: 'A budgeting app for students, designed to help manage expenses and plan finances effectively.',
      fullDescription: 
        'Luni is a budgeting app specifically designed for students to help them manage their finances effectively. ' +
        'With features like expense tracking, budget planning, and financial insights, Luni makes it easy for students ' +
        'to stay on top of their money. The app includes integration with student discounts, textbook price comparisons, ' +
        'and roommate expense splitting to address the unique financial challenges students face.',
      imageUrl: LuniImage,
      link: 'https://luni.dev',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      status: 'Beta',
    },
    {
      title: 'Luni Community',
      description: 'A community-driven platform connecting founders with the resources they need to succeed.',
      fullDescription: 
        'Luni Community is a platform that connects early-stage founders with resources, mentors, and each other. ' +
        'The community-driven approach helps startup founders navigate the challenges of building a company ' +
        'by providing access to experienced mentors, funding opportunities, and peer support. ' +
        'Luni Community includes features like resource libraries, mentor matching, and founder forums to ' +
        'create a comprehensive support system for entrepreneurs.',
      imageUrl: LuniCommunityImage,
      link: 'https://lunicommunity.com',
      technologies: ['React', 'Express', 'MongoDB', 'AWS'],
      status: 'Beta',
    },
    {
      title: 'Excel Budget Template',
      description: 'An easy-to-use Excel budget template to help you manage your finances and track expenses.',
      fullDescription: 
        'This Excel Budget Template is designed to help anyone from students to professionals manage their finances ' +
        'with ease. The template includes monthly expense tracking, income forecasting, savings goals, ' +
        'and visualizations to help you understand your spending habits. It\'s a simple yet powerful tool ' +
        'that makes budgeting accessible to everyone, regardless of financial expertise.',
      imageUrl: ExcelLogoImage,
      link: 'https://rorygeddes.github.io/budget-template/excel-budget-template.xlsx',
      technologies: ['Microsoft Excel', 'Spreadsheet Formulas', 'Data Visualization'],
      status: 'Live',
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">My Projects</h1>
            <p className="mb-8 text-xl text-gray-600">
              Exploring ideas, solving problems, and building the future.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="p-8 border rounded-lg shadow-sm">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <div className="overflow-hidden rounded flex justify-center">
                      {(project.title === 'Luni' || project.title === 'Luni Community' || project.title === 'Excel Budget Template') ? (
                        <div className="w-24 h-24 relative overflow-hidden rounded-xl">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                        />
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center mb-2">
                        <span className="font-semibold">Status:</span>
                        <span className={`ml-2 px-2 py-1 text-xs font-medium text-white rounded ${
                          project.status === 'Live' ? 'bg-green-500' : 
                          project.status === 'Beta' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <span className="font-semibold">Tech Stack:</span>
                        <div className="flex flex-wrap mt-2 gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 text-xs bg-gray-100 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 font-medium transition-colors duration-300 border rounded border-accent text-accent hover:bg-accent hover:text-white"
                      >
                        Visit Project
                      </a>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h2 className="mb-4 text-2xl font-bold">{project.title}</h2>
                    <p className="mb-4 text-lg font-medium text-gray-700">
                      {project.description}
                    </p>
                    <p className="text-gray-600">
                      {project.fullDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-accent">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Have a Project Idea?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            I'm always open to new collaborations and opportunities. Let's build something amazing together.
          </p>
          <a
            href="mailto:contact@roryventures.com"
            className="px-8 py-3 font-medium bg-white rounded-md text-accent hover:bg-gray-100"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects; 