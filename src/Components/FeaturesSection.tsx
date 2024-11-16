import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FeaturesSection: React.FC = () => {
  return (
    <section className="key-features" id="key-features">
      <Container>
        <div className="feature-title text-center">Our Key Features</div>
        <Row>
          {/* <!-- Card 1 --> */}
          <Col md={4}>
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
          </Col>
          {/* <!-- Card 2 --> */}
          <Col md={4}>
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
          </Col>
          {/* <!-- Card 3 --> */}
          <Col md={4}>
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
          </Col>
          {/* <!-- Card 4 --> */}
          <Col md={4}>
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
          </Col>
          {/* <!-- Card 5 --> */}
          <Col md={4}>
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
          </Col>
          {/* <!-- Card 6 --> */}
          <Col md={4}>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
