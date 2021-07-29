import axios from "axios";
import {IClients, IState} from "../store/ducks/companiesAndFlats/contracts/state";

export const instance = axios.create({
    baseURL: "https://dispex.org/api/vtest",
})

export interface IRequest {
    Name?: string
    Phone?: string
    Email?: string
}

export const Api = {
    async fetchCompanies() {
        const {data} = await instance.get<IState['companies']>('Request/companies')
        return data
    },
    async fetchApartments(companyId: number) {
        const {data} = await instance.get<IState['flats']>(`HousingStock?companyId=${companyId}`)
        return data
    },
    async removeClient(clientId: number) {
        await instance.delete<IClients>(`HousingStock/bind_client/${clientId}`)
    },
    async createClient(payload: IRequest) {
        const {data} = await instance.post<{id: number, result: string}>("HousingStock/client", payload)
        return data
    },
    async bindClient(payload: {AddressId: number, ClientId: number}) {
        await instance.put(`HousingStock/bind_client`, payload)
    },
}