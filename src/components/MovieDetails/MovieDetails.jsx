import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

    const dispatch = useDispatch();
    const details = useSelector(store => store.details);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS' });
    }, []);

    return (
        <main>
            <h1>Movie Details</h1>
            <section className="details">
                <h3>{details.title}</h3>
                <h3>{details.poster}</h3>
                <h3>{details.id}</h3>
                <h3>{details.description}</h3>
                <h3>{details.image}</h3>
            </section>
        </main>

    );
}

export default MovieDetails;