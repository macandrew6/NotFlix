import React from 'react';
import MovieThumbnail from '../movie_components/movieThumbnail';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar_components/nav_bar_container.js';

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
        <div className="movie-thumbnail-lists-container">
          <ul className="temp-all-movie-thumbnails-container">
            {movies.map(movie => (
              <MovieThumbnail
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