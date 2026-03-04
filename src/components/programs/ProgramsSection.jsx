import { useState } from 'react';
import ProgramCard from './ProgramCard';
import mba from '../../assets/program_card/mba.png';
import mca from '../../assets/program_card/mca.jpg';
import mcom from '../../assets/program_card/MCom.jpg';
import bca from '../../assets/program_card/bca.jpeg';
import bcom from '../../assets/program_card/bcom.png';
import bba from '../../assets/program_card/BBA.webp';
import mae from '../../assets/program_card/ma_economics.jpg';

const ProgramsSection = ({ onApplyClick }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const programs = [
    {
      id: 1,
      title: 'Master of Business Administration',
      duration: '2 Years',
      fee: 'INR 1,75,000',
      approved: 'UGC, NIRF, AICTE',
      icon: mba,
      category: 'masters'
    },
    {
      id: 2,
      title: 'Master of Computer Applications',
      duration: '2 Years',
      fee: 'INR 1,58,000',
      approved: 'UGC, NIRF, AICTE',
      icon: mca,
      category: 'masters'
    },
    {
      id: 3,
      title: 'Master of Arts in Economics',
      duration: '2 Years',
      fee: 'INR 80,000',
      approved: 'UGC, NIRF, AICTE',
      icon: mae,
      category: 'masters'
    },
    {
      id: 4,
      title: 'Bachelor of Computer Applications',
      duration: '3 Years',
      fee: 'INR 1,35,000',
      approved: 'UGC, NIRF, AICTE',
      icon: bca,
      category: 'bachelors'
    },
    {
      id: 5,
      title: 'Master of Commerce',
      duration: '2 Years',
      fee: 'INR 1,08,000',
      approved: 'UGC, NIRF, AICTE',
      icon: mcom,
      category: 'masters'
    },
    {
      id: 6,
      title: 'Bachelor of Commerce',
      duration: '3 Years',
      fee: 'INR 99,000',
      approved: 'UGC, NIRF, AICTE',
      icon: bcom,
      category: 'bachelors'
    },
    {
      id: 7,
      title: 'Bachelor of Business Administration',
      duration: '3 Years',
      fee: 'INR 1,35,000',
      approved: 'UGC, NIRF, AICTE',
      icon: bba,
      category: 'bachelors'
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeTab);

  // For carousel: duplicate programs for infinite loop effect
  const carouselPrograms = activeTab === 'all' 
    ? [...programs, ...programs] // Duplicate for seamless looping
    : filteredPrograms;

  const handlePrevious = () => {
    if (activeTab === 'all') {
      setCarouselIndex((prev) => (prev - 1 + programs.length) % programs.length);
    }
  };

  const handleNext = () => {
    if (activeTab === 'all') {
      setCarouselIndex((prev) => (prev + 1) % programs.length);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCarouselIndex(0);
  };

  const handleApplyClick = (program) => {
    onApplyClick(program);
  };

  return (
    <section className="programs-section" id="programs">
      <div className="programs-container">
        <div className="programs-header">
          <h2>Top Online UG & PG Programs</h2>
        </div>

        <div className="programs-tabs">
          <button
            className={`program-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => handleTabChange('all')}
          >
            All Programs
          </button>
          <button
            className={`program-tab ${activeTab === 'bachelors' ? 'active' : ''}`}
            onClick={() => handleTabChange('bachelors')}
          >
            Bachelors
          </button>
          <button
            className={`program-tab ${activeTab === 'masters' ? 'active' : ''}`}
            onClick={() => handleTabChange('masters')}
          >
            Masters
          </button>
        </div>

        <div className="programs-carousel">
          {activeTab === 'all' ? (
            <>
              <button 
                className="carousel-nav-button carousel-prev"
                onClick={handlePrevious}
                aria-label="Previous programs"
              >
                ❮
              </button>
              <div className="carousel-wrapper" style={{
                transform: `translateX(-${carouselIndex * (25 + (16/4))}%)`
              }}>
                {carouselPrograms.map((program, index) => (
                  <ProgramCard 
                    key={`${program.id}-${index}`}
                    program={program}
                    onApplyClick={() => handleApplyClick(program)}
                  />
                ))}
              </div>
              <button 
                className="carousel-nav-button carousel-next"
                onClick={handleNext}
                aria-label="Next programs"
              >
                ❯
              </button>
            </>
          ) : (
            <div className="carousel-wrapper">
              {filteredPrograms.map((program) => (
                <ProgramCard 
                  key={program.id}
                  program={program}
                  onApplyClick={() => handleApplyClick(program)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
