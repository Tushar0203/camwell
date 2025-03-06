"use client";
import React, { useState } from "react";
import "../styles/contact.css";
import { FiCheck } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "IN",
    phoneNumber: "",
    message: "",
    services: [],
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneCode: "IN",
          phoneNumber: "",
          message: "",
          services: [],
        });
        setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-main">
          <div className="contact-form-section">
            <h1 className="contact-title">Contact our team</h1>
            <p className="contact-description">
              Got any questions about the product or scaling on our platform?
              We're here to help. Chat to our friendly team 24/7 and get onboard
              in less than 5 minutes.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone number</label>
                <div className="phone-input">
                  <select
                    name="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleInputChange}
                  >
                    <option value="IN">IN (+91)</option>
                    <option value="US">US (+1)</option>
                    <option value="UK">UK (+44)</option>
                    <option value="AU">AU (+61)</option>
                    <option value="SG">SG (+65)</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Leave us a message..."
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label className="services-label">Services</label>
                <div className="services-grid">
                  {[
                    "Website design",
                    "Content creation",
                    "UX design",
                    "Strategy & consulting",
                    "User research",
                    "Other",
                  ].map((service) => (
                    <label key={service} className="service-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="method-section">
              <h2>Chat with us</h2>
              <p>Speak to our friendly team via live chat.</p>
              <div className="method-links">
                <a href="#" className="method-link">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <a href="#" className="method-link">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5 18L14.8571 12M9.14286 12L2.5 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Shoot us an email</span>
                </a>
                <a href="#" className="method-link">
                  <img
                    src="/images/icons/twitter.svg"
                    alt="X (Twitter) icon"
                    width="20"
                    height="20"
                    className="social-icon"
                  />
                  <span>Message us on X</span>
                </a>
              </div>
            </div>

            <div className="method-section">
              <h2>Call us</h2>
              <p>Call our team Mon-Fri from 9am to 6pm IST.</p>
              <a href="tel:+919999999999" className="phone-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>+91 99999 99999</span>
              </a>
            </div>

            <div className="method-section">
              <h2>Visit us</h2>
              <p>Chat to us in person at our Bangalore HQ.</p>
              <a href="#" className="address-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>123 Brigade Road, Bangalore, Karnataka 560001</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="success-popup">
          <div className="success-popup-content">
            <div className="success-icon-wrapper">
              <FiCheck className="success-icon" />
            </div>
            <div className="success-text-content">
              <h3>Message sent successfully!</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          </div>
          <div className="progress-bar"></div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
