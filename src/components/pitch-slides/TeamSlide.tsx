import { Users, Award, Code, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamSlide = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-Founder",
      icon: Briefcase,
      background: "15 years healthcare tech, Former VP at Epic Systems",
      skills: ["Healthcare Domain", "Business Development", "Strategy"]
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder", 
      icon: Code,
      background: "Former Lead Engineer at Teladoc, Stanford CS",
      skills: ["Full-Stack Development", "System Architecture", "Security"]
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Medical Officer",
      icon: Award,
      background: "20 years clinical practice, Johns Hopkins MD",
      skills: ["Clinical Workflows", "Medical Standards", "User Experience"]
    }
  ];

  const advisors = [
    { name: "Jennifer Walsh", role: "Former CMO, Practice Fusion" },
    { name: "David Kim", role: "Healthcare VC, Andreessen Horowitz" },
    { name: "Mr. Denis Oyugi", role: "Chief Innovation Officer, Mayo Clinic" }
  ];

  return (
    <div className="h-full flex flex-col animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          World-class team with deep healthcare and technology expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {teamMembers.map((member, index) => {
          const Icon = member.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-blue-100 rounded-full w-fit mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{member.background}</p>
                <div className="space-y-1">
                  {member.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded inline-block mr-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-purple-600" />
              <span>Advisory Board</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {advisors.map((advisor, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{advisor.name}</div>
                    <div className="text-sm text-purple-700">{advisor.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-green-600" />
              <span>Key Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Built and sold healthcare startup (8-figure exit)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Led digital transformation at 500+ clinics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Published 15+ papers on healthcare technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Combined 40+ years healthcare industry experience</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Why We'll Win</h3>
        <p className="text-gray-600">
          Unique combination of healthcare domain expertise, technical excellence, 
          and proven track record of building successful healthcare technology companies.
        </p>
      </div>
    </div>
  );
};
