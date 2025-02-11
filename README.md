# JobScrape

🚀 **JobScrape** is a web app that scrapes job & internship opportunities from YC and Internshala (more platforms coming soon!). Built with **Next.js, TypeScript, TailwindCSS, Redis, and Aceternity UI** for speed and efficiency.

## Features
- **Scrapes jobs & internships** from multiple sources
- **Super fast** thanks to Redis caching
- **Minimal UI** with Tailwind & Aceternity UI
- **More features coming soon** (Filters, more job platforms, etc.)

## Tech Stack
- **Frontend:** Next.js (TypeScript, TailwindCSS, Aceternity UI)
- **Backend:** API routes in Next.js
- **Database:** Redis (Upstash)
- **Scraping:** Cheerio (lightweight HTML parser)

## Setup & Installation

### 1. Clone the repository
```sh
git clone https://github.com/Anuj-Gill/JobScrape.git
cd JobScrape
```

### 2. Install dependencies
```sh
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and add the following:
```
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
NEXT_PUBLIC_API_URL=
```

### 4. Run the project
```sh
npm run dev
```
Your project should now be running at `http://localhost:3000` 🚀

## Contributing
Contributions are welcome! If you want to improve this project, feel free to open an issue or submit a PR.

## Star the Repo ⭐
If you find this useful, a **GitHub star** would be much appreciated!

## License
This project is licensed under the MIT License.

---
Happy coding! 🚀

