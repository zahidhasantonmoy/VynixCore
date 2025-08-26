import React from 'react';

const blogPosts = [
  {
    title: 'AI Ethics in 2025: Navigating the Future',
    date: 'August 20, 2025',
    author: 'VynixCore Team',
    description: 'Exploring the ethical considerations and challenges of AI development in the coming years.',
  },
  {
    title: 'Web3 Marketing Strategies for the New Digital Era',
    date: 'August 15, 2025',
    author: 'VynixCore Team',
    description: 'How businesses can leverage decentralized technologies for innovative marketing campaigns.',
  },
  {
    title: 'Cross-Platform App Development: A Comprehensive Guide',
    date: 'August 10, 2025',
    author: 'VynixCore Team',
    description: 'A deep dive into the best practices and tools for building apps across multiple platforms.',
  },
];

function Blog() {
  return (
    <section className="py-16 bg-neutral-gray-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent-teal">
          Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-deep-blue p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-neutral-gray-light text-sm mb-2">
                By {post.author} on {post.date}
              </p>
              <p className="text-neutral-gray-light">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
