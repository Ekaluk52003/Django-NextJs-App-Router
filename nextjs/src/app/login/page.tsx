import { LoginForm } from "@/components/login-form";
import { login, isLogin } from "../action";

export default async function Login() {
  const isLog = await isLogin();
  return (
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight '>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <LoginForm />
      </div>
    </div>
  );
}
