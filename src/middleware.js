import { NextResponse } from "next/server"

const middleware = (request) => {
  return NextResponse.redirect(new URL('/signup', request.url))
}

export default middleware

export const config = {
    matcher: ['/pricing/:path*', '/faqs/:path*']
}