import { useState, useEffect } from 'react';

const ApplicationForm = ({ isOpen, onClose, selectedProgram }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    course: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    'Master of Business Administration',
    'Master of Computer Applications',
    'Master of Arts in Economics',
    'Bachelor of Computer Applications',
    'Master of Commerce',
    'Bachelor of Commerce',
    'Bachelor of Business Administration',
    'Other'
  ];

  // Update course field when selectedProgram changes
  useEffect(() => {
    if (isOpen && selectedProgram?.title) {
      // Defer state update to avoid synchronous setState in effect
      queueMicrotask(() => {
        setFormData(prev => {
          if (prev.course !== selectedProgram.title) {
            return {
              ...prev,
              course: selectedProgram.title
            };
          }
          return prev;
        });
      });
    } else if (!isOpen) {
      // Reset form when closing
      queueMicrotask(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          state: '',
          course: ''
        });
        setErrors({});
      });
    }
  }, [isOpen, selectedProgram]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      localStorage.setItem('hasApplied', 'true');
      alert('Application submitted successfully! We will contact you soon.');
      setIsSubmitting(false);
      handleClose();
    }, 1500);
  };

  const handleClose = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      course: ''
    });
    setErrors({});
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="form-modal-overlay" onClick={handleClose}>
      <div className="form-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="form-modal-header">
          <div className="form-modal-title">
            <h2>Avail No Cost EMI's</h2>
            <p>Speak to an admission counsellor</p>
            <p>Online Exam | 100% Placement Assistance</p>
          </div>
          <button className="form-close-btn" onClick={handleClose} aria-label="Close form">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name <span className="required">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? 'error' : ''}
              placeholder="Enter your full name"
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="your.email@example.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number <span className="required">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
              placeholder="10-digit mobile number"
              maxLength="10"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="country">Country <span className="required">*</span></label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={errors.country ? 'error' : ''}
              placeholder="Enter your country"
            />
            {errors.country && <span className="error-message">{errors.country}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="state">State <span className="required">*</span></label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={errors.state ? 'error' : ''}
              placeholder="Enter your state"
            />
            {errors.state && <span className="error-message">{errors.state}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="course">Course <span className="required">*</span></label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={errors.course ? 'error' : ''}
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
            {errors.course && <span className="error-message">{errors.course}</span>}
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
