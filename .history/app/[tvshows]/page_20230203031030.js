import Image from 'next/image'
import React from 'react'

export default async function TvshowDetail ({ params }) {
    const {tvshows} = params
    
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular/${tvshows}?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    
    return (
        <div>
            <h1>{data.overview}</h1>
            <div>
                <Image
                    src={imagePath + data.poster_path} alt="image"
                    height={300}
                    width={300}
                />
            </div>
        </div>
    )
}