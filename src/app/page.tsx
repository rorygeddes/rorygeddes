import Image from "next/image";
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-8 relative overflow-hidden rounded-full">
          <Image
            src="/profile.jpg"
            alt="Rory Geddes"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Rory Geddes&apos;s Portfolio!
        </h1>
        
        <p className="text-xl text-gray-600 italic mb-8">
          &quot;Creativity is the foundation of success&quot;
          <br />
          <span className="text-sm">- Rory Geddes</span>
        </p>

        <div className="space-y-4">
          <Link 
            href="/about"
            className="block w-64 mx-auto px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Learn about me →
          </Link>
          
          <Link 
            href="/home"
            className="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Already know me? Go to home screen
          </Link>
        </div>
      </div>
    </div>
  );
}
