import { useSearchParams } from "react-router-dom"
import Moviecard from "./Moviecard"
import useFetchSearch from "../hooks/useFetchSearch"


function Search() {
    const [searchParams] = useSearchParams()
    const url = searchParams.get('q')
    // const url = `https://api.themoviedb.org/3/search/movie?query=${search}`
    // console.log(url)
    const movies = useFetchSearch({ url })
    console.log(movies)
    return (
        <div className="border-gray-200 dark:bg-gray-800 bg-white text-black dark:text-white min-h-[78.2vh]">
            <section className="p-5 px-10">
                <h1 className="text-3xl">{movies.length === 0 ? `No results for ${url}` : `Results for ${url}`}</h1>
            </section>
            <main className='border-gray-200 dark:bg-gray-800 bg-white p-10 flex justify-center md:justify-around flex-row gap-10 flex-wrap'>
                {movies.map((movie, index) => {
                    return (
                        <Moviecard key={index} movie={movie} />
                    )
                })}
            </main>
        </div>

    )
}

export default Search