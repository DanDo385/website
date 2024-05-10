// components/ProjectCards.tsx
import React from 'react';

const ProjectCards = ({ name, languages, description, repoLink }) => {
  return (
    <div className="flex flex-col items-start justify-between p-6 bg-black rounded-lg border border-green-400 shadow-md">
      <h2 className="text-lg font-semibold ">{name}</h2>
      <p className="text-sm">Technologies Used: {languages || 'N/A'}</p>
      <p className="text-sm">{description || 'No description available'}</p>
      <a href={repoLink || '#'} className="mt-4 text-white hover:underline hover:text-white">GitHub Repository</a>
    </div>
  );
};

export default ProjectCards;
