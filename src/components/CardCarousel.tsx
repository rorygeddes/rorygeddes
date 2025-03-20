'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Card {
  id: number;
  title: string;
  content: React.ReactNode;
}

interface CardCarouselProps {
  cards: Card[];
}

export default function CardCarousel({ cards }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Calculate the progress percentage
  const progressPercentage = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="relative w-full max-w-2xl px-4">
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
          aria-label="Previous card"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg mx-4"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
                {cards[currentIndex].title}
              </h2>
              <div className="min-h-[300px] prose prose-gray max-w-none">
                {cards[currentIndex].content || (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Content coming soon...
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
          aria-label="Next card"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Card indicators */}
      <div className="mt-4 flex justify-center space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-purple-600 scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-6 bg-gray-200 h-1 w-full rounded-full overflow-hidden">
        <div 
          className="bg-purple-600 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/home"
          className="text-purple-600 hover:text-purple-800 transition-colors"
        >
          Go to Home →
        </Link>
      </div>
    </div>
  );
} 