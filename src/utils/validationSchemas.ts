import { z } from 'zod'


export const createNewsSchema = z.object({
    Title: z.string().min(5).max(200),
    name: z.string().min(20),
})