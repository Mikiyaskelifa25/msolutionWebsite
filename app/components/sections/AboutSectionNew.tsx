"use client"
import React, { useRef, useEffect } from "react";
import { useLanguage } from "../LanguageProvider";
import BusinessCard from "../brand/BusinessCard";



const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Color palette for brand identity
  const colorPalette = [
    { name: "Teal", hex: "#00B8D4", rgb: "0, 184, 212" },
    { name: "Purple", hex: "#8A3FFC", rgb: "138, 63, 252" },
    { name: "Dark Slate", hex: "#1E293B", rgb: "30, 41, 59" },
    { name: "Light Gray", hex: "#F1F5F9", rgb: "241, 245, 249" },
    { name: "Accent", hex: "#FB7185", rgb: "251, 113, 133" },
  ];

  // Animation with Intersection Observer instead of framer-motion
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 bg-background relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{animationDelay: "1.5s"}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-purple-500/5 to-transparent opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* About Content */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {t("about.title")}
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
            </div>
            
            <p 
              className="text-xl leading-relaxed animate-on-scroll">
              {t("about.description")}
            </p>
            
            <p 
              className="text-muted-foreground text-lg animate-on-scroll">
              Founded in 2023, MSolutions bridges the gap between East Africa and Scandinavia, bringing unique cultural perspectives to each project. We work with clients ranging from startups to established businesses, helping them build their digital presence with impactful design and technology solutions.
            </p>
            
            {/* Brand Identity Showcase */}
            <div className="mt-16 p-8 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-muted/20 shadow-lg animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6">Our Brand Identity</h3>
              
              {/* Color Palette */}
              <div className="mb-10">
                <h4 className="text-sm uppercase text-muted-foreground tracking-wider mb-4 font-medium">Color Palette</h4>
                <div className="flex flex-wrap gap-6">
                  {colorPalette.map((color, index) => (
                    <div 
                      key={color.name} 
                      className="flex flex-col items-center group animate-on-scroll"
                      style={{ animationDelay: `${index * 100}ms` }}>
                      <div 
                        className="w-16 h-16 rounded-2xl mb-3 shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" 
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <span className="text-sm font-medium">{color.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{color.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Typography */}
              <div className="mb-6">
                <h4 className="text-sm uppercase text-muted-foreground tracking-wider mb-4 font-medium">Typography</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-background/50 border border-muted/10">
                    <span className="text-xs text-muted-foreground block mb-2">Heading Font</span>
                    <span className="font-display text-2xl">Outfit</span>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-muted/10">
                    <span className="text-xs text-muted-foreground block mb-2">Body Font</span>
                    <span className="font-sans text-lg">Inter</span>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-muted/10">
                    <span className="text-xs text-muted-foreground block mb-2">Monospace</span>
                    <span className="font-mono">JetBrains Mono</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Business Card Showcase */}
          <div className="relative animate-on-scroll">
            <div className="relative perspective-[1200px] p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">Our Business Card Design</h3>
              
              <div className="mb-12 shadow-2xl rounded-2xl overflow-hidden transform-gpu animate-card-rock">
                <BusinessCard />
              </div>
              
              {/* Design Elements Description */}
              <div className="mt-12 bg-gradient-to-br from-background/80 to-secondary/50 p-8 rounded-2xl border border-muted/30 shadow-lg backdrop-blur-sm animate-on-scroll">
                <h4 className="font-medium text-lg mb-4">Design Elements</h4>
                <ul className="space-y-4">
                  {[
                    "Gradient color scheme representing our dual heritage and creative approach",
                    "Clean, modern typography with ample whitespace for readability",
                    "Interactive flip animation for digital versions, showcasing our technical capabilities",
                    "Contact information in both English and local languages"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 animate-on-scroll"
                      style={{ animationDelay: `${index * 150}ms` }}>
                      <span className="text-primary text-lg">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
