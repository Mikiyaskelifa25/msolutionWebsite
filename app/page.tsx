"use client"
import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";

import ProjectsSection from "./components/sections/projectssection";
import TeamSection from "./components/sections/TeamSection";
import StatsSection from "./components/sections/StatsSection";
import TestimonialsModern from "./components/sections/TestimonialsModern";
import ContactSection from "./components/sections/ContactModern";
import Footer from "./components/layout/Footer";
import AboutSection from "./components/sections/AboutSectionNew";
// Simplified to avoid framer-motion issues
import { motion, useScroll, useSpring } from "framer-motion";

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Elements - Enhanced with animated elements */}
      <div className="fixed inset-0 main-gradient z-0" />
      <div className="fixed inset-0 glow-effect z-0" />
      <div className="fixed inset-0 grid-background z-0" />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
          style={{ top: '15%', left: '10%' }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
          style={{ bottom: '10%', right: '5%' }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-orange-500/5 blur-3xl"
          style={{ top: '40%', right: '20%' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Loading Screen */}
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="relative h-20 w-20"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear"
                },
                scale: {
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="absolute inset-0 rounded-full border-t-2 border-primary opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gradient text-2xl font-bold">M</span>
              </div>
            </motion.div>
            <motion.p 
              className="mt-4 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Loading amazing content...
            </motion.p>
          </div>
        </motion.div>
      )}
      
      {/* Progress Bar - Fixed to properly track scroll */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ 
          scaleX,
          originX: 0 
        }}
      />
      
      {/* Main Content - Fixed overflow issues */}
      <div className="relative z-10 w-full">
        <Navbar />
        <main className=" pb-24 w-full max-w-full">
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <AboutSection />
          <StatsSection />
          <TeamSection />
          <TestimonialsModern />
          <ContactSection />
        </main>
        <Footer />
      </div>
      
      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.05 ? 1 : 0,
          y: scrollYProgress.get() > 0.05 ? 0 : 20 
        }}
        transition={{ duration: 0.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default Index;