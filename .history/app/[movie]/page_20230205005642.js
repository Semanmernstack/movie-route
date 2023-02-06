export default async function MovieDetail({ params }) {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const res = await fetch(`https://api.themoviedb.org/3/movie${movie}?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    
    return (
        <div>
            <h1>{data.name}</h1>
            <h1>hhh</h1>
        </div>
    )
}