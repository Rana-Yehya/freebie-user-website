import { Image } from "./image"
import { Name } from "./name"

export interface Categories {
    isSuccess?: boolean
    message?: string
    data?: CategoryItem[]
    count?: number
}
export interface Subcategories {
    isSuccess?: boolean
    message?: string
    data?: CategoryItem[]
    count?: number
}
export interface SubcategoryItem {
    id?: string
    name?: Name
    image?: Image
    canBeDeliveredOutsideState?: boolean
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
export interface CategoryItem {
    id?: string
    name?: Name
    image?: Image
    subcategories?: SubcategoryItem[]
    canBeDeliveredOutsideState?: boolean
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}