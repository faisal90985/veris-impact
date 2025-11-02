import React from 'react';

const CommitmentPage: React.FC = () => {
  return (
    <div className="bg-brand-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">Commitment & Sustainability</h1>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert text-center mb-12 max-w-none">
                <h2 className="text-2xl font-bold text-brand-red">Our Commitment to Sustainability</h2>
                <p className="text-gray-300">At Veris Impact, sustainability is central to our purpose. Our assurance activities align with the UN Sustainable Development Goals (SDGs), advancing transparency, ethical performance, and continuous improvement across industries. We partner with organisations to transform sustainability commitments into measurable outcomes, ensuring every certification or verification contributes to lasting global impact.</p>
            </div>
            <img 
                src="https://images.pexels.com/photos/5728519/pexels-photo-5728519.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&fit=crop&dpr=1" 
                alt="Wooden blocks with sustainability icons (recycle, CO2, globe) on lush grass" 
                className="rounded-lg shadow-xl w-full object-cover mx-auto"
            />
        </div>
      </div>
    </div>
  );
};

export default CommitmentPage;