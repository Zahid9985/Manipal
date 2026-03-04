import Navbar from './components/navbar/Navbar';
import HeroBanner from './components/hero/HeroBanner';
import RankingAccreditation from './components/ranking/RankingAccreditation';
import ProgramsSection from './components/programs/ProgramsSection';
import WhyChooseSection from './components/whyChoose/WhyChooseSection';
import CompaniesSection from './components/companies/CompaniesSection';
import AdmissionSection from './components/admission/AdmissionSection';
import FAQSection from './components/faq/FAQSection';
import Footer from './components/footer/Footer';
import ApplicationForm from './components/form/ApplicationForm';
import WhatsAppFloat from './components/whatsapp';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const intervalRef = useRef(null);
  const initialTimeoutRef = useRef(null);

  const openForm = (program) => {
    setSelectedProgram(program);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedProgram(null);

    const hasApplied = localStorage.getItem('hasApplied');

    if (!hasApplied) {
      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      // Set up recurring popup every 2 minutes
      intervalRef.current = setInterval(() => {
        setIsFormOpen(true);
      }, 120000); // 2 minutes
    }
  };

  // Initial popup after 10 seconds on page load
  useEffect(() => {
    const hasApplied = localStorage.getItem('hasApplied');

    if (!hasApplied) {
      // Clear any existing timeout
      if (initialTimeoutRef.current) {
        clearTimeout(initialTimeoutRef.current);
      }

      // Show form after 10 seconds
      initialTimeoutRef.current = setTimeout(() => {
        setIsFormOpen(true);
      }, 10000); // 10 seconds
    }

    return () => {
      if (initialTimeoutRef.current) {
        clearTimeout(initialTimeoutRef.current);
      }
    };
  }, []);

  // Prevent body scroll when form is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormOpen]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (initialTimeoutRef.current) {
        clearTimeout(initialTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar onApplyClick={openForm} />
      <HeroBanner onApplyClick={openForm} />
      <RankingAccreditation />
      <ProgramsSection onApplyClick={openForm} />
      <WhyChooseSection />
      <CompaniesSection />
      <AdmissionSection />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
      <ApplicationForm isOpen={isFormOpen} onClose={closeForm} selectedProgram={selectedProgram} />
    </>
  );
}

export default App;
