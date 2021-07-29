import {Action} from "redux";
import {IState, LoadingClient} from "./state";

export enum ActionsType {
    SET_COMPANIES = 'companiesAndFlats/SET_COMPANIES',
    SET_FLATS = 'companiesAndFlats/SET_FLATS',
    SET_LOADING_CLIENT = 'companiesAndFlats/SET_LOADING_CLIENT',
}

export interface ISetCompanies extends Action<ActionsType> {
    type: ActionsType.SET_COMPANIES
    payload: IState['companies']
}

export interface ISetApartments extends Action<ActionsType> {
    type: ActionsType.SET_FLATS
    payload: IState['flats']
}

export interface ISetLoadingClient extends Action<ActionsType> {
    type: ActionsType.SET_LOADING_CLIENT
    payload: LoadingClient
}

export type IActions =
    | ISetCompanies
    | ISetApartments
    | ISetLoadingClient
