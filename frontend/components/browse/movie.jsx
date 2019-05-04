import React from 'react';
import ReactPlayer from 'react-player';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      loop: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseEnter(e) {
    setTimeout(()=>{
      this.setState({
        playing: !this.state.playing,
        loop: !this.state.loop
      });
    }, 300);
  }

  handleMouseOut() {
    this.setState({
      playing: false,
      loop: false
    });
  }

  render() {
    const { movie } = this.props;
    return (
      <li 
        className="temp-single-movie-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseOut={this.handleMouseOut}
        >
        <ReactPlayer
          width="100%"
          height="100%"
          loop={this.state.loop}
          controls
          playing={this.state.playing}
          url={movie.movie_url}
        />
      </li>
    );
  }
}

export default Movie;