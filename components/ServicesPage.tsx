import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-brand-navy py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">Our Services</h1>
            <p className="mt-4 text-lg text-gray-300">
              Our Core Services Sustainability & ESG Assurance: Verification of sustainability reports, ESG metrics, and carbon or climate-related disclosures. Certification & Compliance: Independent third-party certification for management systems and product conformity. Verification & Impact Assessment: Assurance of data integrity, responsible sourcing, and sustainable supply chains. Inspection & Conformity Assessment: Technical inspections and verification across manufacturing and production environments. Training & Capacity Building: Professional programmes empowering organisations to meet compliance and sustainability goals.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
              <img 
                  src="https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop&dpr=1" 
                  alt="Scientist in a lab, representing the chemicals and manufacturing industries" 
                  className="rounded-lg shadow-xl w-full object-cover"
              />
          </div>
          <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-brand-red mb-4">Industries We Serve</h2>
              <p className="text-gray-300">Veris Impact provides sector-specific solutions designed to support responsible growth and verified performance across industries:</p>
              <ul className="text-gray-300">
                  <li>Textiles & Apparel – traceability, and sustainable production.</li>
                  <li>Agriculture & Food Systems – ethical sourcing, safety, and supply chain transparency.</li>
                  <li>Chemicals & Manufacturing – chemical management and sustainable process assurance.</li>
                  <li>Energy & Renewables – clean energy validation and environmental management audits.</li>
                  <li>Corporate & Financial Sectors – ESG verification and sustainability disclosure assurance.</li>
              </ul>
          </div>
        </div>
        
        <div className="w-full">
          <img 
              src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop&dpr=1"
              alt="Engineers reviewing plans at a construction site"
              className="rounded-lg shadow-lg w-full object-cover h-64 md:h-80"
          />
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;