export interface IPostModel {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags?: string[],
    reactions?:number
}

export interface IAnswerPostModel {
    total: number,
    skip: number,
    limit: number,
    posts:IPostModel[]
}