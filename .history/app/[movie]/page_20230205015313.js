import Image from "next/image"

export default async function MovieDetail({ params }) {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    console.log(res)
    
    return (
        <div>
            <h1>{res.title}</h1>
            
            <div>
                <Image
                    src={imagePath + res.poster_path}
                    width={800}
                    height={800}
                />
            </div>
            <div>{res.overview}</div>
            <div>{res.genres}</div>
        </div>
    )
}