import React from 'react';
import {Link} from 'react-router-dom';

export default function LayoutSidebar(props) {

    console.log(props);
    
    return(
        <div className='col-3'>
            <ul className='nav flex-column'>
                <li className='nav-item'><Link className='nav-link' to='/subscriber'>Subscriber</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/user'>User</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/home'>Home</Link></li>
            </ul>
        </div>
    )
}