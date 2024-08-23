import { NextRequest, NextResponse } from 'next/server'
import { allNews } from '@/utils/data'
import { News } from '@/utils/types';
import { createNewsSchema } from '@/utils/validationSchemas';
import { CreateNewsDto } from '@/utils/dtos';


/**
 * @Method GET 
 * @route  ~/api/News
 * @desc   Get All News
 * @assess public
 */

export function GET(request: NextRequest) {
    return NextResponse.json(allNews, { status: 200 });
}


/**
 * @Method POST 
 * @route  ~/api/News
 * @desc   Add News
 * @assess public
 */

export async function POST(request: NextRequest) {
    const body = (await request.json()) as CreateNewsDto;

    const validation = createNewsSchema.safeParse(body)
    if (!validation.success){
        return NextResponse.json({message : validation.error.errors[0].message} , {status : 400})
    }

    const addNews: News = {
        id: allNews.length + 1,
        userid: 200,
        Title: body.Title,
        name: body.name
    }

    allNews.push(addNews);
    return NextResponse.json(addNews, { status: 201 });
}