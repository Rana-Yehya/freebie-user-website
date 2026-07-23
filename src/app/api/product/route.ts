import axios, { AxiosError, isAxiosError } from "axios";
import { ProductItem, Products } from "../../../types/product";
import { Info } from "../../../types/info";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;

        // Build params object
        const params: any = {};

        // Simple params
        const page = searchParams.get('page');
        const limit = searchParams.get('limit');
        const priceSmall = searchParams.get('priceSmall');
        const priceHigh = searchParams.get('priceHigh');
        const tag = searchParams.get('tag');
        const name = searchParams.get('name');

        if (page) params.page = parseInt(page);
        if (limit) params.limit = parseInt(limit);
        if (priceSmall !== null && priceSmall !== '') params.priceSmall = parseFloat(priceSmall);
        if (priceHigh !== null && priceHigh !== '') params.priceHigh = parseFloat(priceHigh);
        if (tag) params.tag = tag;
        if (name) params.name = name;


        // ✅ Handle array params correctly - use getAll
        const categoryIds = searchParams.getAll('categoryIds');
        if (categoryIds.length > 0) {
            params.categoryIds = JSON.stringify(categoryIds); // '["id1","id2"]'
        }
        const subcategoryIds = searchParams.getAll('subcategoryIds');
        if (subcategoryIds.length > 0) {
            params.subcategoryIds = JSON.stringify(subcategoryIds); // '["id1","id2"]'
        }

        const occasionIds = searchParams.getAll('occasionIds');
        if (occasionIds.length > 0) {
            params.occasionIds = JSON.stringify(occasionIds); // '["id1","id2"]'
        }


        const colors = searchParams.getAll('colors');
        if (colors.length > 0) {
            params.colors = JSON.stringify(colors);
        }

        const response = await axios.get<Products>(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/search`,

            {
                params: params,
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

export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value;

        if (token) {
            const body = await request.json();

            const response = await axios.post<Info>(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/client/cart/product`,
                { ...body },
                {
                    timeout: 10000,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }
            );


            // Return success response
            return NextResponse.json({
                isSuccess: true,
                message: response.data.message || "Message sent successfully!",
                // data: response.data,
            }, { status: 200 });
        } else {
            return NextResponse.json({
                isSuccess: false,
                message: "Unauthenticated",
            }, { status: 401 });


        }
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