import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/services"
import {IUserModel} from "../models/models"
import {User} from "../components/user"
import {useContextProvider} from "../context/ContextProvider"

const UsersPage = () => {
    const {usersStore:{allUsers}} = useContextProvider();


    return (
        <div>
            <h2>Users</h2>
            {allUsers? "" : "loading"}
            {
                allUsers && allUsers.map((user:IUserModel)=><User key={user.id} {...user}/>)
            }
        </div>
    );
};

export default UsersPage;