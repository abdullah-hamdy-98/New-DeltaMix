import { News } from '@prisma/client';



export type JWTPayload = {
    id: number;
    username: string;
    isAdmin: boolean;
}


export type SingleNews = News