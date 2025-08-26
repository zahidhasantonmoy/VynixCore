import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
            </div>
            {/* CAPTCHA Placeholder */}
            <div className="text-gray-600 text-sm">
              CAPTCHA will be integrated here for security.
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">Send Message</button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Contact Information</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p><strong>Email:</strong> info@vynixcore.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Digital Way, Tech City, TC 98765</p>
          </div>

          {/* Google Maps Embed Placeholder */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find Us on the Map</h3>
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-md text-gray-600">
              Google Maps Embed will go here
              {/* Example: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
            </div>
          </div>

          {/* AI Chatbot Demo Placeholder */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Try Our AI Chatbot Demo</h3>
            <div className="bg-gray-200 h-48 flex items-center justify-center rounded-md text-gray-600">
              AI Chatbot Demo will be integrated here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;