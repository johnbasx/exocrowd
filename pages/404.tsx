import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className='grid h-screen px-4 bg-white place-content-center'>
      <div className='text-center'>
        <h1 className='font-black text-gray-200 text-9xl'>404</h1>

        <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Uh-oh!
        </p>

        <p className='mt-4 text-gray-500'>We can&apos;t find that page.</p>

        <Link
          href='/'
          className='inline-block px-5 py-3 mt-6  text-white bg-blue-500 rounded-full text-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
