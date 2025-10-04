import { Card } from "./ui/card";
import { Brain, TrendingUp, Users, Activity } from "lucide-react";
import { Progress } from "./ui/progress";

const insights = [
  {
    title: "Urgent Need Detected",
    description: "AI has identified critical medical supply shortage in 3 regions",
    priority: "high",
    progress: 85,
    icon: Activity,
    color: "text-destructive"
  },
  {
    title: "Vendor Verification",
    description: "127 new vendors awaiting AI-powered background check",
    priority: "medium",
    progress: 60,
    icon: Users,
    color: "text-warning"
  },
  {
    title: "Efficiency Trending Up",
    description: "Aid delivery time reduced by 32% this month",
    priority: "info",
    progress: 95,
    icon: TrendingUp,
    color: "text-success"
  }
];

const AIInsights = () => {
  return (
    <Card className="card-glass p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">AI Insights</h3>
          <p className="text-xs text-muted-foreground">Real-time analysis & predictions</p>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="p-4 rounded-lg bg-secondary/30 space-y-3">
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 ${insight.color} mt-0.5`} />
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Analysis Progress</span>
                  <span className="font-semibold">{insight.progress}%</span>
                </div>
                <Progress value={insight.progress} className="h-2" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-lg gradient-rainbow-subtle">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold mb-1">AI Processing</p>
            <p className="text-xs text-muted-foreground">Analyzing satellite imagery & social feeds</p>
          </div>
          <div className="animate-pulse">
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-primary animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AIInsights;
