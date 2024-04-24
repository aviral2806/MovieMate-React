import { useState, useEffect } from "react";
function useFetchSearch({ url }) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWVjOGQ3NDkzYjBmNWJmYWQ4MzgyNjcyYTMwZTM0NyIsInN1YiI6IjY1ZTc4NGJkYzE1Zjg5MDE4NjE1NzI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5S_uOxQlhh8D7Tt23IPygqW1Ug6UBETUe9te5tlm7Y'
        }
    };
    const [movies, setMovies] = useState([])


    useEffect(() => {
        console.log({ url })
        fetch(`https://api.themoviedb.org/3/search/movie?query=${url}&page=1`, options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    }, [url])

    return movies
}

export default useFetchSearch