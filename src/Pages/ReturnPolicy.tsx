import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ReturnPolicy: React.FC = () => {
  useEffect(() => {
    // Scroll logic to add/remove className from header
    const handleScroll = () => {
      const header = document.getElementById("allish-header");
      if (header) {
        if (window.scrollY > 70) {
          header.classList.add("test");
        } else if (window.scrollY < 10) {
          header.classList.remove("test");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <section className="terms-policy">
        <div className="terms-body">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1 className="main-heading">Return Policy</h1>
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
