import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "VynixCore transformed our online presence. Their digital marketing strategies are top-notch!",
    author: "Jane Doe, CEO of StartupX"
  },
  {
    quote: "The AI solution developed by VynixCore significantly improved our operational efficiency.",
    author: "John Smith, Operations Manager at SME Corp"
  },
  {
    quote: "Our new e-commerce website is fast, responsive, and looks amazing. Highly recommend VynixCore!",
    author: "Emily White, Founder of E-commerce Brand"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <p className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</p>
          <p className="text-lg font-semibold text-teal-400">- {testimonials[currentIndex].author}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;