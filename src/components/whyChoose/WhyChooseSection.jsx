import { useState, useEffect } from 'react';
import { MdSchool } from "react-icons/md";
import { FaAccessibleIcon } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GiMeshNetwork } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa6";
import { GiAbstract100 } from "react-icons/gi";

const WhyChooseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [gapSize, setGapSize] = useState(48); // in pixels
  const AUTO_PLAY_INTERVAL = 3000;

  // Responsive: Update cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(1); // Mobile: 1 card
        setGapSize(16); // --spacing-md
      } else if (width < 1024) {
        setCardsToShow(2); // Tablet: 2 cards
        setGapSize(24); // --spacing-lg
      } else {
        setCardsToShow(4); // Desktop: 4 cards
        setGapSize(48); // --spacing-2xl
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);
  const features = [
    {
      title: 'Degree from top ranked Manipal universities',
      description: 'Graduate with UGC-entitled & AICTE approved online degrees which are at par with on-campus degree programs.',
      icon: <MdSchool />
    },
    {
      title: 'Exclusive Coursera access',
      description: 'Free access to 12K+ courses & professional certifications from top global universities.',
      icon: <FaAccessibleIcon />
    },
    {
      title: 'Scholarships up to 30%',
      description: 'Avail scholarship benefits under merit, defense, Divyaang, alumni, and other categories.',
      icon: <MdSchool />
    },
    {
      title: 'Easy financing options',
      description: 'Improved affordability with flexible financing and no-cost EMI options.',
      icon: <GiReceiveMoney />

    },
        {
      title: 'Manipal alumni status',
      description: 'Become a part of a 2,00,000+ global Manipal alumni network.',
      icon: <GiMeshNetwork />
    },
        {
      title: 'Weekly webinars with industry leaders',
      description: 'Stay updated on key industry trends through our weekly webinars by industry experts.',
      icon: <FaIndustry />
    },
        {
      title: '100% placement assistance',
      description: 'Boost your employability by gaining job-ready skills & comprehensive interview preparation to prepare you to excel in placement drives organized by universities in leading organizations.',
      icon: <GiAbstract100 />
    }
  ];

  // Duplicate features for seamless infinite loop
  const duplicatedFeatures = [...features, ...features, ...features];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Reset to first set when reaching the end for infinite loop
  useEffect(() => {
    if (currentIndex >= features.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500);
    }
  }, [currentIndex, features.length]);

  // Calculate card width accounting for gaps
  const totalGapsWidth = (cardsToShow - 1) * gapSize; // total px of gaps
  const cardWidthPercent = 100 / cardsToShow;
  const translateX = -(currentIndex * cardWidthPercent);

  return (
    <section className="whyChoose" id="why-choose">
      <div className="whyChoose-container">
        <div className="whyChoose-header">
          <h2>Why Choose Online Manipal?</h2>
          <p>Be ahead with Industry-first Advantages.</p>
        </div>

        <div className="features-carousel">
          <div className="features-carousel-wrapper">
            <div 
              className="features-track"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {duplicatedFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card" 
                  style={{
                    flex: `0 0 calc((100% - ${totalGapsWidth}px) / ${cardsToShow})`,
                    maxWidth: `calc((100% - ${totalGapsWidth}px) / ${cardsToShow})`
                  }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
