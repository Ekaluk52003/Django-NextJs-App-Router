import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Clone the request headers
  // You can modify them with headers API: https://developer.mozilla.org/en-US/docs/Web/API/Headers
  const requestHeaders = new Headers(request.headers)


    const res = await fetch("http://localhost:3000/api/auth/get-csrf", {
    credentials: "same-origin",
    method: "POST",

  });
  // const cookie = response.headers.get("set-cookie");
  const cookie = res.headers.get("set-cookie");



  const response = NextResponse.next()

  response.headers.set('set-cookie', cookie!)


  return response
}






