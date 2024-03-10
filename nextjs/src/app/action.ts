'use server'
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import setCookie from 'set-cookie-parser'
import { redirect } from "next/navigation";


export async function login(
  prevState: {
    message: string;
  },
  formData: FormData,
) {

  const email = formData.get('email')
  const password = formData.get('password')

  const csrf = cookies().get('csrftoken')?.value

  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: 'POST',
    credentials: 'same-origin',
    headers:  {
      "X-CSRFToken":csrf!,
      Cookie: cookies().toString(),
    },
    body:JSON.stringify({
      "email": email,
      "password": password
    })

  })

  const cookie = res.headers.get("set-cookie")

  if(!cookie) {
    return { message: 'incorrect credentials'};
  }


  const parsedResponseCookies = setCookie.parse(setCookie.splitCookiesString(cookie))
  const sessionIdCookie = parsedResponseCookies.find((cookie) => cookie.name === 'sessionid')

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



    return { message: 'you are logging in'};



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