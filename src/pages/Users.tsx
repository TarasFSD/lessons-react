import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/services"
import {IUserModel} from "../models/models"
import {User} from "../components/user"
const UsersPage = () => {
    const [value, setValue] = useState<IUserModel[]>()
    useEffect(() => {
        getAllUsers().then(({data}) =>setValue(data))
    }, []);

    console.log(value && value)

    return (
        <div>
            <h2>Users</h2>
            {value? "" : "loading"}
            {
                value && value.map((user:IUserModel)=><User key={user.id} {...user}/>)
            }
        </div>
    );
};

export default UsersPage;