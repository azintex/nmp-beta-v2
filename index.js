import React from 'react';
import {render} from 'react-dom';
import App from './src/App';
import {Provider} from 'react-redux';
import {store} from './src/_helpers/store';
import 'bootstrap';
//import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//store.subscribe(() => console.log(store.getState()));

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));