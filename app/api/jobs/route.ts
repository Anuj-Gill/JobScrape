import { NextRequest, NextResponse } from "next/server";
import scrapeYCJobs from "@/services/YCScrapper";
import scrapeInternshala from "@/services/IntershalaScrapper";
import { Redis } from "@upstash/redis";

// Upstash connection details (from your Upstash console)
const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

// Create the Redis client
const redis = new Redis({
    url: redisUrl,
    token: redisToken,
});

// Function to generate cache key
const getCacheKey = (source: string, filters = {}) => {
    let keyParts = [source];
    if (Object.keys(filters).length > 0) {
        const filterString = Object.entries(filters)
            .map(([key, value]) => `${key}:${value}`)
            .join('&');
        keyParts.push(filterString);
    }
    return keyParts.join(':');
};

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    // Correct way to get query parameters (using reduce)
    const filters = Array.from(searchParams.entries()).reduce((acc, [key, value]) => {
        //@ts-ignore
        acc[key] = value;
        return acc;
    }, {});

    try {
        // YC Jobs
        const ycCacheKey = getCacheKey("yc", filters);
        console.log(`Checking Redis for YC Jobs: ${ycCacheKey}`);

        const cachedYcJobs = await redis.get(ycCacheKey);
        let ycJobs;

        if (cachedYcJobs) {
            console.log("YC Jobs cache hit!", cachedYcJobs);
            try {
                if (cachedYcJobs !== null && cachedYcJobs !== undefined) {
                    ycJobs = cachedYcJobs;
                } else {
                    console.error("Cached YC Jobs data is null or undefined.");
                    ycJobs = null; // Or handle the error as needed
                }
            } catch (parseError) {
                console.error("Error parsing cached YC Jobs:", parseError);
                ycJobs = null; // Or handle as needed (e.g., refetch)
            }
        } else {
            console.log("YC Jobs cache miss. Scraping...");
            ycJobs = await scrapeYCJobs("https://www.ycombinator.com/jobs");
            if (ycJobs) {
                console.log("YC Jobs scraping successful. Setting cache...");
                await redis.set(ycCacheKey, JSON.stringify(ycJobs), { ex: 3600 });
                console.log("YC Jobs cache set.");
            } else {
                console.log("YC Jobs scraping failed.");
            }
        }

        // Internshala Jobs
        const internshalaCacheKey = getCacheKey("internshala", filters);
        console.log(`Checking Redis for Internshala Jobs: ${internshalaCacheKey}`);

        const cachedInternshalaJobs = await redis.get(internshalaCacheKey);
        let internshalaJobs;

        if (cachedInternshalaJobs) {
            console.log("Internshala Jobs cache hit!");
            try {
                if (cachedInternshalaJobs !== null && cachedInternshalaJobs !== undefined) {
                    internshalaJobs = cachedInternshalaJobs;
                } else {
                    console.error("Cached Internshala Jobs data is null or undefined.");
                    internshalaJobs = null;
                }
            } catch (parseError) {
                console.error("Error parsing cached Internshala Jobs:", parseError);
                internshalaJobs = null;
            }
        } else {
            console.log("Internshala Jobs cache miss. Scraping...");
            internshalaJobs = await scrapeInternshala("https://www.internshala.com/jobs/");
            if (internshalaJobs) {
                console.log("Internshala Jobs scraping successful. Setting cache...");
                await redis.set(internshalaCacheKey, JSON.stringify(internshalaJobs), { ex: 3600 });
                console.log("Internshala Jobs cache set.");
            } else {
                console.log("Internshala Jobs scraping failed.");
            }
        }

        return NextResponse.json({ ycJobs, internshalaJobs });

    } catch (error) {
        console.error("Error in API route:", error);
        return new NextResponse("Error fetching jobs", { status: 500 });
    }
}