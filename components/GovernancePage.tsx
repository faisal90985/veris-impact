import React from 'react';

const GovernancePage: React.FC = () => {
  return (
    <div className="bg-brand-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">Governance</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3 prose prose-lg prose-invert text-gray-300 max-w-none">
                <h2 className="text-2xl font-bold text-brand-red">Our Governance Commitment</h2>
                <p>At Veris Impact, we uphold the highest standards of integrity, impartiality, and transparency in every assurance activity. Our governance framework ensures that all certification, verification, and sustainability assessments are conducted ethically and independently – safeguarding the trust placed in us by clients and global stakeholders.</p>
                
                <h3 className="text-xl font-semibold text-white mt-8">Our Key Policies:</h3>
                <ul>
                    <li><strong>Quality Policy</strong> – Commitment to consistent, high-quality assurance services.</li>
                    <li><strong>Statement of Impartiality</strong> – Guaranteeing objectivity in all decisions.</li>
                    <li><strong>Appeals & Complaints Policy</strong> – Fair and transparent handling of client concerns.</li>
                    <li><strong>Anti-Corruption & Ethics Policy</strong> – Zero-tolerance for bribery and unethical conduct.</li>
                    <li><strong>Code of Conduct</strong> – Professional, ethical, and impartial behaviour across all operations.</li>
                    <li><strong>Whistleblower Policy</strong> – Safe, confidential mechanism to report misconduct.</li>
                </ul>
            </div>
            <div className="md:col-span-2">
                <img 
                    src="https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1200&fit=crop&dpr=1" 
                    alt="Business professionals in a formal meeting" 
                    className="rounded-lg shadow-xl w-full object-cover"
                />
            </div>
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white">Global Presence</h2>
            <p className="mt-4 text-lg text-gray-300">Headquartered in the United Kingdom, Veris Impact operates across Europe, the Middle East, and South Asia, combining global reach with regional expertise.</p>
            <div className="mt-8 flex justify-center">
                <img src="https://static.vecteezy.com/system/resources/previews/009/385/157/original/world-map-clipart-design-illustration-free-png.png" alt="World map" className="h-48 opacity-20 invert brightness-200"/>
            </div>
        </div>

      </div>
    </div>
  );
};

export default GovernancePage;