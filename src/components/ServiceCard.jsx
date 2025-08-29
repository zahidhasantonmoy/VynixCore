import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
      <div className="text-4xl text-teal-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;