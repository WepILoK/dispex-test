import {RootState} from "../../store";
import {IState, LoadingClient} from "./contracts/state";

export const selectCompaniesAndApartmentsState = (state: RootState): IState => state.companiesAndFlats

export const selectCompanies = (state: RootState): IState['companies'] =>
    selectCompaniesAndApartmentsState(state).companies

export const selectApartments = (state: RootState): IState['flats'] =>
    selectCompaniesAndApartmentsState(state).flats

export const selectLoadingClients = (state: RootState): boolean =>
    selectCompaniesAndApartmentsState(state).loadingClient === LoadingClient.LOADING