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
    <div className='flex justify-center items-center h-screen bg-gray-200 w-full '>
        <div className='text-black flex flex-col items-center h-full w-full text-center'>
            <h2 className='my-5 text-3xl font-bold text-gray-800 mb-4'>{res.title}</h2>

            <div className='mx-auto'>
                <Image className='rounded-md '
                src={imagePath + res.backdrop_path} width={800} height={800}
                />
            </div>

            <div className='flex justify-center items-center space-x-6'>
              <div></div> 
            <h2 className='text-lg my-2'> <span className='font-bold'>Date of Release:</span> {res.release_date}</h2>
            <h2 className='text-lg my-2'> <span className='font-bold'>Popularity:</span> {res.popularity}</h2>
            <h2 className='text-lg my-2'><span className='font-bold'>Runtime:</span> {res.runtime}</h2>
            <h2 className='text-lg my-2'><span className='font-bold'>Status:</span> {res.status}</h2>
            </div>
            
            <h2 className='text-lg my-2 my-3 w-8/12'><span className='font-bold'>Overview:</span> {res.overview}</h2>
            <h2 className='text-lg my-2 my-5 font-bold'> Homepage: <Link className='text-orange-900 font-bold' href={res.homepage}> CLICK HERE </Link></h2>
        </div>
    </div>
  )
}

export default MovieDetail