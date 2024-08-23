export interface CreateNewsDto {
    Title: string,
    Dscr: string,
    Img: string,
    AuthorId: number
}

export interface UpdateNewsDto {
    Title?: string,
    Dscr?: string,
    Img?: string,
    AuthorI?: number
}


export interface LoginUserDto {
    UserId: number,
    Pwd: string
}