
import React from "react";
import { Card } from "../ui/card";

interface StatProps {
  value: string;
  label: string;
  description: string;
  colorClass: string;
}

const Stat: React.FC<StatProps> = ({ value, label, description, colorClass }) => {
  return (
    <Card className="bg-secondary/50 border-muted/20 p-6 h-full hover:shadow-md transition-all duration-300">
      <div className={`text-3xl font-bold ${colorClass} mb-2`}>{value}</div>
      <div className="font-medium mb-2">{label}</div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "8+",
      label: "Years of Experience",
      description: "Delivering top-quality software solutions to clients worldwide.",
      colorClass: "text-[#078930]"
    },
    {
      value: "25+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries.",
      colorClass: "text-[#FCDD09]"
    },
    {
      value: "5+",
      label: "Team Members",
      description: "Expert developers, designers, and strategists.",
      colorClass: "text-[#DA121A]"
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "We prioritize client success and satisfaction.",
      colorClass: "text-[#078930]"
    },
  ];
  
  return (
    <section className="py-24 bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#078930]/5 via-[#FCDD09]/5 to-[#DA121A]/5 opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">By The Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record of excellence and commitment to delivering exceptional results
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <Stat
                value={stat.value}
                label={stat.label}
                description={stat.description}
                colorClass={stat.colorClass}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
