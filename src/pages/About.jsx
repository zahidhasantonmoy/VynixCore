import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard'; // Import TeamMemberCard

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">About VynixCore</h1>

      {/* Company Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At VynixCore, we believe in empowering businesses to thrive in the digital age. Founded in 2025, our mission is to seamlessly integrate cutting-edge AI, robust web solutions, and intuitive mobile applications to drive unparalleled growth for our clients. We are a team of passionate innovators, dedicated to transforming complex challenges into elegant, efficient, and impactful digital experiences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          From strategic digital marketing campaigns that amplify your reach to bespoke AI development that automates and optimizes, and from responsive web platforms to cross-platform mobile apps, VynixCore is your trusted partner for comprehensive digital transformation. We are committed to delivering solutions that are not just technologically advanced, but also deeply aligned with your business objectives, ensuring measurable success in a rapidly evolving market.
        </p>
      </section>

      {/* Mission/Vision */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To innovate, integrate, and accelerate businesses by providing holistic and cutting-edge digital solutions in AI, web, and app development, fostering sustainable growth and digital leadership.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the leading digital transformation agency, recognized for our innovative approach, technical excellence, and unwavering commitment to client success in the global market.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMemberCard
            name="Alice Johnson"
            title="CEO & Lead AI Architect"
            imageUrl="https://source.unsplash.com/random/300x300?person,face,woman"
            bio="Alice leads our AI development, specializing in machine learning and natural language processing. Her vision drives our innovative AI solutions."
          />
          <TeamMemberCard
            name="Bob Williams"
            title="CTO & Web Development Lead"
            imageUrl="https://source.unsplash.com/random/300x300?person,face,man"
            bio="Bob is a full-stack expert, overseeing all web and app development projects. He ensures our platforms are robust, scalable, and user-friendly."
          />
          <TeamMemberCard
            name="Carol Davis"
            title="Head of Digital Marketing"
            imageUrl="https://source.unsplash.com/random/300x300?person,face,girl"
            bio="Carol crafts compelling digital strategies, from SEO to social media, helping our clients achieve maximum online visibility and engagement."
          />
        </div>
      </section>
    </div>
  );
};

export default About;