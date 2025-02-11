"use client"
import { JobData } from '@/types/jobs';
import { JobCard } from '@/components/JobCard';
import { JSX } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

async function fetchJobs(): Promise<JobData> {
  const response = await axios.get("http://localhost:3000/api/jobs");
  return response?.data;
}

export default function Home(): JSX.Element {
  const [data, setData] = useState<JobData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const jobData = await fetchJobs();
        setData(jobData);
        if (jobData.ycJobs.length === 0 && jobData.internshalaJobs.length === 0) {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    loadJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Simple animated loading dots */}
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Searching for your dream job...
          </p>
        </div>
      </div>
    );
  }

  if (error || (data?.ycJobs.length === 0 && data?.internshalaJobs.length === 0)) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="text-6xl mb-4">🏖️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Looks Like Everyone's On Vacation!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our job-finding hamsters are currently sipping piña coladas on a beach somewhere. 
            Please check back when they return from their tropical getaway!
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Wake Up The Hamsters
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen mt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Find Your Next Opportunity
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Curated jobs from YC startups and Internshala
          </p>
        </div>

        {/* Filters Coming Soon Note */}
        <div className="text-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-lg mb-6">
          🚀 Filters option coming soon!
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.ycJobs.map((job, index) => (
            <JobCard key={`yc-${index}`} job={job} source="yc" />
          ))}
          {data?.internshalaJobs.map((job, index) => (
            <JobCard key={`internshala-${index}`} job={job} source="internshala" />
          ))}
        </div>
      </div>
    </main>
  );
}