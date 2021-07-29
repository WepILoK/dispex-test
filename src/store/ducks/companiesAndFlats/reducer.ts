import produce, {Draft} from "immer";

import {IState} from "./contracts/state";
import {ActionsType, IActions} from "./contracts/actionTypes";


const initialState: IState = {
    companies: [],
    flats: [],
    loadingClient: false,
}

export const companiesAndFlatsReducer = produce((draft: Draft<IState>, action: IActions) => {
    switch (action.type) {
        case ActionsType.SET_COMPANIES:
            draft.companies = action.payload
            break;
        case ActionsType.SET_APARTMENTS:
            draft.flats = action.payload
            break;
        case ActionsType.SET_LOADING_CLIENT:
            draft.loadingClient = action.payload
            break;
        default:
            break;
    }
}, initialState)