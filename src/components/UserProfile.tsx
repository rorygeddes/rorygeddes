'use client';

import Image from 'next/image';
import Link from 'next/link';

interface UserProfileProps {
  name: string;
  imagePath: string;
  resumeUrl: string;
  resumePdfUrl: string;
}

export default function UserProfile({ name, imagePath, resumeUrl, resumePdfUrl }: UserProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-center">
          <div className="relative w-20 h-20 mx-auto mb-2 bg-gray-200 rounded-full overflow-hidden">
            <Image 
              src={imagePath}
              alt={`${name}'s profile`}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">Click to edit your profile</p>
        </div>
        
        <div className="w-full flex flex-col gap-2">
          <Link 
            href={resumeUrl}
            className="text-blue-600 hover:text-blue-800 text-center"
          >
            View Resume
          </Link>
          
          <Link 
            href={resumePdfUrl}
            className="text-green-600 hover:text-green-800 text-center"
          >
            Download Resume PDF
          </Link>
        </div>
      </div>
    </div>
  );
} 