/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react";
import React from "react";
import animationData from "../Phones-lotti.json";

const PocketSection: React.FC = () => {
  return (
    <section className="pocket" id="pocket">
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-md-5 order-cs-1">
            <div className="pocket-details">
              <div className="pocket-title">
                Allish in Your Pocket Shop Anywhere, Anytime
              </div>
              <div className="pocket-description me-md-3">
                Elevate your grocery shopping experience with the 'Allish UK'
                mobile app. Discover a world of convenience with easy access to
                your favorite stores, now just a tap away. The 'Allish UK' app
                is designed to bring groceries straight to your door, wherever
                you are.
              </div>
              <div className="pocket-apps me-md-3">
                <div className="row">
                  <div className="col-6 col-md-5">
                    <a
                      href="https://apps.apple.com/gb/app/allish-uk/id6502819288"
                      target="_blank"
                    >
                      <img
                        src="./images/app-store.svg"
                        className="img-fluid"
                        alt="Apple app store"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="col-6 col-md-5 ps-0">
                    <a
                      href="https://play.google.com/store/apps/details?id=allish.co.uk.prod"
                      target="_blank"
                    >
                      <img
                        src="./images/play-store.svg"
                        className="img-fluid google-img"
                        alt="Google Play Store"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 order-cs-0">
            <div className="pocket-image">
              <div className="video-tag">
                {/* <!-- lottie --> */}
                <div id="lottie-container" className="img-fluid">
                  <Lottie
                    animationData={animationData}
                    loop={false}
                    autoplay={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PocketSection;
