'use client';

import { motion } from 'framer-motion';
import { DocumentArrowDownIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ResumeSectionProps {
  resumePath: string;
  resumePreviewPath: string;
}

export default function ResumeSection({ resumePath, resumePreviewPath }: ResumeSectionProps) {
  return (
    <motion.section 
      className="bg-white rounded-lg shadow-md p-8 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Resume</h2>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href={resumePreviewPath} 
          target="_blank"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          <EyeIcon className="w-5 h-5" />
          View Resume
        </Link>
        
        <a 
          href={resumePath} 
          download
          className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-md hover:bg-purple-200 transition-colors"
        >
          <DocumentArrowDownIcon className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </motion.section>
  );
} 