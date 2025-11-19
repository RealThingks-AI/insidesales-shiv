import { AppCard } from "./AppCard";
import { Button } from "@/components/ui/button";
import { Plus, Smartphone, Globe, Database, ShoppingCart, MessageSquare, BarChart } from "lucide-react";

const apps = [
  {
    name: "Mobile App",
    description: "iOS and Android native application",
    status: "active" as const,
    icon: Smartphone,
    users: "12.5K",
    requests: "1.2M/day",
  },
  {
    name: "Web Platform",
    description: "Main customer-facing website",
    status: "active" as const,
    icon: Globe,
    users: "45K",
    requests: "5.8M/day",
  },
  {
    name: "Analytics API",
    description: "Real-time data processing service",
    status: "building" as const,
    icon: BarChart,
    users: "8.2K",
    requests: "850K/day",
  },
  {
    name: "Database Service",
    description: "Managed database infrastructure",
    status: "active" as const,
    icon: Database,
    users: "25K",
    requests: "3.2M/day",
  },
  {
    name: "E-commerce Store",
    description: "Online shopping platform",
    status: "active" as const,
    icon: ShoppingCart,
    users: "18K",
    requests: "2.1M/day",
  },
  {
    name: "Chat Service",
    description: "Real-time messaging platform",
    status: "paused" as const,
    icon: MessageSquare,
    users: "6.5K",
    requests: "420K/day",
  },
];

export const AppDashboard = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Your Applications</h2>
            <p className="text-muted-foreground">Manage and monitor all your apps in one place</p>
          </div>
          <Button size="lg" className="gap-2">
            <Plus className="w-5 h-5" />
            New App
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
};
