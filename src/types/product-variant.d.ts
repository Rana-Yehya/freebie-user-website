export interface ProductVariant {
    id?: string
    productId?: string
    sku?: string
    color?: string
    additionalPrice?: number
    additionalInfo?: string
    productStock?: ProductStock[]
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}

