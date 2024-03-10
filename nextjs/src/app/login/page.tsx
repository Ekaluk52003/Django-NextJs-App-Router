
import { login , isLogin} from "../action";
import CSRFToken from "@/components/CSRFToken";


export default async function Login() {
const isLog = await isLogin()
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form action={login}>
        {/* <CSRFToken /> */}

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
