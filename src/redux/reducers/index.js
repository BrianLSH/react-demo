import { combineReducers } from 'redux';
import addNameReducer from "./addNameReducer";
import CounterReducer from "./CounterReducer";
import AsyncReduxThunkCount from "./AsyncReduxThunkCount";
const rootReducer = combineReducers({
    NameReducer:addNameReducer,
    CountingReducer:CounterReducer,
    AsyncThunkCount:AsyncReduxThunkCount
})
export default rootReducer

