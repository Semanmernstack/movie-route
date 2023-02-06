import React from 'react'

export default async function Tvshow ({ params }) {
    
    
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular/${tvshows}?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    console.log(data)
    return (
        <div>
            <h1>mmmm</h1>
        </div>
    )
}