import { useParams } from 'react-router-dom';
import useFetchMovie from '../hooks/useFetchMovie';

function Moviedetails() {


    const renderDeets = () => {
        return (
            <div className="border-gray-200 dark:bg-gray-800 bg-white p-10 text-black dark:text-white flex flex-row justify-center">
                <img className='rounded-t-lg max-w-[450px]' src={imgid} alt="" />
                <div className="p-20 flex flex-col gap-5">
                    <h1 className='text-6xl font-bold'>{movie.title}</h1>
                    <h3 className='text-2xl my-4'><span className='font-bold'>Overview: </span>{movie.overview}</h3>
                    <h3 className='text-2xl'><span className='font-bold'>Status: </span>{movie.status}</h3>
                    <h3 className='text-2xl'><span className='font-bold'>Release: </span>{movie.release_date}</h3>
                    <h3 className='text-2xl'><span className='font-bold'>Rating: </span>{movie.vote_average}/10</h3>
                </div>
            </div>
        )
    }

    let { id } = useParams();
    const movie = useFetchMovie({ id })
    console.log(movie)

    const imgid = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
        <div>
            {movie && renderDeets()}
        </div>

    )
}

export default Moviedetails