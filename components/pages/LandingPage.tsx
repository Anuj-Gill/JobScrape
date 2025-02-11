"use client"
import React from "react";

import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WavySection from "@/components/landing/WavyBackground";

const LandingPage2 = () => {
  return (
    <div className="min-h-screen mt-8">
        <div className="flex flex-col">
          <div>
            <div className="absolute z-0 inset-0 overflow-hidden animate-gradient-move">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/30 rounded-full filter blur-3xl animate-gradient-move" />
              <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-emerald-400/20 rounded-full filter blur-3xl animate-gradient-move delay-4000" />
            </div>
            
            <HeroSection />
            <FeaturesSection />
          </div>
          <WavySection />
        </div>
    </div>
  );
};

export default LandingPage2;