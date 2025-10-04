import DashboardHeader from "@/components/DashboardHeader";
import AIInsights from "@/components/AIInsights";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Satellite, MapPin, AlertTriangle, TrendingUp } from "lucide-react";

const aiActivities = [
  {
    title: "Satellite Analysis Complete",
    description: "Processed 450 satellite images from Southeast Asia region",
    time: "5 minutes ago",
    type: "analysis",
    confidence: "98%"
  },
  {
    title: "Social Media Monitoring",
    description: "Detected 1,245 distress signals from Twitter and Facebook",
    time: "12 minutes ago",
    type: "monitoring",
    confidence: "92%"
  },
  {
    title: "Damage Assessment",
    description: "Identified 23 critical infrastructure failures requiring immediate attention",
    time: "18 minutes ago",
    type: "alert",
    confidence: "95%"
  },
  {
    title: "Fraud Detection",
    description: "Blocked 3 suspicious vendor verification attempts",
    time: "25 minutes ago",
    type: "security",
    confidence: "99%"
  },
];

const predictiveInsights = [
  {
    title: "Weather Forecast Alert",
    description: "Tropical storm predicted in Caribbean region within 72 hours",
    impact: "High",
    confidence: "87%",
    recommendation: "Pre-position supplies and notify 2,400 registered victims"
  },
  {
    title: "Supply Chain Optimization",
    description: "Route efficiency can be improved by 23% using alternative vendors",
    impact: "Medium",
    confidence: "91%",
    recommendation: "Switch to recommended vendor network in East Africa region"
  },
  {
    title: "Demand Forecasting",
    description: "Medical supply demand expected to increase 40% next week",
    impact: "High",
    confidence: "84%",
    recommendation: "Increase medical supply allocation by $50,000"
  },
];

const AIInsightsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI-Powered Insights</h1>
            <p className="text-muted-foreground">
              Real-time analysis, damage assessment, and predictive intelligence
            </p>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Brain className="w-4 h-4 mr-2" />
            AI Active
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main AI Insights */}
          <div className="lg:col-span-2 space-y-6">
            <AIInsights />

            {/* AI Activity Log */}
            <Card className="card-glass p-6">
              <h2 className="text-xl font-semibold mb-6">Recent AI Activity</h2>
              <div className="space-y-4">
                {aiActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          activity.type === 'alert' ? 'bg-destructive/20' :
                          activity.type === 'security' ? 'bg-warning/20' :
                          'bg-primary/20'
                        }`}>
                          {activity.type === 'alert' ? (
                            <AlertTriangle className="w-5 h-5 text-destructive" />
                          ) : activity.type === 'analysis' ? (
                            <Satellite className="w-5 h-5 text-primary" />
                          ) : activity.type === 'monitoring' ? (
                            <MapPin className="w-5 h-5 text-primary" />
                          ) : (
                            <Brain className="w-5 h-5 text-warning" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs whitespace-nowrap">
                        {activity.confidence}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground ml-14">{activity.time}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Predictive Analytics */}
          <div className="space-y-6">
            <Card className="card-glass p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Predictive Analytics</h2>
              </div>

              <div className="space-y-4">
                {predictiveInsights.map((insight, index) => (
                  <div key={index} className="p-4 rounded-lg bg-secondary/30 space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-sm">{insight.title}</p>
                        <Badge variant={
                          insight.impact === "High" ? "destructive" : "secondary"
                        } className="text-xs">
                          {insight.impact}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                    
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-1">AI Recommendation:</p>
                      <p className="text-xs font-medium">{insight.recommendation}</p>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Confidence: {insight.confidence}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Capabilities */}
            <Card className="card-glass p-6">
              <h3 className="font-semibold mb-4">AI Capabilities</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Satellite className="w-4 h-4 text-primary mt-0.5" />
                  <span>Satellite imagery analysis for damage assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span>Real-time social media monitoring for distress signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Brain className="w-4 h-4 text-primary mt-0.5" />
                  <span>Predictive analytics for resource allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-primary mt-0.5" />
                  <span>Fraud detection and vendor verification</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIInsightsPage;
