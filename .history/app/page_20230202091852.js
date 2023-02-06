

async export default function Homepage() {
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?=api_key=${process.env.API_KEY}`)
  return (
    
    <div>
        <p>hhh</p>
    </div>
  )
}

 