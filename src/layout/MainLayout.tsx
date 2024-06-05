import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {Context} from "../context/ContextProvider"
import {Header} from "../components/header/header"
import {getAllCommets, getAllPosts, getAllUsers} from "../services/services"
import {ICommentModel, IPostModel,IUserModel} from "../models/models"

const MainLayout = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        getAllCommets().then(({data}) => setComments(data))
        getAllPosts().then(({data}) => setPosts(data))
        getAllUsers().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            <Header/>
            <Context.Provider value={
                {
                    postsStore: {
                        allPosts: posts
                    },
                    commentsStore: {
                        allCommets: comments
                    },
                    usersStore:{
                        allUsers:users
                    }
                }
            }>
                <Outlet/>
            </Context.Provider>
        </div>
    );
};

export default MainLayout;