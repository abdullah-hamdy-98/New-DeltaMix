import { z } from 'zod'


export const createNewsSchema = z.object({
    Title: z.string().min(5).max(200),
    Dscr: z.string().min(5),
    Img: z.string().min(1),
    AuthorId: z.number().min(1)
})


export const loginSchema = z.object({
    UserId: z.number().max(50),
    Pwd: z.string().min(4)
})