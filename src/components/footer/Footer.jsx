const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">M</div>
              <span>Manipal University</span>
            </div>
            <p>
              Transforming lives through quality education. Join thousands of successful 
              students who have achieved their dreams with Online Manipal.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Facebook">f</a>
              <a href="#" className="social-link" title="Twitter">𝕏</a>
              <a href="#" className="social-link" title="LinkedIn">in</a>
              <a href="#" className="social-link" title="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#why-choose">Why Choose Us</a></li>
              <li><a href="#admission">Admission</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Academics</h3>
            <ul>
              <li><a href="#programs">Undergraduate Programs</a></li>
              <li><a href="#programs">Postgraduate Programs</a></li>
              <li><a href="#ranking">Rankings & Accreditation</a></li>
              <li><a href="#">Course Details</a></li>
              <li><a href="#">Faculty</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Technical Support</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Alumni Network</a></li>
              <li><a href="#">Career Services</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Manipal University Online. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">Cookie Policy</a>
            <span>|</span>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
