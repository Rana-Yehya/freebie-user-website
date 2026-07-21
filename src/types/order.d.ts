export interface Orders {
    isSuccess?: boolean
    message?: string
    count?: number
    data?: OrderItem[]
}
export interface SingleOrder {
    isSuccess?: boolean
    message?: string
    data?: OrderItem
}


export interface OrderItem {
    id?: string
    clientId?: string
    trackingNumber?: string
    paymentId?: string
    method?: string
    notes?: string
    couponId?: string
    status?: string
    cancellationReason?: string
    subtotal?: number
    taxAmount?: number
    deliveryFee?: number
    totalAmount?: number
    refundAmount?: number
    location?: UserLocation
    locationId?: string
    orderProducts?: OrderProduct[]
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}



export interface OrderProduct {
    id?: string
    orderId?: string
    deliveryTaxesId?: string
    productStock?: ProductStock
    productStockId?: string
    commissionRate?: number
    quantity?: number
    price?: number
    subtotal?: number
    taxAmount?: number
    deliveryFee?: number
    totalAmount?: number
    cancellationReason?: any
    clientRefundAmount?: number
    storeRefundAmount?: number
    status?: string
    cancelledBy?: any
    doesNeedPreparation?: boolean
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
