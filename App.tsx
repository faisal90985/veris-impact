import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import CommitmentPage from './components/CommitmentPage';
import WhyChooseVerisPage from './components/WhyChooseVerisPage';
import GovernancePage from './components/GovernancePage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'About Us':
        return <AboutPage />;
      case 'Our Services':
        return <ServicesPage />;
      case 'Commitment & Sustainability':
        return <CommitmentPage />;
      case 'Why Choose Veris Impact':
        return <WhyChooseVerisPage />;
      case 'Governance':
        return <GovernancePage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-brand-navy text-brand-light-gray font-sans antialiased">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;