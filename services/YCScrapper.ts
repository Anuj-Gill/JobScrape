import * as cheerio from 'cheerio';

export default async function scrapeYCJobs(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const jobs: any = [];
    $('.mb-1.flex.flex-col.flex-nowrap.items-center.justify-between.gap-y-2.md\\:flex-row.md\\:gap-y-0').each((i, element) => {
      const companyName = $(element).find('a.justify-start.leading-loose span.font-bold.md\\:inline').text().trim() || 'N/A';

      // Make companyLink absolute:
      const relativeCompanyLink = $(element).find('a.shrink-0.md\\:mr-5').attr('href') || 'N/A';
      const companyLink = relativeCompanyLink.startsWith('http') ? relativeCompanyLink : `https://www.ycombinator.com${relativeCompanyLink}`;

      // Make companyLogo absolute:
      const relativeCompanyLogo = $(element).find('a.shrink-0.md\\:mr-5 img').attr('src') || 'N/A';
      const companyLogo = relativeCompanyLogo.startsWith('http') ? relativeCompanyLogo : relativeCompanyLogo ? `https://www.ycombinator.com${relativeCompanyLogo}`: 'N/A';


      const jobTitle = $(element).find('div.flex-1.text-center.md\\:text-left div:nth-child(2) a').text().trim() || 'N/A';

      // Make jobLink absolute:
      const relativeJobLink = $(element).find('div.flex-1.text-center.md\\:text-left div:nth-child(2) a').attr('href') || 'N/A';
      const jobLink = relativeJobLink.startsWith('http') ? relativeJobLink : `https://www.ycombinator.com${relativeJobLink}`;

      const location = $(element).find('div.flex.flex-row.flex-wrap.justify-center.md\\:justify-start div:nth-child(2)').text().trim() || 'N/A';
      const jobType = $(element).find('div.flex.flex-row.flex-wrap.justify-center.md\\:justify-start div:nth-child(1)').text().trim() || 'N/A';

      jobs.push({ companyName, companyLink, companyLogo, jobTitle, jobLink, location, jobType });
    });

    return jobs; // Return the jobs array

  } catch (error) {
    console.error("Error scraping YC jobs:", error);
    return []; // Return an empty array in case of error
  }
}
