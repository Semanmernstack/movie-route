import React from 'react'

export default async function Tvshow ({ params }) {
    const {tvshows} = params
    console.log(params)
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular/${tvshows}?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    return (
        <div>
            <h1>mmmm</h1>
        </div>
    )
}