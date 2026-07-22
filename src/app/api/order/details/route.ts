import axios, { AxiosError, isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { SingleOrder } from "../../../../types/order";


export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value;
        if (token) {
            const { searchParams } = new URL(request.url);
            const queryParams = Object.fromEntries(searchParams.entries());

            const response = await axios.get<SingleOrder>(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/order/client/${queryParams.orderId}`,

                {
                    timeout: 10000,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            return NextResponse.json(response.data, { status: 200 });
        } else {
            return NextResponse.json(
                {
                    isSuccess: false,
                    message: "Unauthenticated",
                },
                { status: 401 },
            );
        }
    } catch (error: unknown) {
        if (isAxiosError(error)) {
            // console.error("API Error:", error);
            return NextResponse.json(error?.response?.data, { status: error.status });
        }

        // Something else happened
        return NextResponse.json(
            {
                isSuccess: false,
                message: error || "An unexpected error occurred.",
            },
            { status: 500 },
        );
    }
}
