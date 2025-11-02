import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-brand-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">About Veris Impact</h1>
            <p className="mt-4 text-xl text-brand-red font-semibold">Global Integrity. Local Expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p>Veris Impact Ltd is an independent assurance, verification, and certification organisation dedicated to promoting integrity, transparency, and sustainable growth. We empower organisations to demonstrate accountability and measurable performance through globally recognised standards and sustainability frameworks.</p>
                <p>Headquartered in the United Kingdom, with regional operations in Italy, the UAE, and Pakistan, Veris Impact delivers consistent, accredited services supported by technical expertise and local understanding.</p>
                <p>Our staff has profession excellency in the field of Environment, Quality, Health & Safety, Operational Safety, Hazards identification with different Degrees & certification which includes M.Phil in Total Quality management System, Masters in Environmental Science. Lead auditor training from internationally recognized training institution are NEBOSH, IOSH, ISO 9001, 14001, 45001, 50001. Our staff has multiple year of experience from the field of renowned Textile Manufactures, Brand, Chemical formulators, Engineering & Pharmaceuticals.</p>
            </div>
            <div>
                <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1000&h=800&fit=crop&dpr=1" 
                    alt="Team meeting in a modern office" 
                    className="rounded-lg shadow-xl w-full object-cover"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;