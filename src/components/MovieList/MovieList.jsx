import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    // const index = useSelector(store => store.selectedMovie)
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    function detailsBtn (num) {
        dispatch({type: 'SET_SELECTEDMOVIE', payload: num})
        history.push('/details/${num}')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <br />
                            <button onClick={detailsBtn(movie.id)}>Details</button>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;