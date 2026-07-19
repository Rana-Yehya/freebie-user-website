import axios, { AxiosError, isAxiosError } from "axios";
import { NextResponse } from "next/server";
import { Login } from "../../../../types/login";
import { cookies } from "next/headers";
import { jwtDecode } from 'jwt-decode';

/*
{
    "password": "password",
    "email": "emailDASDmail@email.com"
}   
*/
export async function POST(request: Request) {
    const cookieStore = await cookies();
    try {
        const body = await request.json();

        const response = await axios.post<Login>(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/client/login`,
            { ...body },
            {
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.data.isSuccess == true && response.data.accessToken) {
            const decoded = jwtDecode(response.data.accessToken);
            cookieStore.set("token", response.data.accessToken, {
                path: "/",
                // expires: Date.now() + Date().,
                httpOnly: true,
                sameSite: "lax",
                maxAge: decoded.exp,
                secure: process.env.NODE_ENV === "production"
            });
        }
        // Return success response
        return NextResponse.json({
            isSuccess: true,
            message: response.data.message || "Message sent successfully!",
        }, { status: 200 });

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