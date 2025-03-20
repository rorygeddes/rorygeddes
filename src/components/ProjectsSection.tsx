'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imagePath: string;
  projectUrl?: string;
  githubUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <motion.section 
      className="bg-white rounded-lg shadow-md p-8 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.imagePath}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-purple-100 text-purple-700 text-sm px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.projectUrl && (
                  <Link 
                    href={project.projectUrl} 
                    target="_blank"
                    className="text-purple-700 hover:text-purple-900 font-medium"
                  >
                    View Project →
                  </Link>
                )}
                
                {project.githubUrl && (
                  <Link 
                    href={project.githubUrl} 
                    target="_blank"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 