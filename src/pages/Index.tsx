import DashboardHeader from "@/components/DashboardHeader";
import StatsCard from "@/components/StatsCard";
import DonationTracker from "@/components/DonationTracker";
import TransactionChart from "@/components/TransactionChart";
import ImpactMap from "@/components/ImpactMap";
import RecentActivity from "@/components/RecentActivity";
import AIInsights from "@/components/AIInsights";
import { Users, DollarSign, Package, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto p-6 space-y-6 animate-slide-up">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Victims Aided"
            value="9,547"
            subtitle="Across 23 countries"
            icon={Users}
            trend={{ value: "12%", isPositive: true }}
            gradient="bg-chart-1/20"
          />
          <StatsCard
            title="Funds Distributed"
            value="$890K"
            subtitle="This month"
            icon={DollarSign}
            trend={{ value: "8%", isPositive: true }}
            gradient="bg-chart-2/20"
          />
          <StatsCard
            title="Active Vendors"
            value="1,234"
            subtitle="Verified partners"
            icon={Package}
            trend={{ value: "15%", isPositive: true }}
            gradient="bg-chart-3/20"
          />
          <StatsCard
            title="Blockchain Verified"
            value="100%"
            subtitle="Full transparency"
            icon={Shield}
            gradient="bg-chart-4/20"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <DonationTracker />
            <TransactionChart />
            <ImpactMap />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <AIInsights />
            <RecentActivity />
          </div>
        </div>

        {/* Footer Info */}
        <div className="card-glass rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground">
            All transactions are publicly verifiable on the blockchain. 
            <span className="text-primary font-semibold cursor-pointer hover:underline ml-1">
              View Smart Contract →
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
