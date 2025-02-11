import { YCJob, InternshalaJob } from '@/types/jobs';
import { JSX } from 'react';

interface JobCardProps {
  job: YCJob | InternshalaJob;
  source: 'yc' | 'internshala';
}

export function JobCard({ job, source }: JobCardProps): JSX.Element {
    return (
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <img 
                src={job.companyLogo} 
                alt={source === 'yc' ? (job as YCJob).companyName : (job as InternshalaJob).company}
                className="w-12 h-12 rounded-lg object-contain bg-gray-100 dark:bg-gray-700"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {source === 'yc' ? (job as YCJob).jobTitle : (job as InternshalaJob).title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {source === 'yc' ? (job as YCJob).companyName : (job as InternshalaJob).company}
                </p>
                
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                    {job.location}
                  </span>
                  {source === 'yc' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {(job as YCJob).jobType}
                    </span>
                  )}
                  {source === 'internshala' && (
                    <>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                        {(job as InternshalaJob).stipend}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {(job as InternshalaJob).duration}
                      </span>
                    </>
                  )}
                </div>
                
                <a 
                  href={source === 'yc' ? (job as YCJob).jobLink : (job as InternshalaJob).link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                  View Position
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}