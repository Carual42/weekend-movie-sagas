import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MovieDetails() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    // const selectedMovie = useSelector(store => store.selectedMovie);
    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }, []);
// let movieIndex = selectedMovie - 1;
// console.log(movieIndex);
    return (
        <main>
            <h1>Movie Details</h1>
            <section className="details">
            {/* {movies.map((movie, index) => {
                    return (
                        <div key={movie[1].id} >
                            <h3>{movie[1].title}</h3>
                            <img src={movie[1].poster} alt={movie.title}/>
                        </div>
                    );
                })} */}
                <h3>{details.title}</h3>
                <img src={details.poster}/>
                <h3>{details.id}</h3>
                <h3>{details.description}</h3>
            </section>
        </main>

    );
}

export default MovieDetails;