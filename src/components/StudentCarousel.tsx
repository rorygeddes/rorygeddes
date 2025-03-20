'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import StudentCard from './StudentCard';

interface Student {
  id: string;
  name: string;
  university: string;
  imagePath: string;
  profileUrl: string;
}

interface StudentCarouselProps {
  students: Student[];
  title: string;
}

export default function StudentCarousel({ students, title }: StudentCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const currentRef = carouselRef.current;
    if (currentRef) {
      checkScrollButtons();
      currentRef.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScrollButtons);
      }
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, []);

  return (
    <div className="w-full py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">{title}</h2>
        
        <div className="relative">
          {canScrollLeft && (
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-6 h-6 text-blue-600" />
            </button>
          )}
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto py-2 gap-6 hide-scrollbar snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {students.map(student => (
              <div key={student.id} className="snap-center flex-shrink-0">
                <StudentCard
                  id={student.id}
                  name={student.name}
                  university={student.university}
                  imagePath={student.imagePath}
                  profileUrl={student.profileUrl}
                />
              </div>
            ))}
          </div>
          
          {canScrollRight && (
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-6 h-6 text-blue-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 