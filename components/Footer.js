import React from 'react'
import '@/app/styles/footer.css';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <div className="footer-brand">
              <h1 className="footer-brand-text">Camwell</h1>
              <p className="footer-about">
                Specialists in security and safeguard solutions for high-value properties across India. 
                Delivering excellence through innovative design and quality.
              </p>
            </div>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="tel:+919971790831">+91-9971790831</a></li>
              <li><a href="mailto:info@camwell.in">info@camwell.in</a></li>
              <li>CAMWELL INDUSTRIES PVT. LTD.</li>
              <li>B2, 3rd Floor, RK Tower</li>
              <li>Sector 4, Vaishali</li>
              <li>Ghaziabad, UP-201010</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="copyright">
            ©2024 Camwell Industries Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
