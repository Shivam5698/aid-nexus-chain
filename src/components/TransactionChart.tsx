import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", disbursed: 45000, pending: 12000 },
  { month: "Feb", disbursed: 52000, pending: 8000 },
  { month: "Mar", disbursed: 78000, pending: 15000 },
  { month: "Apr", disbursed: 91000, pending: 20000 },
  { month: "May", disbursed: 125000, pending: 18000 },
  { month: "Jun", disbursed: 142000, pending: 25000 },
];

const TransactionChart = () => {
  return (
    <Card className="card-glass p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Transaction History</h3>
          <p className="text-sm text-muted-foreground">Monthly aid distribution trends</p>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span>Disbursed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span>Pending</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="month" 
            stroke="rgba(255,255,255,0.6)" 
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.6)" 
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "#1a1a2e",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fff"
            }}
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
          />
          <Bar dataKey="disbursed" fill="#10b981" radius={[8, 8, 0, 0]} />
          <Bar dataKey="pending" fill="#f59e0b" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TransactionChart;
