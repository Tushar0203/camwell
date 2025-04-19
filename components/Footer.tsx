import {
  ArrowRight,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BackToTopButton from './BackToTopButton';

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-[#202122] to-[#131927] text-white pt-16 pb-8 md:pt-20 md:pb-12 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-13">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex flex-col items-start">
                <div className="relative w-40 h-14 sm:w-48 sm:h-16 mb-6 -ml-3">  {/* Changed from -ml-2 to -ml-3 */}
                  <Image
                    src="/images/camwell-logo.png"
                    alt="Camwell Industries Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  Industry-leading security fencing solutions crafted with precision and
                  innovation for over 18 years.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="p-2.5 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full hover:from-[#1F75B5] hover:to-[#1a5d90] transition-all duration-300 shadow-lg">
                  <Facebook size={18} className="text-gray-300 hover:text-white transition-colors" />
                </Link>
                <Link href="#" className="p-2.5 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full hover:from-[#1F75B5] hover:to-[#1a5d90] transition-all duration-300 shadow-lg">
                  <Twitter size={18} className="text-gray-300 hover:text-white transition-colors" />
                </Link>
                <Link href="#" className="p-2.5 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full hover:from-[#1F75B5] hover:to-[#1a5d90] transition-all duration-300 shadow-lg">
                  <Linkedin size={18} className="text-gray-300 hover:text-white transition-colors" />
                </Link>
                <Link href="#" className="p-2.5 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full hover:from-[#1F75B5] hover:to-[#1a5d90] transition-all duration-300 shadow-lg">
                  <Instagram size={18} className="text-gray-300 hover:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <div className="border-b border-[#374151] pb-2">
                <h3 className="font-semibold text-lg">Quick Links</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link href="/brochure" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Request Brochure</span>
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Warranty</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <div className="border-b border-[#374151] pb-2">
                <h3 className="font-semibold text-lg">Products</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/weld-mesh" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Weld Mesh Panels</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products/fence-posts" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Fence Posts</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products/swing-gates" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Swing Gates</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products/sliding-gates" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Sliding Gates</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products/security-spikes" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Security Spikes</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products/razor-wire" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-1 mr-1 group-hover:opacity-100 transition-all duration-200" />
                    <span>Razor Wire</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-6 2xl:w-[290px] xl:w-[290px] lg:w-[290px] md:w-full">
              <div className="border-b border-[#374151] pb-2">
                <h3 className="font-semibold text-lg">Contact Us</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400 flex items-start group hover:text-white transition-colors duration-200">
                  <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-[#1a5d90]" />
                  B-12, Surajpur Industrial Area, Greater Noida, UP, India
                </p>
                <p className="text-gray-400 group cursor-pointer">
                  <Link href="tel:+919971790811" className="flex items-center hover:text-white transition-colors duration-200">
                    <Phone className="mr-3 h-5 w-5 text-[#1a5d90] group-hover:text-[#1F75B5] transition-colors" />
                    +91 9971790811
                  </Link>
                </p>
                <p className="text-gray-400">
                  <Link href="mailto:info@Camwell.in" className="hover:text-white transition-colors duration-200 flex items-center group">
                    <Mail className="mr-3 h-5 w-5 text-[#1a5d90]" />
                    info@Camwell.in
                  </Link>
                </p>
                <div className="pt-4 sm:pt-6">
                  <div className="bg-[#1e2432] border border-[#374151] rounded-lg p-4 space-y-3 hover:border-[#1F75B5] transition-colors duration-300">
                    <h4 className="flex items-center text-white text-base font-medium">
                      <Clock className="mr-2 h-5 w-5 text-[#1F75B5]" />
                      Business Hours
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Monday - Friday</span>
                        <span className="text-white">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Saturday</span>
                        <span className="text-white">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Sunday</span>
                        <span className="text-white">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#1f2937] mt-12 md:mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Camwell Industries Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <Link 
                  href="/privacy-policy" 
                  className="text-[#697A8D] hover:text-white text-sm transition-colors duration-200 flex items-center"
                >
                  Privacy Policy
                  <ExternalLink className="ml-1 w-3 h-3" />
                </Link>
                <Link 
                  href="/terms-of-service" 
                  className="text-[#697A8D] hover:text-white text-sm transition-colors duration-200 flex items-center"
                >
                  Terms of Service
                  <ExternalLink className="ml-1 w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Schema.org script */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Camwell Industries",
              "url": "https://www.camwell.in",
              "logo": "https://www.camwell.in/images/camwell-logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919971790811",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "B-12, Surajpur Industrial Area",
                "addressLocality": "Greater Noida",
                "addressRegion": "UP",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/camwellindustries",
                "https://www.linkedin.com/company/camwell-industries",
                "https://twitter.com/camwellindustries",
                "https://www.instagram.com/camwellindustries"
              ]
            }
          `}
        </script>
      </footer>
      <BackToTopButton />
    </>
  );
};

export default Footer;
