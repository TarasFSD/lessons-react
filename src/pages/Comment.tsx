import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../models/models"
import {getAllCommets} from "../services/services"
import {Comment} from "../components/comment"
const CommentsPage = () => {
    const [value, setValue] = useState<ICommentModel[]>()
    useEffect(() => {
        getAllCommets().then(({data}) =>setValue(data))
    }, []);

    console.log(value && value)
    return (
        <div>
            <h2>Commets</h2>
            {value? "" : "loading"}

            {
                value && value.map((comment:ICommentModel)=><Comment key={comment.id} {...comment}/>)
            }
        </div>
    );
};

export default CommentsPage;