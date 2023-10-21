import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-center w-full md:w-auto py-5 space-x-5'>
        <div className='tracking-wide text-xl font-semibold'>
            <Link href="/">Home</Link>
        </div>
        <div className='tracking-wide text-xl font-semibold'>
            <Link href="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar