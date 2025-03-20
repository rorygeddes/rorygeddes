'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Contact', url: '/contact' },
  ];
  
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">Luni Community</div>
            <p className="text-sm text-blue-200">© {currentYear} Luni Community. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.url}
                className="text-blue-200 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 