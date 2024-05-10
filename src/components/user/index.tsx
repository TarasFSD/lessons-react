import React, {FC} from 'react';
import "./style.css"

import {IUserModel} from "../../models/user_model";

interface IProps {
    user: IUserModel,
    onClick?: (userId: number) => void;
}

export const User: FC<IProps> = (
        {user, onClick}
    ) => {

        const onClickHandler =
            () => !!onClick && onClick(user.id)

        return (
            <div>
                <span> First Name: {user.firstName}</span> <br/>
                Last Name: {user.lastName}<br/>
                age: {user.age}<br/>
                gender: {user.gender}<br/>
                email: {user.email}<br/>
                username:{user.username}<br/>
                <img src={user.image} alt={"img"}/>
                <button onClick={onClickHandler} className="btn"> get id user</button>
            </div>
        );
    }
;

