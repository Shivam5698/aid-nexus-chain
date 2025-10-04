import DashboardHeader from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, DollarSign, TrendingUp, Users, CheckCircle } from "lucide-react";
import { useState } from "react";

const impactStats = [
  { label: "People Helped", value: "9,547", icon: Users },
  { label: "Countries Reached", value: "23", icon: CheckCircle },
  { label: "Success Rate", value: "98.5%", icon: TrendingUp },
];

const Donors = () => {
  const [amount, setAmount] = useState("100");
  const presetAmounts = ["50", "100", "250", "500", "1000"];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Hero Section */}
        <div className="card-glass rounded-2xl p-8 text-center space-y-4">
          <div className="inline-block p-4 rounded-full bg-primary/20 mb-2">
            <Heart className="w-12 h-12 text-primary" fill="currentColor" />
          </div>
          <h1 className="text-4xl font-bold">Make a Difference Today</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your donation is tracked on blockchain for complete transparency. Every dollar reaches those who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="card-glass p-8">
              <h2 className="text-2xl font-bold mb-6">Donate Now</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Select Amount (USD)</label>
                  <div className="grid grid-cols-5 gap-3 mb-4">
                    {presetAmounts.map((preset) => (
                      <Button
                        key={preset}
                        variant={amount === preset ? "default" : "outline"}
                        onClick={() => setAmount(preset)}
                        className="h-12"
                      >
                        ${preset}
                      </Button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-10 h-14 text-lg"
                      placeholder="Custom amount"
                    />
                  </div>
                </div>

                <div className="space-y-3 p-4 rounded-lg bg-secondary/30">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Your donation</span>
                    <span className="font-semibold">${amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Platform fee</span>
                    <span className="font-semibold">$0 (100% goes to aid)</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-primary">${amount}</span>
                  </div>
                </div>

                <Button className="w-full h-14 text-lg" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate ${amount} Now
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Secured by blockchain • Tax deductible • Instant transparency</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Impact Stats */}
          <div className="space-y-6">
            <Card className="card-glass p-6">
              <h3 className="font-semibold mb-4">Your Impact</h3>
              <div className="space-y-4">
                {impactStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="card-glass p-6">
              <h3 className="font-semibold mb-3">Why Donate?</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>100% transparent blockchain tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Direct aid to verified victims</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>AI-powered efficient distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Real-time impact updates</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donors;
