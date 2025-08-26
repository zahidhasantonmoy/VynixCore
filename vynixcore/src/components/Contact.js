import React from 'react';

function Contact() {
  return (
    <section className="py-16 bg-neutral-gray-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent-teal">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto bg-deep-blue p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-neutral-gray-light text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-gray-light"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-neutral-gray-light text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-gray-light"
                placeholder="your@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-neutral-gray-light text-sm font-bold mb-2">
                Service Type
              </label>
              <select
                id="service"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-gray-light"
              >
                <option>Digital Marketing</option>
                <option>Web Development</option>
                <option>AI Development</option>
                <option>App Development</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-neutral-gray-light text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-gray-light"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-accent-teal text-deep-blue font-bold py-2 px-4 rounded-full hover:bg-neon-highlight transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          {/* AI Chatbot Option Placeholder */}
          <div className="mt-8 text-center">
            <p className="text-neutral-gray-light">Or chat with our AI assistant:</p>
            <button className="mt-2 bg-neon-highlight text-deep-blue font-bold py-2 px-4 rounded-full hover:bg-accent-teal transition-colors duration-300">
              Launch AI Chatbot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
