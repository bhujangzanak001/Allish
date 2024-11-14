import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="key-features" id="key-features">
      <div className="container">
        <div className="feature-title text-center">Our Key Features</div>
        <div className="row">
          {/* <!-- Card 1 --> */}
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-image">
                <img
                  src="/images/pickup-svg.svg"
                  className="img-fluid"
                  alt="Pickup or Delivery"
                  loading="lazy"
                />
              </div>
              <div className="feature-heading  mw-250">
                Select <span className="key-text">Pickup or Delivery</span>
              </div>
              <div className="feature-subHeading">
                Choose between store pickup or home delivery to fit your
                schedule.
              </div>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-image">
                <img
                  src="/images/modify-cart.svg"
                  className="img-fluid"
                  alt="Modify Cart After Placing an Order"
                  loading="lazy"
                />
              </div>
              <div className="feature-heading  mw-250">
                <span className="key-text">Modify Cart </span>After Placing an
                Order
              </div>
              <div className="feature-subHeading">
                Need to add or remove items? Modify your cart even after placing
                an order.
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-image">
                <img
                  src="/images/same-day.svg"
                  className="img-fluid"
                  alt="Same Day, Local Delivery"
                  loading="lazy"
                />
              </div>
              <div className="feature-heading  mw-210">
                <span className="key-text">Same Day</span>, Local Delivery
              </div>
              <div className="feature-subHeading">
                Get your groceries delivered straight to your door, fresh from
                nearby stores.
              </div>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-image">
                <img
                  src="/images/real-time.svg"
                  className="img-fluid"
                  alt="Real-time Order Tracking"
                  loading="lazy"
                />
              </div>
              <div className="feature-heading mw-250">
                <span className="key-text">Real-time </span>Order Tracking
              </div>
              <div className="feature-subHeading">
                Stay updated with live tracking from the moment you place your
                order until it reaches your doorstep.
              </div>
            </div>
          </div>
          {/* <!-- Card 5 --> */}
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-image">
                <img
                  src="/images/custom-instruction.svg"
                  className="img-fluid"
                  alt="Custom Instructions"
                  loading="lazy"
                />
              </div>
              <div className="feature-heading">
                <span className="key-text d-block">Custom </span>Instructions
              </div>
              <div className="feature-subHeading">
                Add specific instructions for your items, like alternatives if
                the store runs out of your selected product.
              </div>
            </div>
          </div>
          {/* <!-- Card 6 --> */}
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-image">
                <img
                  src="/images/special-request.svg"
                  className="img-fluid"
                  alt="Special Requests"
                  loading="lazy"
                />
              </div>
              <div className="feature-heading">
                Special <span className="key-text d-block">Requests</span>
              </div>
              <div className="feature-subHeading">
                Have a specific product in mind? Make special requests directly
                to stores for the products you need
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
