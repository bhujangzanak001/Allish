import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import usePageTitle from "../Hooks/UsePageTitle";

const PrivacyPolicy: React.FC = () => {
  usePageTitle("Allish - Privacy Policy");
  return (
    <>
      <Header />
      <section className="terms-policy">
        <div className="terms-body">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1 className="main-heading text-center">
                  Allish Privacy Policy
                </h1>
                <div className="terms-heading mb-24 text-center">
                  Allish Limited (Company Number 14753643)
                </div>
                <div className="main-subheading mb-30">
                  Thank you for using Allish! Allish Limited (Allish) values our
                  members and aims to ensure you feel comfortable and secure
                  while shopping on Allish. We understand the importance of
                  handling our members’ information responsibly. This Privacy
                  Policy explains the types of information we gather, how it is
                  protected, what we do with it, and how you can correct or
                  change your information. By shopping at aliish.co.uk, you
                  accept the practices described in this Privacy Policy. <br />
                  <br />
                  This Privacy Policy applies to Allish’s data collection during
                  the use of our platform and all services defined in the Terms
                  of Use through aliish.co.uk, the Allish mobile applications,
                  communications, or any other method. By using the services
                  provided by Allish, you agree to the Privacy Policy stated on
                  Allish. We advise you to review the information before using
                  the services and periodically.
                </div>

                {/* <!-- Returns & Refunds: --> */}
                <div className="terms-heading mb-30">
                  All About Your Information{" "}
                </div>
                <div className="terms-heading mb-16">
                  Information You Provide To Us{" "}
                </div>
                <div className="terms-brief mb-8">
                  When you register with Allish, you provide us with various
                  pieces of personal information, including:
                </div>
                <div className="term-list-all mb-24">
                  <ul>
                    <li className="terms-list mb-8">Name</li>
                    <li className="terms-list mb-8">Postal code</li>
                    <li className="terms-list mb-8">
                      Delivery and billing addresses
                    </li>
                    <li className="terms-list mb-8">Email address</li>
                    <li className="terms-list mb-8">Phone number</li>
                    <li className="terms-list mb-8">
                      Billing details (such as credit card account number and
                      expiration date)
                    </li>
                    <li className="terms-list mb-8">
                      Bank account number or PayPal account details
                    </li>
                    <li className="terms-list mb-8">
                      Birth date (for alcohol orders where available)
                    </li>
                  </ul>
                </div>
                <div className="terms-brief mb-24">
                  This information is collected as part of your account
                  registration and order placement process. Additionally, we
                  collect data through communications with Allish, including SMS
                  or in-app chat communications between a member and an Allish
                  shopper. This is collectively referred to as “Personal
                  Information.” You are required to create a password during
                  registration, which should be kept strictly confidential to
                  prevent unauthorized use. <br />
                  <br />
                  While using the Allish Service, you may provide us with
                  special shopping and delivery instructions, which we store to
                  fulfill your order according to your specifications.
                  <br />
                  <br />
                  Please note that if you choose not to provide us with certain
                  information, your ability to use our services may be limited.
                  You may also provide Allish with the email addresses of people
                  you believe may be interested in becoming members. You are
                  responsible for ensuring the appropriateness and
                  permissibility of these submissions. By using interactive and
                  social features on Allish, you agree to provide information
                  such as your name, email address, and public profile
                  information. Be aware that when you post information in these
                  features, the content may be publicly accessible or accessible
                  to other users.
                  <br />
                  <br />
                  We may use Web beacons and device identifiers or SDKs (for
                  mobile applications) to collect information about page and
                  email viewing, including name, email, IP address, and more,
                  for displaying ads or performing related services or
                  analytics.
                </div>
                {/* <!-- Cookies --> */}
                <div className="terms-heading mb-16">Cookies</div>
                <div className="terms-brief mb-24">
                  Allish uses cookies when you access our services. Cookies are
                  identifiers transferred to your device to enable our system to
                  recognize your device through your web browser and provide
                  certain shopping features, such as personalized
                  recommendations and advertisements, storing items in your cart
                  between visits, and more. Cookies also help us track responses
                  to messages sent on behalf of our advertisers to aggregate
                  information and report results. The Help feature on most
                  browsers will tell you how to prevent or disable cookies or
                  receive notice when a new cookie appears. If you choose to
                  reject or disable cookies, you will be unable to use those
                  Allish services that require the use of such cookies.
                  <br />
                  <br />
                  Allish may use companies to place advertisements for displayed
                  products and services and those of third parties on our site
                  and third-party sites. Technologies such as cookies, Web
                  beacons, or tags are used to measure the effectiveness of our
                  ads and to display content and advertising based on your
                  interests both on our site and on third-party sites. We may
                  use analytics services like Google Analytics to analyze
                  information regarding visits to Allish and mobile
                  applications. You can learn more about Google’s privacy
                  practices [here]{" "}
                  <a href="https://policies.google.com/privacy">
                    (Privacy Policy – Privacy & Terms – Google )
                  </a>
                  . If you prefer not to participate in these services, you can
                  opt out by visiting the Network Advertising Initiative (NAI)
                  website.
                </div>
                {/* <!-- How the Information Is Used --> */}
                <div className="terms-heading mb-16">
                  How the Information Is Used
                </div>
                <div className="terms-brief mb-8">
                  Allish uses your information to provide services and enhance
                  and personalize your shopping experience. Allish does not sell
                  personal information about individual customers (such as name,
                  address, email address, credit card information) to third
                  parties, nor do we sell or rent lists of customers. We use
                  your information solely to provide the Allish Service or as
                  described below:
                </div>
                <div className="term-list-all mb-24">
                  <ul>
                    <li className="terms-list mb-8">
                      Aggregated Information: Allish may use aggregated
                      information regarding its customers and usage of the
                      services offered (such as customer demographics and
                      traffic patterns) and may disclose such aggregated
                      information to advertisers, partners, and others for
                      various purposes.
                    </li>
                    <li className="terms-list mb-8">
                      Third-Party Service Providers: Allish may employ other
                      companies and individuals to perform certain functions
                      such as delivering packages, processing credit card
                      payments, and analyzing data. They may have access to
                      personal information to perform their functions.
                    </li>
                    <li className="terms-list mb-8">
                      Sale of Business: Allish may transfer customer
                      registration data and other personal information in
                      connection with the sale of Allish or the sale or transfer
                      of its business operations to a third-party provider of
                      grocery ordering or delivery services who agrees to be
                      bound by this Privacy Policy until you consent that such
                      information will be governed by the policies and terms of
                      such third-party provider.
                    </li>
                    <li className="terms-list mb-8">
                      Enforcement of Agreement or Compliance with Law: Allish
                      may use or disclose personal information when Allish
                      believes it is appropriate to enforce this Agreement,
                      protect the rights, property, or safety of Allish or its
                      users, or comply with the law
                    </li>
                  </ul>
                </div>
                {/* <!--  --> */}
                {/* <!-- How the Information Is Used --> */}
                <div className="terms-heading mb-16">
                  How the Information Is Used
                </div>
                <div className="terms-brief mb-8">
                  Allish uses your information to provide services and enhance
                  and personalize your shopping experience. Allish does not sell
                  personal information about individual customers (such as name,
                  address, email address, credit card information) to third
                  parties, nor do we sell or rent lists of customers. We use
                  your information solely to provide the Allish Service or as
                  described below:
                </div>
                <div className="term-list-all mb-24">
                  <ul>
                    <li className="terms-list mb-8">
                      Aggregated Information: Allish may use aggregated
                      information regarding its customers and usage of the
                      services offered (such as customer demographics and
                      traffic patterns) and may disclose such aggregated
                      information to advertisers, partners, and others for
                      various purposes.
                    </li>
                    <li className="terms-list mb-8">
                      Third-Party Service Providers: Allish may employ other
                      companies and individuals to perform certain functions
                      such as delivering packages, processing credit card
                      payments, and analyzing data. They may have access to
                      personal information to perform their functions.
                    </li>
                    <li className="terms-list mb-8">
                      Sale of Business: Allish may transfer customer
                      registration data and other personal information in
                      connection with the sale of Allish or the sale or transfer
                      of its business operations to a third-party provider of
                      grocery ordering or delivery services who agrees to be
                      bound by this Privacy Policy until you consent that such
                      information will be governed by the policies and terms of
                      such third-party provider.
                    </li>
                    <li className="terms-list mb-8">
                      Enforcement of Agreement or Compliance with Law: Allish
                      may use or disclose personal information when Allish
                      believes it is appropriate to enforce this Agreement,
                      protect the rights, property, or safety of Allish or its
                      users, or comply with the law
                    </li>
                  </ul>
                </div>
                {/* <!-- new page -->
                            <!-- How the Information Is Used --> */}
                <div className="terms-heading mb-16">
                  What Information Do We Share
                </div>
                <div className="terms-brief mb-8">
                  Allish needs to share information about you and your order
                  with others to enable all the services provided on the
                  platform. We share information in the following situations:
                </div>
                <div className="term-list-all mb-24">
                  <ul>
                    <li className="terms-list mb-8">
                      With Your Consent: Information will be shared when we have
                      your consent or when you have directed us to do so.
                    </li>
                    <li className="terms-list mb-8">
                      With Our Retail Partners: Your information may be shared
                      with the Allish retail partner to provide the services.
                    </li>
                    <li className="terms-list mb-8">
                      For Business Activities: Your information may be provided
                      to our third-party service providers or contractors to
                      help with the operations and services provided by Allish.
                    </li>
                    <li className="terms-list mb-8">
                      Business Acquisitions or Mergers: If we form a new related
                      entity, are acquired by or merged with another entity, or
                      if substantially all our assets are transferred to another
                      organization, information about our users may be
                      transferred as a business asset.
                    </li>
                    <li className="terms-list mb-8">
                      Legal Uses: Allish may use or disclose personal
                      information when Allish believes it is appropriate to
                      enforce this Agreement, protect the rights, property, or
                      safety of Allish or its users, or comply with the law
                    </li>
                    <li className="terms-list mb-8">
                      Aggregated Information: Allish may use aggregated
                      information regarding its customers and usage of the
                      services offered and may disclose such aggregated
                      information to advertisers, partners, and others for
                      various purposes.
                    </li>
                  </ul>
                </div>

                {/* <!-- Data Retention --> */}
                <div className="terms-heading mb-16">Data Retention</div>
                <div className="terms-brief mb-24">
                  Data Retention Policy: Allish retains personal data only for
                  as long as necessary to fulfill the purposes for which it was
                  collected, including to meet legal, accounting, or reporting
                  requirements. The specific retention periods depend on the
                  type of data and the purposes for which it is used. We
                  periodically review our data retention policies to ensure
                  compliance.
                </div>

                {/* <!-- Children's Privacy--> */}
                <div className="terms-heading mb-16">Children's Privacy</div>
                <div className="terms-brief mb-30">
                  Children's Privacy: Allish does not knowingly collect personal
                  information from children under the age of 13. If we become
                  aware that we have collected personal information from a child
                  under the age of 13, we will take steps to delete such
                  information from our files as soon as possible. Parents or
                  guardians who believe that Allish might have collected
                  personal information from a child under the age of 13 should
                  contact us immediately.
                </div>

                {/* <!-- Children's Privacy--> */}
                <div className="terms-heading mb-16">
                  International Data Transfers
                </div>
                <div className="terms-brief mb-24">
                  International Data Transfers: If you are accessing our
                  services from outside the country where our servers are
                  located, please be aware that your information may be
                  transferred to, stored, and processed in a different country.
                  We take steps to ensure that your data is protected in
                  accordance with this Privacy Policy and applicable laws.
                </div>

                {/* <!-- User Rights--> */}
                <div className="terms-heading mb-16">User Rights</div>
                <div className="terms-brief mb-24">
                  User Rights: Depending on your jurisdiction, you may have the
                  following rights regarding your personal information:
                </div>
                <div className="term-list-all mb-24">
                  <ul>
                    <li className="terms-list mb-8">
                      Right to Access: You have the right to request access to
                      the personal data we hold about you.{" "}
                    </li>
                    <li className="terms-list mb-8">
                      Right to Rectification: You can request that we correct
                      any inaccurate or incomplete personal data.
                    </li>
                    <li className="terms-list mb-8">
                      Right to Erasure: You have the right to request the
                      deletion of your personal data under certain conditions.
                    </li>
                    <li className="terms-list mb-8">
                      Right to Restrict Processing: You can request that we
                      restrict the processing of your personal data under
                      certain circumstances.
                    </li>
                    <li className="terms-list mb-8">
                      Right to Object: You have the right to object to the
                      processing of your personal data for direct marketing
                      purposes.
                    </li>
                    <li className="terms-list mb-8">
                      Right to Data Portability: You can request to receive your
                      personal data in a structured, commonly used, and
                      machine-readable format.
                    </li>
                  </ul>
                </div>
                <div className="terms-brief mb-30">
                  Exercising Rights: To exercise any of these rights, please
                  contact us using the information provided in the "Contact Us"
                  section. We will respond to your request
                </div>

                {/* <!-- cONTACT US --> */}
                <div className="terms-brief mb-8">
                  <b>Contact Us</b>
                </div>
                <div className="terms-brief mb-8">
                  <b>Email:</b>{" "}
                  <a href="mailto:contact@allish.co.uk">contact@allish.co.uk</a>
                </div>
                <div className="terms-brief mb-8">
                  <b>Phone: +44 7466 531569</b>
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

export default PrivacyPolicy;
