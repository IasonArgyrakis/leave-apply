import {combineReducers} from "redux";
import counterReducer from './counter'
import loggedReducer from "./logged";

const allReducers = combineReducers({
    counter:counterReducer,
    logged:loggedReducer
})
export default  allReducers