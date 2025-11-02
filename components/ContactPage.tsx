import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-navy py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-300">
              We welcome enquiries from clients, partners, and stakeholders seeking reliable certification and sustainability assurance services.
            </p>
        </div>

        <div className="max-w-4xl mx-auto bg-brand-navy-light p-8 md:p-12 rounded-lg shadow-lg border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                  <h3 className="font-bold text-lg text-brand-red mb-4">Veris Impact Ltd (Head Office - United Kingdom)</h3>
                  <p className="text-gray-300">Kingston, United Kingdom</p>
              </div>
              <div>
                  <h3 className="font-bold text-lg text-brand-red mb-4">Contact Information</h3>
                  <ul className="space-y-3 text-gray-300">
                      <li><strong>General Inquiries:</strong> <a href="mailto:info@verisimpact.com" className="text-gray-300 hover:underline hover:text-white">info@verisimpact.com</a></li>
                      <li><strong>Certification Support:</strong> <a href="mailto:certification@verisimpact.com" className="text-gray-300 hover:underline hover:text-white">certification@verisimpact.com</a></li>
                      <li><strong>Client Assistance:</strong> <a href="mailto:support@verisimpact.com" className="text-gray-300 hover:underline hover:text-white">support@verisimpact.com</a></li>
                      <li><strong>Phone:</strong> +0 3334 3535 212, 0334 126 3458</li>
                  </ul>
              </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
              <h3 className="font-bold text-lg text-brand-red mb-4">Regional Offices</h3>
              <p className="text-gray-300">Dubai, United Arab Emirates | Turin, Italy | Karachi, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;