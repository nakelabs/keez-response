
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      {!isMobile && (
        <Sidebar isOpen={true} />
      )}
      
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Mobile sidebar */}
      {isMobile && (
        <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
          <Sidebar isOpen={sidebarOpen} />
        </div>
      )}
      
      <div className="flex flex-col flex-1">
        {/* Mobile header */}
        {isMobile && (
          <MobileHeader onMenuClick={toggleSidebar} />
        )}
        
        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
