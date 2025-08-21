import { NextResponse } from 'next/server'

export function middleware(request) {
    const currentCookie = request.cookies.get("nextjs-token")
    console.log(currentCookie.value)


    return NextResponse.rewrite(new URL('/login', request.url))
}

export const config = {
    matcher: '/add-product',
}