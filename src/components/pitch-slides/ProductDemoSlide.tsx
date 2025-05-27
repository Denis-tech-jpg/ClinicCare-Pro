
import { Monitor, Smartphone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProductDemoSlide = () => {
  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Demo</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          See how ClinicCare Pro transforms patient follow-up management with 
          an intuitive interface and powerful automation features.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        <Card className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Monitor className="h-6 w-6 text-blue-600" />
              <span>Dashboard Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4 shadow-inner">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded text-center">
                  <div className="text-2xl font-bold text-green-600">24</div>
                  <div className="text-sm text-green-700">Today's Appointments</div>
                </div>
                <div className="bg-blue-100 p-3 rounded text-center">
                  <div className="text-2xl font-bold text-blue-600">156</div>
                  <div className="text-sm text-blue-700">Reminders Sent</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Sarah Johnson - 09:00</span>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Confirmed</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Michael Chen - 10:30</span>
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Pending</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="h-6 w-6 text-green-600" />
                <span>Mobile App</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-3 shadow-inner">
                <div className="text-xs text-gray-600 mb-2">Patient View</div>
                <div className="bg-blue-500 text-white p-2 rounded text-xs mb-2">
                  Reminder: Appointment tomorrow at 2PM with Dr. Smith
                </div>
                <div className="flex space-x-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">Confirm</button>
                  <button className="bg-gray-300 px-2 py-1 rounded text-xs">Reschedule</button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-6 w-6 text-purple-600" />
                <span>Smart Reminders</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>SMS: 95% delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>WhatsApp: 98% read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Email: 85% open</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center space-x-4 bg-white rounded-lg p-4 shadow-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">Live Demo</div>
            <div className="text-sm text-gray-600">Available upon request</div>
          </div>
        </div>
      </div>
    </div>
  );
};
