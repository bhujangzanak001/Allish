/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import usePageTitle from "../Hooks/UsePageTitle";

const TermsAndConditions: React.FC = () => {
  usePageTitle("Allish - Terms & Conditions");
  return (
    <>
      <Header />
      <section className="terms-policy">
        <div className="terms-body">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1 className="main-heading">Terms and Conditions</h1>
                <div className="main-subheading mb-30">
                  Thank you for using Allish! PLEASE READ THESE TERMS AND
                  CONDITIONS ("TERMS") CAREFULLY BEFORE USING OUR WEBSITE OR
                  SITE{" "}
                  <a href="https://allish.co.uk" target="_blank">
                    (https://allish.co.uk)
                  </a>{" "}
                  . BY USING THE SITE, YOU AGREE TO BE BOUND BY THESE TERMS AND
                  OUR PRIVACY POLICY. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT
                  USE THE SITE.
                </div>
                <div className="terms-details">
                  <div className="terms-heading mb-24">
                    1. Eligibility and Account Registration
                  </div>
                  <div className="terms-brief mb-24">
                    You may visit the SITE without registering. However, to
                    avail the services offered, you must register an account.
                    You must be at least 18 years old to use the SITE and its
                    services, thereby entering into a binding contract. If you
                    use the SITE on behalf of a legal entity, you represent and
                    warrant that you have the authority to bind that entity to
                    these TERMS.
                  </div>
                  <div className="term-list-all">
                    <div className="terms-list mb-8">
                      1.1 To Register and Become a Member:
                    </div>
                    <div className="terms-list mb-8">
                      1. Verify service availability in your area.
                    </div>
                    <div className="terms-list mb-8">
                      2. Submit your valid email address, name, and create a
                      password.
                    </div>
                    <div className="terms-list mb-8">
                      3. Agree to our terms of service and privacy policies.
                    </div>
                    <div className="terms-list mb-8">
                      4. Complete all required fields including a valid email
                      address and payment information
                    </div>
                  </div>
                  <div className="terms-brief mb-30 mt-4">
                    By registering, you agree to provide accurate and complete
                    information, including payment details and delivery address.
                  </div>
                  {/* <!-- Term 1.2 --> */}
                  <div className="term-list-all">
                    <div className="terms-list mb-8">
                      1.2 Responsibility for Account Security
                    </div>
                    <div className="terms-brief mb-30">
                      You are responsible for all access and use of the SITE
                      through your account, whether authorized or unauthorized.
                      This includes all communications and obligations
                      (financial or otherwise) incurred through such access or
                      use. You must ensure the security and confidentiality of
                      your account credentials and promptly notify us of any
                      unauthorized use or security breach.
                    </div>
                  </div>
                  {/* <!-- Term 1.3 --> */}
                  <div className="term-list-all">
                    <div className="terms-list mb-8">1.3 Opting Out</div>
                    <div className="terms-brief mb-30">
                      To cancel your membership, contact us at{" "}
                      <a href="contact@allish.co.uk" target="_blank">
                        contact@allish.co.uk
                      </a>{" "}
                      or +44 7466 531569. Allow at least 24 hours for us to
                      process your request.
                    </div>
                  </div>
                  {/* <!-- Allish communication --> */}
                  <div className="terms-heading mb-24">
                    2. Allish Communications
                  </div>
                  <div className="terms-brief mb-8">
                    By creating an Allish account, you agree to receive
                    communications from Allish or its shoppers via email, in-app
                    notifications, chat messages, text messages and calls to the
                    phone number provided.
                  </div>
                  <div className="terms-brief mb-24">
                    You consent to receive emails about promotional offers,
                    account activity, third-party offers, and newsletters. We
                    may use cookies and other automatic means of data
                    collection. By using the SITE, you agree to our use of
                    cookies as described in our Privacy Policy.
                  </div>
                  {/* <!-- Paymment --> */}
                  <div className="terms-heading mb-24">3. Payments</div>
                  <div className="terms-brief mb-8">
                    We accept Visa, MasterCard, American Express, and Discover.
                    Local sales tax may apply. By providing payment information,
                    you authorize us to store it for future use
                  </div>
                  <div className="terms-brief mb-8">
                    When placing an order, we may temporarily authorize your
                    payment account for up to 15% more than your order value to
                    accommodate changes. The final order total will be charged
                    upon completion of the order.
                  </div>
                  <div className="terms-brief mb-8">
                    If your payment method is declined, we will attempt to
                    process your charge until it is approved. We and our
                    third-party payment processors may receive updated credit
                    card information from your bank. You may opt out of such
                    updates by contacting your bank directly.
                  </div>
                  <div className="terms-brief mb-24">
                    In case of a reversed charge, we may bill your account
                    directly and seek payment through other methods.
                  </div>

                  {/* <!-- Risk of Loss and Title --> */}
                  <div className="terms-heading mb-24">
                    4. Risk of Loss and Title
                  </div>
                  <div className="terms-brief mb-24">
                    The risk of loss and title for items purchased through our
                    services pass to you upon delivery. Replacement of products
                    or credits to your account for items not received are
                    subject to our investigation and discretion.
                  </div>
                  {/* <!-- 5. Order and Service Cancellation --> */}
                  <div className="terms-heading mb-24">
                    5. Order and Service Cancellation
                  </div>
                  <div className="terms-brief mb-24">
                    We reserve the right to cancel orders or services at our
                    discretion. If we cancel an order or service, we will issue
                    a credit to your payment method for the amount of the
                    cancelled order.
                  </div>

                  {/* <!-- 6. Typographical Errors --> */}
                  <div className="terms-heading mb-24">
                    6. Typographical Errors
                  </div>
                  <div className="terms-brief mb-24">
                    If a product is listed with incorrect information, we
                    reserve the right to refuse or cancel orders for such
                    products, even if your order has been confirmed. If your
                    payment has already been processed, we will issue a credit
                    for the cancelled charge.
                  </div>

                  {/* <!-- 7. Third-Party Products and Content --> */}
                  <div className="terms-heading mb-24">
                    7. Third-Party Products and Content
                  </div>
                  <div className="terms-brief mb-8">
                    Allish is not responsible for third-party content, products,
                    services, or information. Any use or purchase of third-party
                    content is at your own risk.
                  </div>
                  <div className="terms-brief mb-24">
                    We do not endorse or assume liability for third-party
                    products or services, including their accuracy, quality, and
                    availability.
                  </div>

                  {/* <!-- 8. Intellectual Property Rights--> */}
                  <div className="terms-heading mb-24">
                    8. Intellectual Property Rights
                  </div>
                  <div className="terms-brief mb-8">
                    The Allish Platform, including software, designs, and
                    content, is the proprietary property of Allish. You are
                    granted a limited, non-exclusive, non-transferable license
                    to use the SITE for personal, non-commercial purposes.
                  </div>
                  <div className="terms-brief mb-8">
                    You may not copy, modify, distribute, or use the SITE
                    content for commercial purposes without written permission
                    from Allish. Unauthorized use, including web scraping, is
                    prohibited.
                  </div>
                  <div className="terms-brief mb-24">
                    By sharing content with Allish, you grant us a
                    non-exclusive, transferable, worldwide license to use,
                    display, and distribute the content.
                  </div>

                  {/* <!-- 9. Termination--> */}
                  <div className="terms-heading mb-24">9. Termination</div>
                  <div className="terms-brief mb-24">
                    Allish reserves the right to terminate your account at any
                    time for any reason. You may terminate your account by
                    contacting us in writing. If you terminate your account, you
                    will not be entitled to a refund of any fees.
                  </div>

                  {/* <!-- 10. Disclaimer, Representations & Warranties--> */}
                  <div className="terms-heading mb-24">
                    10. Disclaimer, Representations & Warranties
                  </div>
                  <div className="terms-brief mb-8">
                    All services and products provided by Allish are on an "as
                    is" and "as available" basis. Allish disclaims all
                    warranties, express or implied, including warranties of
                    merchantability, fitness for a particular purpose, and
                    non-infringement.
                  </div>
                  <div className="terms-brief mb-24">
                    Allish does not guarantee the SITE will be uninterrupted or
                    error-free. Allish is not responsible for the conduct of
                    personal shoppers or thirdparty providers. Any disputes with
                    personal shoppers or third-party providers are between you
                    and them.
                  </div>

                  {/* <!-- 11. Limitation of Liability--> */}
                  <div className="terms-heading mb-24">
                    11. Limitation of Liability
                  </div>
                  <div className="terms-brief mb-24">
                    Allish shall not be liable for any indirect, punitive,
                    incidental, special, or consequential damages arising from
                    your use of the services or products. Our aggregate
                    liability shall not exceed the amounts paid by you to Allish
                    in the three months preceding the claim
                  </div>

                  {/* <!-- 12. Indemnification--> */}
                  <div className="terms-heading mb-24">12. Indemnification</div>
                  <div className="terms-brief mb-24">
                    You agree to defend, indemnify, and hold harmless Allish and
                    its affiliates from any claims, damages, or expenses arising
                    from your use of the SITE or violation of these TERMS.
                  </div>

                  {/* <!-- 13. Disputes Resolution--> */}
                  <div className="terms-heading mb-24">
                    13. Disputes Resolution
                  </div>
                  <div className="terms-brief mb-8">
                    Any disputes arising from your use of the SITE or services
                    will be resolved by binding arbitration in accordance with
                    the Commercial Arbitration: United Kingdom - England &
                    Wales. The arbitration will be held in the United Kingdom.
                  </div>
                  <div className="terms-brief mb-24">
                    We each agree to resolve disputes individually and waive the
                    right to a jury trial.
                  </div>

                  {/* <!-- 14. Severability--> */}
                  <div className="terms-heading mb-24">14. Severability</div>
                  <div className="terms-brief mb-24">
                    If any part of these TERMS is deemed invalid by a court, the
                    remainder will continue in effect. Excessively broad
                    provisions will be limited and enforced to the fullest
                    extent permitted by law.
                  </div>

                  {/* <!-- 15. No Waiver--> */}
                  <div className="terms-heading mb-24">15. No Waiver</div>
                  <div className="terms-brief mb-24">
                    Allish's failure to enforce any provision of these TERMS
                    does not waive its right to do so in the future.
                  </div>

                  {/* <!-- 16. Governing Law--> */}
                  <div className="terms-heading mb-24">16. Governing Law</div>
                  <div className="terms-brief mb-24">
                    The Companies Act (laws of the United Kingdom) govern these
                    TERMS
                  </div>

                  {/* <!--17. Changes to the Terms --> */}
                  <div className="terms-heading mb-24">
                    17. Changes to the Terms
                  </div>
                  <div className="terms-brief mb-24">
                    We reserve the right to modify these TERMS at our
                    discretion. Updated TERMS will be posted on the SITE, and
                    material changes will be communicated to you. Continued use
                    of the SITE constitutes acceptance of the updated TERMS.
                  </div>

                  {/* <!-- --> */}
                  <div className="terms-heading mb-24">
                    18. Referral and Promotional Terms and Conditions for Allish
                  </div>
                  <div className="terms-brief mb-24">
                    These Referral and Promotional Terms and Conditions (the
                    "Terms") govern the Allish referral program and any
                    promotional offers (collectively, the "Program"). By
                    participating in the Program, you agree to be bound by these
                    Terms.
                  </div>

                  {/* <!-- referal program --> */}
                  <div className="terms-brief mb-8">
                    {" "}
                    <b>Referral Program</b>
                  </div>
                  <div className="terms-brief mb-8">
                    1. <b>Eligibility:</b> To participate in the referral
                    program, you must be an existing Allish customer with a
                    valid account.
                  </div>
                  <div className="terms-brief mb-8">
                    2. <b>Referral Process:</b>
                    To refer a friend, you must share your unique referral link
                    with them. Your friend must create a new Allish account
                    using your referral link to qualify for the referral bonus.
                  </div>
                  <div className="terms-brief mb-8">
                    3. <b>Referral Rewards:</b>
                    Both you and your referred friend will receive a specified
                    reward (as detailed in the promotional materials) upon your
                    friend completing a qualifying purchase.
                  </div>
                  <div className="terms-brief mb-8">
                    4. <b>Limitations:</b>
                    Allish reserves the right to limit the number of referrals
                    per user and to modify or terminate the referral program at
                    any time.
                  </div>
                  <div className="terms-brief mb-24">
                    5. <b>Fraud and Abuse:</b>
                    Allish reserves the right to withhold rewards or terminate
                    accounts for fraudulent or abusive referral activity.
                  </div>

                  {/* <!-- Promotional offers --> */}
                  <div className="terms-brief mb-8">
                    {" "}
                    <b>Promotional offers</b>
                  </div>
                  <div className="terms-brief mb-8">
                    1. <b>Eligibility:</b> Promotional offers are subject to
                    specific eligibility criteria, which may include minimum
                    order value, specific product categories, or other
                    conditions.
                  </div>
                  <div className="terms-brief mb-8">
                    2. <b>Offer Terms:</b> The terms and conditions of each
                    promotional offer will be clearly stated in the promotional
                    materials. This may include but is not limited to, discount
                    amounts, expiration dates, and usage restrictions..
                  </div>
                  <div className="terms-brief mb-8">
                    3. <b>Combinations:</b> Promotional offers may not be
                    combined with other discounts, promotions, or coupons unless
                    explicitly stated otherwise.
                  </div>
                  <div className="terms-brief mb-8">
                    4. <b>Modifications:</b> : Allish reserves the right to
                    modify or cancel promotional offers at any time without
                    prior notice.
                  </div>
                  <div className="terms-brief mb-24">
                    5. <b>Fraud and Abuse:</b> Allish reserves the right to
                    withhold promotional benefits or terminate accounts for
                    fraudulent or abusive use of promotional offers.
                  </div>

                  {/* <!-- general Terms --> */}
                  <div className="terms-brief mb-8">
                    {" "}
                    <b>General Terms</b>
                  </div>
                  <div className="terms-brief mb-8">
                    1. <b>Changes to Terms:</b> Allish reserves the right to
                    modify these Terms at any time. Any changes will be
                    effective upon posting on the Allish website.
                  </div>
                  <div className="terms-brief mb-8">
                    2. <b>Governing Law:</b> These Terms shall be governed by
                    and construed in accordance with the laws of [Jurisdiction].
                  </div>
                  <div className="terms-brief mb-24">
                    3. <b>Entire Agreement:</b> These Terms constitute the
                    entire agreement between you and Allish regarding the
                    referral program and promotional offers.
                  </div>
                  {/* <!--  -->
                            <!-- --> */}
                  <div className="terms-heading mb-24">
                    19. Feedback and Improvements
                  </div>
                  <div className="terms-brief mb-8">
                    Allish may request feedback or comments about its services.
                    By providing feedback, you grant us the right to use it for
                    any purpose without compensation.
                  </div>
                  <div className="terms-brief mb-24">
                    For any questions or concerns about these TERMS, please
                    contact us at{" "}
                    <a href="contact@allish.co.uk">contact@allish.co.uk</a> or
                    call +44 7466 531569
                  </div>
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

export default TermsAndConditions;
