// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import Negotiator from 'negotiator';
// import { match } from "@formatjs/intl-localematcher";

// const locales = ['en-US', 'nl-NL', 'nl']

// // Get the preferred locale, similar to the above or using a library
// function getLocale(request: NextRequest) {
//   let headers = request.headers.get('accept-language') || {  'en-US,en;q=0.5' };
// let languages = new Negotiator({ headers: {'accept-language': headers} }).languages()
// let locales = ['en-US', 'nl-NL', 'nl']
// let defaultLocale = 'en-US'

// match(languages, locales, defaultLocale);

//  }

// export function middleware(request: NextRequest) {
//   // Check if there is any supported locale in the pathname
//   const { pathname } = request.nextUrl
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   )

//   if (pathnameHasLocale) return

//   // Redirect if there is no locale
//   const locale = getLocale(request)
//   request.nextUrl.pathname = `/${locale}${pathname}`
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return NextResponse.redirect(request.nextUrl)
// }

// export const config = {
//   matcher: ["/", "/admin/:path*", '/((?!_next).*)',],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// eslint-disable-next-line
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/admin/:path*"],
};
