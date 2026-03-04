import ApplyButton from './ApplyButton';
import manipalLogo from '../../assets/manipal_logo.webp';

const Navbar = ({ onApplyClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={manipalLogo} alt="Manipal University" className="logo-image" />
        </a>

        <div className="navbar-button">
          <ApplyButton onClick={onApplyClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
