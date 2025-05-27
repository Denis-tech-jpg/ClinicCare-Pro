
import { Shield, Zap, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CompetitionSlide = () => {
  const competitors = [
    { name: "Appointy", strength: "Established brand", weakness: "Limited reminder channels" },
    { name: "SimplePractice", strength: "All-in-one solution", weakness: "High cost, complex setup" },
    { name: "Acuity", strength: "Good scheduling", weakness: "Poor patient engagement" }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Multi-Channel Intelligence",
      description: "Only solution offering WhatsApp, SMS, Email, and Voice in one platform"
    },
    {
      icon: Users,
      title: "Patient-Centric Design",
      description: "Built specifically for healthcare with HIPAA compliance and medical workflows"
    },
    {
      icon: Shield,
      title: "Plug & Play Integration",
      description: "Works with any existing system - no complex migration required"
    },
    {
      icon: Star,
      title: "Affordable Excellence",
      description: "Enterprise features at small clinic prices with transparent pricing"
    }
  ];

  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Competitive Advantage</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          We're not just better - we're different. ClinicCare Pro solves problems 
          that existing solutions can't address.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Competitive Landscape</h3>
          <div className="space-y-4">
            {competitors.map((competitor, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{competitor.name}</h4>
                      <p className="text-green-600 text-sm">✓ {competitor.strength}</p>
                      <p className="text-red-600 text-sm">✗ {competitor.weakness}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Advantages</h3>
          <div className="space-y-4">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{advantage.title}</h4>
                        <p className="text-gray-600 text-sm">{advantage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Market Position</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">First</div>
            <p className="text-sm text-gray-600">WhatsApp integration for healthcare</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">50%</div>
            <p className="text-sm text-gray-600">Lower cost than competitors</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">10x</div>
            <p className="text-sm text-gray-600">Faster implementation</p>
          </div>
        </div>
      </div>
    </div>
  );
};
