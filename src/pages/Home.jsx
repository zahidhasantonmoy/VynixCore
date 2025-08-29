import React from 'react';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import AnimatedStats from '../components/AnimatedStats'; // Import AnimatedStats

const Home = () => {
  return (
    <>
      <section className="hero bg-blue-700 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Powering Your Digital Future with VynixCore</h1>
          <p className="text-xl mb-8">Your all-in-one solution for digital marketing, web development, AI, and app development.</p>
          <button className="bg-teal-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-300 transition duration-300">Get a Free Consultation</button>
        </div>
      </section>

      <section className="services-highlight py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Digital Marketing"
              description="Boost your online presence with our expert SEO, PPC, and social media strategies."
              icon="📈" // Placeholder icon
            />
            <ServiceCard
              title="AI Development"
              description="Leverage AI for chatbots, predictive analytics, and automation to transform your business."
              icon="🤖" // Placeholder icon
            />
            <ServiceCard
              title="Web & App Development"
              description="Craft stunning, responsive websites and powerful cross-platform mobile applications."
              icon="💻" // Placeholder icon
            />
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <AnimatedStats /> {/* Add AnimatedStats here */}
    </>
  );
};

export default Home;