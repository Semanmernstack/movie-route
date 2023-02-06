import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Tv({ id, first_air_date, vote_average, poster_path, overview, name }) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (

    <div className="flex flex-col p-4 ">
        <Link href={`/${id}`} >
        <div className="flex flex-col items-center  mb-4">
          <h1 className="text-red-900 text-2xl font-extrabold font-serif">{name}</h1>
          <h1 className='font-bold'>{first_air_date}</h1>
        </div>
        <div className="object-contain ">
          <Image
            src={imagePath + poster_path} alt="image"
            
            width={500}
            height={500}
          
          />
        </div>
        <div>
          <p>{vote_average}</p>
          <p>{overview}</p>

        </div>
        </Link>

        


    </div>
  )
}

export default Tv