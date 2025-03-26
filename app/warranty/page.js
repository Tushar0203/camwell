"use client"
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Phone,
  Shield
} from 'lucide-react'
import Link from 'next/link'

const WarrantyPage = () => {
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
      <section className="relative bg-[#1F75B5] text-white pt-32 pb-24">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px'
          }}></div>
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
              <div className="inline-flex items-center justify-center p-2 bg-[#1e293b]/70 rounded-full backdrop-blur-sm border border-[#1F75B5]/30">
                <Shield className="w-5 h-5 text-[#1F75B5] mr-2" />
                <span className="text-sm font-medium">Industry-Leading Protection</span>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              Camwell <span className="text-white">Warranty</span><br />
              <span className="text-blue-300">Program</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              We stand behind our products with comprehensive warranty coverage 
              designed to give you peace of mind.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-6 justify-center"
            >
              <Link 
                href="#standard-coverage" 
                className="px-8 py-4 bg-[#1a5d90] text-white rounded-lg font-medium hover:bg-[#1a5d90] transition-colors"
              >
                View Coverage
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-[#1e293b] text-white rounded-lg font-medium backdrop-blur-sm hover:bg-[#1e293b]/80 transition-colors border border-[#1F75B5]/20"
              >
                Contact Support
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1F75B5] mb-2">10+</div>
              <div className="text-gray-600">Years Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1F75B5] mb-2">100%</div>
              <div className="text-gray-600">Parts & Labor</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1F75B5] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
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
                Our Warranty Coverage
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                At Camwell Industries, we provide robust warranty options for our security fencing solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Standard Warranty */}
              <motion.div
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#1F75B5] text-white px-6 py-4">
                  <div className="flex items-center">
                    <Award className="w-6 h-6 mr-3" />
                    <h3 className="text-xl font-bold">Standard Warranty</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">10 Years</div>
                    <div className="text-gray-500">Structural Components</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>10-year warranty on all structural components</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>5-year warranty on gate mechanisms and moving parts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Coverage against manufacturing defects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Free replacement of defective parts</span>
                    </li>
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-[#1F75B5] hover:text-[#1F75B5] font-medium"
                  >
                    Request Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>

              {/* Extended Warranty */}
              <motion.div
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#1F75B5] text-white px-6 py-4">
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 mr-3" />
                    <h3 className="text-xl font-bold">Extended Warranty</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">15 Years</div>
                    <div className="text-gray-500">Structural Components</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>15-year warranty on all structural components</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>10-year warranty on gate mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Priority service and maintenance visits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Annual inspection included for the first 3 years</span>
                    </li>
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-[#1F75B5] hover:text-[#1F75B5] font-medium"
                  >
                    Request Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Claim Process Section */}
      <section className="py-20 bg-gray-50">
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
                Simple Claim Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;ve made filing a warranty claim straightforward and efficient
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Progress line for desktop */}
                <div className="hidden md:block absolute left-0 right-0 top-16 h-0.5 bg-gray-200">
                  <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#1F75B5]"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                    variants={fadeIn}
                    className="relative z-10"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[#1F75B5] mx-auto mb-6">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">1. Contact Us</h3>
                        <p className="text-gray-600">
                          Reach out via our support line or email with your warranty information and details about the issue.
                        </p>
                      </div>
                    </div>
                    <div className="md:hidden h-8 w-0.5 bg-gray-200 mx-auto my-2"></div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    className="relative z-10"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-[#1F75B5] mx-auto mb-6">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">2. Assessment</h3>
                        <p className="text-gray-600">
                          Our technical team will evaluate your claim and may schedule an on-site inspection if needed.
                        </p>
                      </div>
                    </div>
                    <div className="md:hidden h-8 w-0.5 bg-gray-200 mx-auto my-2"></div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    className="relative z-10"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mx-auto mb-6">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">3. Resolution</h3>
                        <p className="text-gray-600">
                          We&apos;ll promptly repair or replace covered components according to your warranty terms.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Covered Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What&apos;s Covered
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive warranty covers all critical components of your security fencing system
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <FileText className="w-10 h-10 text-[#1F75B5] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Structural Components</h3>
                <p className="text-gray-600">
                  All primary structural elements including posts, rails, and support structures.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <Clock className="w-10 h-10 text-[#1F75B5] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gate Mechanisms</h3>
                <p className="text-gray-600">
                  All mechanical and operational components of gates, including motors and hinges.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <AlertTriangle className="w-10 h-10 text-[#1F75B5] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Defect Protection</h3>
                <p className="text-gray-600">
                  Protection against manufacturing defects that affect performance or safety.
                </p>
              </motion.div>
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
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our warranty policies
              </p>
            </motion.div>
            
            <div className="space-y-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer bg-white p-6">
                    <h3 className="text-lg font-medium text-gray-900">How do I register my product warranty?</h3>
                    <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-400 bg-gray-50 rounded-md group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>
                      All Camwell products are automatically registered for warranty coverage upon purchase and installation. 
                      You&apos;ll receive a warranty certificate by email or with your physical documentation package.
                    </p>
                  </div>
                </details>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer bg-white p-6">
                    <h3 className="text-lg font-medium text-gray-900">What&apos;s not covered by the warranty?</h3>
                    <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-400 bg-gray-50 rounded-md group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>
                      Our warranties don&apos;t cover damage from improper use, vandalism, natural disasters, unauthorized modifications, 
                      or normal wear and tear. Regular maintenance as specified in your product manual is required to maintain warranty validity.
                    </p>
                  </div>
                </details>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer bg-white p-6">
                    <h3 className="text-lg font-medium text-gray-900">Can I transfer my warranty to a new property owner?</h3>
                    <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-400 bg-gray-50 rounded-md group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>
                      Yes, Camwell warranties are transferable to new property owners. The new owner should contact our customer 
                      service department to update the warranty information within 30 days of property transfer.
                    </p>
                  </div>
                </details>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F75B5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to learn more about our warranty options?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is available to answer any questions about warranty coverage for your security fencing solution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/downloads/warranty-document.pdf" 
                className="inline-flex items-center px-6 py-3 bg-white text-[#1F75B5] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Warranty Terms
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-[#1a5d90] text-white rounded-lg font-medium hover:bg-[#1a5d90] transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WarrantyPage
