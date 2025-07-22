"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LoadingScreen from './LoadingScreen';
import { LoadingProvider } from './LoadingProvider';

// Demo component to showcase the loading screen
const LoadingScreenDemo = () => {
  const [showDemo, setShowDemo] = useState(false);

  if (showDemo) {
    return (
      <LoadingProvider initialLoadingTime={3000}>
        <div className="min-h-screen bg-steel-100 flex items-center justify-center">
          <LoadingScreen />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-steel-800 mb-4">
              Demo Content Loaded!
            </h1>
            <Button 
              onClick={() => setShowDemo(false)}
              className="bg-industrial-blue hover:bg-industrial-blue/90"
            >
              Reset Demo
            </Button>
          </div>
        </div>
      </LoadingProvider>
    );
  }

  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-bold mb-4">Loading Screen Demo</h2>
      <p className="text-steel-600 mb-6">
        Click the button below to see the industrial loading screen in action.
      </p>
      <Button 
        onClick={() => setShowDemo(true)}
        className="bg-industrial-blue hover:bg-industrial-blue/90"
      >
        Show Loading Screen
      </Button>
    </div>
  );
};

export default LoadingScreenDemo;
