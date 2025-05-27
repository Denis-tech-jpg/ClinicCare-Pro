
import { useState } from "react";
import { DashboardOverview } from "../components/DashboardOverview";
import { PatientManagement } from "../components/PatientManagement";
import { AppointmentScheduler } from "../components/AppointmentScheduler";
import { ReminderSettings } from "../components/ReminderSettings";
import { Navigation } from "../components/Navigation";

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
      <main className="container mx-auto px-4 py-8">
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default Index;
