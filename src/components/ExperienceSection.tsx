'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  description: string;
  technologies?: string[];
}

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <motion.section 
      className="bg-white rounded-lg shadow-md p-8 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div 
            key={experience.id}
            className="border-l-2 border-purple-200 pl-4 relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-[7px] top-[8px]" />
            <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
            <h4 className="text-lg text-gray-700">{experience.company}</h4>
            <p className="text-sm text-gray-500 mb-2">{experience.period}</p>
            <p className="text-gray-700 mb-2">{experience.description}</p>
            
            {experience.technologies && (
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="bg-purple-100 text-purple-700 text-sm px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 