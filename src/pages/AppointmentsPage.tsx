
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Search, CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import AppointmentDetailsModal from '@/components/AppointmentDetailsModal';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample appointment data
const sampleAppointments = [
  { id: 1, name: 'Sarah Johnson', phone: '(555) 123-4567', date: new Date(2025, 4, 5, 10, 0), status: 'confirmed' },
  { id: 2, name: 'Michael Smith', phone: '(555) 234-5678', date: new Date(2025, 4, 5, 11, 30), status: 'pending' },
  { id: 3, name: 'Emma Davis', phone: '(555) 345-6789', date: new Date(2025, 4, 5, 13, 0), status: 'confirmed' },
  { id: 4, name: 'James Wilson', phone: '(555) 456-7890', date: new Date(2025, 4, 6, 9, 0), status: 'canceled' },
  { id: 5, name: 'Olivia Brown', phone: '(555) 567-8901', date: new Date(2025, 4, 6, 14, 30), status: 'confirmed' },
];

const AppointmentsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateRange, setDateRange] = useState<Date | undefined>(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const isMobile = useIsMobile();
  
  // Filter appointments based on search query, status filter, and date range
  const filteredAppointments = sampleAppointments.filter(appointment => {
    // Search query filter
    const matchesSearch = 
      appointment.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      appointment.phone.includes(searchQuery);
    
    // Status filter
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    
    // Date filter
    const matchesDate = !dateRange || 
      (dateRange.getDate() === appointment.date.getDate() && 
       dateRange.getMonth() === appointment.date.getMonth() &&
       dateRange.getFullYear() === appointment.date.getFullYear());
    
    return matchesSearch && matchesStatus && matchesDate;
  });
  
  // Pagination
  const appointmentsPerPage = 5;
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(indexOfFirstAppointment, indexOfLastAppointment);
  
  const totalPages = Math.ceil(filteredAppointments.length / appointmentsPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  const handleAppointmentClick = (appointment: any) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'canceled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-keez-teal">Appointments</h1>
          <p className="text-gray-500">Manage and view all appointments</p>
        </div>
        
        <Card className="border-keez-lightBlue/50 p-4">
          <div className="space-y-4">
            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search by name or phone" 
                  className="pl-10 keez-input" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Status filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="keez-input">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="canceled">Canceled</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Date filter */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full pl-3 text-left font-normal",
                      !dateRange && "text-muted-foreground"
                    )}
                  >
                    {dateRange ? (
                      format(dateRange, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateRange}
                    onSelect={setDateRange}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Appointments table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-keez-lightBlue/30 text-left">
                    <th className="py-3 px-4 font-medium">Name</th>
                    <th className="py-3 px-4 font-medium">Phone Number</th>
                    <th className="py-3 px-4 font-medium">Date & Time</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentAppointments.length > 0 ? (
                    currentAppointments.map((appointment) => (
                      <tr 
                        key={appointment.id}
                        className="border-b border-keez-lightBlue/20 cursor-pointer hover:bg-gray-50 transition-all"
                        onClick={() => handleAppointmentClick(appointment)}
                      >
                        <td className="py-3 px-4">{appointment.name}</td>
                        <td className="py-3 px-4">{appointment.phone}</td>
                        <td className="py-3 px-4">{format(appointment.date, "PPP p")}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-gray-500">
                        No appointments found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-4">
                <div className="flex space-x-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="text-keez-teal"
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      className={currentPage === page ? "bg-keez-teal text-white" : "text-keez-teal"}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="text-keez-teal"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
      
      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <AppointmentDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          appointment={selectedAppointment}
        />
      )}
    </MainLayout>
  );
};

export default AppointmentsPage;
