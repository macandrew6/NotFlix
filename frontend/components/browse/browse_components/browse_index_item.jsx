import React from 'react';
import MovieThumbnail from '../movie_components/movieThumbnail';

class BrowseIndexItem extends React.Component {
  render() {
    const { movies, genre } = this.props;
    return (
      <div className="potential-slider-function's-css">
        <h2 style={{background: "white"}}>{genre.name}</h2>
        <div className="movie-thumbnail-lists-container" style={{background: "cornflowerblue", border: "1px solid red"}}>
          <div className="temp-all-movie-thumbnails-container">
            {
              movies.filter(movie => genre.movieIds.includes(movie.id)).map(movie => (
                <MovieThumbnail key={movie.id} movie={movie} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

// return <MovieThumbnail
//   movie={movies[id]}
// />;


export default BrowseIndexItem;