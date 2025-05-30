
import { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardOverview } from "../components/DashboardOverview";
import { PatientManagement } from "../components/PatientManagement";
import { AppointmentScheduler } from "../components/AppointmentScheduler";
import { ReminderSettings } from "../components/ReminderSettings";
import { Navigation } from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Presentation } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "patients":
        return <PatientManagement />;
      case "appointments":
        return <AppointmentScheduler />;
      case "reminders":
        return <ReminderSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Pitch Deck Link in Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-end">
          <Link to="/pitch">
            <Button variant="outline" className="flex items-center space-x-2">
              <Presentation className="h-4 w-4" />
              <span>View Investor Pitch</span>
            </Button>
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default Index;
