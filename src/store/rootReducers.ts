import {combineReducers} from "redux";
import {companiesAndFlatsReducer} from "./ducks/companiesAndFlats/reducer";

export const rootReducers = combineReducers({
    companiesAndFlats: companiesAndFlatsReducer,
});