import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  gradient?: string;
}

const StatsCard = ({ title, value, subtitle, icon: Icon, trend, gradient }: StatsCardProps) => {
  return (
    <Card className="card-glass p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${gradient || 'bg-primary/20'}`}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {trend && (
          <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
            trend.isPositive ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'
          }`}>
            {trend.isPositive ? '+' : ''}{trend.value}
          </div>
        )}
      </div>
      <h3 className="text-sm text-muted-foreground mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-1">{value}</p>
      {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
    </Card>
  );
};

export default StatsCard;
