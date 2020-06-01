import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {useStore} from 'react-redux';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Subscribers = React.lazy(() => import('./components/Subscribers/Subscribers'));
const SignIn = React.lazy(() => import('./components/SignIn'));
const Connection = React.lazy(() => import('./components/Connection/Connection'));

const loading = () => 
    <div className='spinner-border mx-auto' role='status'>
        <span className='sr-only'>Loading...</span>
    </div>


export default function App() {
    return(
        <Router>
            <React.Suspense fallback={loading()}>
                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard} />
                    <Route path='/signin' component={SignIn} />
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/connection' component={Connection} />        
                    <PrivateRoute path='/subscribers' component={Subscribers} />
                </Switch>
            </React.Suspense>
        </Router>
    )
}

function PrivateRoute({component: Component, isAuthenticated: isAuthenticated, ...rest}) {
    let store = useStore();
    store = store.getState();

    return (
        <Route {...rest} render={routeProps => {
            return store.authentication.success ? (<Component {...routeProps} />) : <Redirect to={{pathname: '/signin', state: {from: {...routeProps.location}}}} />;
        } }/>
    )
}