import React from 'react';
import { Link } from 'react-router-dom';
import MovieThumbnail from '../movie_components/movieThumbnail';
import NavBarContainer from '../nav_bar_components/nav_bar_container.js';
import BrowseIndexItem from './browse_index_item';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenres();
    this.props.fetchMovieGenres();
    this.props.fetchMovies();
  }



  // add scroll even listener or research onScroll react handler
  // window.addEventListener('scroll', this.handleScroll);
 
  // componentDidUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    const { logout, movies, moviesByGenre } = this.props;

    console.log(moviesByGenre);
    return (
      <div className="browse-container">
        <NavBarContainer />
        <BrowseIndexItem />
      </div>
    );
  }
}

export default Browse;

// <div className="movie-thumbnail-lists-container">
//   <div className="temp-all-movie-thumbnails-container">
//     {movies.map(movie => (
//       <MovieThumbnail
//         key={movie.id}
//         movie={movie}
//       />
//     ))}
//   </div>
// </div>