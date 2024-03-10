'use server'
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import setCookie from 'set-cookie-parser'
import { redirect } from "next/navigation";

export async function login(formData: FormData) {

  const csrf = cookies().get('csrftoken')?.value


  var raw = JSON.stringify({
    "email": "ekaluk.p@gmail.com",
    "password": "Eka@50915"
  });

  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: 'POST',
    credentials: 'same-origin',
    headers:  {
      "X-CSRFToken":csrf!,
      Cookie: cookies().toString(),
    },
    body:raw

  })

  const cookie = res.headers.get("set-cookie")

  if(!cookie) {
    return
  }

  // const destinationUrl = new URL("/home", new URL(request.url).origin);
  // const response = NextResponse.redirect(destinationUrl, { status: 302 });


  const parsedResponseCookies = setCookie.parse(setCookie.splitCookiesString(cookie))
  const sessionIdCookie = parsedResponseCookies.find((cookie) => cookie.name === 'sessionid')

  // Create the headers that will need to be returned to the browser. These headers are needed for every subsequent request that require authentication.

  if (!sessionIdCookie) {
    // No `sessionid` cookie in the fetch response means something went wrong.
    return
  }

  // Store the response's `sessionid` cookie into the headers.

  cookies().set({
    name: sessionIdCookie?.name,
    value: sessionIdCookie?.value,
    expires:sessionIdCookie?.expires,
    httpOnly: true,
    sameSite: 'Strict',
    path: '/',
  })


  // response.headers.set('set-cookie', cookie!)


  return {

    status :"ok"
  }

  // if ( res.ok ) {
  //   redirect ('/home')
  // }

  // return response



}


export async function logout(formData: FormData) {

  await fetch("http://127.0.0.1:3000/api/auth/logout", {
    method:"DELETE",
    credentials: "same-origin",
    headers: {
      "X-CSRFToken": cookies().get('csrftoken')?.value,
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  })
  cookies().delete('sessionid')
  return 
}


export async function getSession() {
  const res = await fetch("http://localhost:3000/api/auth/me", {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    credentials: "same-origin",
  });


  if ( !res.ok ) {
    redirect ('/login')
  }

  return await res.json();
}

export async function isLogin() {
  const res = await fetch("http://localhost:3000/api/auth/me", {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    credentials: "same-origin",
  });


  if ( res.status == 200 ) {
    redirect ('/home')
  }

  return await res.json();
}