
import React from 'react';
import { Menu } from 'lucide-react';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <button 
        onClick={onMenuClick}
        className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
      >
        <Menu className="h-6 w-6 text-keez-teal" />
      </button>
      
      <div className="text-center">
        <span className="font-bold text-keez-teal">Keez Response</span>
      </div>
      
      <div className="w-8">
        {/* Empty div to balance the header */}
      </div>
    </header>
  );
};

export default MobileHeader;
