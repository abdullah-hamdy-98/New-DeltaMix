import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';

/**
 *  @method  GET
 *  @route   ~/api/articles/top
 *  @desc    Get Top 3 Articles
 *  @access  public
 */
export async function GET(request: NextRequest) {
    try {
        const topArticles = await prisma.news.findMany({
            orderBy: {
                EntryDate: 'desc', // Ordering by EntryDate, modify this if you want a different order
            },
            take: 3, // Limit the results to the top 3 articles
        });

        return NextResponse.json(topArticles, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: 'internal server error' },
            { status: 500 }
        );
    }
}
