import Tv from "./components/Tv"


export default async function Homepage() {
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`)
  const data = await res.json()
  console.log(data)
  
  return (
    
    <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 h-screen">
            {data.results.map((result) => (
               <Tv
                    key={result.id}
                    id= {result.id}
                    name={result.name}
                    overview={result.overview}
                    poster_path={result.poster_path}
                    vote_average={result.vote_average}
                    first_air_date={result.first_air_date}
                                                    
               />
            ))}
        </div>
    </div>
  )
}

 