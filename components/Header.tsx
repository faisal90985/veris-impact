import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navLinks = [
  'Home', 
  'About Us', 
  'Our Services', 
  'Commitment & Sustainability', 
  'Why Choose Veris Impact', 
  'Governance', 
  'Contact'
];

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const NavLink: React.FC<{ page: string }> = ({ page }) => (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setCurrentPage(page);
        setIsMenuOpen(false);
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        currentPage === page
          ? 'text-brand-red font-semibold'
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {page}
    </a>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy/80 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-brand-navy'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('Home'); }} className="flex items-center">
              <Logo className="h-12 w-auto text-white" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
             {navLinks.map(link => <NavLink key={link} page={link} />)}
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-brand-navy-light focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
       {isMenuOpen && (
        <div className="md:hidden bg-brand-navy">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <NavLink key={link} page={link} />)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
