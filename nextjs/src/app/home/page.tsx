// import { cookies } from "next/headers";
"use server";
import React, { useState } from "react";
import { cookies } from "next/headers";
import { logout, getSession } from "../action";



export default async function Home() {
  const data = await getSession();


  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      Who {data.email}
      <div>
        <form action={logout}>
          <button type='submit'>Logout</button>
        </form>
      </div>
    </div>
  );
}
