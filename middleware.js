// Basic middlware configuration (prevents access to the pages in the matcher if the user is not logged in)
// export { default } from "next-auth/middleware"

// // Applies next-auth only to matching routes - can be regex
// // Ref:
// export const config = {
//     matcher: ['/tatuadores/saved', '/tatuajes/boards', '/settings']
// }

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// withAuth augments the rquest and puts the user token in the request object
export default withAuth(
  function middleware(request) {
    console.log("MIDDLEWARE"); // we have now the token available in the request!

    // protect the paths of the users
    if (request.nextUrl.pathname.includes("/user") && !request.nextauth.token) {
      console.log("BLOCKED in 1st filter");
      return NextResponse.rewrite(new URL("/denied", request.url));
    }

    // protect the paths of the artists
    if (
      request.nextUrl.pathname.includes("/artist") &&
      request.nextauth.token?.role !== "ARTIST"
    ) {
      console.log("BLOCKED in 2nd filter");
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
  },
  {
    callbacks: {
      // the middleware funtion will execute only if this functio returns true
      authorized: ({ token }) => {
        // console.log({ token })
        // return !!token // we are gonna let them in, and separate cases in the middleware function
        return !!true;
      },
    },
  },
);

export const config = {
  matcher: ["/user/:path*", "/admin/:path*"],
};
