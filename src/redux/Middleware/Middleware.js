import reduxLogger from "redux-logger";
import {thunk} from 'redux-thunk'
import promiseMiddleware from 'redux-promise';
export const middleware = [reduxLogger, thunk,promiseMiddleware];

export default middleware;