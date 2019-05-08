import React from 'react';
import { Link } from 'react-router-dom';

class MovieWatch extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  render() {
    if (!this.props.movie) {
      return null;
    }
    console.log(this.props);
    return (
      <div className="full-screen-video-player">
        <Link to='/browse'>
          <button className="movie-watch-back-btn">back</button>
        </Link>
        
        <video 
          src={this.props.movie.movieUrl} 
          width="100%" 
          height="auto"
          autoplay="autoplay"
          controls
        />
      
      </div>
    );
  }
}



export default MovieWatch;