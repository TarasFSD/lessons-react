import React from 'react';
import {IPostModel} from "../models/models"

export const Post = (post:IPostModel) => {
    return (
        <div>
            User id: {`${post.userId}`}
            Title: {`${post.title}`}
            Body: {`${post.body}`}
            <br/>
            <br/>
            <br/>
        </div>
    );
};

