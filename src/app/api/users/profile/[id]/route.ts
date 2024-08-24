import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/utils/db';
import { verifyToken } from '@/utils/verifyToken';
import { UpdateUserDto } from '@/utils/dtos';
import { updateUserSchema } from '@/utils/validationSchemas';

interface Props {
    params: { id: string }
}

/**
 * @method DELETE 
 * @route  ~/api/users/profile/:id
 * @desc   Delete user by himeself
 * @access private
 */

export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        const user = await prisma.users.findUnique({ where: { UserId: parseInt(params.id) } });
        if (!user) {
            return NextResponse.json(
                { message: 'User Not Found' },
                { status: 404 }
            )
        }

        const userFromToken = verifyToken(request)
        if (userFromToken !== null && userFromToken.id === user.UserId) {
            await prisma.users.delete({ where: { UserId: parseInt(params.id) } });
            return NextResponse.json(
                { message: 'User Deletd successfully' },
                { status: 200 }
            )
        }

        return NextResponse.json(
            { message: 'Only user can delete his profile , forbidden' },
            { status: 403 } //forbidden
        )

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' }, { status: 500 }
        );
    }
}


/**
 *  @method  GET
 *  @route   ~/api/users/profile/:id
 *  @desc    Get Profile By Id
 *  @access  private (only user himself can get his account/profile)
 */
export async function GET(request: NextRequest, { params }: Props) {
    try {
        const user = await prisma.users.findUnique({
            where: { UserId: parseInt(params.id) },
            select: {
                UserId: true,
                UserName: true,
                Img: true,
                EntryDate: true,
                IsAdmin: true,
            }
        });

        if (!user) {
            return NextResponse.json({ message: 'user not found' }, { status: 404 });
        }

        const userFromToken = verifyToken(request);
        if (userFromToken === null || userFromToken.id !== user.UserId) {
            return NextResponse.json(
                { message: 'You are not allowed, Access denied' },
                { status: 403 }
            )
        }

        return NextResponse.json(user, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { message: 'internal server error' },
            { status: 500 }
        )
    }
}


/**
 *  @method  PUT
 *  @route   ~/api/users/profile/:id
 *  @desc    Update Profile
 *  @access  private (only user himself can update his account/profile)
 */
export async function PUT(request: NextRequest, { params }: Props) {
    try {
        const user = await prisma.users.findUnique({ where: { UserId: parseInt(params.id) } });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const userFromToken = verifyToken(request);
        if (userFromToken === null || userFromToken.id !== user.UserId) {
            return NextResponse.json(
                { message: 'You are not allowed, Access denied' },
                { status: 403 }
            )
        }

        const body = await request.json() as UpdateUserDto;
        const validation = updateUserSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            );
        }

        if ( body.Pwd == user.Pwd) {
            return NextResponse.json(
                { message: 'Invalid password' },
                { status: 400 }
            );
        }

        const updatedUser = await prisma.users.update({
            where: { UserId: parseInt(params.id) },
            data: {
                UserName: body.UserName,
                Img: body.Img,
                Pwd: body.Pwd
            }
        });

        const { Pwd, ...other } = updatedUser;
        return NextResponse.json({ ...other }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { message: 'internal server error' },
            { status: 500 }
        )
    }
}