
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Plus, Clock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  type: string;
  status: "scheduled" | "confirmed" | "completed" | "cancelled";
  notes?: string;
}

export const AppointmentScheduler = () => {
  const { toast } = useToast();
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      patientName: "Sarah Johnson",
      date: "2024-01-22",
      time: "09:00",
      type: "Consultation",
      status: "confirmed"
    },
    {
      id: "2",
      patientName: "Michael Chen",
      date: "2024-01-22",
      time: "10:30",
      type: "Follow-up",
      status: "scheduled"
    },
    {
      id: "3",
      patientName: "Emma Davis",
      date: "2024-01-23",
      time: "14:00",
      type: "Check-up",
      status: "confirmed"
    }
  ]);

  const [isScheduling, setIsScheduling] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    date: "",
    time: "",
    type: "",
    notes: ""
  });

  const appointmentTypes = [
    "Consultation",
    "Follow-up",
    "Check-up",
    "Procedure",
    "Emergency"
  ];

  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleScheduleAppointment = () => {
    if (!newAppointment.patientName || !newAppointment.date || !newAppointment.time || !newAppointment.type) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const appointment: Appointment = {
      id: Date.now().toString(),
      ...newAppointment,
      status: "scheduled"
    };

    setAppointments([...appointments, appointment]);
    setNewAppointment({ patientName: "", date: "", time: "", type: "", notes: "" });
    setIsScheduling(false);
    
    toast({
      title: "Success",
      description: "Appointment scheduled successfully!"
    });
  };

  const updateAppointmentStatus = (id: string, status: Appointment["status"]) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status } : apt
    ));
    
    toast({
      title: "Updated",
      description: `Appointment status updated to ${status}.`
    });
  };

  // Group appointments by date
  const appointmentsByDate = appointments.reduce((acc, appointment) => {
    const date = appointment.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(appointment);
    return acc;
  }, {} as Record<string, Appointment[]>);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Appointment Scheduler</h2>
          <p className="text-gray-600">Schedule and manage patient appointments.</p>
        </div>
        
        <Dialog open={isScheduling} onOpenChange={setIsScheduling}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Schedule Appointment</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="patientName">Patient Name *</Label>
                <Input
                  id="patientName"
                  value={newAppointment.patientName}
                  onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })}
                  placeholder="Enter patient's name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time *</Label>
                  <Select value={newAppointment.time} onValueChange={(value) => setNewAppointment({ ...newAppointment, time: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Appointment Type *</Label>
                <Select value={newAppointment.type} onValueChange={(value) => setNewAppointment({ ...newAppointment, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {appointmentTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Input
                  id="notes"
                  value={newAppointment.notes}
                  onChange={(e) => setNewAppointment({ ...newAppointment, notes: e.target.value })}
                  placeholder="Additional notes (optional)"
                />
              </div>
              <div className="flex space-x-2 pt-4">
                <Button onClick={handleScheduleAppointment} className="flex-1">
                  Schedule Appointment
                </Button>
                <Button variant="outline" onClick={() => setIsScheduling(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Appointments by Date */}
      <div className="space-y-6">
        {Object.entries(appointmentsByDate).map(([date, dayAppointments]) => (
          <Card key={date}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span>{new Date(date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dayAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-blue-600 font-medium">
                        <Clock className="h-4 w-4" />
                        <span>{appointment.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{appointment.patientName}</span>
                      </div>
                      <div className="text-sm text-gray-600">{appointment.type}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                      <Select 
                        value={appointment.status} 
                        onValueChange={(value) => updateAppointmentStatus(appointment.id, value as Appointment["status"])}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {appointments.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No appointments scheduled yet.</p>
        </div>
      )}
    </div>
  );
};
