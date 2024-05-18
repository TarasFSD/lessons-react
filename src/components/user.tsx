import React from 'react';
import {IUserModel} from "../models/models"

export const User = (user:IUserModel) => {
    return (
        <div>
            name : {`${user.name}`}
            username : {`${user.username}`}
            email : {`${user.email}`}
        </div>
    );
};

