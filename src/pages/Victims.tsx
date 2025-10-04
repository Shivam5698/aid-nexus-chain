import DashboardHeader from "@/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UserCheck, MessageSquare, Wallet, QrCode, CheckCircle2, Clock } from "lucide-react";

const registeredVictims = [
  { id: "V-001", name: "Maria Santos", location: "Manila, Philippines", status: "active", aidReceived: "$450", registeredDate: "2024-01-15" },
  { id: "V-002", name: "Ahmed Hassan", location: "Nairobi, Kenya", status: "pending", aidReceived: "$0", registeredDate: "2024-01-16" },
  { id: "V-003", name: "Jean-Pierre", location: "Port-au-Prince, Haiti", status: "active", aidReceived: "$680", registeredDate: "2024-01-14" },
  { id: "V-004", name: "Fatima Ali", location: "Dhaka, Bangladesh", status: "active", aidReceived: "$320", registeredDate: "2024-01-17" },
];

const Victims = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Victim Registration & Aid Tracking</h1>
            <p className="text-muted-foreground">
              Register via AI chatbot and track your aid distribution
            </p>
          </div>
          <Button size="lg" className="gap-2">
            <MessageSquare className="w-5 h-5" />
            Start Registration
          </Button>
        </div>

        {/* Registration Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-chart-1/20">
                <MessageSquare className="w-6 h-6 text-chart-1" />
              </div>
              <div>
                <h3 className="font-semibold">Step 1</h3>
                <p className="text-sm text-muted-foreground">Chat with AI</p>
              </div>
            </div>
            <p className="text-sm">Use WhatsApp or SMS to report your situation and needs to our AI assistant</p>
          </Card>

          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-chart-2/20">
                <UserCheck className="w-6 h-6 text-chart-2" />
              </div>
              <div>
                <h3 className="font-semibold">Step 2</h3>
                <p className="text-sm text-muted-foreground">Create Digital ID</p>
              </div>
            </div>
            <p className="text-sm">Take a selfie for biometric verification and receive your self-sovereign identity</p>
          </Card>

          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-chart-3/20">
                <Wallet className="w-6 h-6 text-chart-3" />
              </div>
              <div>
                <h3 className="font-semibold">Step 3</h3>
                <p className="text-sm text-muted-foreground">Receive Aid</p>
              </div>
            </div>
            <p className="text-sm">Get aid tokens directly to your digital wallet for immediate use</p>
          </Card>
        </div>

        {/* Registered Victims List */}
        <Card className="card-glass p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Registered Victims</h2>
            <div className="flex gap-2">
              <Input placeholder="Search by ID or name..." className="w-64" />
            </div>
          </div>

          <div className="space-y-3">
            {registeredVictims.map((victim) => (
              <div
                key={victim.id}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{victim.name}</p>
                      <Badge variant={victim.status === "active" ? "default" : "secondary"} className="text-xs">
                        {victim.status === "active" ? (
                          <><CheckCircle2 className="w-3 h-3 mr-1" /> Active</>
                        ) : (
                          <><Clock className="w-3 h-3 mr-1" /> Pending</>
                        )}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>ID: {victim.id}</span>
                      <span>•</span>
                      <span>{victim.location}</span>
                      <span>•</span>
                      <span>Registered: {victim.registeredDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Aid Received</p>
                    <p className="text-xl font-bold text-success">{victim.aidReceived}</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <QrCode className="w-4 h-4" />
                    View QR
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Info Box */}
        <Card className="card-glass p-6 gradient-rainbow-subtle">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">How to Register as a Victim</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Registration is free and can be done via SMS or WhatsApp. No smartphone or internet required!
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">SMS: +1-555-RELIEF</Button>
                <Button variant="outline" size="sm">WhatsApp: +1-555-AID-NOW</Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Victims;
