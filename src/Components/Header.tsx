/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setIsScrolled(true);
    } else if (window.scrollY < 10) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path); // This redirects without reloading the page
  };
  return (
    <header
      className={`allish-header ${isScrolled ? "test" : ""}`}
      id="allish-header"
    >
      <div className="container">
        <nav className="navbar navbar-expand-md allish-nav">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => {
              toggleNav();
              handleNavigation("/allish");
            }}
          >
            <img
              src="/images/logo-1.svg"
              className="img-fluid"
              alt="Allish logo"
              loading="eager"
            />
          </a>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/allish#"
                  onClick={() => {
                    toggleNav();
                    handleNavigation("/allish#");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/allish#key-features"
                  onClick={() => {
                    toggleNav();
                    handleNavigation("/allish#key-features");
                  }}
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/allish#about-us"
                  onClick={() => {
                    toggleNav();
                    handleNavigation("/allish#about-us");
                  }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/allish#faq"
                  className="nav-link"
                  onClick={() => {
                    toggleNav();
                    handleNavigation("/allish#faq");
                  }}
                >
                  FAQs
                </a>
              </li>
            </ul>
            <div className="login d-none">
              <button
                type="button"
                className="btn login-signup-btn"
                id="close-button1"
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
