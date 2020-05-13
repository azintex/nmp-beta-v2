import React from 'react';
import Subscriber from './Subscriber';

import {connect} from 'react-redux';
import {signOut} from '../_actions/authentication';

function HomeView(props) {
    
    function handleSignOut() {
        props.signOut();
        props.history.replace('/', {state: {from: props.location}});
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <Subscriber />                    
                </div>
                <div className='col-4 justify-content-center'>
                    <button onClick={handleSignOut}>Sign out</button>
                </div>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(signOut())
    }
}

const Home = connect(null, mapDispatchToProps)(HomeView);
export default Home;