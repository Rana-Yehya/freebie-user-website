import axios, { AxiosError, isAxiosError } from "axios";
import { ProductItem, Products } from "../../../types/product";
import { Info } from "../../../types/info";

import { NextRequest, NextResponse } from "next/server";
import { Categories, CategoryItem } from "../../../types/category";

export async function GET(request: NextRequest) {
    try {
        // const { searchParams } = new URL(request.url);
        // const queryParams = Object.fromEntries(searchParams.entries());

        const response = await axios.get<Categories>(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/category`,

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
        // // Handle different error types
        // if (error.code === 'ECONNABORTED') {
        //     return NextResponse.json({
        //         isSuccess: false,
        //         message: "Request timed out. Please try again.",
        //     }, { status: 408 });
        // }

        // if (error.response) {
        //     // The request was made and the server responded with a status code
        //     return NextResponse.json({
        //         isSuccess: false,
        //         message: error.response.data?.message || "Server error occurred.",
        //     }, { status: error.response.status || 500 });
        // }

        // if (error.request) {
        //     // The request was made but no response was received
        //     return NextResponse.json({
        //         isSuccess: false,
        //         message: "No response from server. Please check your connection.",
        //     }, { status: 503 });
        // }

        // Something else happened
        return NextResponse.json({
            isSuccess: false,
            message: error || "An unexpected error occurred.",
        }, { status: 500 });
    }
}
