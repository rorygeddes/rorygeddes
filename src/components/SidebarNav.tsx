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
    { name: 'Updates', path: '/community/updates' },
    { name: 'Announcements', path: '/community/announcements', count: 2 },
    { name: 'New Users', path: '/community/new-users', count: 5 },
    { name: 'Your Feed', path: '/community/feed' },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Community</h2>
      
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
                  <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
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