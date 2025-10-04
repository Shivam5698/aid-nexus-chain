import DashboardHeader from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, ExternalLink, CheckCircle, ArrowRight, FileText } from "lucide-react";

const blockchainMetrics = [
  { label: "Total Transactions", value: "12,847" },
  { label: "Smart Contracts", value: "5" },
  { label: "Blocks Verified", value: "28,932" },
  { label: "Uptime", value: "99.98%" },
];

const transactions = [
  {
    hash: "0x7f9c...a3b2",
    from: "Donor Pool",
    to: "Victim V-001",
    amount: "$450",
    timestamp: "2024-01-17 14:23:45",
    status: "confirmed",
    confirmations: 156
  },
  {
    hash: "0x2e4d...9f1c",
    from: "Victim V-023",
    to: "Vendor: Local Store",
    amount: "$35",
    timestamp: "2024-01-17 14:18:12",
    status: "confirmed",
    confirmations: 203
  },
  {
    hash: "0xa1b2...7e8f",
    from: "Donor: Alice W.",
    to: "Donation Pool",
    amount: "$1,000",
    timestamp: "2024-01-17 14:15:33",
    status: "confirmed",
    confirmations: 245
  },
  {
    hash: "0x5c6d...4a3b",
    from: "Donor Pool",
    to: "Victim V-067",
    amount: "$320",
    timestamp: "2024-01-17 14:10:21",
    status: "confirmed",
    confirmations: 298
  },
];

const Transparency = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Blockchain Transparency</h1>
            <p className="text-muted-foreground">
              Every transaction is publicly verifiable and auditable on the blockchain
            </p>
          </div>
          <Button size="lg" className="gap-2" variant="outline">
            <ExternalLink className="w-5 h-5" />
            View on Explorer
          </Button>
        </div>

        {/* Blockchain Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {blockchainMetrics.map((metric, index) => (
            <Card key={index} className="card-glass p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
              <p className="text-3xl font-bold">{metric.value}</p>
            </Card>
          ))}
        </div>

        {/* Smart Contract Info */}
        <Card className="card-glass p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Smart Contract Verification</h2>
              <p className="text-muted-foreground mb-4">
                Our smart contracts are open-source and audited by leading security firms. All donation flows are automated and cannot be altered.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <p className="font-semibold text-sm">Main Contract</p>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono mb-2">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb</p>
                  <Badge variant="outline" className="text-xs">Verified</Badge>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <p className="font-semibold text-sm">Token Contract</p>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono mb-2">0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063</p>
                  <Badge variant="outline" className="text-xs">Verified</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Transaction History */}
        <Card className="card-glass p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Blockchain Transactions</h2>
            <Button variant="outline" size="sm" className="gap-2">
              <FileText className="w-4 h-4" />
              Download Report
            </Button>
          </div>

          <div className="space-y-3">
            {transactions.map((tx, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-mono text-sm font-semibold">{tx.hash}</p>
                        <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                          {tx.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{tx.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold">{tx.amount}</p>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">From:</span>
                  <span className="font-medium">{tx.from}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">To:</span>
                  <span className="font-medium">{tx.to}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {tx.confirmations} confirmations
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Info Banner */}
        <Card className="card-glass p-6 gradient-rainbow-subtle">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">100% Transparent by Design</h3>
              <p className="text-sm text-muted-foreground">
                Unlike traditional aid organizations, every single transaction on NexusRelief is recorded on the blockchain. 
                You can verify where every dollar goes, from donor to recipient. No hidden fees, no middlemen, no corruption.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Transparency;
