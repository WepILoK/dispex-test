import {Dispatch} from "redux";

import {ActionsType, IActions,
    ISetApartments, ISetCompanies,
    ISetLoadingClient,} from "./contracts/actionTypes";
import {IState, LoadingClient} from "./contracts/state";
import {Api, IRequest} from "../../../api/api";


export const setCompanies = (payload: IState['companies']): ISetCompanies => ({
    type: ActionsType.SET_COMPANIES,
    payload
})

export const setApartments = (payload: IState['flats']): ISetApartments => ({
    type: ActionsType.SET_FLATS,
    payload
})

export const setLoadingClient = (payload: LoadingClient): ISetLoadingClient => ({
    type: ActionsType.SET_LOADING_CLIENT,
    payload
})

export const fetchCompanies = () => {
    return async (dispatch: Dispatch<IActions>) => {
        try {
            const data = await Api.fetchCompanies()
            dispatch(setCompanies(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchApartments = (companyId: number) => {
    return async (dispatch: Dispatch<IActions>) => {
        try {
            const data = await Api.fetchApartments(companyId)
            dispatch(setApartments(data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteClient = (clientId: number) => {
    return async (dispatch: Dispatch<IActions>) => {
        try {
            dispatch(setLoadingClient(LoadingClient.LOADING))
            await Api.removeClient(clientId)
            dispatch(setLoadingClient(LoadingClient.LOADED))
        } catch (error) {
            console.log(error)
        }
    }
}
export const addClient = (payload: IRequest, addressId: number) => {
    return async (dispatch: Dispatch<IActions>) => {
        try {
            dispatch(setLoadingClient(LoadingClient.LOADING))
            const {id} = await Api.createClient(payload)
            await Api.bindClient({AddressId: addressId, ClientId: id})
            dispatch(setLoadingClient(LoadingClient.LOADED))
        } catch (error) {
            console.log(error)
        }
    }
}

