import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';

const Feature: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <CheckCircleIcon className="w-6 h-6 text-brand-red" />
        </div>
        <div className="ml-3">
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="mt-1 text-gray-300">{description}</p>
        </div>
    </div>
);


const WhyChooseVerisPage: React.FC = () => {
  return (
    <div className="bg-brand-navy py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose Veris Impact</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
              <Feature 
                  title="Independent & Impartial"
                  description="Every decision is guided by integrity and objectivity."
              />
              <Feature 
                  title="Global Recognition"
                  description="Accredited and compliant with leading international standards."
              />
              <Feature 
                  title="Sustainability Aligned"
                  description="Supporting responsible business transformation."
              />
              <Feature 
                  title="Trusted Expertise"
                  description="Qualified auditors, assessors, and sector specialists worldwide."
              />
          </div>
          <div>
              <img 
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1000&h=800&fit=crop&dpr=1" 
                  alt="Collaborative team working together" 
                  className="rounded-lg shadow-xl w-full object-cover"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseVerisPage;