export interface Product {
    isSuccess?: boolean
    message?: string
    data?: ProductItem[]
    count?: number
}

export interface ProductItem {
    id?: string
    name?: Name
    mainImage?: Image
    price?: number
    actualPrice?: number
    doesNeedPreparation?: boolean
    preparationTimeInMinutes?: any
    status?: string
    tags?: string
    category?: SubCategoryItem
    occasions?: Occasion[]
    avgRating?: number
    reviewsCount?: number
    dimensionsWCm?: number
    dimensionsHCm?: number
    dimensionsLCm?: number
    weightInKg?: number
    canBeDeliveredOutsideState?: boolean
    productVariant?: ProductVariant[]
    discountId?: string
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}


