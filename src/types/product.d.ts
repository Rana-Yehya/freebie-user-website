export interface Products {
    isSuccess?: boolean
    message?: string
    data?: ProductItem[]
    count?: number
}
export interface SingleProduct {
    isSuccess?: boolean
    message?: string
    data?: ProductItem
}


export interface ProductItem {
    id?: string
    name?: Name
    description?: Name
    detailedDescription?: Name
    mainImage?: Image
    images?: Image[]
    price?: number
    actualPrice?: number
    doesNeedPreparation?: boolean
    preparationTimeInMinutes?: number
    status?: string
    tags?: string
    category?: Category
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
    isInWishList?: boolean
    canBeReviewed?: boolean
}



