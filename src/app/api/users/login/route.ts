import { LoginUserDto } from '@/utils/dtos';
import { loginSchema } from '@/utils/validationSchemas';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';
import { setCookie } from '@/utils/genrateToken'

/**
 * @method POST 
 * @route  ~/api/users/login
 * @desc   Login - Sign in
 * @access public
 */

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as LoginUserDto;
        const validation = loginSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            );
        }

        const user = await prisma.users.findUnique({ where: { UserId: body.UserId } });

        if (!user) {
            return NextResponse.json(
                { message: 'User not found' },
                { status: 400 }
            );
        }

        const isPasswordValid = body.Pwd === user.Pwd;

        if (!isPasswordValid) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 400 }
            );
        }

        const cookie = setCookie({
            id: user.UserId,
            username: user.UserName,
            isAdmin: user.IsAdmin,
        });

        return NextResponse.json(
            { message: 'Login successful' },
            {
                status: 200,
                headers: { "Set-cookie": cookie }
            }
        );

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' }, { status: 500 }
        );
    }
}
