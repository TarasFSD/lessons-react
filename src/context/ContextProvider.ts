import {createContext, useContext} from "react";

import {IPostModel, ICommentModel,IUserModel} from "../models/models"

interface IContextModel {
    postsStore: {
        allPosts: IPostModel[]
    },
    commentsStore:{
        allCommets:ICommentModel[]
    }
    usersStore:{
        allUsers:IUserModel[]
    }
}

const defaultValue:IContextModel = {
    postsStore: {
        allPosts: []
    },
    commentsStore:{
        allCommets:[]
    },
    usersStore:{
        allUsers:[]
    }
}

export const Context = createContext<IContextModel>(
    defaultValue
)

export const useContextProvider = (): IContextModel => useContext(Context);