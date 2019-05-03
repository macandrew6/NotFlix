import React from 'react';

class Movie extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <li className="temp-single-movie-container">
        <img 
          className="movie-img"
          src={movie.image_url} 
          alt={movie.title} />
        <div className="movie-data">
          <h3>{movie.title}</h3>
          <div>Rated: <span className="inner-span">{movie.rating}</span></div>
        </div>
      </li>
    );
  }
}

export default Movie;