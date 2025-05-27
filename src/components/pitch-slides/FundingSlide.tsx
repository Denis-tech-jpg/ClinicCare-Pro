
import { Target, Rocket, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FundingSlide = () => {
  const fundingUse = [
    { category: "Product Development", percentage: 40, amount: "$1.2M", color: "blue" },
    { category: "Sales & Marketing", percentage: 35, amount: "$1.05M", color: "green" },
    { category: "Team Expansion", percentage: 20, amount: "$600K", color: "purple" },
    { category: "Operations", percentage: 5, amount: "$150K", color: "orange" }
  ];

  const milestones = [
    { period: "6 months", milestone: "1,000 active clinics", icon: Target },
    { period: "12 months", milestone: "$5M ARR", icon: TrendingUp },
    { period: "18 months", milestone: "Market leadership", icon: Rocket },
    { period: "24 months", milestone: "Series A ready", icon: Clock }
  ];

  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Funding Ask</h2>
        <div className="text-6xl font-bold text-blue-600 mb-4">$3M</div>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Seed funding to accelerate product development and market expansion
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Use of Funds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fundingUse.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item.category}</span>
                    <span className="text-lg font-bold text-gray-900">{item.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`bg-${item.color}-500 h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">{item.percentage}% of total funding</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>24-Month Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{milestone.milestone}</div>
                      <div className="text-sm text-gray-600">{milestone.period}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">18 months</div>
            <div className="text-lg font-semibold text-gray-900">Runway</div>
            <div className="text-sm text-gray-600">To cash flow positive</div>
          </CardContent>
        </Card>

        <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
            <div className="text-lg font-semibold text-gray-900">Return Potential</div>
            <div className="text-sm text-gray-600">Conservative projection</div>
          </CardContent>
        </Card>

        <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">$30M</div>
            <div className="text-lg font-semibold text-gray-900">Series A Valuation</div>
            <div className="text-sm text-gray-600">24-month target</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Ready to Transform Healthcare Together?</h3>
        <p className="text-gray-600 mb-4">
          Join us in solving one of healthcare's biggest challenges and building the future of patient engagement.
        </p>
        <div className="flex justify-center space-x-4 text-sm text-gray-600">
          <span>• Proven team</span>
          <span>• Huge market</span>
          <span>• Strong traction</span>
          <span>• Clear path to scale</span>
        </div>
      </div>
    </div>
  );
};
