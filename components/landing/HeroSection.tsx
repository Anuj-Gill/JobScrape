"use client"
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HeroSection = () => {
  const rocketRef = useRef<HTMLDivElement>(null);
  const [rocketTransform, setRocketTransform] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRocketTransform({
        x: scrollY / 1,
        y: -scrollY / 1,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-6xl z-10 mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-500 bg-clip-text text-transparent">
          Your One-Stop Job Search Platform
        </h1>
        <p className="mt-6 text-gray-700 dark:text-gray-300 text-xl">
          Find all tech job opportunities in one place with our lightning-fast job aggregator.
          Powered by Cheerio for efficient real-time job scraping across multiple platforms.
        </p>
        <div className="mt-8 z-100 flex space-x-4">
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 text-white bg-emerald-600/90 dark:bg-emerald-600/80 backdrop-blur-sm rounded-lg hover:bg-emerald-700 transition-transform transform hover:scale-105 text-lg shadow-lg"
          >
            Search Jobs
          </button>
          <a href="https://excalidraw.com/#json=NPbECgTSTC5q6ngtMJ-Hl,C3ozSoIjmpqASVD-Tb_C3w">
          <button  className="px-8 py-3 text-emerald-700 dark:text-white border border-emerald-500/50 dark:border-teal-500/50 backdrop-blur-sm rounded-lg hover:bg-emerald-50 dark:hover:bg-teal-900/30 transition-transform transform hover:scale-105 text-lg shadow-lg">
          
            How It Works
          </button>
          </a>
        </div>
      </div>

      <div
        className="w-full lg:w-1/2 flex justify-center"
        ref={rocketRef}
        style={{
          transform: `translate(${rocketTransform.x}px, ${rocketTransform.y}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div className="relative w-80 h-48 lg:w-96 lg:h-72 mt-20 md:mt-0 animate-rock">
          <img
            src="/rocket.webp"
            alt="Job Search"
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;