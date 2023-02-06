import Image from 'next/image'
import React from 'react'

export default async function TvshowDetail ({ params }) {
    const {tvshows} = params
    const imagePath = "https://image.tmdb.org/t/p/original/"
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular/${tvshows}?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    
    return (
        <div>
            <h1>{data.overview}</h1>
            <div>
                <Image
                    src={imagePath + data.poster_path}
                    width={200}
                    height={200}
                    alt="profile"
                />
            </div>
            
        </div>
    )
}