import React from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
  }
  
  componentDidMount() {
    this.refs.player.subscribeToStateChange(this.handleStateChange);
  }

  handleStateChange(state) {
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }

  handleMouseEnter() {
    this.play();
  }

  handleMouseLeave() {
    this.pause();
    this.load();
  }

  render() {
    const { movie } = this.props;
    const { poster } = this.state;

    return (
      <li 
        className="temp-single-movie-thumbnail-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <Player 
          ref="player" 
          src={movie.movieUrl}
          poster={movie.imageUrl}
        >
          <ControlBar 
            autoHide={false} 
          >
            <PlayToggle />
          </ControlBar>
        </Player>
      </li>
    );
  }
}

// onstart render a button that controls volume and a place holder button for adding movie to list

export default Movie;