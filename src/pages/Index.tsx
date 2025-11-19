import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { AppDashboard } from "@/components/AppDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <AppDashboard />
    </div>
  );
};

export default Index;
