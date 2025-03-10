'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Card {
  id: number;
  title: string;
  content: string;
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

  return (
    <div className="relative w-full max-w-2xl px-4">
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
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
              <h2 className="text-2xl font-bold mb-4 text-center">
                {cards[currentIndex].title}
              </h2>
              <div className="min-h-[200px] flex items-center justify-center text-gray-500">
                Content coming soon...
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/home"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Go to Home →
        </Link>
      </div>
    </div>
  );
} 