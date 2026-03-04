import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.consent && formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', consent: false });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Connect For Your Queries</h2>
          <p>We are here to help you with your queries. Please feel free to contact us.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your queries..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <label htmlFor="consent">
              I authorize a representative to contact me via phone and/or email. This will
              override registry on DND/NDNC.
            </label>
          </div>

          <button type="submit" className="form-button">
            Enquire Now
          </button>

          {submitted && (
            <p style={{ color: '#4ade80', textAlign: 'center', marginTop: '1rem' }}>
              ✓ Thank you! We'll contact you soon.
            </p>
          )}

          <div className="contact-info">
            <p>Or connect with us on WhatsApp</p>
            <div className="whatsapp-icon">💬</div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
