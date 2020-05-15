import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {useStore} from 'react-redux';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const DefaultLayout = React.lazy(() => import('./components/DefaultLayout/DefaultLayot'));
const Subscriber = React.lazy(() => import('./components/Subscriber'));
const SignIn = React.lazy(() => import('./components/SignIn'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

//import SignIn from './components/SignIn';
//import Dashboard from './components/Dashboard';
//import Subscriber from './components/Subscriber';

export default function App() {
    return(
        <Router>
            <React.Suspense fallback={loading()}>
                <Switch>
                    <Route exact path='/' component={DefaultLayout} />
                    <Route path='/signin' component={SignIn} />
                    <PrivateRoute path='/dashboard' component={Dashboard} />
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