import React from 'react';
import { withRouter } from 'react-router-dom';
import MovieThumbnail from '../../movie_components/movieThumbnail';

const SearchPage = (props) => {
  console.log("filtered movies search Page", props);
  const { filteredMovies } = props;
  return (
    <div className="search-page-container">
      <div className="search-page">
        {filteredMovies.map(movie => (
          <MovieThumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(SearchPage);