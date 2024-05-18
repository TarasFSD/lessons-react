import React, {useEffect, useState} from 'react';
import {IPostModel} from "../models/models"
import {getAllPosts} from "../services/services"
import {Post} from "../components/post"
const PostsPage = () => {
    const [value, setValue] = useState<IPostModel[]>()
    useEffect(() => {
        getAllPosts().then(({data}) =>setValue(data))
    }, []);

    console.log(value && value)
    return (
        <div>
            <h2>Posts</h2>
            {value? "" : "loading"}

            {
                value && value.map((post:IPostModel)=><Post key={post.id} {...post}/>)
            }
        </div>
    );
};

export default PostsPage;