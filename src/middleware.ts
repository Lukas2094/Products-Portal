// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export default async function middleware(req : any) {
//     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    
//     if (!token && req.nextUrl.pathname.startsWith("/products")) {
//         return NextResponse.redirect(new URL("/login", req.url));
//     }
    
//     if (token && req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/") {
//         return NextResponse.redirect(new URL("/products", req.url));
//     }

//     return NextResponse.next(); 
// }

// export const config = {
//     matcher: ["/products/:path*", "/login"], 
// };


import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server"; // Importando o tipo NextRequest

export default async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    
    if (!token && req.nextUrl.pathname.startsWith("/products")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (token && (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/")) {
        return NextResponse.redirect(new URL("/products", req.url));
    }

    return NextResponse.next(); 
}

export const config = {
    matcher: ["/products/:path*", "/login"], 
};
