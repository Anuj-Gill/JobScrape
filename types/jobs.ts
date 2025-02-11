export interface YCJob {
    companyName: string;
    companyLink: string;
    companyLogo: string;
    jobTitle: string;
    jobLink: string;
    location: string;
    jobType: string;
  }
  
  export interface InternshalaJob {
    title: string;
    company: string;
    companyLogo: string;
    location: string;
    stipend: string;
    duration: string;
    link: string;
  }
  
  export interface JobData {
    ycJobs: YCJob[];
    internshalaJobs: InternshalaJob[];
  }