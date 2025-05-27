
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Phone, Settings, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ReminderSettings = () => {
  const { toast } = useToast();
  const [reminderSettings, setReminderSettings] = useState({
    smsEnabled: true,
    whatsappEnabled: true,
    emailEnabled: false,
    reminderTiming: "24", // hours before appointment
    smsTemplate: "Hi {name}, this is a reminder about your appointment on {date} at {time}. Please confirm by replying YES.",
    whatsappTemplate: "Hello {name}! You have an appointment scheduled for {date} at {time}. Please confirm your attendance.",
    emailTemplate: "Dear {name},\n\nThis is a reminder about your upcoming appointment:\n\nDate: {date}\nTime: {time}\n\nPlease confirm your attendance.\n\nBest regards,\nClinic Team"
  });

  const [testReminder, setTestReminder] = useState({
    channel: "sms",
    recipient: "",
    message: ""
  });

  const handleSettingsChange = (key: string, value: any) => {
    setReminderSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = () => {
    // In a real app, this would save to a backend
    toast({
      title: "Settings Saved",
      description: "Reminder settings have been updated successfully."
    });
  };

  const sendTestReminder = () => {
    if (!testReminder.recipient) {
      toast({
        title: "Error",
        description: "Please enter a recipient for the test reminder.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send an actual reminder
    toast({
      title: "Test Reminder Sent",
      description: `Test ${testReminder.channel} reminder sent to ${testReminder.recipient}.`
    });
    
    setTestReminder({ channel: "sms", recipient: "", message: "" });
  };

  const getTemplateForChannel = (channel: string) => {
    switch (channel) {
      case "sms":
        return reminderSettings.smsTemplate;
      case "whatsapp":
        return reminderSettings.whatsappTemplate;
      case "email":
        return reminderSettings.emailTemplate;
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Reminder Settings</h2>
        <p className="text-gray-600">Configure automated reminders for patient appointments.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reminder Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-blue-600" />
              <span>Reminder Configuration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Channel Toggles */}
            <div className="space-y-4">
              <h3 className="font-medium">Enabled Channels</h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span>SMS Reminders</span>
                </div>
                <Switch
                  checked={reminderSettings.smsEnabled}
                  onCheckedChange={(checked) => handleSettingsChange("smsEnabled", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-green-600" />
                  <span>WhatsApp Reminders</span>
                </div>
                <Switch
                  checked={reminderSettings.whatsappEnabled}
                  onCheckedChange={(checked) => handleSettingsChange("whatsappEnabled", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>Email Reminders</span>
                </div>
                <Switch
                  checked={reminderSettings.emailEnabled}
                  onCheckedChange={(checked) => handleSettingsChange("emailEnabled", checked)}
                />
              </div>
            </div>

            {/* Timing */}
            <div className="space-y-2">
              <Label>Reminder Timing</Label>
              <Select 
                value={reminderSettings.reminderTiming} 
                onValueChange={(value) => handleSettingsChange("reminderTiming", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 hour before</SelectItem>
                  <SelectItem value="2">2 hours before</SelectItem>
                  <SelectItem value="6">6 hours before</SelectItem>
                  <SelectItem value="12">12 hours before</SelectItem>
                  <SelectItem value="24">24 hours before</SelectItem>
                  <SelectItem value="48">48 hours before</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={saveSettings} className="w-full">
              Save Settings
            </Button>
          </CardContent>
        </Card>

        {/* Message Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Message Templates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>SMS Template</Label>
              <Textarea
                value={reminderSettings.smsTemplate}
                onChange={(e) => handleSettingsChange("smsTemplate", e.target.value)}
                placeholder="SMS reminder template"
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label>WhatsApp Template</Label>
              <Textarea
                value={reminderSettings.whatsappTemplate}
                onChange={(e) => handleSettingsChange("whatsappTemplate", e.target.value)}
                placeholder="WhatsApp reminder template"
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Email Template</Label>
              <Textarea
                value={reminderSettings.emailTemplate}
                onChange={(e) => handleSettingsChange("emailTemplate", e.target.value)}
                placeholder="Email reminder template"
                className="min-h-[120px]"
              />
            </div>

            <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
              Available variables: {"{name}"}, {"{date}"}, {"{time}"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Reminder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Send className="h-5 w-5 text-blue-600" />
            <span>Test Reminder</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Channel</Label>
              <Select 
                value={testReminder.channel} 
                onValueChange={(value) => setTestReminder(prev => ({ 
                  ...prev, 
                  channel: value, 
                  message: getTemplateForChannel(value) 
                }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Recipient</Label>
              <Input
                value={testReminder.recipient}
                onChange={(e) => setTestReminder(prev => ({ ...prev, recipient: e.target.value }))}
                placeholder={testReminder.channel === "email" ? "email@example.com" : "+1 (555) 123-4567"}
              />
            </div>

            <div className="flex items-end">
              <Button onClick={sendTestReminder} className="w-full">
                Send Test
              </Button>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Label>Preview Message</Label>
            <Textarea
              value={getTemplateForChannel(testReminder.channel)}
              readOnly
              className="min-h-[100px] bg-gray-50"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
