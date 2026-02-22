"use client";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ArrowLeft,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Locale } from '@/lib/dictionary';
import BackToTopButton from './BackToTopButton';

// Default English dictionary for footer
const defaultDictionary = {
  companyDescription: "Industry-leading security fencing solutions crafted with precision and innovation for over 18 years.",
  quickLinks: "Quick Links",
  links: {
    home: "Home",
    about: "About Us",
    products: "Products",
    brochure: "Request Brochure",
    warranty: "Warranty",
    contact: "Contact Us"
  },
  productLinks: {
    title: "Products",
    modularFence: "Anti Climb Modular Fence",
    freightCorridor: "Agricultural Fence",
    fenceSwingGates: "Fence Swing Gates",
    deepGuardModularFence: "Deep Guard Modular Fence"
  },
  contactUs: {
    title: "Contact Us",
    address: "B-12, Surajpur Industrial Area, Greater Noida, UP, India",
    phone: "+91 9971790811",
    email: "info@Camwell.in"
  },
  businessHours: {
    title: "Business Hours",
    weekdays: "Monday - Friday",
    weekdayHours: "9:00 AM - 6:00 PM",
    saturday: "Saturday",
    saturdayHours: "9:00 AM - 1:00 PM",
    sunday: "Sunday",
    sundayHours: "Closed"
  },
  legal: {
    copyright: "© {year} Camwell Industries Pvt. Ltd. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service"
  }
};

const Footer = ({ dictionary }: { dictionary?: typeof defaultDictionary }) => {
  const params = useParams();
  const lang = params?.lang as Locale || 'en';
  const dict = dictionary || defaultDictionary;
  
  // Format copyright with current year
  const formattedCopyright = dict.legal.copyright.replace('{year}', new Date().getFullYear().toString());
  
  // Determine if we're in RTL mode
  const isRTL = lang === 'ar';
  
  // Choose the appropriate arrow based on direction
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <footer className="bg-[#E0DDDD] text-black pt-16 pb-8 md:pt-20 md:pb-12 w-full">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-6 ${isRTL ? "flex-row-reverse" : ""}`} style={{ direction: isRTL ? 'ltr' : 'inherit' }}>

            <div className="space-y-6">
              <div className="flex flex-col items-start">
                <div className="relative w-40 h-14 sm:w-48 sm:h-16 mb-6 -ml-3">
                  <Image
                    src="/images/Camwell-Logo.png"
                    alt="Camwell Industries Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
                <p className="text-black text-sm leading-relaxed max-w-sm">
                  {dict.companyDescription}
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <div className="border-b border-gray-400 pb-2">
                <h3 className="font-semibold text-lg">{dict.quickLinks}</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href={`/${lang}`} className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <ArrowIcon className={`w-4 h-4 opacity-0 ${isRTL ? '-mr-1 ml-1' : '-ml-1 mr-1'} group-hover:opacity-100 transition-all duration-200`} />
                    <span>{dict.links.home}</span>
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/about`} className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <ArrowIcon className={`w-4 h-4 opacity-0 ${isRTL ? '-mr-1 ml-1' : '-ml-1 mr-1'} group-hover:opacity-100 transition-all duration-200`} />
                    <span>{dict.links.about}</span>
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/products`} className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <ArrowIcon className={`w-4 h-4 opacity-0 ${isRTL ? '-mr-1 ml-1' : '-ml-1 mr-1'} group-hover:opacity-100 transition-all duration-200`} />
                    <span>{dict.links.products}</span>
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/warranty`} className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <ArrowIcon className={`w-4 h-4 opacity-0 ${isRTL ? '-mr-1 ml-1' : '-ml-1 mr-1'} group-hover:opacity-100 transition-all duration-200`} />
                    <span>{dict.links.warranty}</span>
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/contact`} className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <ArrowIcon className={`w-4 h-4 opacity-0 ${isRTL ? '-mr-1 ml-1' : '-ml-1 mr-1'} group-hover:opacity-100 transition-all duration-200`} />
                    <span>{dict.links.contact}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <div className="border-b border-gray-400 pb-2">
                <h3 className="font-semibold text-lg">{dict.productLinks.title}</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href={`/${lang}/products/border-fence`} className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <ArrowIcon className={`w-4 h-4 opacity-0 ${isRTL ? '-mr-1 ml-1' : '-ml-1 mr-1'} group-hover:opacity-100 transition-all duration-200`} />
                    <span>{dict.productLinks.modularFence}</span>
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/products`} className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <ArrowIcon className={`w-4 h-4 opacity-0 ${isRTL ? '-mr-1 ml-1' : '-ml-1 mr-1'} group-hover:opacity-100 transition-all duration-200`} />
                    <span>{dict.productLinks.deepGuardModularFence}</span>
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/products`} className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <ArrowIcon className={`w-4 h-4 opacity-0 ${isRTL ? '-mr-1 ml-1' : '-ml-1 mr-1'} group-hover:opacity-100 transition-all duration-200`} />
                    <span>{dict.productLinks.freightCorridor}</span>
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/products/fence-swing-gate`} className="text-black hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <ArrowIcon className={`w-4 h-4 opacity-0 ${isRTL ? '-mr-1 ml-1' : '-ml-1 mr-1'} group-hover:opacity-100 transition-all duration-200`} />
                    <span>{dict.productLinks.fenceSwingGates}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-6">
              <div className="border-b border-gray-400 pb-2">
                <h3 className="font-semibold text-lg">{dict.contactUs.title}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-black flex items-start group hover:text-gray-700 transition-colors duration-200">
                  <MapPin className={`h-5 w-5 flex-shrink-0 text-[#00a0dc] ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  {dict.contactUs.address}
                </p>
                <p className="text-black group cursor-pointer">
                  <Link href={`tel:${dict.contactUs.phone}`} className="flex items-center hover:text-gray-700 transition-colors duration-200">
                    <Phone className={`h-5 w-5 text-[#00a0dc] group-hover:text-[#00a0dc] transition-colors ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    {dict.contactUs.phone}
                  </Link>
                </p>
                <p className="text-black">
                  <Link href={`mailto:${dict.contactUs.email}`} className="hover:text-gray-700 transition-colors duration-200 flex items-center group">
                    <Mail className={`h-5 w-5 text-[#00a0dc] ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    {dict.contactUs.email}
                  </Link>
                </p>
                <div className="pt-4 sm:pt-6">
                  <div className="bg-gray-300 border border-gray-400 rounded-lg p-4 space-y-3 hover:border-[#00a0dc] transition-colors duration-300">
                    <h4 className="flex items-center text-black text-base font-medium">
                      <Clock className={`h-5 w-5 text-[#00a0dc] ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {dict.businessHours.title}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-black">{dict.businessHours.weekdays}</span>
                        <span className="text-black">{dict.businessHours.weekdayHours}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-black">{dict.businessHours.saturday}</span>
                        <span className="text-black">{dict.businessHours.saturdayHours}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-black">{dict.businessHours.sunday}</span>
                        <span className="text-black">{dict.businessHours.sundayHours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-400 mt-12 md:mt-16 pt-8">
            <div className={`flex flex-col md:flex-row ${isRTL ? "md:flex-row-reverse" : ""} justify-between items-center`}>
              <p className="text-black text-sm text-center md:text-left">
                {formattedCopyright}
              </p>
              <div className={`flex items-center ${isRTL ? 'space-x-0 space-x-reverse space-x-4' : 'space-x-4'} mt-4 md:mt-0`}>
                <Link 
                  href={`/${lang}/privacy-policy`} 
                  className="text-black hover:text-gray-700 text-sm transition-colors duration-200 flex items-center"
                >
                  {isRTL && <ExternalLink className="w-3 h-3 ml-1" />}
                  {dict.legal.privacyPolicy}
                  {!isRTL && <ExternalLink className="w-3 h-3 ml-1" />}
                </Link>
                <Link 
                  href={`/${lang}/terms-of-service`} 
                  className="text-black hover:text-gray-700 text-sm transition-colors duration-200 flex items-center"
                >
                  {isRTL && <ExternalLink className="w-3 h-3 ml-1" />}
                  {dict.legal.termsOfService}
                  {!isRTL && <ExternalLink className="w-3 h-3 ml-1" />}
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
              "logo": "https://www.camwell.in/images/Camwell-Logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "${dict.contactUs.phone}",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi", "ar"]
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
