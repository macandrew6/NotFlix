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
    let video = document.getElementById("watch-movie-big-guy");
    if (video && video.requestFullscreen) {
      video.webkitRequestFullscreen();
    }
    return (
      <div 
        className="full-screen-video-player"
      >
        <div className="control-video-div">
          <video 
            className="watch-movie-big-guy"
            src={this.props.movie.movieUrl} 
            loop={true}
            width="100%" 
            height="auto"
            autoplay="autoplay"
            controls
          />
          <Link to='/browse'>
            <div className="movie-watch-back-btn">
              <i className="fas fa-arrow-alt-circle-left"></i>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}



export default MovieWatch;