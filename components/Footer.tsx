import React from 'react';
import Logo from './Logo';
import LocationMarkerIcon from './icons/LocationMarkerIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import FacebookIcon from './icons/FacebookIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-navy-light text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center text-center">
            <Logo className="h-20 w-auto text-white" />
        </div>
        
        <div className="my-10 text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-white">Start Your Journey to Better Business</h3>
            <div className="mt-6 flex justify-center">
                <a href="#" className="bg-brand-red text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors">
                    Get In Touch
                </a>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-4">
                <div className="flex items-start space-x-3">
                    <LocationMarkerIcon className="w-5 h-5 mt-1 text-brand-red flex-shrink-0" />
                    <p className="text-gray-300">Kingston, United Kingdom</p>
                </div>
                <div className="flex items-start space-x-3">
                    <MailIcon className="w-5 h-5 mt-1 text-brand-red flex-shrink-0" />
                    <a href="mailto:info@verisimpact.com" className="text-gray-300 hover:text-white">info@verisimpact.com</a>
                </div>
                 <div className="flex items-start space-x-3">
                    <PhoneIcon className="w-5 h-5 mt-1 text-brand-red flex-shrink-0" />
                    <p className="text-gray-300">+0 3334 3535 212</p>
                </div>
                <div className="flex space-x-4 pt-2">
                    <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon className="w-6 h-6" /></a>
                </div>
            </div>
            
            <div className="space-y-3">
                <h4 className="font-bold text-white mb-3">Professional Services</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white">Certification & Auditing</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Sustainability Verification</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Supply Chain Assurance</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">ESG Assurance</a></li>
                </ul>
            </div>

            <div>
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39884.28898748375!2d-0.3292446410156223!3d51.412191900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b774d756e09%3A0x1535a5193d803303!2sKingston%20upon%20Thames!5e0!3m2!1sen!2suk!4v1700942456485!5m2!1sen!2suk" 
                    width="100%" 
                    height="200" 
                    style={{border:0}} 
                    // Fix: Changed allowFullScreen attribute from a string to a boolean to fix the type error.
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg opacity-70"
                 ></iframe>
            </div>
        </div>
      </div>
      <div className="bg-black/20 mt-8 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Veris Impact Ltd. All Rights Reserved. Designed by You.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;