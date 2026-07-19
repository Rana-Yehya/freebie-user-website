export interface Occasions {
    isSuccess?: boolean
    message?: string
    data?: OccasionItem[]
    count?: number
}
export interface OccasionItem {
    id?: string
    name?: Name
    image?: Image
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}