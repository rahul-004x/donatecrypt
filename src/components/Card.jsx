import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ 
  title, 
  description, 
  image, 
  category, 
  organization, 
  link, 
  linkText = "View Details",
  stats = [], 
  progress = null 
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Card Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
          />
          {category && (
            <div className="absolute top-0 right-0 bg-blue-500 text-xs text-white m-2 px-2 py-1 rounded-full">
              {category}
            </div>
          )}
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-6">
        {organization && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">by {organization}</span>
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        
        {description && (
          <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        )}
        
        {/* Progress Bar */}
        {progress !== null && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>${progress.current.toLocaleString()} raised</span>
              <span>{Math.round((progress.current / progress.goal) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: `${(progress.current / progress.goal) * 100}%` }}
              ></div>
            </div>
            <div className="text-right text-xs text-gray-400 mt-1">
              Goal: ${progress.goal.toLocaleString()}
            </div>
          </div>
        )}
        
        {/* Stats */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-700 p-3 rounded-lg text-center">
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Link */}
        {link && (
          <div className="flex justify-end">
            <Link 
              to={link} 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {linkText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;