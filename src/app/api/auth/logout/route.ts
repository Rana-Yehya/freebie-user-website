import axios, { AxiosError, isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Login } from "../../../../types/login";
import { cookies } from "next/headers";
import { jwtDecode } from 'jwt-decode';
import { Info } from "../../../../types/info";

/*
{
    "password": "password",
    "email": "emailDASDmail@email.com"
}   
*/
export async function GET(request: NextRequest) {
    const cookieStore = await cookies();
    try {
        const token = request.cookies.get("token")?.value;
        if (token) {

            const response = await axios.get<Info>(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/client/logout`,
                {
                    timeout: 10000,
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                }
            );

            if (response.data.isSuccess == true) {
                cookieStore.set("token", "token", {
                    path: "/",
                    // expires: Date.now() + Date().,
                    httpOnly: true,
                    sameSite: "lax",
                    maxAge: 0,
                    secure: process.env.NODE_ENV === "production"
                });
            }
            // Return success response
            return NextResponse.json({
                isSuccess: true,
                message: response.data.message || "Message sent successfully!",
            }, { status: 200 });
        } else {
            // Return error response
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