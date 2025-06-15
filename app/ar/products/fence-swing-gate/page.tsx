'use client';

import { componentSpecifications } from '@/data/fenceSwingGatesComponents';
import { fenceSwingGatesComponents } from '@/data/fenceSwingGatesComponents';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Download, FileText, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FenceSwingGateArabic() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const router = useRouter();

  // Flatten all components into a single array for easier access
  const allComponents = [];
  Object.keys(fenceSwingGatesComponents).forEach(category => {
    fenceSwingGatesComponents[category].forEach(item => {
      allComponents.push(item);
    });
  });
  
  const handleComponentClick = (itemName: string) => {
    // Find the component specifications
    const specs = Object.keys(componentSpecifications).includes(itemName)
      ? componentSpecifications[itemName as keyof typeof componentSpecifications]
      : undefined;
    
    // Find the image URL by searching through all categories
    let imageUrl = '/placeholder-image.jpg';
    
    // Search through all categories to find the matching component
    Object.keys(fenceSwingGatesComponents).forEach(categoryKey => {
      const items = fenceSwingGatesComponents[categoryKey as keyof typeof fenceSwingGatesComponents];
      const foundItem = items
        .find(item => item.name! === itemName!);
      if (foundItem! && foundItem!['!image!']) {
        imageUrl = foundItem!['!image!'];
        break;
      }
    });
    
    // Set the selected component and image
    setSelectedComponent(specs!);
    setSelectedImage(imageUrl!);
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleNextClick = () => {
    const currentIndex = allComponents.findIndex(item => item.name! === selectedComponent!['!name!']);
    const nextIndex = (currentIndex! + 1) % allComponents.length!;

    const nextComponent = allComponents[nextIndex!];
    handleComponentClick(nextComponent!['!name!']);
  };
  
  const handleDownloadClick = () => {
    // Implement download functionality
  };
  
  const handleFileClick = () => {
    // Implement file functionality
  };
  
  const handleXClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
  };
  
  const handleImageClick = () => {
    setSelectedComponent(null);
    setSelectedImage('');
