
import { CheckCircle, MessageSquare, Smartphone, Mail, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SolutionSlide = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Multi-Channel Reminders",
      description: "SMS, WhatsApp, Email, and Voice call reminders with intelligent scheduling"
    },
    {
      icon: Calendar,
      title: "Smart Appointment Management",
      description: "Automated scheduling, rescheduling, and cancellation handling"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Easy-to-use interface accessible on any device, anywhere"
    },
    {
      icon: CheckCircle,
      title: "Integration Ready",
      description: "Seamlessly connects with existing clinic management systems"
    }
  ];

  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          ClinicCare Pro is an intelligent patient follow-up management system that automates 
          reminders and streamlines communication between healthcare providers and patients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">95%</div>
          <p className="text-green-700">Reminder Delivery Rate</p>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">60%</div>
          <p className="text-blue-700">Reduction in No-Shows</p>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">80%</div>
          <p className="text-purple-700">Time Savings</p>
        </div>
      </div>
    </div>
  );
};
