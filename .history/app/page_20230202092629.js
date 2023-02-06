

export default async function Homepage() {
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?=api_key=${process.env.API_KEY}`)
  const data = await res.json()
  console.log(data)
  return (
    
    <div>
        <p>hhh</p>
    </div>
  )
}

 