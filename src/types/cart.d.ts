export interface Cart {
    isSuccess?: boolean
    message?: string
    clientId?: string
    cartProducts?: CartProduct[]
    subtotal?: number
    taxAmount?: number
    deliveryFee?: number
    totalAmount?: number
    couponId?: string
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}

export interface CartProduct {
    userClientId?: string
    productStock?: ProductStock
    productStockId?: string
    deliveryTaxes?: DeliveryTaxes
    deliveryTaxesId?: string
    quantity?: number
    subtotal?: number
    taxAmount?: number
    deliveryFee?: number
    totalAmount?: number
    status?: string
    oldQuantity?: number
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}

