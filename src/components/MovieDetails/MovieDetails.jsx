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
        </main>

    );
}

export default MovieDetails;