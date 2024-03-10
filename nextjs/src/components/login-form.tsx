"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/app/action";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      aria-disabled={pending}
      className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Login
    </button>
  );
}

export function LoginForm() {
  const [state, loginAction] = useFormState(login, initialState);

  return (
    <form className='space-y-6' action={loginAction}>
      <div>
        <label className='block text-sm font-medium leading-6'>
          Email address
        </label>
        <div className='mt-2'>
          <input
            id='email'
            name='email'
            type='email'
            className='dark:text-gray-700 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label className='dark:text-white block text-sm font-medium leading-6'>
            Password
          </label>
        </div>
        <div className='mt-2'>
          <input
            id='password'
            name='password'
            type='password'
            className='dark:text-gray-700 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div>
        <SubmitButton />
        {state?.message}
      </div>
    </form>
  );
}
