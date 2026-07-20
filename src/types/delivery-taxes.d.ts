
export interface DeliveryTaxes {
    id?: string
    originalCityId?: string
    destinationCityId?: string
    baseFee?: number
    additionalFeesAfterKg?: number
    feePerKg?: number
    estimatedDays?: number
    effectiveDate?: string
    expiryDate?: string
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
