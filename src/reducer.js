import { combineReducers } from "redux";
import common from './reducers/common'
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    common,
    router: routerReducer
});