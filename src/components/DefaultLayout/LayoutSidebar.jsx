import React from 'react';
import {Link} from 'react-router-dom';

export default function LayoutSidebar(props) {
   
    return(
        <div className='col-2'>
            <ul className='nav flex-column'>
                <li className='nav-item'><Link className='nav-link' to='/subscriber'>Subscriber</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/connection'>Connection</Link></li>
            </ul>
        </div>
    )
}