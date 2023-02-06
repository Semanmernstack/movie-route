import Image from 'next/image'
import React from 'react'

function Tv({ id, first_air_date, vote_average, poster_path, overview, name }) {
  imagePath = "ttps://image.tmdb.org/t/p/original"
  return (

    <div>
        <div>
          <h1>{name}</h1>
          <h1>{first_air_date}</h1>
        </div>
        <div>
          <Image
            src={imagePath + poster_path} alt="image"
            height={300}
            width={300}
          />
        </div>

        


    </div>
  )
}

export default Tv