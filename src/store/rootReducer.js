import {combineReducers} from "redux";

import peopleReducer from './actions/peopleActions';

const rootReducer = combineReducers({
    people: peopleReducer,
});

export default rootReducer;