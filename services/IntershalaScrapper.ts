import * as cheerio from 'cheerio';
export default async function scrapeInternshala(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const internships: any = [];
    $('.individual_internship').each((i, element) => {
      const title = $(element).find('.job-internship-name a').text().trim() || 'N/A';
      const company = $(element).find('.internship-heading-container .company-name').text().trim() || 'N/A';

      // Make logo URL absolute:
      const relativeLogo = $(element).find('.internship_logo img').attr('src') || 'N/A';
      const companyLogo = relativeLogo.startsWith('http') ? relativeLogo : `https://www.internshala.com${relativeLogo}`; // Add base URL


      const location = $(element).find('.locations span:not([style*="vertical-align"])').text().trim() || 'N/A';
      const stipend = $(element).find('.desktop').text().trim() || $(element).find('.mobile').text().trim().replace('/year','') || 'N/A';
      const duration = $(element).find('.row-1-item:nth-child(2) span').text().trim() || 'N/A';

      // Make job link absolute:
      const relativeLink = $(element).find('.job-internship-name a').attr('href') || 'N/A';
      const link = relativeLink.startsWith('http') ? relativeLink : `https://www.internshala.com${relativeLink}`;  // Add base URL


      internships.push({ title, company, companyLogo, location, stipend, duration, link });
    });

    return internships;

  } catch (error) {
    console.error("Error scraping Internshala:", error);
    return [];
  }
}
