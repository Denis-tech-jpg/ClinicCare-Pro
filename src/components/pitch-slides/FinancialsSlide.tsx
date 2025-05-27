
import { TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";

export const FinancialsSlide = () => {
  const revenueData = [
    { year: "2024", revenue: 0.5, customers: 50 },
    { year: "2025", revenue: 2.8, customers: 280 },
    { year: "2026", revenue: 8.5, customers: 850 },
    { year: "2027", revenue: 22.0, customers: 2200 },
    { year: "2028", revenue: 45.0, customers: 4500 }
  ];

  const metrics = [
    { label: "CAC", value: "$150", description: "Customer Acquisition Cost" },
    { label: "LTV", value: "$2,400", description: "Lifetime Value" },
    { label: "Churn", value: "5%", description: "Monthly Churn Rate" },
    { label: "Gross Margin", value: "85%", description: "Recurring Revenue Margin" }
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue ($M)",
      color: "hsl(var(--chart-1))",
    },
    customers: {
      label: "Customers",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Projections</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Strong unit economics and rapid growth trajectory toward $45M ARR by 2028
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <span>Revenue Growth</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-green-600" />
              <span>Customer Growth</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="customers" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
              <div className="font-semibold text-gray-900">{metric.label}</div>
              <div className="text-xs text-gray-600">{metric.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Path to Profitability</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-xl font-bold text-green-600">Q3 2025</div>
              <div className="text-sm text-gray-600">Break-even</div>
            </div>
            <div>
              <div className="text-xl font-bold text-blue-600">25%</div>
              <div className="text-sm text-gray-600">EBITDA margin by 2027</div>
            </div>
            <div>
              <div className="text-xl font-bold text-purple-600">15x</div>
              <div className="text-sm text-gray-600">Revenue multiple exit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
