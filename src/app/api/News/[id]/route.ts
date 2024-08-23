import { NextRequest, NextResponse } from 'next/server'
import { UpdateNewsDto } from '@/utils/dtos';
import prisma from '@/utils/db'


interface Props {
    params: { id: string }
}

/**
 * @Method GET 
 * @route  ~/api/News/:ID
 * @desc   Get All News
 * @assess public
 */

export async function GET(request: NextRequest, { params }: Props) {
    try {
        const news = await prisma.news.findUnique({ where: { Id: parseInt(params.id) } });
        if (!news) {
            return NextResponse.json({ message: 'No news to show' }, { status: 404 })
        }

        return NextResponse.json(news, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' }, { status: 500 }
        )
    }
}

/**
 * @Method PUT 
 * @route  ~/api/News/:ID
 * @desc   Get All News
 * @assess public
 */

export async function PUT(request: NextRequest, { params }: Props) {
    try {
        const news = await prisma.news.findUnique({ where: { Id: parseInt(params.id) } });
        if (!news) {
            return NextResponse.json({ message: 'No news to show' }, { status: 404 });
        }

        const body = (await request.json()) as UpdateNewsDto;
        const updatedNews = await prisma.news.update({
            where: { Id: parseInt(params.id) },
            data: {
                Title: body.Title,
                Dscr: body.Dscr,
                Img: body.Img,
                AuthorId: 200
            }
        })

        return NextResponse.json(updatedNews, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' }, { status: 500 }
        )
    }
}

/**
 * @Method DELETE 
 * @route  ~/api/News/:ID
 * @desc   Get All News
 * @assess public
 */

export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        const news = await prisma.news.findUnique({ where: { Id: parseInt(params.id) } });
        if (!news) {
            return NextResponse.json({ message: 'No news to Delete' }, { status: 404 });
        }

        await prisma.news.delete({
            where: { Id: parseInt(params.id) }
        });

        return NextResponse.json({ message: 'News Deleted' }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' }, { status: 500 }
        )
    }
}

