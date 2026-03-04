const AdmissionSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Fill Application',
      description: 'Fill in your basic, education & work experience-related details and pay the application fee to register.'
    },
    {
      number: '2',
      title: 'Document Upload',
      description: 'Upload supporting documents & submit your application for verification.'
    },
    {
      number: '3',
      title: 'Fee Payment',
      description: 'Pay the admission fee for the first semester/year or full program.'
    }
  ];

  return (
    <section className="admission" id="admission">
      <div className="admission-container">
        <div className="admission-header">
          <h2>Admission Process</h2>
          <p>We are committed to providing a seamless and efficient admission process for our students.</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
