import React from 'react';

const projects = [
  {
    name: 'AI Chatbot for E-commerce',
    category: 'AI',
    image: 'https://via.placeholder.com/300x200/1E3A8A/FFFFFF?text=AI+Chatbot',
    description: 'Developed an intelligent chatbot to enhance customer service and sales.',
  },
  {
    name: 'Modern E-commerce Platform',
    category: 'Web',
    image: 'https://via.placeholder.com/300x200/2DD4BF/FFFFFF?text=E-commerce+Web',
    description: 'Built a scalable and secure e-commerce site with a seamless user experience.',
  },
  {
    name: 'Mobile Banking App',
    category: 'App',
    image: 'https://via.placeholder.com/300x200/374151/FFFFFF?text=Banking+App',
    description: 'Designed and developed a cross-platform mobile banking application.',
  },
  {
    name: 'SEO & Content Strategy',
    category: 'Marketing',
    image: 'https://via.placeholder.com/300x200/60A5FA/FFFFFF?text=SEO+Marketing',
    description: 'Implemented a comprehensive SEO strategy leading to significant organic traffic growth.',
  },
];

function Portfolio() {
  return (
    <section className="py-16 bg-neutral-gray-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent-teal">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-deep-blue rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-neutral-gray-light text-sm mb-4">
                  Category: {project.category}
                </p>
                <p className="text-neutral-gray-light">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
