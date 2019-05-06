import React from 'react';
import MovieThumbnail from '../movie_components/movieThumbnail';

class BrowseIndexItem extends React.Component {
  render() {
    const { movies, genre } = this.props;
    return (
      <div className="movie-thumbnail-lists-container" style={{background: "cornflowerblue", border: "1px solid red"}}>
        <div className="temp-all-movie-thumbnails-container">
          <h2>{genre.name}</h2>
          {
            movies.filter(movie => genre.movieIds.includes(movie.id)).map(movie => (
              <MovieThumbnail movie={movie} />
            ))
          }
        </div>
      </div>
    );
  }
}

// return <MovieThumbnail
//   movie={movies[id]}
// />;

export default BrowseIndexItem;