import { Card } from "./ui/card";
import { MapPin } from "lucide-react";

const regions = [
  { name: "Southeast Asia", aided: 3420, color: "bg-chart-1" },
  { name: "East Africa", aided: 2150, color: "bg-chart-2" },
  { name: "Caribbean", aided: 890, color: "bg-chart-3" },
  { name: "Middle East", aided: 1680, color: "bg-chart-4" },
  { name: "South America", aided: 1240, color: "bg-chart-5" },
];

const ImpactMap = () => {
  return (
    <Card className="card-glass p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Global Impact Distribution</h3>
        <div className="text-sm text-muted-foreground">Last 30 days</div>
      </div>

      <div className="relative h-64 bg-secondary/30 rounded-lg overflow-hidden mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 800 400" className="w-full h-full opacity-20">
            <path
              d="M100,200 Q250,100 400,200 T700,200"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        
        {/* Map pins */}
        <div className="absolute top-1/4 left-1/3">
          <div className="relative">
            <MapPin className="w-6 h-6 text-chart-1 animate-pulse" fill="currentColor" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-chart-1 rounded-full animate-ping" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4">
          <div className="relative">
            <MapPin className="w-6 h-6 text-chart-2 animate-pulse" fill="currentColor" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-chart-2 rounded-full animate-ping" />
          </div>
        </div>
        <div className="absolute top-1/3 left-1/5">
          <div className="relative">
            <MapPin className="w-6 h-6 text-chart-3 animate-pulse" fill="currentColor" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-chart-3 rounded-full animate-ping" />
          </div>
        </div>
        <div className="absolute top-2/3 right-1/3">
          <div className="relative">
            <MapPin className="w-6 h-6 text-chart-5 animate-pulse" fill="currentColor" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-chart-5 rounded-full animate-ping" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {regions.map((region, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${region.color}`} />
              <span className="text-sm font-medium">{region.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">{region.aided.toLocaleString()} people</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ImpactMap;
