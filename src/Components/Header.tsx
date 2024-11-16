import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setIsScrolled(true);
    } else if (window.scrollY < 70) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`allish-header ${isScrolled ? "header-bg-green" : ""}`}
      id="allish-header"
    >
      <div className="container">
        <nav className="navbar navbar-expand-md allish-nav">
          <Link className="navbar-brand" to="/allish">
            <img
              src="/images/logo-1.svg"
              className="img-fluid"
              alt="Allish logo"
              loading="eager"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavVisible}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <i className="fas fa-bars mob-menu"></i>
          </button>
          <div
            className={`navbar-collapse custom-nav ${
              isNavVisible ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 header-links">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/allish"
                  onClick={() => {
                    toggleNav();
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/allish#key-features"
                  onClick={() => {
                    toggleNav();
                  }}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/allish#about-us"
                  onClick={() => {
                    toggleNav();
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/allish#faq"
                  className="nav-link"
                  onClick={() => {
                    toggleNav();
                  }}
                >
                  FAQs
                </Link>
              </li>
            </ul>
            <div className="login d-none">
              <button
                type="button"
                className="btn login-signup-btn"
                id="close-button1"
                onClick={() => {
                  toggleNav();
                }}
              >
                Log In/Sign Up
              </button>
            </div>
            <button
              type="button"
              className="close-mob-nav"
              id="close-mob-nav"
              onClick={() => {
                toggleNav();
              }}
            >
              <i className="fa-solid fa-xmark close-btn"></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
