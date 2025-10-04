import { Wallet, Bell, Search, Users, Home, Heart, UserCheck, Store, Shield, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "Donors", path: "/donors", icon: Heart },
  { name: "Victims", path: "/victims", icon: UserCheck },
  { name: "Vendors", path: "/vendors", icon: Store },
  { name: "Transparency", path: "/transparency", icon: Shield },
  { name: "AI Insights", path: "/ai-insights", icon: Brain },
];

const DashboardHeader = () => {
  const location = useLocation();

  return (
    <header className="gradient-rainbow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">NexusRelief</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              <Input 
                placeholder="Search transactions, victims, or vendors..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Wallet className="w-5 h-5" />
            </Button>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <span className="text-white font-semibold">DN</span>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-1 py-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white/20 text-white shadow-lg"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;
