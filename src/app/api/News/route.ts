import { NextRequest, NextResponse } from 'next/server'
import { createNewsSchema } from '@/utils/validationSchemas';
import { CreateNewsDto } from '@/utils/dtos';
import { News } from '@prisma/client'
import { newsPerPage } from '@/utils/constants';
import prisma from '@/utils/db'
import { verifyToken } from '@/utils/verifyToken';


/**
 * @method GET 
 * @route  ~/api/News
 * @desc   Get News by page number
 * @access public
 */

export async function GET(request: NextRequest) {
    try {
        const pageNumber = request.nextUrl.searchParams.get("pageNumber") || "1";
        const allNews = await prisma.news.findMany({
            skip: newsPerPage * (parseInt(pageNumber) - 1),
            take: newsPerPage,
            orderBy: { EntryDate: 'desc' }
        });
        return NextResponse.json(allNews, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' }, { status: 500 }
        )
    }
}


/**
 * @method POST 
 * @route  ~/api/News
 * @desc   Add News
 * @access private
 */

export async function POST(request: NextRequest) {
    try {
        const user = verifyToken(request);
        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: 'Only for admin, Access denied' },
                { status: 403 }
            )
        }
        const body = (await request.json()) as CreateNewsDto;

        const validation = createNewsSchema.safeParse(body)
        if (!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 })
        }

        const addNews: News = await prisma.news.create({
            data: {
                Title: body.Title,
                Dscr: body.Dscr,
                Img: body.Img,
                AuthorId: 200
            }
        });

        return NextResponse.json(addNews, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' }, { status: 500 }
        )
    }
}