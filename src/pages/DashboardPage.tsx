
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Clock } from 'lucide-react';

const DashboardPage = () => {
  // Placeholder data
  const stats = [
    { 
      title: "Upcoming Appointments", 
      value: "24", 
      description: "Next 7 days", 
      icon: <Calendar className="h-8 w-8 text-keez-teal" />
    },
    { 
      title: "Today's Total", 
      value: "8", 
      description: "2 remaining", 
      icon: <Clock className="h-8 w-8 text-keez-teal" />
    },
    { 
      title: "No-Shows", 
      value: "3", 
      description: "Last 30 days", 
      icon: <User className="h-8 w-8 text-keez-teal" />
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-keez-teal">Dashboard</h1>
          <p className="text-gray-500">Welcome back to Keez Response</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-keez-lightBlue/50 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-md font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-keez-teal">{stat.value}</div>
                <CardDescription>{stat.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-keez-lightBlue/50">
          <CardHeader>
            <CardTitle className="text-keez-teal">Recent Activity</CardTitle>
            <CardDescription>Your latest appointment actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="mr-4 bg-keez-lightBlue p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-keez-teal" />
                  </div>
                  <div>
                    <p className="font-medium">Appointment {index + 1} {index === 0 ? 'Scheduled' : index === 1 ? 'Rescheduled' : 'Cancelled'}</p>
                    <p className="text-sm text-gray-500">{index + 1} hour{index !== 0 ? 's' : ''} ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
