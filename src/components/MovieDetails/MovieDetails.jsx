import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MovieDetails() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.selectedGenres)
    // const selectedMovie = useSelector(store => store.selectedMovie);
    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }, []);

    return (
        <main>
            <h1>Movie Details</h1>
            <section className="details">
                <h3>{details.title}</h3>
                <img src={details.poster}/>
                <h3>{details.id}</h3>
                <h3>{details.description}</h3>
                {genres.map(genre => {
                    return (
                        <div key={genre.id} >
                            <h3>{genre.name}</h3>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieDetails;