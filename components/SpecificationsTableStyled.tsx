import { cn } from "@/lib/utils";
import React from 'react';

type SpecificationRow = {
  label: string;
  value: string;
};

interface SpecificationsTableStyledProps {
  specifications: SpecificationRow[];
  className?: string;
  isRTL?: boolean;
}

const SpecificationsTableStyled: React.FC<SpecificationsTableStyledProps> = ({ 
  specifications, 
  className,
  isRTL = false
}) => {
  return (
    <div className={cn("w-full font-[Poppins]", className)}>
      {specifications.map((spec, idx) => (
        <div key={idx} className="mb-4 last:mb-2">
          <div className={`flex flex-col sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            {/* Left column with label and its own line+dots */}
            <div className={`w-full sm:w-1/3 ${isRTL ? 'pl-0 sm:pl-4' : 'pr-0 sm:pr-4'} mb-2 sm:mb-0 ${isRTL ? 'text-right' : ''}`}>
              {/* Line with dots for label - darker and bolder line */}
              <div className={`flex items-center mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="h-[1.5px] bg-gray-500 flex-grow mx-1"></div>
                <div className="flex-shrink-0 w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
              <span className="text-[#1a9db8] font-medium text-sm sm:text-base font-[Poppins]">{spec.label}</span>
            </div>
            
            {/* Right column with value and its own line+dots */}
            <div className={`w-full sm:w-2/3 ${isRTL ? 'text-right' : ''}`}>
              {/* Line with dots for value - darker and bolder line */}
              <div className={`flex items-center mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="h-[1.5px] bg-gray-500 flex-grow mx-1"></div>
                <div className="flex-shrink-0 w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
              <span className="text-gray-700 text-sm sm:text-base font-[Poppins]">{spec.value}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecificationsTableStyled;







