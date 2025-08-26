import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-neutral-gray-dark text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
