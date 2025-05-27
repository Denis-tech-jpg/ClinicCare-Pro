
import { AlertTriangle, Clock, Users, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProblemSlide = () => {
  const problems = [
    {
      icon: Users,
      title: "Lost Patients",
      stat: "30%",
      description: "of patients miss follow-up appointments due to poor communication"
    },
    {
      icon: TrendingDown,
      title: "Revenue Loss",
      stat: "$50K",
      description: "average annual revenue loss per clinic from missed appointments"
    },
    {
      icon: Clock,
      title: "Administrative Burden",
      stat: "15 hrs",
      description: "per week spent on manual follow-up calls and scheduling"
    },
    {
      icon: AlertTriangle,
      title: "Patient Health Risks",
      stat: "40%",
      description: "higher risk of complications when follow-ups are missed"
    }
  ];

  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">The Problem</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Clinics and private doctors are struggling with patient follow-up management, 
          leading to significant business and health consequences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto p-3 bg-red-100 rounded-full w-fit mb-4">
                  <Icon className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{problem.stat}</div>
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
        <div className="flex items-center space-x-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
          <div>
            <h3 className="text-lg font-semibold text-red-800">Critical Impact</h3>
            <p className="text-red-700">
              Poor follow-up management affects 85% of healthcare practices, 
              resulting in decreased patient satisfaction and significant revenue loss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
