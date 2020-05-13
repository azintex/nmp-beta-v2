import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {useStore} from 'react-redux';
import SignIn from './components/SignIn';
import Home from './components/Home';
import User from './components/User';
import Main from './components/Main';
import Dashboard from './components/Dashboard';

function App() {
    return(
        <Router>
            <Switch>
                <Route exact path='/' render={Main} />
                <Route path='/signin' component={SignIn} />
                <PrivateRoute path='/home' component={Home} />
                <PrivateRoute path='/user' component={User} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch>
        </Router>
    )
}

function PrivateRoute({component: Component, ...rest}) {
    let store = useStore().getState();
    return (
        <Route {...rest} render={routeProps => {
            return store.success ? (<Component {...routeProps} />) : <Redirect to={{pathname: '/signin', state: {from: {...routeProps.location}}}} />;
        } }/>
    )
}

export default App;