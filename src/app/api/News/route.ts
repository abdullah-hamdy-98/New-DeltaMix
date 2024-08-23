import { NextRequest, NextResponse } from 'next/server'
import { createNewsSchema } from '@/utils/validationSchemas';
import { CreateNewsDto } from '@/utils/dtos';
import {  News } from '@prisma/client'
import prisma from '@/utils/db'


/**
 * @Method GET 
 * @route  ~/api/News
 * @desc   Get All News
 * @assess public
 */

export async function GET(request: NextRequest) {
    try {
        const allNews = await prisma.news.findMany();
        return NextResponse.json(allNews, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' }, { status: 500 }
        )
    }
}


/**
 * @Method POST 
 * @route  ~/api/News
 * @desc   Add News
 * @assess public
 */

export async function POST(request: NextRequest) {
    try {

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