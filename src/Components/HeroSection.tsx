import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path); // This redirects without reloading the page
  };
  return (
    <section className="hero" id="hero">
      <div className="hero-body">
        <div className="hero-section">
          <video loop muted autoPlay preload="auto" className="hero-video">
            <source src="/images/allish_4.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="head-con">
                  <div className="hero-title">
                    Your Neighbourhood, Your Shopping Universe.
                  </div>
                  <div className="hero-subtitle">
                    Explore a world of ethnic groceries with Allish. Whether
                    it's specialty items or your everyday essentials, Allish
                    connects you with local ethnic stores across the UK for a
                    seamless shopping experience.
                  </div>
                  <div className="hero-button">
                    <a
                      href="#pocket"
                      onClick={() => {
                        handleNavigation("#pocket");
                      }}
                    >
                      <button type="button" className="btn shopping-btn">
                        Start Shopping
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
