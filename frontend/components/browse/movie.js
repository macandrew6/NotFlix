import React from 'react';

class Movie extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <li>
        <div className="temp-single-movie-container">
          <img 
            className="movie_img"
            src={movie.image_url} 
            alt={movie.title}/>
        </div>
      </li>
    );
  }
}

export default Movie;