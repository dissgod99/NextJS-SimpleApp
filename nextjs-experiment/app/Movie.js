import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Movie(props) {
    const imagePath= "https://image.tmdb.org/t/p/original"
    console.log(props.poster_path)
  return (
    <div key={props.id} className='bg-red-100 p-3 rounded-md'>
        <h1 className='text-black'>{props.title}</h1>
        <h2 className='text-black'>{props.release_date}</h2>
        <Link href={`/asd`}>
            <Image src={imagePath + props.poster_path} width={800} height={800} alt={props.title}/>
        </Link>
    </div>
  )
}

export default Movie