
import { Activity, Stethoscope } from "lucide-react";

export const TitleSlide = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4">
        <div className="p-4 bg-blue-100 rounded-full">
          <Activity className="h-12 w-12 text-blue-600" />
        </div>
        <div className="p-4 bg-green-100 rounded-full">
          <Stethoscope className="h-12 w-12 text-green-600" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          ClinicCare <span className="text-blue-600">Pro</span>
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl">
          Revolutionizing Patient Follow-up Management for Clinics and Healthcare Providers
        </p>
      </div>

      <div className="space-y-2 text-lg text-gray-500">
        <p>Automated Reminders • Multi-Channel Communication • Seamless Integration</p>
        <p className="font-semibold">Investor Presentation - 2024</p>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
        <p className="text-xl font-semibold text-gray-800">
          "Never lose track of a patient follow-up again"
        </p>
      </div>
    </div>
  );
};
