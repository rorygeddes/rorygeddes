import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageComponent?: ReactElement;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  imageComponent,
  link,
}) => {
  const isAppIcon = title === 'Luni' || title === 'Luni Community' || title === 'Excel Budget Template'; // Check if this is a project with app icon

  return (
    <div className="card h-full flex flex-col">
      {(imageUrl || imageComponent) && (
        <div className={`mb-4 overflow-hidden ${isAppIcon ? 'flex justify-center' : 'rounded'}`}>
          <div className={isAppIcon ? "w-24 h-24 relative overflow-hidden rounded-xl" : ""}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className={
                  isAppIcon 
                    ? "w-full h-full object-contain" 
                    : "object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                }
              />
            ) : imageComponent}
          </div>
        </div>
      )}
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-600 flex-grow">{description}</p>
      <Link
        to="/projects"
        className="inline-block px-4 py-2 font-medium transition-colors duration-300 border rounded border-accent text-accent hover:bg-accent hover:text-white"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ProjectCard; 