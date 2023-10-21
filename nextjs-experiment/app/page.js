import Image from 'next/image'
import Movie from './Movie'
import './globals.css';

"https://api.themoviedb.org/3/movie/popular?api_key=API_KEY"
export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)
  console.log(res.results.length)
  return (
    <main>
      <div className='grid gap-10 grid-cols-fluid p-[5%] bg-gray-900'>
      
        {
          res.results.map((movie) => (
            <Movie 
              key={movie.id}
              id = {movie.id}
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
