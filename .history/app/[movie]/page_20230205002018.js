export default async function MovieDetail({ params }) {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/orginal"
    const data = await fetch(`https://api.themoviedb.org/3/tv/popular/${movie}?api_key=${process.env.API_KEY}`)
    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}