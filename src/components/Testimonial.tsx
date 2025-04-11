import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  imageUrl,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-start">
        {imageUrl && (
          <div className="flex-shrink-0 mr-4">
            <img
              className="object-cover w-12 h-12 rounded-full"
              src={imageUrl}
              alt={name}
            />
          </div>
        )}
        <div>
          <p className="mb-4 italic text-gray-600">"{quote}"</p>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial; 