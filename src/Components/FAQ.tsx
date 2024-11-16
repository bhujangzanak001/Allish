import { useState } from "react";
import { Accordion, Col, Container, Fade, Row } from "react-bootstrap";

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
      <Container>
        <Row>
          <Col md={5}>
            <div className="faq-title">Frequently Asked Questions</div>
            <div className="faq-subtitle"></div>
          </Col>
          <Col md={7}>
            <Accordion>
              {faqData.map((item, index) => (
                <Accordion.Item eventKey={`${index}`} key={index}>
                  <Accordion.Header
                    id={`heading${index}`}
                    onClick={() => {
                      if (index === show) {
                        setShow(-1);
                      } else {
                        setShow(index);
                      }
                    }}
                  >
                    {item.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Fade in={show === index}>
                      <>{item.answer}</>
                    </Fade>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
