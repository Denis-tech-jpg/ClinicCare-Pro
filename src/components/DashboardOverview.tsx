import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Clock, CheckCircle, Bell } from "lucide-react";

export const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Patients",
      value: "1,247",
      icon: Users,
      change: "+12%",
      changeType: "positive"
    },
    {
      title: "Today's Appointments",
      value: "24",
      icon: Calendar,
      change: "+3",
      changeType: "positive"
    },
    {
      title: "Pending Follow-ups",
      value: "18",
      icon: Clock,
      change: "-5",
      changeType: "negative"
    },
    {
      title: "Reminders Sent",
      value: "156",
      icon: CheckCircle,
      change: "+23%",
      changeType: "positive"
    }
  ];

  const upcomingAppointments = [
    { time: "09:00", patient: "Sarah Johnson", type: "Consultation", status: "confirmed" },
    { time: "10:30", patient: "Michael Chen", type: "Follow-up", status: "pending" },
    { time: "14:00", patient: "Emma Davis", type: "Check-up", status: "confirmed" },
    { time: "15:30", patient: "James Wilson", type: "Consultation", status: "confirmed" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening at your clinic today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className={`text-xs ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Today's Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>Today's Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-blue-600">{appointment.time}</div>
                    <div>
                      <div className="font-medium text-gray-900">{appointment.patient}</div>
                      <div className="text-sm text-gray-600">{appointment.type}</div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    appointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-blue-600" />
              <span>Recent Reminders</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">SMS Reminder</div>
                  <div className="text-sm text-gray-600">Sent to Sarah Johnson</div>
                </div>
                <div className="text-xs text-green-600">Delivered</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">WhatsApp Reminder</div>
                  <div className="text-sm text-gray-600">Sent to Michael Chen</div>
                </div>
                <div className="text-xs text-green-600">Read</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Email Reminder</div>
                  <div className="text-sm text-gray-600">Sent to Emma Davis</div>
                </div>
                <div className="text-xs text-blue-600">Sent</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
