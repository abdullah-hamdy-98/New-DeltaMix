import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

/**
 * @method GET 
 * @route  ~/api/users/logout
 * @desc   Logout - Sign out
 * @access public
 */


export async function GET(request: NextRequest) {
    try {
        cookies().delete("jwtToken");
        return NextResponse.json(
            { message: "Logged Out" },
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' }, { status: 500 }
        );
    }
}