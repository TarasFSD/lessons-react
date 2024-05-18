import React from 'react';
import {ICommentModel} from "../models/models"
export const Comment = (comment:ICommentModel) => {
    return (
        <div>
            Name:{`${comment.name}`}
            Email:{`${comment.email}`}
            Body:{`${comment.body}`}
            <br/>
            <br/>

        </div>
    );
};

