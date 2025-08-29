import React, { useState } from 'react';
import CaseStudyCard from '../components/CaseStudyCard';

const projects = [
  {
    id: 1,
    title: "E-commerce AI Chatbot",
    description: "An intelligent AI chatbot integrated into an e-commerce platform to enhance customer support and sales.",
    imageUrl: "https://source.unsplash.com/random/400x300?ai,chatbot",
    techUsed: ['Python', 'Dialogflow', 'React'],
    category: 'AI',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder video
  },
  {
    id: 2,
    title: "Responsive Business Website",
    description: "A modern, responsive website designed for a small business, focusing on lead generation and user experience.",
    imageUrl: "https://source.unsplash.com/random/400x300?website,business",
    techUsed: ['React', 'Tailwind CSS', 'Node.js'],
    category: 'Web',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder video
  },
  {
    id: 3,
    title: "Cross-Platform Fitness App",
    description: "A mobile application developed for fitness enthusiasts, featuring workout tracking, nutrition plans, and community features.",
    imageUrl: "https://source.unsplash.com/random/400x300?mobileapp,fitness",
    techUsed: ['Flutter', 'Firebase', 'Dart'],
    category: 'App',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder video
  },
  {
    id: 4,
    title: "Predictive Analytics Dashboard",
    description: "A powerful dashboard utilizing machine learning to provide predictive insights for sales forecasting.",
    imageUrl: "https://source.unsplash.com/random/400x300?analytics,dashboard",
    techUsed: ['Python', 'TensorFlow', 'Tableau'],
    category: 'AI',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder video
  },
  {
    id: 5,
    title: "E-commerce Platform Redesign",
    description: "Complete redesign and re-platforming of an existing e-commerce site, improving performance and conversion rates.",
    imageUrl: "https://source.unsplash.com/random/400x300?ecommerce,redesign",
    techUsed: ['Next.js', 'Stripe', 'GraphQL'],
    category: 'Web',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder video
  },
  {
    id: 6,
    title: "On-Demand Service App",
    description: "A user-friendly mobile app connecting users with local service providers for various on-demand needs.",
    imageUrl: "https://source.unsplash.com/random/400x300?app,ondemand",
    techUsed: ['React Native', 'Node.js', 'PostgreSQL'],
    category: 'App',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder video
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Portfolio</h1>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-12">
        <button
          onClick={() => setFilter('All')}
          className={`px-6 py-2 rounded-full text-lg font-semibold ${filter === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Web')}
          className={`px-6 py-2 rounded-full text-lg font-semibold ${filter === 'Web' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
        >
          Web Development
        </button>
        <button
          onClick={() => setFilter('AI')}
          className={`px-6 py-2 rounded-full text-lg font-semibold ${filter === 'AI' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
        >
          AI Development
        </button>
        <button
          onClick={() => setFilter('App')}
          className={`px-6 py-2 rounded-full text-lg font-semibold ${filter === 'App' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
        >
          App Development
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <CaseStudyCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            techUsed={project.techUsed}
          />
        ))}
      </div>

      {/* Video Demos - Placeholder for now */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Video Demos</h2>
        <p className="text-center text-gray-600">Video demonstrations of our projects will be embedded here.</p>
        {/* Example of embedding a video */}
        {/*
        <div className="aspect-w-16 aspect-h-9 mt-8">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Project Video Demo"
            className="w-full h-full"
          ></iframe>
        </div>
        */}
      </section>
    </div>
  );
};

export default Portfolio;