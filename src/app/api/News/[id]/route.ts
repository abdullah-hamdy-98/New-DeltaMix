import { NextRequest, NextResponse } from 'next/server'
import { UpdateNewsDto } from '@/utils/dtos';
import prisma from '@/utils/db'
import { verifyToken } from '@/utils/verifyToken';


interface Props {
    params: { id: string }
}

/**
 * @method GET 
 * @route  ~/api/News/:ID
 * @desc   Get single news by ID
 * @access public
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
 * @method PUT 
 * @route  ~/api/News/:ID
 * @desc   Update single news by ID
 * @access private
 */

export async function PUT(request: NextRequest, { params }: Props) {
    try {
        const user = verifyToken(request);
        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: 'Only for admin, Access denied' },
                { status: 403 }
            )
        }

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
 * @method DELETE 
 * @route  ~/api/News/:ID
 * @desc   Get All News
 * @access private
 */

export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        const user = verifyToken(request);
        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: 'Only for admin, Access denied' },
                { status: 403 }
            )
        }

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

