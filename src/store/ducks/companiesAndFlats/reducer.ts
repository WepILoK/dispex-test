import produce, {Draft} from "immer";

import {IState, LoadingClient} from "./contracts/state";
import {ActionsType, IActions} from "./contracts/actionTypes";


const initialState: IState = {
    companies: [],
    flats: [],
    loadingClient: LoadingClient.NEVER,
}

export const companiesAndFlatsReducer = produce((draft: Draft<IState>, action: IActions) => {
    switch (action.type) {
        case ActionsType.SET_COMPANIES:
            draft.companies = action.payload
            break;
        case ActionsType.SET_FLATS:
            draft.flats = action.payload
            break;
        case ActionsType.SET_LOADING_CLIENT:
            draft.loadingClient = action.payload
            break;
        default:
            break;
    }
}, initialState)