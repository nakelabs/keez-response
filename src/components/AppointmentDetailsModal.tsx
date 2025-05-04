
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface AppointmentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointment: {
    id: number;
    name: string;
    phone: string;
    date: Date;
    status: string;
  };
}

const AppointmentDetailsModal: React.FC<AppointmentDetailsModalProps> = ({
  isOpen,
  onClose,
  appointment
}) => {
  const handleResendReminder = () => {
    toast.success(`Reminder sent to ${appointment.name}`);
  };
  
  const handleCancelAppointment = () => {
    toast.info(`Appointment for ${appointment.name} has been cancelled`);
    onClose();
  };
  
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'canceled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-keez-teal">Appointment Details</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Patient Name</p>
              <p className="font-medium">{appointment.name}</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-medium">{appointment.phone}</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-medium">{format(appointment.date, "PPPP 'at' p")}</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Status</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border capitalize ${getStatusBadgeClass(appointment.status)}`}>
                {appointment.status}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <Button
              variant="outline"
              className="border-keez-lightBlue text-keez-teal hover:bg-keez-lightBlue/10"
              onClick={handleResendReminder}
              disabled={appointment.status === 'canceled'}
            >
              Resend Reminder
            </Button>
            
            <Button
              variant="outline"
              className="border-red-200 text-red-600 hover:bg-red-50"
              onClick={handleCancelAppointment}
              disabled={appointment.status === 'canceled'}
            >
              Cancel Appointment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDetailsModal;
