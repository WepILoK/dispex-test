import {Action} from "redux";
import {IState} from "./state";

export enum ActionsType {
    SET_COMPANIES = 'companiesAndFlats/SET_COMPANIES',
    SET_APARTMENTS = 'companiesAndFlats/SET_APARTMENTS',
    SET_LOADING_CLIENT = 'companiesAndFlats/SET_LOADING_CLIENT',
}

export interface ISetCompanies extends Action<ActionsType> {
    type: ActionsType.SET_COMPANIES
    payload: IState['companies']
}

export interface ISetApartments extends Action<ActionsType> {
    type: ActionsType.SET_APARTMENTS
    payload: IState['flats']
}

export interface ISetLoadingClient extends Action<ActionsType> {
    type: ActionsType.SET_LOADING_CLIENT
    payload: boolean
}

export type IActions =
    | ISetCompanies
    | ISetApartments
    | ISetLoadingClient
