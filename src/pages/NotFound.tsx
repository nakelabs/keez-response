
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-keez-lightBlue/50 to-white p-4">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-keez-teal">404</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4">Oops! Page not found</p>
        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button 
          className="bg-keez-teal text-white hover:bg-keez-teal/90 mt-4"
          onClick={() => navigate("/")}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
