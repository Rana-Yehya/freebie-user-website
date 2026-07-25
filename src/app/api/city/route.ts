import axios, { AxiosError, isAxiosError } from "axios";
import { ProductItem, Products } from "../../../types/product";
import { Info } from "../../../types/info";

import { NextRequest, NextResponse } from "next/server";
import { Categories, CategoryItem } from "../../../types/category";
import { Country, CountryItem } from "../../../types/country";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const queryParams = Object.fromEntries(searchParams.entries());

        const response = await axios.get<Country>(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/city/country/${queryParams.countryId}`,

            {
                // params: {
                //     ...queryParams
                // },
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );


        // Return success response
        return NextResponse.json(response.data, { status: 200 });

    } catch (error: unknown) {

        if (isAxiosError(error)) {
            // console.error("API Error:", error);
            return NextResponse.json(error?.response?.data, { status: error.status });
        }
        // Something else happened
        return NextResponse.json({
            isSuccess: false,
            message: error || "An unexpected error occurred.",
        }, { status: 500 });
    }
}
