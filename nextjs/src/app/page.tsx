import Link from "next/link";

export default function Home() {
  return (
    <section className='body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4'>
            Next App Router with Django Backend Session Authentication Starter
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            If you are someone who do not want to leave Django behind but still
            want to use latest Tech Frontend Javascript NextJs.
          </p>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Docker included.
          </p>
          <Link href='/login'>
            <button className='flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Try to login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
