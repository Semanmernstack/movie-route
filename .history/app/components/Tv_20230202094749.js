import React from 'react'

function Tv({ id, first_air_date, vote_average, poster_path, overview, name }) {
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Tv