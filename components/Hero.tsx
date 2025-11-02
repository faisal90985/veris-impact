import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4 tracking-widest uppercase">
          Independent Assurance. Lasting Impact.
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Empowering global confidence through impartial certification, verification, and sustainability assurance.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300 mb-10">
          Driving trust, transparency, and measurable sustainability impact for businesses worldwide.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#services" className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Our Services
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-transparent border-2 border-slate-300 hover:border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 rounded-full transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;