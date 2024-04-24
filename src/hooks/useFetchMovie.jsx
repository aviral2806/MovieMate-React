import { useState, useEffect } from 'react';

function useFetchMovie({ id }) {
    const [movie, setMovie] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWVjOGQ3NDkzYjBmNWJmYWQ4MzgyNjcyYTMwZTM0NyIsInN1YiI6IjY1ZTc4NGJkYzE1Zjg5MDE4NjE1NzI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5S_uOxQlhh8D7Tt23IPygqW1Ug6UBETUe9te5tlm7Y'
        }
    };

    useEffect(() => {
        console.log('in useeffect')
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => setMovie(response))
            .catch(err => console.error(err));
    }, [id])


    return movie
}

export default useFetchMovie