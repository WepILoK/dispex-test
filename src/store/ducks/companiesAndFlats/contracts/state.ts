export interface IClients {
    id: number
    name: string
    phone: string
    email: string
    bindId: number
}

export interface IFlats {
    clients: IClients[]
    accounts: []
    addressId: number
    streetId: number
    houseId: number
    streetName: string
    building: string
    corpus: string
    flat: string
}

export interface ICompany {
    id: number
    name: string
}

export interface IState {
    companies: ICompany[]
    flats: IFlats[]
    loadingClient: boolean
}