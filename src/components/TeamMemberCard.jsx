import React from 'react';

const TeamMemberCard = ({ name, title, imageUrl, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-teal-600 font-medium mb-4">{title}</p>
      <p className="text-gray-700 text-sm leading-relaxed">{bio}</p>
    </div>
  );
};

export default TeamMemberCard;