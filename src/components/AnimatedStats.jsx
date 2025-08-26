import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = (duration / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span className="text-5xl font-bold text-teal-400">{count}+</span>;
};

const AnimatedStats = () => {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-lg">
            <AnimatedNumber target={100} duration={2} />
            <p className="text-xl mt-2">Projects Delivered</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg">
            <AnimatedNumber target={50} duration={2} />
            <p className="text-xl mt-2">Happy Clients</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg">
            <AnimatedNumber target={10} duration={2} />
            <p className="text-xl mt-2">Years in Business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;