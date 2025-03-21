'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  path: string;
  count?: number;
}

export default function SidebarNav() {
  const pathname = usePathname();
  
  const navItems: NavItem[] = [
    { name: 'Dashboard', path: '/home' },
    { name: 'Finance Students', path: '/finance-students' },
    { name: 'Projects', path: '/projects' },
    { name: 'Learning Resources', path: '/resources', count: 3 },
    { name: 'Job Opportunities', path: '/jobs', count: 12 },
    { name: 'Financial News', path: '/news' },
    { name: 'My Profile', path: '/about' },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Navigate</h2>
      
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`flex items-center justify-between p-2 rounded-md ${
                  pathname === item.path 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{item.name}</span>
                {item.count && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    {item.count}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} 