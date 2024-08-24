import { NextResponse } from 'next/server';
import { verifyTokenForPage } from '@/utils/verifyToken';
import { cookies } from 'next/headers';


export async function GET() {
    const token = cookies().get("jwtToken")?.value || "";
    const payload = verifyTokenForPage(token);

    return NextResponse.json({ payload });
}