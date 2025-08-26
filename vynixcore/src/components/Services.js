import React from 'react';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence with our data-driven strategies.',
    icon: '📊', // Placeholder icon
  },
  {
    title: 'Web Development',
    description: 'Crafting responsive and high-performance web applications.',
    icon: '💻', // Placeholder icon
  },
  {
    title: 'AI Development',
    description: 'Innovative AI solutions for automation and intelligent insights.',
    icon: '🧠', // Placeholder icon
  },
  {
    title: 'App Development',
    description: 'Building intuitive and scalable mobile applications.',
    icon: '📱', // Placeholder icon
  },
];

function Services() {
  return (
    <section className="py-16 bg-neutral-gray-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent-teal">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-deep-blue p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-gray-light text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
