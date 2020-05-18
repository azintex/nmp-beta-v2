import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../_actions/authentication';

import LayoutHeader from './LayoutHeader';
import LayoutSidebar from './LayoutSidebar';
import LayoutFooter from './LayoutFooter';

function Layout(props) {
    return(
        <div className='container'>
                <LayoutHeader {...props} />
                <div className='row'>
                    <LayoutSidebar {...props} />
                    {props.content}
                </div>
                <LayoutFooter />
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(signOut())
    }
}

const DefaultLayout = connect(null, mapDispatchToProps)(Layout);
export default DefaultLayout;