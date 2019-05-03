import React from 'react';
import Movie from './movie';
import { Link } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container.js';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  componentDidMount() {
    this.props.fetchMovies();
  }
  // add scroll even listener or research onScroll react handler
  // window.addEventListener('scroll', this.handleScroll);
 
  // componentDidUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    const { logout, movies } = this.props;
    return (
      <div className="browse-container">
        <NavBarContainer />
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