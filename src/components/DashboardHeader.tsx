import { Wallet, Bell, Search, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const DashboardHeader = () => {
  return (
    <header className="gradient-rainbow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
    </header>
  );
};

export default DashboardHeader;
