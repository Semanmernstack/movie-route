import React from 'react'

export default async function TvshowDetail ({ params }) {
    const {tvshows} = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular/${tvshows}?api_key=${process.env.API_KEY}`)
    
    return (
        <div>
            <h1>jjjjjj</h1>
        </div>
    )
}