import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-body">
        <div className="hero-section">
          <video
            playsInline
            loop
            muted
            autoPlay
            preload="auto"
            className="hero-video"
          >
            <source src="/images/allish_4.webm" type="video/webm" />
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
                    <Link to="#pocket">
                      <button type="button" className="btn shopping-btn">
                        Start Shopping
                      </button>
                    </Link>
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
