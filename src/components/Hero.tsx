import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            <span>Master Your Digital Ecosystem</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
            Build, Deploy & Manage
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Apps Like a Pro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            The ultimate platform to create, monitor, and scale your applications with unprecedented control and simplicity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="gap-2 text-lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
