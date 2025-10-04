import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "disbursed",
    description: "Aid tokens sent to 45 victims",
    location: "Manila, Philippines",
    amount: "$12,500",
    time: "2 minutes ago",
    status: "completed"
  },
  {
    id: 2,
    type: "pending",
    description: "Vendor verification in progress",
    location: "Nairobi, Kenya",
    amount: "$8,200",
    time: "15 minutes ago",
    status: "pending"
  },
  {
    id: 3,
    type: "disbursed",
    description: "Emergency medical supplies funded",
    location: "Port-au-Prince, Haiti",
    amount: "$25,000",
    time: "1 hour ago",
    status: "completed"
  },
  {
    id: 4,
    type: "alert",
    description: "New disaster alert triggered",
    location: "Dhaka, Bangladesh",
    amount: "AI Assessment",
    time: "2 hours ago",
    status: "alert"
  },
  {
    id: 5,
    type: "disbursed",
    description: "Food vouchers distributed",
    location: "Beirut, Lebanon",
    amount: "$18,300",
    time: "3 hours ago",
    status: "completed"
  }
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "bg-success/20 text-success",
    badgeVariant: "default" as const
  },
  pending: {
    icon: Clock,
    color: "bg-warning/20 text-warning",
    badgeVariant: "secondary" as const
  },
  alert: {
    icon: AlertCircle,
    color: "bg-destructive/20 text-destructive",
    badgeVariant: "destructive" as const
  }
};

const RecentActivity = () => {
  return (
    <Card className="card-glass p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <Badge variant="outline">Live</Badge>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const config = statusConfig[activity.status as keyof typeof statusConfig];
          const Icon = config.icon;

          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${config.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium mb-1">{activity.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{activity.location}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm mb-1">{activity.amount}</p>
                <Badge variant={config.badgeVariant} className="text-xs">
                  {activity.status}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default RecentActivity;
