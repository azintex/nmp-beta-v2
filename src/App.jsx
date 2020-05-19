import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {useStore} from 'react-redux';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Subscriber = React.lazy(() => import('./components/Subscriber'));
const SignIn = React.lazy(() => import('./components/SignIn'));
const NewConnection = React.lazy(() => import('./components/Connection/NewConnection'));

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
                    <PrivateRoute path='/connection' component={NewConnection} />
                    <PrivateRoute path='/subscriber' component={Subscriber} />
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
            return store.success ? (<Component {...routeProps} />) : <Redirect to={{pathname: '/signin', state: {from: {...routeProps.location}}}} />;
        } }/>
    )
}