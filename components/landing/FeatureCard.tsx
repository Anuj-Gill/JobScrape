"use client"
import React from "react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="feature-card p-8 rounded-2xl 
    bg-white/80 dark:bg-gray-900/40 
    backdrop-blur-sm 
    hover:bg-white/90 dark:hover:bg-gray-900/60 
    transition-transform transform hover:scale-105 
    shadow-lg 
    border border-emerald-100/50 dark:border-gray-800">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </div>
);

export default FeatureCard;