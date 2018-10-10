import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader' 

import './modules/home/components/style.css';

import Layout from './modules/app/components/layout';
import App from './modules/app/containers/index';
import Home from './modules/home/containers/index';

import reducers from './reducers';

const rootReducer = combineReducers(reducers);

const store =  createStore(rootReducer);

const ReactRouter = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Route exact path="/" component={Home} ></Route>
                    <Route path="/app" component={App}></Route>
                </Layout>
            </Router>
        </Provider>
    );
};

const NewReactRouter = hot(module)(ReactRouter)

ReactDOM.render(<NewReactRouter store={store}/>, document.getElementById('root'));
