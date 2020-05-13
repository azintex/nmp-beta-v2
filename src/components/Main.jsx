import React from 'react';
import {Link} from 'react-router-dom';

export default function MainPage(props) {
    return(
        <ul className="nav">
            <li className="nav-item">
                <Link className='nav-link' to='/home'>Home</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to='/user'>User</Link>
            </li>
        </ul>
    )
}