import React from "react";
import { WavyBackground } from "../ui/wavy-background";

const WavySection = () => {
  return (
    <div className="pt-20">
      <WavyBackground className="max-w-6xl mx-auto py-28 md:py-56">
        {/* Text remains white as it's on the wavy background */}
        <p className="text-2xl md:text-4xl lg:text-6xl text-black dark:text-white font-bold text-center">
          Simplifying Your Job Search Journey
        </p>
        <p className="text-base md:text-lg mt-4 text-black dark:text-white/90 font-normal text-center">
          Aggregating opportunities from multiple platforms using high-performance web scraping
        </p>
      </WavyBackground>
    </div>
  );
};

export default WavySection;