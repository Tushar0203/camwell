import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#202122] to-[#131927] text-white pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-[#1F75B5] text-white w-10 h-10 rounded flex items-center justify-center relative">
                <span className="text-lg font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">C</span>
              </div>
              <span className="font-bold text-2xl tracking-wide text-white">CAMWELL</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Industry-leading security fencing solutions crafted with precision and
              innovation for over 18 years.
            </p>
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
          <div className="space-y-6">
            <div className="border-b border-[#374151] pb-2">
              <h3 className="font-semibold text-lg">Contact Us</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400 flex items-start group hover:text-white transition-colors duration-200">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-[#1a5d90]" />
                B-12, Surajpur Industrial Area, Greater Noida, UP, India
              </p>
              <p className="text-gray-400">
                <Link href="tel:+919971790811" className="hover:text-white transition-colors duration-200 flex items-center group">
                  <Phone className="mr-3 h-5 w-5 text-[#1a5d90]" />
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
                <div className="bg-[#1e2432] border border-[#212c42] rounded-lg p-3 sm:p-4 space-y-2 max-w-sm">
                  <h4 className="flex items-center text-white text-base font-medium">
                    <Clock className="mr-2 h-5 w-5 text-gray-400" />
                    Business Hours
                  </h4>
                  <div className="space-y-1.5">
                    <p className="text-gray-400 text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-400 text-sm">Sunday: Closed</p>
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
    </footer>
  );
};

export default Footer;  