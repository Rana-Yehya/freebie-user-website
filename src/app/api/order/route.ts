import axios, { AxiosError, isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Info } from "../../../types/info";

export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value;
        if (token) {
            const body = await request.json();

            const response = await axios.post<Info>(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/order/client`,
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
            return NextResponse.json(response.data, { status: 200 });
        } else {
            return NextResponse.json({
                isSuccess: false,
                message: "Unauthenticated",
            }, { status: 404 });


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