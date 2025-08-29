import React from 'react';

const CaseStudyCard = ({ title, description, imageUrl, techUsed }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" loading="lazy" /> {/* Added loading="lazy" */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techUsed.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;