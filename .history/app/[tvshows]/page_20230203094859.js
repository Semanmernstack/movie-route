import Image from 'next/image'
import React from 'react'

export default async function TvshowDetail ({ params }) {
    const {tvshows} = params
    const imagePath = "https://image.tmdb.org/t/p"
    const data = await fetch(`https://api.themoviedb.org/3/tv/popular/${tvshows}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    
    return (
        <div>
            <h1>{res.overview}</h1>
            <div>
               <h1>{res.name}</h1>
            </div>
            
        </div>
    )
}