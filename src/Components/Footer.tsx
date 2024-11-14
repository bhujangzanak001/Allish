/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path); // This redirects without reloading the page
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* <!--Row 1 of 1--> */}
          <div className="col-12 col-md-5">
            <div className="row">
              {/* <!--Row 1 of 2--> */}
              <div className="col-5 col-md-4 ">
                <div className="footer-titles">Privacy Policy</div>
                <div className="footer-all-links">
                  <a href="#pocket" className="footer-links">
                    My Account
                  </a>
                  <a href="#pocket" className="footer-links">
                    My Orders
                  </a>
                  <a href="#pocket" className="footer-links">
                    My Favourites
                  </a>
                </div>
              </div>
              <div className="col-5 col-md-4 ">
                <div className="footer-titles">Return Policy</div>
                <div className="footer-all-links">
                  <a href="#" className="footer-links">
                    Help Center
                  </a>
                  <a href="#" className="footer-links">
                    Give Feedback
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-4 ">
                <div className="footer-titles text-nowrap mt-20">
                  Terms & Conditions
                </div>
                <div className="footer-all-links">
                  <a href="#" className="footer-links">
                    About Us
                  </a>
                  <a href="#" className="footer-links">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <div className="social d-flex">
                  <div className="social-title">Follow Us</div>
                  <a href="" className="social-media">
                    <i className="fa-brands fa-square-instagram social-icon social-insta"></i>
                  </a>
                  <a href="" className="social-media">
                    <i className="fab fa-facebook social-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Row 2 of 1--> */}
          <div className="col-md-5 ms-auto">
            <div className="newsletter ms-auto">
              <div className="newsletter-title">
                Subscribe to our Newsletter
              </div>
              <form className="newsletter-form">
                <div className="row">
                  <div className="col-8 col-md-9">
                    <input
                      type="text"
                      className="newsletter-input"
                      placeholder="Enter Email address"
                    />
                  </div>
                  <div className="col-4 col-md-3 ps-0">
                    <button className="signup-btn btn" type="button">
                      {" "}
                      Sign Up{" "}
                    </button>
                  </div>
                </div>
              </form>

              {/* <!--  --> */}
              <div className="row">
                <div className="col-6 col-md-5 col-lg-4">
                  <a
                    href="https://apps.apple.com/gb/app/allish-uk/id6502819288"
                    target="_blank"
                  >
                    <img
                      src="/images/app-store.svg"
                      className="img-fluid"
                      alt="Apple app store"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="col-6 col-md-5  col-lg-4 ps-0">
                  <a
                    href="https://play.google.com/store/apps/details?id=allish.co.uk.prod"
                    target="_blank"
                  >
                    <img
                      src="/images/play-store.svg"
                      className="img-fluid google-img"
                      alt="Google Play Store"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              {/* <!--  -->
<!--     
                    <div className="d-flex justify-content-center justify-content-md-start gap-3">
                        <a href="" target="_blank">
                            <img src="./images/app-store.svg" className="img-fluid" alt="Apple app store" loading="lazy">
                        </a>
                        <a href="" target="_blank">
                            <img src="images/play-store.svg" alt="Google" className="img-fluid store" loading="lazy" />
                        </a>
                    </div> --> */}
            </div>
          </div>
        </div>

        {/* <!--  --> */}
        <hr className="divider" />
        <div className="row">
          <div className="col-md-7">
            <div className="rights-reserved text-center text-md-start">
              All rights reserved 2024
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-between">
            <a
              href="/allish/termsandconditions#"
              className="rights-link"
              onClick={() => {
                handleNavigation("/allish/termsandconditions#");
              }}
            >
              <div className="rights-item text-center">Terms & Conditions</div>
            </a>
            <a
              href="/allish/privacypolicy#"
              className="rights-link"
              onClick={() => {
                handleNavigation("/allish/privacypolicy");
              }}
            >
              <div className="rights-item">Privacy Policy</div>
            </a>
            <a
              href="/allish/returnpolicy#"
              className="rights-link"
              onClick={() => {
                handleNavigation("/allish/returnpolicy#");
              }}
            >
              <div className="rights-item">Return Policy</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
