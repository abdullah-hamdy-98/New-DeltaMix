import { NextRequest, NextResponse } from 'next/server'
import { allNews } from '@/utils/data';
import { UpdateNewsDto } from '@/utils/dtos';



interface Props {
    params: { id: string }
}

/**
 * @Method GET 
 * @route  ~/api/News/:ID
 * @desc   Get All News
 * @assess public
 */

export function GET(request: NextRequest, { params }: Props) {
    const news = allNews.find(a => a.id === parseInt(params.id));
    if (!news) {
        return NextResponse.json({ message: 'No news to show' }, { status: 404 })
    }

    return NextResponse.json(news, { status: 200 });
}

/**
 * @Method PUT 
 * @route  ~/api/News/:ID
 * @desc   Get All News
 * @assess public
 */

export async function PUT(request: NextRequest, { params }: Props) {
    const news = allNews.find(a => a.id === parseInt(params.id));
    if (!news) {
        return NextResponse.json({ message: 'No news to show' }, { status: 404 });
    }

    const body = (await request.json()) as UpdateNewsDto;
    console.log(body);

    return NextResponse.json({ message: 'News Updated' }, { status: 200 });
}

/**
 * @Method DELETE 
 * @route  ~/api/News/:ID
 * @desc   Get All News
 * @assess public
 */

export async function DELETE(request: NextRequest, { params }: Props) {
    const news = allNews.find(a => a.id === parseInt(params.id));
    if (!news) {
        return NextResponse.json({ message: 'No news to show' }, { status: 404 });
    }

    return NextResponse.json({ message: 'News Deleted' }, { status: 200 });
}

