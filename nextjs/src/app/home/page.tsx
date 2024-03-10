"use server";
import React, { useState } from "react";
import { logout, getSession } from "../action";
import Link from "next/link";
export default async function Home() {
  const data = await getSession();

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4'>
        This page is protected and server side rendering
      </h1>
      <p>Welcome User from Django!! {data.email}</p>
      <div>
        <form action={logout}>
          <button
            type='submit'
            className='flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            Logout
          </button>
        </form>
      </div>
      <div>
        <button
          type='submit'
          className='flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-400 rounded text-lg'
        >
          <Link href='/'> Home</Link>
        </button>
      </div>
    </div>
  );
}
