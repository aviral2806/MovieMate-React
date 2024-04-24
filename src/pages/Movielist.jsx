import Moviecard from "./Moviecard"
import useFetch from "../hooks/useFetch"


function Movielist({ query }) {
    const movies = useFetch({ query })
    return (
        <main className='border-gray-200 dark:bg-gray-800 bg-white p-10 flex justify-center md:justify-around flex-row gap-10 flex-wrap'>
            {movies.map((movie, index) => {
                return (
                    <Moviecard key={index} movie={movie} />
                )
            })}
        </main>
    )
}

export default Movielist