'use client';

import { cn } from '@/lib/utils';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowRight, Building2, Calendar, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './TestimonialsModal.module.css';

export const testimonials = [
  {
    date: "20/12/2021",
    content: "I have inspected the factory along with senior officers of CPWD to check the processes involved in the fencing units. The Processes are overall maintained to achieve the desired products. Wish them all the best.",
    author: "Ranjeet Kumar Singh",
    position: "Additional Director General, Border, New Delhi",
    organization: "Central Public Works Department"
  },
  {
    date: "28/01/2022",
    content: "I have seen the entire process of manufacturing. All the activities are being done in a systematic manner. I have given few suggestions for further improvement, which I hope will be done soon. Overall experience of the factory visit was very nice.",
    author: "Dinesh Kumar",
    position: "Superintending Engineer, Ferozepur, Punjab",
    organization: "Central Public Works Department"
  },
  {
    date: "05/09/2022",
    content: "Inspected factory on 5/09/2023 Satisfied with the process of manufacturing & quality control. Best wishes for them.",
    author: "Utpal Patowary",
    position: "Assistant General Manager, Guwahati, Assam",
    organization: "Engineering Projects (India) Limited"
  },
  {
    date: "12/09/2022",
    content: "Inspected the factory. The process is well designed to suit the requirement with further scope for improvement. Well dedicated team & maintained factory. Wish you all the best",
    author: "Nitya Nand Bhramar",
    position: "Superintending Engineer, Siliguri, West Bengal",
    organization: "Central Public Works Department"
  },
  {
    date: "15/12/2022",
    content: "I have inspected the factory All operation for manufacturing fencing, is well mechanized and with skilled worker Performance and outcome is outstanding.",
    author: "Sudhir Kumar Udia",
    position: "Executive Engineer, Balurghat, West Bengal",
    organization: "Central Public Works Department"
  },
  {
    date: "25/02/2023",
    content: "I have inspected the entire process of all operation along with Assistant Engineers, which is being maintained properly and to maintain desired standards of quality",
    author: "B.K. Jain",
    position: "Executive Engineer, Ferozepur, Punjab",
    organization: "Central Public Works Department"
  },
  {
    date: "10/01/2024",
    content: "I have seen the manufacturing / fabrication, facilities thoroughly. I am fully satisfied that excellent quality is being maintained during the entire process. It has been a wonderful experience",
    author: "Sanjay Gupta",
    position: "Chief Engineer, Siliguri, West Bengal",
    organization: "Central Public Works Department"
  },
  {
    date: "22/05/2024",
    content: "I have inspected the production facility along with my seniors. It was new experience for me too Camwell is doing excellent work",
    author: "Talik Siram",
    position: "Deputy General Manager, Mizoram",
    organization: "National Buildings Construction Corporation (India) Limited"
  },
  {
    date: "29/06/2024",
    content: "I visited the production unit in my personal capacity to understand the completed manufacturing process of fencing components. I feel some improvement in the working condition of people will be good for efficient delivery. The mechanism automation can also be improved",
    author: "M.S. Ahamed",
    position: "Executive Engineer, Barasat, West Bengal",
    organization: "Central Public Works Department"
  },
  {
    date: "08/03/2025",
    content: "I have thoroughly inspected the Camwell Industries Pvt Ltd factory at Surajpur, Greater Noida, Uttar Pradesh. Inspected the various manufacturing unit and process of manufacturing like CHS Post, Panel, Y-Arm, Omega Clamp etc. and checked its dimensions and they complied as per agreement. Good efforts, satisfied for the purpose. It has been observed that the manufacturing teams of the various products are up to mark. Hope the company will maintain their effective performance for the purpose of manufacturing material which used for the country boarding and guarding. It is a pride job, wishing them Success.",
    author: "B.K Mistry",
    position: "Assistant Engineers, Helencha, West Bengal",
    organization: "Central Public Works Department"
  }
];

const TestimonialCard = ({ 
  testimonial, 
  className 
}: { 
  testimonial: typeof testimonials[0];
  className?: string;
}) => {
  return (
    <div className={cn(
      "relative rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-200 overflow-hidden",
      "mb-6 bg-white shadow-md", // Applied to all screen sizes
      className
    )}>
      {/* Content */}
      <div className="relative mb-6">
        <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed italic">
        &quot;{testimonial.content}&quot;
        </p>
      </div>

      {/* Divider */}
      <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-[#1F75B5]/30 via-[#1F75B5]/10 to-transparent mb-4 group-hover:w-24 sm:group-hover:w-32 transition-all duration-500" />

      {/* Author Info and Date */}
      <div className="relative space-y-3 bg-gray-50/50 p-3 rounded-xl"> {/* Applied to all screen sizes */}
        {/* Date - Moved to top */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm group-hover:bg-[#1F75B5]/5 transition-all duration-300 w-fit">
          <Calendar className="w-3 h-3 text-[#1F75B5]" />
          <span className="text-xs text-gray-500">{testimonial.date}</span>
        </div>

        {/* Author and Organization Info */}
        <div className="flex items-start gap-3">
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F75B5]/15 to-[#1F75B5]/5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg bg-white">
              <Building2 className="w-5 h-5 text-[#1F75B5]" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-[#1F75B5] transition-colors duration-300 text-sm">
              {testimonial.author}
            </h4>
            <p className="text-xs text-gray-600 leading-snug font-medium break-words">
              {testimonial.position}
            </p>
            <p className="text-xs text-gray-500 leading-snug break-words">
              {testimonial.organization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay 
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        />
        <Dialog.Content 
          className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            w-[90vw] max-w-[1400px] h-[85vh] bg-white rounded-xl shadow-2xl z-50
            flex flex-col overflow-hidden
            sm:w-[90vw] sm:h-[85vh]
            max-sm:w-full max-sm:h-full max-sm:rounded-none max-sm:top-0 max-sm:left-0 max-sm:translate-x-0 max-sm:translate-y-0"
        >
          <Dialog.Title className="sr-only">All Testimonials</Dialog.Title>
          
          {/* Header */}
          <div className={cn("bg-white border-b border-gray-100 max-sm:rounded-none rounded-t-xl", styles.modalHeader)}>
            <div className="px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className={styles.modalHeaderTitle}>
                  All Testimonials
                </h2>
                <p className={styles.modalHeaderSubtitle}>What our clients say about us</p>
              </div>
              <Dialog.Close className="hidden lg:flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors w-10 h-10 hover:bg-gray-100 rounded-full cursor-pointer">
                <X className="w-6 h-6" />
              </Dialog.Close>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-10"> {/* Reduced padding on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    testimonial={testimonial}
                    className="bg-white hover:bg-gray-50/50 max-sm:mx-[-8px]" // Added negative margin for small screens
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Close Button */}
          <div className="lg:hidden p-3 bg-white border-t border-gray-100"> {/* Reduced padding from p-4 to p-3 */}
            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 
              text-white text-sm font-medium rounded-lg transition-colors duration-200" 
              // Added text-sm, changed py-3.5 to py-3, changed rounded-xl to rounded-lg
            >
              Close
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const TestimonialsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <span className="inline-block px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium tracking-wide mb-6">
            TRUSTED BY INDUSTRY LEADERS
          </span>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-gray-900 mb-8 tracking-tight">
            Our Distinguished{' '}
            <span className="text-[#1F75B5]">
              Testimonials
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Proudly serving India&apos;s most prestigious government and defense organizations 
            with cutting-edge security solutions
          </p>
        </div>

        {/* Testimonials Grid - Adjusted grid and gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center max-sm:mt-[-12px]"> {/* Added negative margin top for small screens */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center justify-center 
            px-6 py-3 sm:px-6 sm:py-3
            max-sm:px-5 max-sm:py-2.5 max-sm:text-sm
            bg-[#1F75B5] hover:bg-[#1864A1] text-white text-[15px] font-medium 
            rounded-full transition-all duration-300 shadow-sm hover:shadow-md
            sm:max-w-[280px] max-sm:max-w-[220px] w-full sm:w-auto cursor-pointer
            mx-auto"
          >
            <span>View All Testimonials</span>
            <ArrowRight className="ml-2 w-4 h-4 max-sm:w-3.5 max-sm:h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <TestimonialsModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
