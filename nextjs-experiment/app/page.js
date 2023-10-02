import Image from 'next/image'
import Movie from './Movie'

"https://api.themoviedb.org/3/movie/popular?api_key=API_KEY"
export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)
  console.log(res.results.length)
  return (
    <main>
      <h1 className='text-lg py-2 m-4 font-semibold text-red-800'>Hello everyone</h1>
      <div className='grid gap-10 grid-cols-fluid p-[5%]'>
      
        {
          res.results.map((movie) => (
            <Movie 
              key={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
            />
          ))
        }
      
      </div>
    </main>
  )
}
