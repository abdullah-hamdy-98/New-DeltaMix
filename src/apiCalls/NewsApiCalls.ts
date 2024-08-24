import { News } from '@prisma/client';
import { DOMAIN } from '@/utils/constants';
import { SingleNews } from '@/utils/types';


// Get News based on page number
export async function getNews(pageNumber: string | undefined): Promise<News[]> {
    const response = await fetch(`${DOMAIN}/api/News?pageNumber=${pageNumber}`);

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    return response.json();

}


// Get count news
export async function getNewsCount(): Promise<number> {
    const response = await fetch(`${DOMAIN}/api/News/count`);

    if (!response.ok) {
        throw new Error("Failed to get news count");
    }

    const { count } = await response.json() as { count: number };
    return count
}

// Get News based on ID
export async function getSingleArticle(articleId: string): Promise<SingleNews> {
    const response = await fetch(`${DOMAIN}//api/News/${articleId}`, {
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error("Failed to fetch article");
    }

    return response.json();
}


// Get Last 3 news
export async function getHomeNews(): Promise<News[]> {
    const response = await fetch(`${DOMAIN}/api/News/lastnews`);

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    return response.json();

}