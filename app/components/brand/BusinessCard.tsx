import React from "react";

import Image from "next/image";

const BusinessCard = () => {
  return (
    <div className="relative w-full max-w-md mx-auto group" style={{ perspective: '1000px' }}>
      <div 
        className="relative w-full aspect-[1.618/1] transform-gpu transition-all duration-700 hover:rotate-y-180" 
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Business Card - Front */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl p-8 shadow-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600" 
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-full flex flex-col justify-between relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            
            {/* Logo and Pattern */}
            <div className="relative z-10">
            <Image src="/logo.png" width={60} height={60} alt="Msolutions Logo" className="rounded-sm"/>
          
            </div>
            
            {/* Personal Info */}
            <div className="relative z-10 space-y-2">
              <h3 className="text-white text-2xl font-semibold tracking-wide">Mikiyas Fekadu</h3>
              <div className="flex flex-col gap-1">
                <p className="text-white/90 font-medium">Creative Director</p>
                <p className="text-white/70 text-sm">MSolutions Digital Agency</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Business Card - Back */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl p-8 shadow-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-sm" 
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full flex flex-col justify-between relative">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary/80 text-xs font-medium uppercase tracking-wider">Contact</p>
                <div className="space-y-1.5">
                  <p className="text-sm font-medium flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    </span>
                    Officialmarkon@gmail.com
                  </p>
                  <p className="text-lg font-semibold flex items-center gap-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transform hover:scale-105 transition-transform">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                    </span>
                    +46737145605
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-primary/80 text-xs font-medium uppercase tracking-wider">Locations</p>
                <div className="space-y-1.5">
                  <p className="text-sm font-medium flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    </span>
                    Stockholm, Sweden
                  </p>
                  <p className="text-sm font-medium flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    </span>
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-between items-center pt-6 border-t border-primary/10">
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                  <div key={platform} 
                    className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group/icon"
                  >
                    <span className="text-xs font-medium text-primary group-hover/icon:scale-110 transition-transform">
                      {platform[0]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-primary/60 font-medium">
                msolutions.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
