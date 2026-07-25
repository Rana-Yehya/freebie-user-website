import { CityItem } from "./city"

export interface User {
    id?: string
    email?: string
    phone?: string
    moneyInPocket?: number
    role?: string
    client?: Client
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}

export interface Client {
    id?: string
    username?: string
    gender?: string
    dateOfBirth?: string
    isVerified?: boolean
    userId?: string
    mainLocation?: ClientLocation
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}



export interface ClientLocation {
    id?: string
    // mainClientLocation?: MainClientLocation
    clientLocationsId?: string
    city?: CityItem
    cityId?: string
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}



