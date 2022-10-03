import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import {useHistory} from 'react-router-dom';


function App() {



  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
