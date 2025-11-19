import { TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime",
    description: "Rock-solid reliability",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Developers",
    description: "Trust our platform",
  },
  {
    icon: TrendingUp,
    value: "2M+",
    label: "Apps Deployed",
    description: "And counting",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 bg-gradient-hero rounded-xl">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-lg font-semibold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
