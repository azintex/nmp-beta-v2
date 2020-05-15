import React from 'react';
import {Switch, Route } from 'react-router-dom';

import LayoutHeader from './LayoutHeader';
import LayoutSidebar from './LayoutSidebar';
import LayoutFooter from './LayoutFooter';
import Dashboard from '../Dashboard';

export default function Layout({...props}) {
    console.log(props);
    return(
        <div className='container'>
            <LayoutHeader />
            <LayoutSidebar />
            <LayoutFooter />
        </div>
    )
}