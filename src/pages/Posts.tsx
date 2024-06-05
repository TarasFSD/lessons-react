import React, {useEffect, useState} from 'react';
import {IPostModel} from "../models/models"
import {getAllPosts} from "../services/services"
import {Post} from "../components/post"
import {useContextProvider} from "../context/ContextProvider"

const PostsPage = () => {

    const {postsStore:{allPosts}} = useContextProvider();



    return (
        <div>
            <h2>Posts</h2>
            {allPosts? "" : "loading"}

            {
                allPosts && allPosts.map((post:IPostModel)=><Post key={post.id} {...post}/>)
            }
        </div>
    );
};

export default PostsPage;