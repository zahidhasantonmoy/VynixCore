import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI Ethics in 2025",
    date: "August 20, 2025",
    category: "AI",
    tags: ['AI', 'Ethics', 'Future'],
    excerpt: "Exploring the critical considerations and advancements in AI ethics as we move further into the digital age.",
    imageUrl: "https://source.unsplash.com/random/400x300?ai,ethics"
  },
  {
    id: 2,
    title: "Web3 Marketing: A New Frontier for Brands",
    date: "August 15, 2025",
    category: "Marketing",
    tags: ['Web3', 'Marketing', 'Blockchain'],
    excerpt: "How decentralized technologies are reshaping marketing strategies and creating new opportunities for brand engagement.",
    imageUrl: "https://source.unsplash.com/random/400x300?web3,marketing"
  },
  {
    id: 3,
    title: "Scaling Mobile Apps: Best Practices for Growth",
    date: "August 10, 2025",
    category: "App Development",
    tags: ['App Development', 'Scalability', 'Mobile'],
    excerpt: "Key strategies and architectural patterns for building mobile applications that can handle massive user growth.",
    imageUrl: "https://source.unsplash.com/random/400x300?mobileapp,growth"
  },
  {
    id: 4,
    title: "The Impact of AI on Web Development",
    date: "August 5, 2025",
    category: "Web Development",
    tags: ['AI', 'Web Development', 'Automation'],
    excerpt: "Discover how artificial intelligence is revolutionizing web development workflows and capabilities.",
    imageUrl: "https://source.unsplash.com/random/400x300?ai,webdev"
  },
];

const BlogPostCard = ({ title, date, category, excerpt, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" loading="lazy" /> {/* Added loading="lazy" */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{date} | {category}</p>
        <p className="text-gray-700 text-sm mb-4">{excerpt}</p>
        <a href="#" className="text-blue-600 hover:underline">Read More</a>
      </div>
    </div>
  );
};

const Blog = () => {
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredPosts = filterCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === filterCategory);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Blog</h1>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`px-6 py-2 rounded-full text-lg font-semibold ${filterCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            date={post.date}
            category={post.category}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;