import { createStore, combineReducers, applyMiddleware } from 'redux';
import {routerReducer} from 'react-router-redux';
import {ReducerMainPage} from './reducers/ReducerMainPage';
import {createLogger} from 'redux-logger'
import reduxThunk from 'redux-thunk';

const logger = createLogger({
    collapsed: true
})

// Create the store
// essentially a combination of the state from various reducers
// and the router (its history) and middleware
const store = createStore(
    combineReducers({
        // ReducerMainPage,
        router: routerReducer
    }),
    applyMiddleware(logger, reduxThunk)
)

export default store;