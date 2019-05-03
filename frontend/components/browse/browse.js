import React from 'react';
import Movie from './movie';

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
          <button onClick={logout}>LOGOUT!</button>
        </header>
        <ul className="temp-all-movies-container">
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              movie={movie}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Browse;