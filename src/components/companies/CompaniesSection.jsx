import { useState, useEffect } from 'react';
import diageoLogo from '../../assets/companies/DIAGEO.webp';
import sportLogo from '../../assets/companies/Sport.webp';
import hpLogo from '../../assets/companies/hp.webp';
import accentureLogo from '../../assets/companies/accenture.webp';
import nobrokerLogo from '../../assets/companies/NOBROKER.webp';
import goldmanLogo from '../../assets/companies/goldman.webp';
import manipalHosLogo from '../../assets/companies/manipal_hos.webp';
import quessLogo from '../../assets/companies/QUESS.webp';
import eyLogo from '../../assets/companies/ey.webp';

const CompaniesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(5);
  const [gapSize, setGapSize] = useState(48);
  const AUTO_PLAY_INTERVAL = 2500;

  const companies = [
    { name: 'DIAGEO', logo: diageoLogo },
    { name: 'Sport', logo: sportLogo },
    { name: 'HP', logo: hpLogo },
    { name: 'Accenture', logo: accentureLogo },
    { name: 'NoBroker', logo: nobrokerLogo },
    { name: 'Goldman', logo: goldmanLogo },
    { name: 'Manipal Hospital', logo: manipalHosLogo },
    { name: 'QUESS', logo: quessLogo },
    { name: 'EY', logo: eyLogo }
  ];

  // Duplicate companies for seamless infinite loop
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  // Responsive: Update cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(2); // Mobile: 2 cards
        setGapSize(16); // --spacing-md
      } else if (width < 1024) {
        setCardsToShow(3); // Tablet: 3 cards
        setGapSize(24); // --spacing-lg
      } else {
        setCardsToShow(5); // Desktop: 5 cards
        setGapSize(48); // --spacing-2xl
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Reset to first set when reaching the end for infinite loop
  useEffect(() => {
    if (currentIndex >= companies.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500);
    }
  }, [currentIndex, companies.length]);

  const cardWidthPercent = 100 / cardsToShow;
  const totalGapsWidth = (cardsToShow - 1) * gapSize;
  const translateX = -(currentIndex * cardWidthPercent);

  return (
    <section className="companies">
      <div className="companies-container">
        <div className="companies-header">
          <h2>Our learners work at</h2>
          <p>Top hiring partners of Online Manipal University</p>
        </div>

        <div className="companies-carousel">
          <div className="companies-carousel-wrapper">
            <div 
              className="companies-track"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div 
                  key={index} 
                  className="company-logo"
                  style={{
                    flex: `0 0 calc((100% - ${totalGapsWidth}px) / ${cardsToShow})`,
                    maxWidth: `calc((100% - ${totalGapsWidth}px) / ${cardsToShow})`
                  }}
                >
                  <img src={company.logo} alt={company.name} title={company.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
