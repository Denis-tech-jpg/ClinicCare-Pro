
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Search, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Patient {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  lastVisit: string;
  nextAppointment?: string;
}

export const PatientManagement = () => {
  const { toast } = useToast();
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@email.com",
      address: "123 Main St, Anytown, ST 12345",
      lastVisit: "2024-01-15",
      nextAppointment: "2024-01-22"
    },
    {
      id: "2",
      name: "Michael Chen",
      phone: "+1 (555) 987-6543",
      email: "m.chen@email.com",
      address: "456 Oak Ave, Somewhere, ST 67890",
      lastVisit: "2024-01-10",
      nextAppointment: "2024-01-25"
    },
    {
      id: "3",
      name: "Emma Davis",
      phone: "+1 (555) 456-7890",
      email: "emma.davis@email.com",
      address: "789 Pine Rd, Elsewhere, ST 13579",
      lastVisit: "2024-01-08"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingPatient, setIsAddingPatient] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = () => {
    if (!newPatient.name || !newPatient.phone) {
      toast({
        title: "Error",
        description: "Please fill in at least the name and phone number.",
        variant: "destructive"
      });
      return;
    }

    const patient: Patient = {
      id: Date.now().toString(),
      ...newPatient,
      lastVisit: new Date().toISOString().split('T')[0]
    };

    setPatients([...patients, patient]);
    setNewPatient({ name: "", phone: "", email: "", address: "" });
    setIsAddingPatient(false);
    
    toast({
      title: "Success",
      description: "Patient added successfully!"
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Patient Management</h2>
          <p className="text-gray-600">Manage your patient database and contact information.</p>
        </div>
        
        <Dialog open={isAddingPatient} onOpenChange={setIsAddingPatient}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Patient</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Patient</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={newPatient.name}
                  onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                  placeholder="Enter patient's full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={newPatient.phone}
                  onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={newPatient.email}
                  onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                  placeholder="patient@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={newPatient.address}
                  onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })}
                  placeholder="123 Main St, City, State ZIP"
                />
              </div>
              <div className="flex space-x-2 pt-4">
                <Button onClick={handleAddPatient} className="flex-1">
                  Add Patient
                </Button>
                <Button variant="outline" onClick={() => setIsAddingPatient(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search patients by name, phone, or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Patient List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{patient.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{patient.phone}</span>
              </div>
              {patient.email && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{patient.email}</span>
                </div>
              )}
              {patient.address && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{patient.address}</span>
                </div>
              )}
              <div className="pt-2 border-t">
                <div className="text-sm text-gray-600">
                  Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}
                </div>
                {patient.nextAppointment && (
                  <div className="text-sm text-blue-600 font-medium">
                    Next: {new Date(patient.nextAppointment).toLocaleDateString()}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No patients found matching your search.</p>
        </div>
      )}
    </div>
  );
};
