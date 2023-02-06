import Image from 'next/image'
import React from 'react'

function Tv({ id, first_air_date, vote_average, poster_path, overview, name }) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        <div>
          <h1 className="bg-red-300">{name}</h1>
          <h1>{first_air_date}</h1>
        </div>
        <div>
          <Image
            src={imagePath + poster_path} alt="image"
            height={600}
            width={600}
          
          />
        </div>
        <div>
          <p>{vote_average}</p>
          <p>{overview}</p>

        </div>

        


    </div>
  )
}

export default Tv