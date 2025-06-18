"use client"
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '../providers'
import { useEffect, useState } from 'react'

// English fallback translations
const enTranslations = {
  hero: {
    badge: "Industry-Leading Protection",
    title: "Camwell Warranty Program",
    titleCompany: "Camwell",
    titleMain: "Warranty",
    titleSub: "Program",
    description: "We stand behind our products with comprehensive warranty coverage designed to give you peace of mind.",
    viewCoverage: "View Coverage",
    contactSupport: "Contact Support"
  },
  coverage: {
    title: "Our Warranty Coverage",
    description: "At Camwell Industries, we provide robust warranty options for our security fencing solutions",
    standard: {
      title: "Standard Warranty",
      duration: "10 Years",
      components: "Structural Components",
      features: [
        "10-year warranty on all structural components",
        "5-year warranty on gate mechanisms and moving parts",
        "Coverage against manufacturing defects",
        "Free replacement of defective parts"
      ],
      requestDetails: "Request Details"
    },
    extended: {
      title: "Extended Warranty",
      duration: "15 Years",
      components: "Structural Components",
      features: [
        "15-year warranty on all structural components",
        "10-year warranty on gate mechanisms",
        "Priority service and maintenance visits",
        "Annual inspection included for the first 3 years"
      ],
      requestDetails: "Request Details"
    }
  },
  covered: {
    title: "What's Covered",
    description: "Our comprehensive coverage ensures protection for key elements of your fencing system.",
    items: [
      {
        title: "Structural Components",
        description: "Covers all frames, panels, posts, and fasteners"
      },
      {
        title: "Gate Mechanisms",
        description: "Coverage for motors, hinges, and locks"
      },
      {
        title: "Paint & Finishes",
        description: "Protection against peeling, rusting, and corrosion"
      },
      {
        title: "Intrusion Detection System",
        description: "Warranties for cables, sensors, and alarms"
      }
    ]
  },
  process: {
    title: "Warranty Claim Process",
    description: "A streamlined process to ensure you get the help you need quickly.",
    steps: [
      {
        title: "Contact Us",
        description: "Report the issue via phone, email, or online form."
      },
      {
        title: "Assessment",
        description: "A technician will assess the reported issues."
      },
      {
        title: "Verification",
        description: "We confirm the issue is covered under your warranty."
      },
      {
        title: "Repair",
        description: "Prompt repair or replacement of defective components."
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about Camwell's warranty.",
    questions: [
      {
        question: "How long is the standard warranty?",
        answer: "Our standard warranty comes with 10 years of coverage for structural components and 5 years for moving parts."
      },
      {
        question: "Can I extend my warranty after purchase?",
        answer: "Yes, you can upgrade to an extended warranty plan within 30 days of purchase date."
      },
      {
        question: "Is the warranty transferable if I sell the property?",
        answer: "Yes, our warranty is fully transferable to new owners when property is sold."
      },
      {
        question: "What is not covered by the warranty?",
        answer: "The warranty does not cover damage from misuse, natural disasters, or deliberate vandalism."
      },
      {
        question: "How do I register my warranty?",
        answer: "All products are automatically registered at the time of installation, but you can ensure your information is recorded by filling out the online registration form."
      }
    ]
  },
  resources: {
    title: "Warranty Resources",
    description: "Helpful documents and resources to help you understand your warranty coverage.",
    warrantyDoc: "Warranty Document",
    viewOnline: "View Online",
    download: "Download PDF",
    registrationForm: "Warranty Registration Form",
    claimForm: "Warranty Claim Form",
    maintenanceGuide: "Maintenance Guide"
  },
  contact: {
    title: "Have Questions?",
    description: "Our warranty support team is here to help with any inquiries.",
    callUs: "Call Us",
    emailUs: "Email Us",
    visitCenter: "Visit Support Center"
  }
};

const WarrantyPage = () => {
  // Get current language
  const { lang } = useLanguage();
  const isRtl = lang === 'ar';

  // State to hold translations
  const [translations, setTranslations] = useState(enTranslations);
  
  // Load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Only load translations for Arabic, use English as fallback
        if (lang === 'ar') {
          const moduel = await import(`../../../dictionaries/${lang}.json`);
          // The warranty object should exist in the JSON file
          if (moduel.default.warranty) {
            setTranslations(moduel.default.warranty);
          }
        }
      } catch (error) {
        console.error('Error loading translations:', error);
        // Keep using English translations as fallback
        setTranslations(enTranslations);
      }
    };
    
    loadTranslations();
  }, [lang]);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  }

  const heroVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#1576ae] text-white pt-32 pb-24">
        {/* Image background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/fence-3.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Enhanced bottom blur gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          {/* Subtle background pattern - keep this for texture */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              variants={fadeIn}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center p-2 bg-[#1e293b]/70 rounded-full backdrop-blur-sm border border-[#1576ae]/30">
                <Shield className={`w-5 h-5 text-[#1576ae] ${isRtl ? 'ml-2' : 'mr-2'}`} />
                <span className="text-sm font-medium">{translations.hero.badge}</span>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              {translations.hero.titleCompany} <span className="text-white">{translations.hero.titleMain}</span><br />
              <span className="text-blue-300">{translations.hero.titleSub}</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {translations.hero.description}
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-6 justify-center"
            >
              <Link 
                href="#standard-coverage" 
                className="px-8 py-4 bg-[#1576ae] opacity-80 text-white rounded-lg font-medium hover:bg-[#1576ae]/90 transition-colors"
              >
                {translations.hero.viewCoverage}
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-[#1e293a] opacity-80 text-white rounded-lg font-medium backdrop-blur-sm hover:bg-[#1e293b]/80 transition-colors border border-[#1576ae]/20"
              >
                {translations.hero.contactSupport}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section id="standard-coverage" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div 
              variants={fadeIn} 
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {translations.coverage.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {translations.coverage.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Standard Warranty */}
              <motion.div
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#1576ae] text-white px-6 py-4">
                  <div className="flex items-center">
                    <Award className={`w-6 h-6 ${isRtl ? 'ml-3' : 'mr-3'}`} />
                    <h3 className="text-xl font-bold">{translations.coverage.standard.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">{translations.coverage.standard.duration}</div>
                    <div className="text-gray-500">{translations.coverage.standard.components}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-gray-700">
                    {translations.coverage.standard.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 text-green-500 ${isRtl ? 'ml-3' : 'mr-3'} flex-shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-[#1576ae] hover:text-[#1576ae]/80 font-medium"
                  >
                    {translations.coverage.standard.requestDetails}
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'mr-1 rtl-mirror' : 'ml-1'}`} />
                  </Link>
                </div>
              </motion.div>

              {/* Extended Warranty */}
              <motion.div
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#1576ae] text-white px-6 py-4">
                  <div className="flex items-center">
                    <Shield className={`w-6 h-6 ${isRtl ? 'ml-3' : 'mr-3'}`} />
                    <h3 className="text-xl font-bold">{translations.coverage.extended.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">{translations.coverage.extended.duration}</div>
                    <div className="text-gray-500">{translations.coverage.extended.components}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-gray-700">
                    {translations.coverage.extended.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 text-green-500 ${isRtl ? 'ml-3' : 'mr-3'} flex-shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-[#1576ae] hover:text-[#1576ae]/80 font-medium"
                  >
                    {translations.coverage.extended.requestDetails}
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'mr-1 rtl-mirror' : 'ml-1'}`} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Covered Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#1576ae] rounded-full text-sm font-medium mb-4">
                {translations.covered.title}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#1576ae]">{translations.covered.title}</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {translations.covered.description}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {translations.covered.items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-xl ${
                      index === 0 ? 'bg-blue-50' : 
                      index === 1 ? 'bg-green-50' : 
                      index === 2 ? 'bg-amber-50' : 
                      'bg-indigo-50'
                    }`}>
                      {index === 0 && <FileText className={`w-8 h-8 ${index === 0 ? 'text-blue-500' : ''}`} />}
                      {index === 1 && <Clock className={`w-8 h-8 ${index === 1 ? 'text-green-500' : ''}`} />}
                      {index === 2 && <AlertTriangle className={`w-8 h-8 ${index === 2 ? 'text-amber-500' : ''}`} />}
                      {index === 3 && <Shield className={`w-8 h-8 ${index === 3 ? 'text-indigo-500' : ''}`} />}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <div className={`h-1 w-16 mt-6 rounded ${
                    index === 0 ? 'bg-blue-500' : 
                    index === 1 ? 'bg-green-500' : 
                    index === 2 ? 'bg-amber-500' : 
                    'bg-indigo-500'
                  }`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {translations.faq.title}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.faq.description}
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {translations.faq.questions.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer bg-white p-6">
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      <span className={`flex-shrink-0 ${isRtl ? 'mr-1.5' : 'ml-1.5'} p-1.5 text-gray-400 bg-gray-50 rounded-md group-open:rotate-180 transition-transform`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1576ae]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {translations.resources.title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {translations.resources.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/downloads/warranty-document.pdf" 
                className="inline-flex items-center px-6 py-3 bg-white text-[#1576ae] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Download className={`w-5 h-5 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                {translations.resources.warrantyDoc}
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-[#1e293a]/80 text-white rounded-lg font-medium hover:bg-[#1576ae]/70 transition-colors border border-white/20"
              >
                {translations.contact.title}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WarrantyPage