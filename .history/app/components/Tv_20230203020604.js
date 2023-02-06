import Image from 'next/image'
import React from 'react'

function Tv({ id, first_air_date, vote_average, poster_path, overview, name }) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (

    <div className="flex flex-col p-4 ">
        <div className="flex items-center justify-around mb-4">
          <h1 className="text-red-900 text-xl font-extrabold font-serif">{name}</h1>
          <h1>{first_air_date}</h1>
        </div>
        <div>
          <Image
            src={imagePath + poster_path} alt="image"
            height={300}
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