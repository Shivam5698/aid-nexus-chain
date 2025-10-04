import { Card } from "./ui/card";
import { DollarSign, TrendingUp } from "lucide-react";

const DonationTracker = () => {
  const totalRaised = 1250000;
  const target = 2000000;
  const percentage = (totalRaised / target) * 100;

  return (
    <Card className="card-glass p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Live Donation Pool</h3>
        <div className="flex items-center gap-2 text-success text-sm">
          <TrendingUp className="w-4 h-4" />
          <span>+12.5% today</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-baseline gap-2">
          <DollarSign className="w-8 h-8 text-primary" />
          <span className="text-4xl font-bold">{totalRaised.toLocaleString()}</span>
          <span className="text-muted-foreground">USD</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Target: ${target.toLocaleString()}</span>
            <span className="font-semibold">{percentage.toFixed(1)}%</span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full gradient-rainbow transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Donors</p>
            <p className="text-xl font-bold">8,432</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Distributed</p>
            <p className="text-xl font-bold">$890K</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Pending</p>
            <p className="text-xl font-bold">$360K</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DonationTracker;
