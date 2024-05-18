export interface IUserModel {
    id: number,
    name: string
    username: string
    email: string
    address?: object

}

export interface IPostModel {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface ICommentModel {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

