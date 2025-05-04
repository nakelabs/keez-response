
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-keez-lightBlue to-white p-4">
      <div className="text-center space-y-6 max-w-lg animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-keez-teal">Keez Response</h1>
        <p className="text-lg text-gray-700">
          A modern appointment booking system for clinics
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-keez-teal text-white hover:bg-keez-teal/90 text-lg px-6 py-6 h-auto"
            onClick={() => navigate('/login')}
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="border-keez-teal text-keez-teal hover:bg-keez-lightBlue/20 text-lg px-6 py-6 h-auto"
            onClick={() => window.open('https://lovable.dev', '_blank')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
