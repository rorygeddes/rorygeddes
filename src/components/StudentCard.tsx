'use client';

import Image from 'next/image';
import Link from 'next/link';

interface StudentCardProps {
  id: string;
  name: string;
  university: string;
  imagePath: string;
  profileUrl: string;
}

export default function StudentCard({ id, name, university, imagePath, profileUrl }: StudentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-64 transition-transform hover:scale-105">
      <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden bg-gray-200">
        <Image
          src={imagePath}
          alt={`${name}'s profile`}
          fill
          className="object-cover"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600 mb-4 text-center">{university}</p>
      
      <Link 
        href={profileUrl}
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        View Profile
      </Link>
    </div>
  );
} 