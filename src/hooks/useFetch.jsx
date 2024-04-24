import { useState, useEffect } from "react";

function useFetch({ query }) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWVjOGQ3NDkzYjBmNWJmYWQ4MzgyNjcyYTMwZTM0NyIsInN1YiI6IjY1ZTc4NGJkYzE1Zjg5MDE4NjE1NzI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5S_uOxQlhh8D7Tt23IPygqW1Ug6UBETUe9te5tlm7Y'
        }
    };
    // const link = `https://api.themoviedb.org/3/movie/${query}?language=en-US&page=1`
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch(query, options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
    }, [query])

    return movies
}

export default useFetch