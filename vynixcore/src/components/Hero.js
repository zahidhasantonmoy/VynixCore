import React from 'react';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-deep-blue overflow-hidden">
      {/* Background Animation Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* This is where the particle effects or neural network visuals would go */}
        <div className="w-full h-full bg-gradient-to-br from-deep-blue to-accent-teal animate-pulse"></div>
      </div>

      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          VynixCore: Powering Your Digital Future with AI & Innovation
        </h1>
        <p className="text-xl md:text-2xl text-neutral-gray-light mb-8">
          {/* Auto-rotating text/slider placeholder */}
          AI Solutions | Web Development | Digital Growth
        </p>
        <button className="bg-accent-teal text-deep-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-neon-highlight transition-colors duration-300">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
}

export default Hero;
