import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* <!--Row 1 of 1--> */}
          <div className="col-12 col-md-5">
            <div className="row">
              {/* <!--Row 1 of 2--> */}
              <div className="col-5 col-md-4 ">
                <Link to="/allish/privacypolicy" className="rights-link">
                  <div className="footer-titles">Privacy Policy</div>
                </Link>
                <div className="footer-all-links">
                  <Link to="/allish#pocket" className="footer-links">
                    My Account
                  </Link>
                  <Link to="/allish#pocket" className="footer-links">
                    My Orders
                  </Link>
                  <Link to="/allish#pocket" className="footer-links">
                    My Favourites
                  </Link>
                </div>
              </div>
              <div className="col-5 col-md-4 ">
                <Link to="/allish/returnpolicy" className="rights-link">
                  <div className="footer-titles">Return Policy</div>
                </Link>
                <div className="footer-all-links">
                  <Link to="/allish" className="footer-links">
                    Help Center
                  </Link>
                  <Link to="/allish" className="footer-links">
                    Give Feedback
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 ">
                <Link to="/allish/termsandconditions" className="rights-link">
                  <div className="footer-titles text-nowrap mt-20">
                    Terms & Conditions
                  </div>
                </Link>
                <div className="footer-all-links">
                  <Link to="/allish" className="footer-links">
                    About Us
                  </Link>
                  <Link to="/allish" className="footer-links">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-md-8">
                <div className="social d-flex">
                  <div className="social-title">Follow Us</div>
                  <Link to="/allish" className="social-media">
                    <svg
                      className="fa-brands fa-square-instagram social-icon social-insta"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3708 0.667969C16.8713 0.670449 17.6317 0.678395 18.2888 0.697955L18.5476 0.706409C18.8465 0.717035 19.1415 0.730369 19.4971 0.747035C20.9159 0.812595 21.8837 1.03704 22.7337 1.36704C23.6125 1.70593 24.3548 2.1637 25.0959 2.90482C25.8359 3.64593 26.2937 4.39037 26.6337 5.26704C26.9625 6.11593 27.1871 7.08482 27.2537 8.5037C27.2696 8.85926 27.2824 9.15419 27.2929 9.45318L27.3013 9.71197C27.3208 10.369 27.3297 11.1295 27.3325 12.6301L27.3336 13.6242C27.3337 13.7457 27.3337 13.871 27.3337 14.0003L27.3336 14.3765L27.3328 15.3707C27.3303 16.8713 27.3224 17.6318 27.3028 18.2887L27.2943 18.5475C27.2837 18.8466 27.2704 19.1415 27.2537 19.497C27.1881 20.9159 26.9625 21.8837 26.6337 22.7337C26.2948 23.6126 25.8359 24.3549 25.0959 25.0959C24.3548 25.8359 23.6092 26.2937 22.7337 26.6337C21.8837 26.9626 20.9159 27.187 19.4971 27.2537C19.1415 27.2695 18.8465 27.2825 18.5476 27.2929L18.2888 27.3013C17.6317 27.3209 16.8713 27.3297 15.3708 27.3326L14.3765 27.3337C14.2551 27.3337 14.1297 27.3337 14.0004 27.3337H13.6243L12.63 27.3327C11.1295 27.3303 10.369 27.3223 9.71196 27.3027L9.45318 27.2943C9.15418 27.2837 8.85925 27.2703 8.5037 27.2537C7.08481 27.1882 6.11814 26.9626 5.26704 26.6337C4.38925 26.2949 3.64592 25.8359 2.90481 25.0959C2.1637 24.3549 1.70704 23.6093 1.36704 22.7337C1.03704 21.8837 0.813702 20.9159 0.747036 19.497C0.731196 19.1415 0.718275 18.8466 0.707809 18.5475L0.699422 18.2887C0.679916 17.6318 0.671022 16.8713 0.668142 15.3707L0.667969 12.6301C0.670449 11.1295 0.678382 10.369 0.697942 9.71197L0.706409 9.45318C0.717035 9.15419 0.730369 8.85926 0.747036 8.5037C0.812582 7.0837 1.03704 6.11704 1.36704 5.26704C1.70592 4.38926 2.1637 3.64593 2.90481 2.90482C3.64592 2.1637 4.39037 1.70704 5.26704 1.36704C6.11704 1.03704 7.0837 0.813702 8.5037 0.747035C8.85925 0.731209 9.15418 0.718289 9.45318 0.707822L9.71196 0.699435C10.369 0.679915 11.1295 0.671022 12.63 0.668142L15.3708 0.667969ZM14.0004 7.3337C10.3165 7.3337 7.3337 10.3197 7.3337 14.0003C7.3337 17.6842 10.3197 20.667 14.0004 20.667C17.6843 20.667 20.6671 17.681 20.6671 14.0003C20.6671 10.3165 17.6809 7.3337 14.0004 7.3337ZM14.0004 10.0004C16.2096 10.0004 18.0004 11.7906 18.0004 14.0003C18.0004 16.2095 16.2101 18.0003 14.0004 18.0003C11.7912 18.0003 10.0004 16.2102 10.0004 14.0003C10.0004 11.7911 11.7905 10.0004 14.0004 10.0004ZM21.0004 5.3337C20.0813 5.3337 19.3337 6.08025 19.3337 6.99924C19.3337 7.91824 20.0803 8.66593 21.0004 8.66593C21.9193 8.66593 22.6671 7.9194 22.6671 6.99924C22.6671 6.08025 21.9181 5.33256 21.0004 5.3337Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link to="/allish" className="social-media">
                    <i className="fab fa-facebook social-icon"></i>
                  </Link>
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
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      style={email.length > 0 ? { color: "#000000" } : {}}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
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
                  <Link
                    to="https://apps.apple.com/gb/app/allish-uk/id6502819288"
                    target="_blank"
                  >
                    <img
                      src="/images/app-store.svg"
                      className="img-fluid"
                      alt="Apple app store"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="col-6 col-md-5  col-lg-4 ps-0">
                  <Link
                    to="https://play.google.com/store/apps/details?id=allish.co.uk.prod"
                    target="_blank"
                  >
                    <img
                      src="/images/play-store.svg"
                      className="img-fluid google-img"
                      alt="Google Play Store"
                      loading="lazy"
                    />
                  </Link>
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
            <Link to="/allish/termsandconditions" className="rights-link">
              <div className="rights-item text-center">Terms & Conditions</div>
            </Link>
            <Link to="/allish/privacypolicy" className="rights-link">
              <div className="rights-item">Privacy Policy</div>
            </Link>
            <Link to="/allish/returnpolicy" className="rights-link">
              <div className="rights-item">Return Policy</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
