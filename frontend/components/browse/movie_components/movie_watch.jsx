import React from 'react';
import { Link } from 'react-router-dom';

class MovieWatch extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  handleMouseMove(e) {
    e.preventDefault();


  }

  render() {
    if (!this.props.movie) {
      return null;
    }
    console.log(this.props);
    return (
      <div 
        className="full-screen-video-player"
        onMouseMove={this.handleMouseMove}
      >
        <Link to='/browse'>
          <div className="movie-watch-back-btn">
            <i className="fas fa-arrow-alt-circle-left"></i>
          </div>
        </Link>
        
        <video 
          src={this.props.movie.movieUrl} 
          loop={true}
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