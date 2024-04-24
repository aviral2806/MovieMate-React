import { NavLink } from "react-router-dom"


function Moviecard({ movie }) {
    const imgid = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return (
        <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg w-80" src={imgid} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
                <NavLink to={`/movie/${movie.id}`} >
                    <span className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-white dark:hover:border-0 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </span>
                </NavLink>

            </div>
        </div >
    )
}

export default Moviecard