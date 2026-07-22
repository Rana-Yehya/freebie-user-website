
import { NextRequest, NextResponse } from "next/server";

const AUTH_ROUTES = ["/login", "register"];
const PRIVATE_ROUTES = ["/cart", "/order*", "/profile", "/checkout"];

export default async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    // console.log("token", token);
    const url = request.nextUrl.clone();
    const pathname = url.pathname;
    console.log("pathname", pathname);

    if (token && AUTH_ROUTES.some((path) => pathname.startsWith(path))) {
        url.pathname = "/";
        return NextResponse.redirect(url);
    }

    if (!token && PRIVATE_ROUTES.some((path) => pathname.startsWith(path))) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};