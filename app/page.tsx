import { JobData } from '@/types/jobs';
import { JobCard } from '@/components/JobCard';
import { ThemeToggle } from '@/components/ThemeToggle';
import { JSX } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';

async function fetchJobs(): Promise<JobData> {
  const response = await axios.get("http://localhost:3000/api/jobs");
  return response?.data;
}

export default async function Home(): Promise<JSX.Element> {
  const data = await fetchJobs();

  return (
    <>
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
            {data.ycJobs.map((job, index) => (
              <JobCard key={`yc-${index}`} job={job} source="yc" />
            ))}
            {data.internshalaJobs.map((job, index) => (
              <JobCard key={`internshala-${index}`} job={job} source="internshala" />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
