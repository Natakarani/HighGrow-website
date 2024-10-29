import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Add a custom CSS file if needed for additional responsive styling

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <header className="d-flex flex-wrap gap-5 align-items-center justify-content-around p-3">
        {/* Navigation Links */}
        <Link to='/'><img src='data:image/png;base64,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'></img></Link>
        
        <div className={`navbar-menu ${showMenu ? 'show' : ''}`}>
        <div className="d-flex flex-wrap align-items-center gap-4">
          {/* About Dropdown */}
          <div className="m-0 d-flex p-2 rounded-2 gap-1 align-items-center navLinks">
            <small className="m-0">
              <Link to='/about-us' style={{ textDecoration: 'none', color: 'white' }}>About</Link>
            </small>
            <i className="text-white fa-solid fa-angle-down"></i>

            {/* Dropdown Content */}
            <div className="dropdown-content rounded-2 shadow">
  <div className="d-flex p-3 gap-4"> {/* Add gap for spacing between items */}
    {/* Main About Us Link */}
    <div className="p-2 rounded-3 d-flex flex-column" id="aboutUs">
      <Link to='/services' style={{ textDecoration: 'none', color: 'white' }}>
        <i className="text-white bi bi-person fs-4 ms-2"></i>
        <h5 className="text-white ms-2"> About us</h5>
        <small className="grayText">Comprehensive  solutions your bussiness needs</small>
      </Link>
    </div>
    
    <div className="sub-menu d-flex gap-4"> {/* Add gap for consistent spacing */}
      <Link to='/about-us' style={{ textDecoration: 'none', color: 'white' }}>
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex gap-1 align-items-center links">
            <i className="text-white bi bi-bullseye"></i>
            <p className="text-white m-0">Our mission</p>
          </div>
          <small className="grayText">Empowering businesses through innovative solutions</small>
        </div>
      </Link>
      <Link to='/about-us' style={{ textDecoration: 'none', color: 'white' }}>
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex gap-1 align-items-center links">
            <i className="text-white bi bi-eye"></i>
            <p className="text-white m-0">Our vision</p>
          </div>
          <small className="grayText">Shaping the future of technology and business</small>
        </div>
      </Link>
      <Link to='/about-us' style={{ textDecoration: 'none', color: 'white' }}>
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex gap-1 align-items-center links">
            <i className="text-white bi bi-person"></i>
            <p className="text-white m-0">Our values</p>
          </div>
          <small className="grayText">Guided by integrity, innovation, and client success</small>
        </div>
      </Link>
    </div>
  </div>
</div>

          </div>

          {/* Other Menu Items */}
          <div className="m-0 d-flex p-2 rounded-2 gap-1 align-items-center navLinks">
            <small className="m-0">Our Services</small>
            <i className="text-white fa-solid fa-angle-down m-0"></i>
            
            <div className="dropdown-content rounded-2 shadow">
  <div className="d-flex p-3 gap-4"> {/* Add gap for spacing between items */}
    {/* Main About Us Link */}
    <div className="p-2 rounded-3 d-flex flex-column" id="aboutUs">
      <Link to='/services' style={{ textDecoration: 'none', color: 'white' }}>
        <i className="text-white bi bi-person fs-4 ms-2"></i>
        <h5 className="text-white ms-2">Our Services</h5>
        <small className="grayText">Comprehensive  solutions your bussiness needs</small>
      </Link>
    </div>
    
    {/* Sub-menu in a Row */}
    <div className="sub-menu d-flex gap-4"> {/* Add gap for consistent spacing */}
      <Link to='/service-consult' style={{ textDecoration: 'none', color: 'white' }}>
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex gap-1 align-items-center links">
          <i class="bi bi-people"></i>
            <p className="text-white m-0">Consulting</p>
          </div>
          <small className="grayText">Expert advice to drive your business formward</small>
        </div>
      </Link>
      <Link to='/service-techno' style={{ textDecoration: 'none', color: 'white' }}>
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex gap-1 align-items-center links">
          <i class="bi bi-code-slash"></i>
            <p className="text-white m-0">Technology</p>
          </div>
          <small className="grayText">cutting-edge tech solutions for modern chanllenges</small>
        </div>
      </Link>
      <Link to='/service-staff' style={{ textDecoration: 'none', color: 'white' }}>
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex gap-1 align-items-center links">
          <i class="bi bi-exclude"></i>
            <p className="text-white m-0">staffing</p>
          </div>
          <small className="grayText">connect with top talent to talent to build your dream team</small>
        </div>
      </Link>
    </div>
  </div>
</div>

          </div>

          {/* Career Link */}
          <div className="d-flex p-2 rounded-2 gap-1 align-items-center navLinks">
            <Link to='/career' style={{textDecoration:'none'}} className="nav-link-text">
              <small className="m-0">Career</small>
            </Link>
          </div>
        </div>

        {/* Get in Touch Button */}
        <Link to='/contact'>
          <button className="btn darkbtn text-white" aria-label="Submit form">
            Get in touch
          </button>
        </Link>
          </div>
         
        <div className="burger-icon" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <i className="fa-solid fa-x text-white"></i> : <i className="text-white fa-solid fa-bars"></i>}
         
        </div>
      </header>
    </div>
  );
}

export default Header;
