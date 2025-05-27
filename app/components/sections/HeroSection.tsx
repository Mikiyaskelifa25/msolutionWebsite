"use client"
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { useLanguage } from "../LanguageProvider";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollPercentage = Math.min(scrollPosition / heroHeight, 1);
      
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translateY(${scrollPercentage * 150}px)`;
      }
      
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translateY(${scrollPercentage * 50}px)`;
      }
      
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translateY(${scrollPercentage * -100}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize animations
    const animElements = document.querySelectorAll('.appear-animation');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animElements.forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      animElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="home" ref={heroRef} className="relative min-h-[100vh] pt-32 pb-24 overflow-hidden custom-grid">
      <div className="absolute inset-0 pointer-events-none">
        {/* Ethiopian flag inspired background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#078930] via-[#FCDD09] to-[#DA121A] opacity-20"></div>
        
        {/* Parallax background elements */}
        <div ref={layer1Ref} className="absolute -left-20 top-1/4 w-64 h-64 bg-[#078930]/20 rounded-full blur-3xl"></div>
        <div ref={layer2Ref} className="absolute bottom-1/2 -right-32 w-96 h-96 bg-[#FCDD09]/20 rounded-full blur-3xl"></div>
        <div ref={layer3Ref} className="absolute top-3/4 left-1/2 w-64 h-64 bg-[#DA121A]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="max-w-3xl lg:pr-8 appear-animation from-left" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#078930]/15 border border-[#078930]/30 text-[#078930] dark:text-[#5dbd7c] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#078930]"></span>
              <span className="text-sm font-medium">Ethiopia & Sweden</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#078930] via-[#FCDD09] to-[#DA121A]">{t('hero.title')}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#078930] hover:bg-[#067529] text-white"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.cta')}
              </Button>
            </div>
            
            {/* Countries */}
            <div className="mt-12">
              <div className="flex flex-wrap gap-8 items-center">
                <div className="relative h-12 w-28">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0051ff] via-[#004ceb] to-[#ffcd00] opacity-20 blur-md rounded-md"></div>
                  <div className="relative h-full w-full flex items-center justify-center font-medium">
                    Sweden
                  </div>
                </div>
                <div className="relative h-12 w-28">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#078930] via-[#FCDD09] to-[#DA121A] opacity-20 blur-md rounded-md"></div>
                  <div className="relative h-full w-full flex items-center justify-center font-medium">
                    Ethiopia
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="appear-animation from-right" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* 3D perspective container */}
              <div className="relative perspective-[1000px] w-full max-w-lg mx-auto">
                {/* Main card */}
                <div className="w-full aspect-square bg-gradient-to-br from-[#078930]/20 via-[#FCDD09]/20 to-[#DA121A]/20 rounded-2xl p-8 shadow-xl transform rotate-y-[-10deg] rotate-x-[10deg] backface-hidden transition-transform duration-300 hover:rotate-y-[0deg] hover:rotate-x-[0deg]">
                  <div className="relative h-full w-full bg-secondary/80 rounded-lg overflow-hidden backdrop-blur-sm flex flex-col">
                    <div className="absolute inset-0 custom-grid"></div>
                    
                    {/* Card header */}
                    <div className="p-4 border-b border-muted/10 flex items-center">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-[#DA121A]/70 rounded-full"></div>
                        <div className="w-3 h-3 bg-[#FCDD09]/70 rounded-full"></div>
                        <div className="w-3 h-3 bg-[#078930]/70 rounded-full"></div>
                      </div>
                      <div className="mx-auto text-sm font-mono opacity-60">MSolutions Design</div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="flex-1 p-6 flex flex-col justify-center items-center">
                      {/* Creative design elements */}
                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="aspect-square rounded-md bg-[#078930]/20 animate-float flex items-center justify-center">
                          <span className="font-mono text-xl text-[#078930] dark:text-[#5dbd7c]">UI</span>
                        </div>
                        <div className="aspect-square rounded-md bg-[#FCDD09]/20 animate-float" style={{animationDelay: '1s'}}>
                          <div className="h-full flex items-center justify-center">
                            <span className="font-mono text-xl text-[#FCDD09] dark:text-[#FCDD09]">UX</span>
                          </div>
                        </div>
                        <div className="aspect-square rounded-md bg-muted flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-muted-foreground">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                          </svg>
                        </div>
                        <div className="aspect-square rounded-md bg-[#DA121A]/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-[#DA121A] dark:text-[#e56c74]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-20 right-6 w-14 h-14 bg-[#078930]/20 backdrop-blur-sm rounded animate-float hidden sm:block"></div>
                    <div className="absolute bottom-16 left-10 w-10 h-10 bg-[#FCDD09]/20 backdrop-blur-sm rounded-lg animate-float hidden sm:block" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
                
                {/* Shadow effect */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-[#DA121A]/10 filter blur-xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}

      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="none" className="text-background">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 50L60 58.3C120 66.7 240 83.3 360 83.3C480 83.3 600 66.7 720 54.2C840 41.7 960 33.3 1080 37.5C1200 41.7 1320 58.3 1380 66.7L1440 75V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
