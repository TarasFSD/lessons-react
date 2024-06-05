import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../models/models"
import {Comment} from "../components/comment"
import {useContextProvider} from "../context/ContextProvider"
const CommentsPage = () => {
    const {commentsStore:{allCommets}} = useContextProvider();

    return (
        <div>
            <h2>Commets</h2>
            {allCommets? "" : "loading"}

            {
                allCommets && allCommets.map((comment:ICommentModel)=><Comment key={comment.id} {...comment}/>)
            }
        </div>
    );
};

export default CommentsPage;