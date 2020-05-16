import React from 'react';
import {Link} from 'react-router-dom';

export default function LayoutHeader() {
    return(
      <nav className='navbar'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to='/home' className="dropdown-item" href="#">Action</Link>
              <Link to='/user' className="dropdown-item" href="#">Another action</Link>
              <div className="dropdown-divider"></div>
              <Link to='/subscriber' className="dropdown-item" href="#">Something else here</Link>
            </div>
          </li>
        </ul>
      </nav>
    )
}