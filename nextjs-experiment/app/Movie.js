import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./globals.css"
function Movie(props) {
    const imagePath= "https://image.tmdb.org/t/p/original"
    console.log(props.poster_path)
  return (
    <div key={props.id} className='bg-red-50 p-3 rounded-md relative group hover-scale hover-background'>
        <h1 className='text-black font-bold'>{props.title}</h1>
        <h2 className='text-black'>{props.release_date}</h2>
        <Link href={`/${props.id}`}>
            <Image src={imagePath + props.poster_path} width={800} height={800} alt={props.title}/>
        </Link>
    </div>
  )
}

export default Movie