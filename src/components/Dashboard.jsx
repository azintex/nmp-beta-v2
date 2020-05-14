import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Dashboard() {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 col-lg-2 d-md-block sidebar collapse'>
                    <div className='sidebar-sticky pt-3'>
                        <ul className='nav flex-column'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/subscriber'>Subscriber</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/user'>
                                    <i className='feather feather-home'></i>User</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/home'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/somewhere'>Somewhere</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}