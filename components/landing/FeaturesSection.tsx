"use client"
import React, { useEffect, useRef } from "react";
import { Filter, Globe, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const features = featuresRef.current?.querySelectorAll(".feature-card");
    features?.forEach((feature) => {
      feature.classList.add("opacity-0", "translate-y-10");
      observer.observe(feature);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 md:py-20" ref={featuresRef}>
      <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up text-gray-900 dark:text-white">
        Coming Soon Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Filter className="w-12 h-12 text-emerald-600 dark:text-emerald-500" />}
          title="Advanced Role Filters"
          description="Fine-tune your search with advanced filters for job roles, experience levels, and tech stack requirements. Coming soon!"
        />
        <FeatureCard
          icon={<Globe className="w-12 h-12 text-teal-600 dark:text-teal-500" />}
          title="Extended Platform Coverage"
          description="We're expanding our reach to more job platforms including StackOverflow, AngelList, and remote job boards. Stay tuned!"
        />
        <FeatureCard
          icon={<Zap className="w-12 h-12 text-emerald-600 dark:text-emerald-500" />}
          title="Real-time Notifications"
          description="Get instant alerts for new job postings matching your preferences. Set up custom alerts and never miss an opportunity!"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;