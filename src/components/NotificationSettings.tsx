
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";
import { useState } from "react";

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [telegramNotifications, setTelegramNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-slate-800 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-blue-600" />
            Notification Preferences
          </CardTitle>
          <p className="text-slate-600">
            Stay informed about better yield opportunities and market changes
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Notification Channels */}
          <div className="space-y-4">
            <h3 className="font-medium text-slate-800">Notification Channels</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-slate-800">Email Notifications</div>
                    <div className="text-sm text-slate-600">Receive alerts via email</div>
                  </div>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              
              {emailNotifications && (
                <div className="ml-8 space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <Input placeholder="your@email.com" className="bg-white" />
                </div>
              )}
              
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-slate-800">Telegram Notifications</div>
                    <div className="text-sm text-slate-600">Get instant alerts on Telegram</div>
                  </div>
                </div>
                <Switch checked={telegramNotifications} onCheckedChange={setTelegramNotifications} />
              </div>
              
              {telegramNotifications && (
                <div className="ml-8 space-y-2">
                  <label className="text-sm font-medium text-slate-700">Telegram Username</label>
                  <Input placeholder="@username" className="bg-white" />
                </div>
              )}
              
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="font-medium text-slate-800">Push Notifications</div>
                    <div className="text-sm text-slate-600">Browser notifications</div>
                  </div>
                </div>
                <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
              </div>
            </div>
          </div>

          {/* Alert Triggers */}
          <div className="space-y-4">
            <h3 className="font-medium text-slate-800">Alert Triggers</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Yield Improvement Threshold</label>
                <Select defaultValue="2">
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="1">1% APY improvement</SelectItem>
                    <SelectItem value="2">2% APY improvement</SelectItem>
                    <SelectItem value="5">5% APY improvement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Risk Score Changes</label>
                <Select defaultValue="medium">
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="any">Any change</SelectItem>
                    <SelectItem value="medium">Medium+ changes</SelectItem>
                    <SelectItem value="high">High changes only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Save Notification Settings
          </Button>
        </CardContent>
      </Card>

      {/* Preview Card */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-lg text-green-800">Notification Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white/80 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <div className="font-medium text-slate-800">New Yield Opportunity Available</div>
                <div className="text-sm text-slate-600 mt-1">
                  Compound III USDC on Polygon now offers 14.2% APY (2.4% higher than your current strategy)
                </div>
                <div className="text-xs text-slate-500 mt-2">2 minutes ago</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationSettings;
