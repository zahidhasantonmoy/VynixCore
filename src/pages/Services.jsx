import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard'; // Import CaseStudyCard

const Services = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h1>

      {/* Digital Marketing */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Digital Marketing</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Amplify your brand's reach and engagement with our comprehensive digital marketing solutions. We craft data-driven strategies to connect you with your target audience and drive measurable results.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 ml-4">
          <li>Search Engine Optimization (SEO)</li>
          <li>Pay-Per-Click (PPC) Advertising</li>
          <li>Social Media Marketing</li>
          <li>Content Strategy & Creation</li>
        </ul>
        <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300">Learn More</button>
      </section>

      {/* Web Development */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Web Development</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          From stunning responsive websites to robust e-commerce platforms, we build digital experiences that are not only visually appealing but also highly functional and secure.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 ml-4">
          <li>Responsive Website Design & Development</li>
          <li>E-commerce Solutions (Shopify, WooCommerce)</li>
          <li>Content Management Systems (CMS) like WordPress</li>
          <li>Custom Web Applications</li>
        </ul>
        <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300">Learn More</button>
      </section>

      {/* AI Development */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">AI Development</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Harness the power of Artificial Intelligence to automate processes, gain insights, and create intelligent solutions that give you a competitive edge.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 ml-4">
          <li>AI Chatbots & Virtual Assistants</li>
          <li>Predictive Analytics & Machine Learning</li>
          <li>Automation MVPs (Minimum Viable Products)</li>
          <li>Custom AI Model Development</li>
        </ul>
        <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300">Learn More</button>
      </section>

      {/* App Development */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">App Development</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Reach your audience on the go with custom mobile and web applications. We build cross-platform solutions that deliver seamless user experiences on any device.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 ml-4">
          <li>Cross-Platform Mobile Apps (e.g., Flutter-based)</li>
          <li>Native iOS & Android App Development</li>
          <li>Progressive Web Apps (PWAs)</li>
          <li>App UI/UX Design</li>
        </ul>
        <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300">Learn More</button>
      </section>

      {/* Case Studies */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Our Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard
            title="AI Chatbot for E-commerce"
            description="Developed an intelligent AI chatbot that improved customer service and sales conversion for an online retail brand."
            imageUrl="https://source.unsplash.com/random/400x300?chatbot,ecommerce"
            techUsed={['Python', 'Dialogflow', 'React']}
          />
          <CaseStudyCard
            title="Responsive E-commerce Website"
            description="Built a high-performance, responsive e-commerce website with seamless user experience across all devices."
            imageUrl="https://source.unsplash.com/random/400x300?website,ecommerce"
            techUsed={['React', 'Node.js', 'MongoDB', 'Tailwind CSS']}
          />
          <CaseStudyCard
            title="Cross-Platform Mobile App"
            description="Designed and developed a cross-platform mobile application for a startup, enhancing user engagement and accessibility."
            imageUrl="https://source.unsplash.com/random/400x300?mobileapp,startup"
            techUsed={['Flutter', 'Firebase', 'Dart']}
          />
        </div>
      </section>
    </div>
  );
};

export default Services;