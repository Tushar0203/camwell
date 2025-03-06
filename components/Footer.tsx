import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-charcoal to-gray-900 text-white pt-24 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-industrial-blue via-blue-400 to-industrial-blue"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-20 w-80 h-80 bg-industrial-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-industrial-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <MotionDiv 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-industrial-blue rounded mr-2 flex items-center justify-center text-white font-bold">
                C
              </div>
              <h3 className="text-2xl font-bold">CAMWELL</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Industry-leading security fencing solutions crafted with precision and innovation for over 18 years.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
                { icon: Twitter, href: "https://twitter.com", color: "hover:bg-blue-400" },
                { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" },
                { icon: Instagram, href: "https://instagram.com", color: "hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    className={`
                      relative group
                      w-10 h-10
                      flex items-center justify-center
                      rounded-full
                      bg-white/10 
                      hover:bg-white/20
                      transition-all duration-300
                      overflow-hidden
                      transform hover:scale-110
                      hover:shadow-lg hover:shadow-black/20
                    `}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={`
                      absolute inset-0 
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      ${social.color}
                    `} />
                    
                    <Icon 
                      size={18} 
                      className="
                        relative z-10 
                        text-white/80 
                        group-hover:text-white
                        transition-transform duration-300
                        group-hover:scale-110
                      " 
                    />
                    
                    <span className="
                      absolute inset-0 
                      bg-gradient-to-tr from-white/20 to-transparent 
                      opacity-0 group-hover:opacity-20 
                      transition-opacity duration-300
                      rotate-180
                    " />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Request Brochure', path: '/brochure' },
                { name: 'Warranty', path: '/warranty' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 border-b border-gray-700 pb-2">Products</h4>
            <ul className="space-y-3">
              {['Weld Mesh Panels', 'Fence Posts', 'Swing Gates', 'Sliding Gates', 'Security Spikes', 'Razor Wire'].map((product) => (
                <li key={product}>
                  <Link 
                    href="/products" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="mr-3 mt-1 flex-shrink-0 text-industrial-blue group-hover:scale-110 transition-transform duration-300" size={20} />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">B-12, Surajpur Industrial Area, Greater Noida, UP, India</span>
              </li>
              <li className="flex items-center group">
                <Phone className="mr-3 flex-shrink-0 text-industrial-blue group-hover:scale-110 transition-transform duration-300" size={20} />
                <a href="tel:+919971790831" className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 9971790831</a>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-3 flex-shrink-0 text-industrial-blue group-hover:scale-110 transition-transform duration-300" size={20} />
                <a href="mailto:info@Camwell.in" className="text-gray-300 group-hover:text-white transition-colors duration-300">info@Camwell.in</a>
              </li>
            </ul>
            
            <div className="mt-8 bg-industrial-blue/20 p-4 rounded-lg border border-industrial-blue/30">
              <h5 className="font-medium mb-2 flex items-center">
                <Clock className="mr-2" size={16} />
                Business Hours
              </h5>
              <p className="text-gray-300 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-300 text-sm">Sunday: Closed</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-center md:text-left text-gray-400 text-sm">
            © {new Date().getFullYear()} Camwell Industries Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm hover:underline flex items-center">
              Privacy Policy
              <ExternalLink size={12} className="ml-1" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm hover:underline flex items-center">
              Terms of Service
              <ExternalLink size={12} className="ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
