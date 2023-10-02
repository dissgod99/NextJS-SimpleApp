import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const imagePath= "https://image.tmdb.org/t/p/original"
async function MovieDetail({params}) {
    const {movie} = params
    console.log(movie)
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    console.log(res)
    console.log(Object.keys(res))
  return (
    <div>
        <div>
            <h2 className='text-2xl'>{res.title}</h2>
            <h2>Date of Release: {res.release_date}</h2>
            <h2>Popularity: {res.popularity}</h2>
            <h2>Runtime: {res.runtime}</h2>
            <h2>Status: {res.status}</h2>
            <Image 
            src={imagePath + res.backdrop_path} width={800} height={800}
            />
            <h2> Homepage: <Link className='text-orange-900' href={res.homepage}> CLICK HERE </Link></h2>
        </div>
    </div>
  )
}

export default MovieDetail