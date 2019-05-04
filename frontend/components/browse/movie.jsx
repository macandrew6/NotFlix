import React from 'react';
import ReactPlayer from 'react-player';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      loop: false,
      controls: false,
      light: this.props.movie.imageUrl, // this isn't working properly
      volume: 0
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      playing: !this.state.playing,
      loop: !this.state.loop,
      light: false, // isn't working properly
      volume: 1
    });
  }

  handleMouseLeave() {
    this.setState({
      playing: false,
      loop: false,
      light: this.props.movie.imageUrl, // isn't working properly
      volume: 0
    });
  }

  render() {
    const { movie } = this.props;
    const { volume, light, loop, playing, controls} = this.state;

    return (
      <li 
        className="temp-single-movie-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <ReactPlayer
          muted={true}
          width="100%"
          height="100%"
          volume={null}
          playing={playing}
          url={movie.movieUrl}
        />
      </li>
    );
  }
}

// onstart render a button that controls volume and a place holder button for adding movie to list

export default Movie;