import {TEST_ACTION} from '../actions/ActionsMainPage';

const initialState = {
    testValue: ""
}

export function ReducerMainPage(state = initialState, action){
    switch(action.type){
        case TEST_ACTION:
            return Object.assign({},state,{
                testValue: action.testValue
            })
            break;
        default:
            return state;
    }
}