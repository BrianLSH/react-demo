import reduxLogger from "redux-logger";
import {thunk} from 'redux-thunk'

export const middleware = [reduxLogger, thunk];

export default middleware;