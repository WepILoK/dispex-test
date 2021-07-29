import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

import {rootReducers} from "./rootReducers";
import {IState} from "./ducks/companiesAndFlats/contracts/state";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface RootState {
    companiesAndFlats: IState
}

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

