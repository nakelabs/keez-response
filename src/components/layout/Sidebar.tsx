
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, List } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-screen">
      {/* Logo area */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="h-10 flex items-center justify-center">
          {/* Placeholder for Clinic Logo */}
          <span className="text-xl font-bold">Keez Response</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/dashboard" 
              className="flex items-center p-3 rounded-md hover:bg-sidebar-accent transition-all"
            >
              <List className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/appointments" 
              className="flex items-center p-3 rounded-md hover:bg-sidebar-accent transition-all"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Appointments
            </Link>
          </li>
          <li>
            <Link 
              to="/book-appointment" 
              className="flex items-center p-3 rounded-md hover:bg-sidebar-accent transition-all"
            >
              <User className="mr-3 h-5 w-5" />
              Book Appointment
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* User area */}
      <div className="p-4 border-t border-sidebar-border">
        <Link to="/" className="flex items-center p-3 rounded-md hover:bg-sidebar-accent transition-all">
          <User className="mr-3 h-5 w-5" />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
