
import { TrendingUp, Globe, Target, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MarketSlide = () => {
  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Opportunity</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          The healthcare technology market is experiencing unprecedented growth, 
          with patient engagement solutions leading the charge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-blue-600" />
                <span>Total Addressable Market</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-600 mb-2">$12.8B</div>
              <p className="text-gray-700">Global patient engagement solutions market by 2027</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-green-600" />
                <span>Serviceable Market</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600 mb-2">$2.1B</div>
              <p className="text-gray-700">Appointment scheduling & reminder solutions</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-purple-600" />
                <span>Growth Rate</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-purple-600 mb-2">23.1%</div>
              <p className="text-gray-700">CAGR through 2027</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-6 w-6 text-orange-600" />
                <span>Revenue Potential</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-orange-600 mb-2">$100M</div>
              <p className="text-gray-700">Projected 5-year revenue opportunity</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Market Drivers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">280K+</div>
            <p className="text-sm text-gray-600">Healthcare practices in US</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">15%</div>
            <p className="text-sm text-gray-600">Annual no-show rate</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">$200</div>
            <p className="text-sm text-gray-600">Cost per no-show</p>
          </div>
        </div>
      </div>
    </div>
  );
};
