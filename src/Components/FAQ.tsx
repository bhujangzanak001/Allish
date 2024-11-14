import { useState } from "react";

const faqData = [
  {
    question: "How do I place an order on Allish?",
    answer:
      "It's simple! Just browse through your local stores, add items to your cart, and proceed to checkout. Your groceries will be delivered right to your door or available for store pickup.",
  },
  {
    question: "Do I need to download the app to shop on Allish?",
    answer:
      "Yes, currently we are available app only (Android and iOS) and soon we will be available to shop via website.",
  },
  {
    question: "Can I shop from multiple stores in one order?",
    answer:
      "Yes! You can easily shop from multiple stores and check out all at once, making your shopping experience seamless.",
  },
  {
    question: "What delivery options are available?",
    answer:
      "Allish offers both delivery and store pickup options. You can select the method that works best for you during checkout.",
  },
  {
    question: "How do I make special requests when placing an order?",
    answer:
      "When reviewing your cart, you’ll have the option to add special requests for each product. Just let the store know if you need something specific or customized.",
  },
  {
    question: "Can I modify my order after placing it?",
    answer:
      "Yes, you can modify your cart after placing your order if you need to add or remove items before the store begins processing it.",
  },
];
const FAQ = () => {
  const [show, setShow] = useState(-1);
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="faq-title">Frequently Asked Questions</div>
            <div className="faq-subtitle"></div>
          </div>
          <div className="col-md-7">
            <div className="accordion" id="accordionExample">
              {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <div className="accordion-header" id={`heading${index}`}>
                    <button
                      className={
                        index === show
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      type="button"
                      onClick={() => {
                        if (index === show) {
                          setShow(-1);
                        } else {
                          setShow(index);
                        }
                      }}
                    >
                      {item.question}
                    </button>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className={
                      index === show
                        ? "accordion-collapse expanded"
                        : "accordion-collapse"
                    }
                    aria-labelledby={`heading${index}`}
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
