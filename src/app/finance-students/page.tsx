'use client';

import StudentCard from '@/components/StudentCard';

// Sample data
const students = [
  {
    id: '1',
    name: 'Sarah Johnson',
    university: 'Harvard Business School',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/sarah-johnson',
  },
  {
    id: '2',
    name: 'Michael Chen',
    university: 'Stanford University',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/michael-chen',
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    university: 'Wharton School of Business',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/alex-rodriguez',
  },
  {
    id: '4',
    name: 'Rory Geddes',
    university: 'New York University',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/rory-geddes',
  },
  {
    id: '5',
    name: 'Emily Zhang',
    university: 'MIT Sloan',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/emily-zhang',
  },
  {
    id: '6',
    name: 'David Kim',
    university: 'Columbia Business School',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/david-kim',
  },
  {
    id: '7',
    name: 'Sophia Patel',
    university: 'Chicago Booth',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/sophia-patel',
  },
  {
    id: '8',
    name: 'James Wilson',
    university: 'London Business School',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/james-wilson',
  },
  {
    id: '9',
    name: 'Olivia Martinez',
    university: 'INSEAD',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/olivia-martinez',
  },
  {
    id: '10',
    name: 'Daniel Lee',
    university: 'Berkeley Haas',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/daniel-lee',
  },
  {
    id: '11',
    name: 'Ava Williams',
    university: 'Yale School of Management',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/ava-williams',
  },
  {
    id: '12',
    name: 'Noah Brown',
    university: 'Northwestern Kellogg',
    imagePath: '/students/placeholder.jpg',
    profileUrl: '/students/noah-brown',
  },
];

export default function FinanceStudentsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Finance Students</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with finance students from top universities around the world. 
            Expand your network, share resources, and collaborate on projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              university={student.university}
              imagePath={student.imagePath}
              profileUrl={student.profileUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 