export interface Country {
    isSuccess?: boolean
    message?: string
    data?: CountryItem[]
    count?: number
}
export interface CountryItem {
    id?: string
    name?: Name
    countryIsoCode?: string
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
