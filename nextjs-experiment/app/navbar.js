import React from 'react'
import Link from 'next/link';
import "./globals.css"
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { Dancing_Script } from 'next/font/google';
const roboto = Roboto({
    subsets: ['latin'],
    weight: "900",
})


const dancing_script = Dancing_Script({
    subsets: ["latin"],
})


const Navbar = () => {
  return (

    <div className='flex justify-center w-full md:w-auto py-5 space-x-7 bg-red-400 bg-opacity-25'>
        {/* <div>
            <Image 
                src=""
                width={25}
                height={25}

            />

            
        </div> */}

        {/* <h2 className='tracking-wide text-xl font-semibold'>
            CinePulse
        </h2> */}
        <div className='tracking-wide text-xl font-semibold'>
            <h2 className={dancing_script.className}>
                CinePulse
            </h2>
        </div>

        <div className="flex space-x-7">
            <h2 className='tracking-wide text-xl font-semibold'>
                <Link href="/" className='hover-menu-color'>Home</Link>
            </h2>
            <h2 className='tracking-wide text-xl font-semibold'>
                <Link href="/about" className='hover-menu-color'>About</Link>
            </h2>
        </div>
    </div>
    
  )
}

export default Navbar