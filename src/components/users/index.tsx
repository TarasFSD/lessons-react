import React, {useEffect, useState} from 'react';

import {getAllUsers} from "../../services/user.service";
import {getUserPosts} from "../../services/post.service";
import {IUserModel} from "../../models/user_model";
import {User} from "../user";
import {IPostModel} from "../../models/post_model";
import "./style.css"

export const Users = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data.users))

    }, []);


    const lift = (id: number) => {
        getUserPosts(id).then(({data}) => setPosts(data.posts)
        )
    }

    return (
        <div>
            {/*All user posts will show on top page*/}
            {posts && posts.map((post) => (
                <div className="posts" key={post.id}>
                    POST
                    title: {post.title},
                    body: {post.body},
                    userId: {post.userId},
                </div>
            ))}

            {users &&
                users.map((user) => (
                    <div key={user.id}>
                        <User user={user} onClick={lift}/>

                    </div>

                ))}

        </div>
    );
};

