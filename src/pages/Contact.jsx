import React, { useState } from 'react';

const Contact = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        let botResponse = "I'm sorry, I didn't understand that. Please ask about our services (Digital Marketing, Web Development, AI Development, App Development) or how to get a consultation.";
        if (input.toLowerCase().includes('service')) {
          botResponse = "VynixCore offers Digital Marketing, Web Development, AI Development, and App Development services. Which one are you interested in?";
        } else if (input.toLowerCase().includes('consultation')) {
          botResponse = "You can get a free consultation by filling out the form on this page or by calling us at +1 (555) 123-4567.";
        } else if (input.toLowerCase().includes('digital marketing')) {
          botResponse = "Our Digital Marketing services include SEO, PPC, social media, and content strategy to boost your online presence.";
        } else if (input.toLowerCase().includes('web development')) {
          botResponse = "We specialize in responsive websites, e-commerce solutions, and custom web applications.";
        } else if (input.toLowerCase().includes('ai development')) {
          botResponse = "Our AI Development services cover chatbots, predictive analytics, and automation MVPs.";
        } else if (input.toLowerCase().includes('app development')) {
          botResponse = "We build cross-platform mobile and web applications tailored to your needs.";
        }
        setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
      }, 1000);
    }
  };

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

          {/* AI Chatbot Demo */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Try Our AI Chatbot Demo</h3>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md h-80 flex flex-col">
              <div className="flex-grow overflow-y-auto mb-4 p-2 border border-gray-300 rounded-md">
                {messages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;