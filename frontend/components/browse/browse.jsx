import React from 'react';
import Movie from './movie';
import { Link } from 'react-router-dom';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { logout, movies } = this.props;
    return (
      <div className="browse-container">
        <header>
          <nav>
            <Link to="/browse" className="logo"></Link>
          </nav>
          <nav>
            <button onClick={logout}>LOGOUT!</button>
          </nav>
        </header>
        <div className="movie-lists-container">
          <ul className="temp-all-movies-container">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                movie={movie}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Browse;