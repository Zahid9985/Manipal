import { useState } from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const faqData = [
    {
      question: 'Is Manipal approved by UGC for online programs?',
      answer: 'Yes, Manipal University has been approved by UGC-DEB (University Grants Commission - Distance Education Bureau) to offer degree courses in online mode. This means our online degrees carry the same value and recognition as on-campus degrees.'
    },
    {
      question: 'Which online UG degree courses are offered by online Manipal university?',
      answer: 'Manipal University offers several undergraduate programs in online mode including Bachelor of Computer Applications (BCA), Bachelor of Commerce (B.Com), and Bachelor of Business Administration (BBA). These programs are designed to provide flexible learning options for working professionals.'
    },
    {
      question: 'Which online PG degree courses are offered by online Manipal university?',
      answer: 'Our postgraduate programs include Master of Business Administration (MBA), Master of Computer Applications (MCA), Master of Commerce (M.Com), and Master of Arts in Economics (MA Economics). All programs are UGC-approved and industry-recognized.'
    },
    {
      question: 'Does online Manipal university offer placement?',
      answer: 'Yes, Online Manipal provides comprehensive placement assistance to its students. We have strong connections with top companies and regular campus recruitment drives. Our alumni have secured positions in leading organizations including Fortune 500 companies.'
    },
    {
      question: 'What is the duration of online programs?',
      answer: 'Undergraduate programs typically have a duration of 3 years, while postgraduate programs are usually 2 years long. However, the flexibility of online education allows students to complete their studies at their own pace within the prescribed duration.'
    }
  ];

  const toggleItem = (index) => {
    setOpenItemIndex(openItemIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-items">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItemIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
