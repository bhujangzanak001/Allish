import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import usePageTitle from "../Hooks/UsePageTitle";

const ReturnPolicy: React.FC = () => {
  usePageTitle("Allish - Return Policy");
  return (
    <>
      <Header />
      <section className="terms-policy">
        <div className="terms-body">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1 className="main-heading text-center">Returns Policy</h1>
                <div className="main-subheading mb-30"></div>
                {/* <!-- Returns & Refunds: --> */}
                <div className="terms-heading mb-16">Returns & Refunds:</div>
                <div className="terms-brief mb-24">
                  We do not support returns at the moment. Please note, any
                  items delivered are not returnable
                </div>
                {/* <!-- Returns & Refunds: --> */}
                <div className="terms-heading mb-16">Order Issues:</div>
                <div className="terms-brief mb-8">
                  We strongly recommend to check all items immediately after
                  delivery.A timeframe of 12 hours is set after the delivery is
                  done for any issues related to your order. No complaints will
                  be entertained after the 12-hour timeframe has passed.
                </div>
                <div className="terms-brief mb-8">
                  Allish will investigate all the issues on case by case basis.
                  The outcome will depend on Allish’s sole discretion and cannot
                  be further changed after the investigation.
                </div>
                <div className="terms-brief mb-8">
                  Allish will issue refund in the form of Allish credit which
                  can be reflected in your account instantly. We reserve the
                  right to issue credit for any refund
                </div>
                <div className="terms-brief mb-24">
                  If we found any fraudulent behavior, the customer’s account
                  will be cancelled without prior notice and the account will
                  stand cancelled with any pending returns, refunds or credits.
                  No further assistance would be provided.
                </div>

                {/* <!-- Order Cancellation by Customers--> */}
                <div className="terms-heading mb-16">
                  Order Cancellation by Customers
                </div>
                <div className="terms-brief mb-8">
                  If you wish to cancel your order, you are required to do it
                  before the order has started processing by Allish shopper. In
                  this case, the complete amount of the order will be refunded
                  to your used payment method after we initiate the
                  cancellation. Please allow 7-10 business days to reflect the
                  refund on your bank statement
                </div>
                <div className="terms-brief mb-8">
                  NO ORDERS WILL BE CANCELLED AFTER THE SHOPPER HAS ACCEPTED THE
                  ORDER. All orders cancelled after the shopper has accepted it
                  (Can be tracked on your customer account), will be charged
                  with 30% restocking fees of the total order amount.
                </div>
                <div className="terms-brief mb-24">
                  We advise you to make cancellation requests before the order
                  is accepted by the Allish shopper
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
