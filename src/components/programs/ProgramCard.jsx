const ProgramCard = ({ program, onApplyClick }) => {
  // Check if icon is an image (has file extension) vs emoji
  const isImage = typeof program.icon === 'string' && (
    program.icon.includes('.') || 
    program.icon.includes('/')
  );

  return (
    <div className="program-card">
      <div className="program-image">
        {isImage ? (
          <img src={program.icon} alt={program.title} />
        ) : (
          <span>{program.icon}</span>
        )}
      </div>
      <div className="program-content">
        <h3 className="program-title">{program.title}</h3>
        <div className="program-details">
          <div className="detail-row">
            <span className="detail-label">Duration:</span>
            <span className="detail-value">{program.duration}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Fee:</span>
            <span className="detail-value">{program.fee}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Approved:</span>
            <span className="detail-value">{program.approved}</span>
          </div>
        </div>
        <button className="program-btn" onClick={onApplyClick}>Apply Now</button>
      </div>
    </div>
  );
};

export default ProgramCard;
