'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileSectionProps {
  name: string;
  title: string;
  bio: string;
  imagePath: string;
}

export default function ProfileSection({ name, title, bio, imagePath }: ProfileSectionProps) {
  return (
    <motion.section 
      className="bg-white rounded-lg shadow-md p-8 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-40 h-40 relative rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
          <Image
            src={imagePath}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{title}</h2>
          <p className="text-gray-700">{bio}</p>
        </div>
      </div>
    </motion.section>
  );
} 