import DashboardHeader from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Store, DollarSign, ShoppingBag, TrendingUp, QrCode, CheckCircle } from "lucide-react";

const vendorStats = [
  { label: "Total Transactions", value: "342", change: "+12%", icon: ShoppingBag },
  { label: "Revenue", value: "$28,450", change: "+8%", icon: DollarSign },
  { label: "Active Tokens", value: "156", change: "+15%", icon: TrendingUp },
];

const recentTransactions = [
  { id: "TX-4521", victimId: "V-001", amount: "$45", items: "Food & Water", time: "5 min ago", status: "completed" },
  { id: "TX-4520", victimId: "V-087", amount: "$120", items: "Medical Supplies", time: "12 min ago", status: "completed" },
  { id: "TX-4519", victimId: "V-023", amount: "$35", items: "Hygiene Kit", time: "18 min ago", status: "completed" },
  { id: "TX-4518", victimId: "V-145", amount: "$80", items: "Clothing", time: "25 min ago", status: "completed" },
  { id: "TX-4517", victimId: "V-067", amount: "$55", items: "Food & Medicine", time: "32 min ago", status: "completed" },
];

const Vendors = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Vendor Portal</h1>
            <p className="text-muted-foreground">
              Scan victim QR codes to accept aid tokens as payment
            </p>
          </div>
          <Button size="lg" className="gap-2">
            <QrCode className="w-5 h-5" />
            Scan QR Code
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {vendorStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="card-glass p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-lg bg-chart-${(index % 5) + 1}/20`}>
                    <Icon className={`w-6 h-6 text-chart-${(index % 5) + 1}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <Card className="card-glass p-6">
          <h2 className="text-xl font-semibold mb-6">How Vendor Payment Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-chart-1/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-chart-1">1</span>
              </div>
              <h3 className="font-semibold mb-2">Victim Shows QR</h3>
              <p className="text-sm text-muted-foreground">Customer presents their digital wallet QR code</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-chart-2/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-chart-2">2</span>
              </div>
              <h3 className="font-semibold mb-2">Scan with App</h3>
              <p className="text-sm text-muted-foreground">Use vendor app to scan and verify identity</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-chart-3/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-chart-3">3</span>
              </div>
              <h3 className="font-semibold mb-2">Enter Amount</h3>
              <p className="text-sm text-muted-foreground">Input transaction value and confirm</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-chart-4/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-chart-4">4</span>
              </div>
              <h3 className="font-semibold mb-2">Get Paid</h3>
              <p className="text-sm text-muted-foreground">Receive stablecoins instantly to your wallet</p>
            </div>
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card className="card-glass p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>

          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{transaction.id}</p>
                      <span className="text-xs text-muted-foreground">•</span>
                      <p className="text-sm text-muted-foreground">Victim: {transaction.victimId}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{transaction.items}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-lg font-bold text-success">{transaction.amount}</p>
                    <p className="text-xs text-muted-foreground">{transaction.time}</p>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    Completed
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Vendor Registration */}
        <Card className="card-glass p-6 gradient-rainbow-subtle">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <Store className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Become a Verified Vendor</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Partner with local NGOs to get verified and start accepting aid tokens. Simple setup with no complex equipment needed.
              </p>
              <Button>Apply Now</Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Vendors;
