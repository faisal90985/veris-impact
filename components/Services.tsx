import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';
import GlobeIcon from './icons/GlobeIcon';
import UsersIcon from './icons/UsersIcon';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-slate-700 text-cyan-400">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400">{description}</p>
    </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">We provide a comprehensive suite of assurance services designed to build trust and drive sustainable growth.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <ServiceCard
            icon={<CheckCircleIcon className="w-8 h-8"/>}
            title="Certification & Auditing"
            description="Rigorous, impartial certification against international standards to demonstrate compliance and excellence."
          />
          <ServiceCard
            icon={<GlobeIcon className="w-8 h-8"/>}
            title="Sustainability Verification"
            description="Verifying ESG data, carbon footprints, and sustainability reports to ensure accuracy and stakeholder confidence."
          />
          <ServiceCard
            icon={<UsersIcon className="w-8 h-8"/>}
            title="Supply Chain Assurance"
            description="Enhancing transparency and resilience in your supply chain through robust verification and risk assessment."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;