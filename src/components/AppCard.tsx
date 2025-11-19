import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MoreVertical } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface AppCardProps {
  name: string;
  description: string;
  status: "active" | "paused" | "building";
  icon: LucideIcon;
  users: string;
  requests: string;
}

export const AppCard = ({ name, description, status, icon: Icon, users, requests }: AppCardProps) => {
  const statusColors = {
    active: "bg-accent/10 text-accent border-accent/20",
    paused: "bg-muted text-muted-foreground border-border",
    building: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <div className="group p-6 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gradient-hero rounded-xl">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          <Badge className={statusColors[status]} variant="outline">
            {status}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="flex items-center gap-6 pt-4 text-sm">
          <div>
            <span className="text-muted-foreground">Users: </span>
            <span className="font-semibold text-foreground">{users}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Requests: </span>
            <span className="font-semibold text-foreground">{requests}</span>
          </div>
        </div>
        
        <Button variant="outline" className="w-full mt-4 gap-2">
          View Details
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
