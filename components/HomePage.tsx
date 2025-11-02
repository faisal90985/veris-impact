import React from 'react';

const clientLogos = [
  'https://logo.clearbit.com/google.com',
  'https://logo.clearbit.com/microsoft.com',
  'https://logo.clearbit.com/amazon.com',
  'https://logo.clearbit.com/apple.com',
  'https://logo.clearbit.com/meta.com',
  'https://logo.clearbit.com/netflix.com'
];

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Welcome Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-invert prose-lg max-w-none">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Welcome To Veris Impact Services
              </h1>
              <p>
                Veris Impact is engaged in the field of Textile, Chemicals, Pharmaceuticals, Food and Engineering, providing service on:
              </p>
              <ul>
                <li>Integrated Management System (QMS 9001, EMS 14001, ISO 45001, Energy 50001)</li>
                <li>Food grade & Halal Certification.</li>
                <li>Chemical Management, and Chemical Certification (GOTS, ECO-PASSPORT by Oeko-Tex, ZDHC).</li>
                <li>Technical service for Carbon Footprint Calculation-A way towards Carbon Neutrality / Carbon Net Zero.</li>
              </ul>
          </div>
           <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop&dpr=1" alt="Business meeting" className="rounded-lg shadow-lg aspect-[4/5] object-cover" />
              <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&dpr=1" alt="Engineers at a construction site" className="rounded-lg shadow-lg aspect-[4/3] object-cover" />
           </div>
        </div>
      </section>

      {/* Let's Chat Banner */}
      <section className="bg-brand-navy-light py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white">Let's Chat</h2>
            <p className="text-gray-300 mt-1">Get Quote Now</p>
          </div>
          <a href="#" className="bg-brand-red text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors mt-4 md:mt-0">
            Send a Request
          </a>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white uppercase tracking-wider">FEATURES</h2>
            <p className="text-2xl font-semibold text-brand-red">OUR SERVICES</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
                <img src="https://images.pexels.com/photos/7111956/pexels-photo-7111956.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop&dpr=1" alt="Social & Systems" className="rounded-lg shadow-lg mb-4 w-full aspect-[4/3] object-cover" />
                <h3 className="font-bold text-lg text-white">Social & Systems</h3>
            </div>
             <div className="text-center">
                <img src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop&dpr=1" alt="Product Certification" className="rounded-lg shadow-lg mb-4 w-full aspect-[4/3] object-cover" />
                <h3 className="font-bold text-lg text-white">Product Certification</h3>
            </div>
             <div className="text-center">
                <img src="https://images.pexels.com/photos/1105325/pexels-photo-1105325.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop&dpr=1" alt="Fire Safety" className="rounded-lg shadow-lg mb-4 w-full aspect-[4/3] object-cover" />
                <h3 className="font-bold text-lg text-white">Fire Safety</h3>
            </div>
             <div className="text-center">
                <img src="https://images.pexels.com/photos/4497759/pexels-photo-4497759.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop&dpr=1" alt="Environmental" className="rounded-lg shadow-lg mb-4 w-full aspect-[4/3] object-cover" />
                <h3 className="font-bold text-lg text-white">Environmental</h3>
            </div>
        </div>
      </section>

       {/* Clients Section */}
       <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-red transform -skew-y-3 origin-top-left"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-extrabold text-white mb-8">OUR CLIENTS</h2>
            <div className="bg-white p-8 rounded-lg shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="flex justify-center">
                            <img src={logo} alt={`Client ${index + 1}`} className="h-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;