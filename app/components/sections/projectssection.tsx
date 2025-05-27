"use client"
import React, { useState, useRef } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useLanguage } from "../LanguageProvider";
import { ChevronRight } from "lucide-react";

interface ProjectProps {
  title: string;
  category: string;
  image: string;
  tags: string[];
  description?: string;
  id?: string; // Keep id for key prop, but it's not used otherwise
}

const Project: React.FC<ProjectProps> = ({ title, category, image, tags, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl h-full shadow-md transition-all duration-300 hover:shadow-xl bg-card hover:-translate-y-1">
      {/* Project Image */}
      <div className="w-full h-72 md:h-64 bg-secondary overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs text-primary border-primary/30 font-medium">
              {category}
            </Badge>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-secondary/80 text-muted-foreground rounded">
                {tag}
              </span>
            ))}
          </div>
     
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const categories = ["All", "Web", "Mobile", "Branding", "UI/UX", "Business Cards"];
  
  // Enhanced projects data with IDs and descriptions
  const projects: Array<{ id: string; title: string; category: string; image: string; tags: string[]; description: string; }> = [
    {
      id: "ethiopian-airlines-redesign",
      title: "Ethiopian Airlines Booking Redesign",
      category: "UI/UX",
      image: "works/airline.jpg",
      tags: ["Figma", "User Research", "Prototyping"],
      description: "A complete redesign of the booking experience for Ethiopia's flagship carrier."
    },
    {
      id: "addis-coffee-brand",
      title: "Addis Ababa Coffee Brand Identity",
      category: "Branding",
      image: "works/coffe.jpg",
      tags: ["Logo Design", "Packaging", "Brand Strategy"],
      description: "Complete brand identity for premium Ethiopian coffee export brand."
    },
    {
      id: "nordic-ecommerce",
      title: "Nordic E-commerce Platform",
      category: "Web",
      image: "works/store.jpg",
      tags: ["React", "Next.js", "TailwindCSS"],
      description: "Modern e-commerce platform for Scandinavian fashion brands."
    },
    {
      id: "multilingual-news",
      title: "Markbook",
      category: "Web",
      image: "works/markbook.png",
      tags: ["Nextjs", "Mongodb", "TailwindCSS"],
      description: "Organize your Bookmarks"
    },
    {
      id: "annual-report",
      title: "Ethio Catring",
      category: "Business Cards",
      image: "/works/bussinescard.jpg",
      tags: [ "Print Design", "Infographics"],
      description: "A complete branding strategy for a premium catering  Brand"
    },


  ];
  
  // Calculate how many projects to show initially
  const initialProjectCount = 6;
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Determine which projects to display based on showAll flag
  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, initialProjectCount);
  
  // Handle view more button click
  const handleViewMore = () => {
    setShowAll(true);
  };
  
  // Create a map of categories with their project counts
  const categoryCountMap = categories.reduce((acc, category) => {
    if (category === "All") {
      acc[category] = projects.length;
    } else {
      acc[category] = projects.filter(project => project.category === category).length;
    }
    return acc;
  }, {} as Record<string, number>);
  

  
  return (
    <section id="portfolio" ref={sectionRef} className="pt-24 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 custom-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in">
          <Badge className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Work
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t("portfolio.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of work across Ethiopia, Sweden and beyond.
          </p>
        </div>
        
        {/* Categories Filter - Modern with counts */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 p-2 bg-secondary/30 backdrop-blur-sm rounded-full max-w-fit mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all flex items-center gap-1.5 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-transparent text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <span>{category}</span>
              <span className="text-xs opacity-70 bg-background/20 px-1.5 py-0.5 rounded-full">
                {categoryCountMap[category] || 0}
              </span>
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id || project.title}
              className="project-card opacity-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Project
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                tags={project.tags}
                description={project.description}
              />
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-muted-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">We don&apos;t have any projects in this category yet.</p>
          </div>
        )}
        
        {/* View All Projects Button - Only show if there are more projects to display */}
        {!showAll && filteredProjects.length > initialProjectCount && (
          <div className="text-center mt-12 fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={handleViewMore}
            >
              {t("portfolio.viewMore")}
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
        
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-background fill-current w-full h-auto">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
