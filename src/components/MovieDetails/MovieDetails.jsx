import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function MovieDetails() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.selectedGenres)
    const history = useHistory();
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
                <button onClick={(event) => history.push('/')}>Movie List</button>
            </section>
        </main>

    );
}

export default MovieDetails;