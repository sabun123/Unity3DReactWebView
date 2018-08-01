import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import ContainerMainPage from './containers/ContainerMainPage';

import store from './store';
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={ContainerMainPage} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("entrypoint")
)