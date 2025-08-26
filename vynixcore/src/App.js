import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-neutral-gray-dark text-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
