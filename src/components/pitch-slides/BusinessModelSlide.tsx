
import { DollarSign, Users, Building, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BusinessModelSlide = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      features: ["Up to 100 patients", "SMS & Email reminders", "Basic scheduling", "Email support"],
      color: "blue"
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      features: ["Up to 500 patients", "All reminder channels", "Advanced analytics", "Phone support", "API access"],
      color: "green",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      features: ["Unlimited patients", "Custom integrations", "White-label option", "Dedicated support", "SLA guarantee"],
      color: "purple"
    }
  ];

  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Model</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Subscription-based SaaS model with tiered pricing to serve clinics of all sizes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {pricingTiers.map((tier, index) => (
          <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${tier.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{tier.name}</CardTitle>
              <div className="flex items-baseline justify-center space-x-1">
                <span className={`text-4xl font-bold text-${tier.color}-600`}>{tier.price}</span>
                <span className="text-gray-500">{tier.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-${tier.color}-500 rounded-full`}></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">280K+</div>
            <div className="text-sm text-gray-600">Target Customers</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">$2,400</div>
            <div className="text-sm text-gray-600">Annual LTV</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <Building className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">85%</div>
            <div className="text-sm text-gray-600">Gross Margins</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">6 mos</div>
            <div className="text-sm text-gray-600">Payback Period</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
