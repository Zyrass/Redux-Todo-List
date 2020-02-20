import * as reducers from "./reducers";

import { combineReducers } from "redux";
import { createStore } from "redux";

/**
 * -----------------------------------------------------------------------------
 * Reducer uniquement utilisé par le store !
 * -----------------------------------------------------------------------------
 */
const todosAppReducer = combineReducers(reducers);
const store = createStore( todosAppReducer );

export default store;