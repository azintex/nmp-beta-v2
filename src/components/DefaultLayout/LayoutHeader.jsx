import React from 'react';
import {Link} from 'react-router-dom';

export default function LayoutHeader(props) {

      function handleSignOut() {
        props.signOut();
        props.history.replace('/', {state: {from: props.location}});
    }

    return(
        <nav className='navbar navbar-light bg-light'>
          <span className="navbar-brand mb-0 h1">NMP</span>
          <button className='btn btn-outline-secondary' type='button' onClick={handleSignOut}>Sign out</button>
        </nav>
    )
}