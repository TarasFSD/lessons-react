import React from 'react';
import {Link} from "react-router-dom";
import './header.css'
export const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <Link to="/">Users page</Link>
                <Link to="/posts">Posts page</Link>
                <Link to="/commets">Commets page</Link>

            </nav>
        </div>
    );
};