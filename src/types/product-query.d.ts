import { CategoryItem } from "./category";
import { OccasionItem } from "./occasion";

export interface ProductQueryRequest {
    name?: string;
    tag?: string;
    page?: number;
    limit?: number;
    priceSmall?: number;
    priceHigh?: number;
    occasionIds?: string[];
    categoryIds?: string[];
    subcategoryIds?: string[];
    colors?: string[];
    name?: string;
    // categoryIds
};
export interface ProductQueryResponse {

    isSuccess: boolean
    message: string
    colors: string[]
    occasions: OccasionItem[]
    categories: CategoryItem[]
    minPrice: number
    maxPrice: number
}