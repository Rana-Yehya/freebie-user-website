export interface City {
    isSuccess?: boolean
    message?: string
    data?: CityItem[]
    count?: number
}
export interface CityItem {
    id?: string
    nameId?: string
    name?: Name
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
