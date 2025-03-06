'use client'
import React, { useEffect, useState, useRef } from 'react';
import '@/app/styles/footer.css';
import { motion } from "framer-motion";

const MotionH1 = motion.h1;
const MotionDiv = motion.div;

const Faqs = () => {

  const faqs = [
    {
      question: "What types of security fencing solutions do you offer?",
      answer: "We offer a comprehensive range of high-performance security fencing solutions including perimeter fencing, anti-climb barriers, razor wire systems, and specialized security gates. Our solutions are customized to meet specific security requirements for government agencies, defense organizations, and private sector facilities."
    },
    {
      question: "What sets Camwell Industries apart from other fencing companies?",
      answer: "With decades of experience, we specialize in high-security fencing solutions that meet rigorous government and defense standards. Our expertise in design, manufacturing, and installation, combined with our commitment to quality and durability, makes us a trusted partner in the security fencing industry."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide complete installation services for all our fencing solutions. Our experienced team handles the entire process from site assessment and planning to professional installation, ensuring optimal security performance and longevity of the system."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of sectors including government agencies, defense organizations, industrial facilities, critical infrastructure, private enterprises, and commercial properties requiring high-security fencing solutions."
    },
    {
      question: "Do you offer customized fencing solutions?",
      answer: "Yes, we specialize in creating customized fencing solutions tailored to each client's specific security requirements, site conditions, and regulatory compliance needs. Our team works closely with clients to design and implement the most effective security solution."
    },
    {
      question: "How can I get a quote for my security fencing needs?",
      answer: "You can contact our team through our website or call us directly for a consultation. We'll assess your security requirements, conduct a site survey if necessary, and provide a detailed quote tailored to your specific needs."
    }
  ];

  const [activeFaqs, setActiveFaqs] = useState(null);

  const faqRefs = useRef([]);

  useEffect(() => {
    const handleClick = (event) => handleClickOutside(event, faqRefs, setActiveFaqs);
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClickOutside = (event, faqRefs, setActiveFaqs) => {
    const isOutside = faqRefs.current.every(ref => {
      return ref && !ref.contains(event.target);
    });

    if (isOutside) {
      setActiveFaqs(null);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaqs(prevFaq => prevFaq === index ? null : index);
  };
  return (
    <section className="faq-section animatedSection">
          <MotionH1
            className="faq-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </MotionH1>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                ref={el => faqRefs.current[index] = el}
                className={`faq-item ${activeFaqs === index ? 'active' : ''}`}
                whileHover={{ scale: 1.01 }}
              >
                <motion.div
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3>{faq.question}</h3>
                  <motion.div
                    className="faq-icon"
                    animate={{
                      rotate: activeFaqs === index ? 45 : 0,
                      backgroundColor: activeFaqs === index ? 'var(--theme-color)' : 'rgba(46, 146, 223, 0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.div>
                </motion.div>
                <motion.div
                  className="faq-answer"
                  initial={false}
                  animate={{
                    height: activeFaqs === index ? 'auto' : 0,
                    opacity: activeFaqs === index ? 1 : 0,
                    marginBottom: activeFaqs === index ? '1.8rem' : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </MotionDiv>
            ))}
          </div>
        </section>
  )
}

export default Faqs
