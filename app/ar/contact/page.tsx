"use client";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from "react";
import { FiCheck } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: '',
  });
  
  const [showPopup, setShowPopup] = useState(false);
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Pre-select product if specified in URL
    const productParam = searchParams?.get('product');
    if (productParam) {
      setFormData(prev => ({
        ...prev,
        product: productParam
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setShowPopup(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        product: formData.product, // Keep the product selection
      });
      
      // Hide popup after 5 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div dir="rtl" className="contact-container">
      <div className="contact-content">
        <div className="contact-main">
          <div className="contact-form-section">
            <h1>تواصل معنا</h1>
            <p className="contact-subtitle">
              نحن هنا للإجابة على أسئلتك وتقديم المساعدة في مشروعك القادم.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">الاسم الكامل</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">الشركة (اختياري)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="أدخل اسم شركتك"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="product">المنتج الذي تهتم به</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                >
                  <option value="">-- اختر منتجًا --</option>
                  <option value="border-fence">سياج الحدود الجديد</option>
                  <option value="fence-swing-gate">بوابة السياج المتأرجحة</option>
                  <option value="other">منتج آخر</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">رسالتك</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="أخبرنا بمزيد من التفاصيل عن مشروعك أو استفسارك"
                  rows={5}
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                إرسال الرسالة
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="method-section">
              <h2>تواصل معنا</h2>
              <p>اختر الطريقة المفضلة لديك للتواصل معنا.</p>
              <div className="contact-methods">
                <a href="mailto:info@camwell.com" className="method-link">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>أرسل لنا بريدًا إلكترونيًا</span>
                </a>
                <a href="#" className="method-link">
                  <Image
                    src="/images/icons/twitter.svg"
                    alt="X (Twitter) icon"
                    width={20}
                    height={20}
                    className="social-icon"
                  />
                  <span>راسلنا على X</span>
                </a>
              </div>
            </div>

            <div className="method-section">
              <h2>اتصل بنا</h2>
              <p>اتصل بفريقنا من الاثنين إلى الجمعة من الساعة 9 صباحًا حتى 6<|im_start|>2 بتوقيت الهند.</p>
              <a href="tel:+919999999999" className="phone-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C18.2 22.09 16.48 21.81 14.87 21.14C13.3647 20.5199 11.9845 19.6599 10.8 18.6C9.61552 17.5399 8.65542 16.2947 7.97 14.92C7.29 13.3 7.01 11.58 7.14 9.82C7.14952 9.27107 7.36019 8.74263 7.73476 8.36806C8.10932 7.99349 8.63775 7.78283 9.19 7.77H12.19C13.18 7.76 14.01 8.5 14.14 9.48C14.2 9.95 14.3 10.41 14.44 10.85C14.6554 11.4781 14.5445 12.1696 14.15 12.7L13.07 13.79C13.7159 15.0175 14.5959 16.0963 15.67 16.93L16.75 15.85C17.2804 15.4555 17.9719 15.3446 18.6 15.56C19.04 15.7 19.5 15.8 19.97 15.86C20.9584 15.99 21.7037 16.8199 21.7 17.82L22 16.92Z"
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
              <h2>زيارتنا</h2>
              <p>مكتبنا الرئيسي مفتوح من الاثنين إلى الجمعة، من الساعة 9 صباحًا حتى 632.</p>
              <address className="address">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9