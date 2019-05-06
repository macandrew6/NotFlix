import React from 'react';
import { Player, ControlBar } from 'video-react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.sources = {
      trailer: this.props.movie.trailerUrl,
      movie: this.props.movie.movieUrl
    };
    this.state = {
      height: 130,
      width: 229,
      source: this.sources.trailer,
      autoplay: false,
      toggleControls: false
    };
  
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    // this.handleFullScreenChange = this.handleFullScreenChange.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
  }
  
  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange);
  }

  componentDidUpdate() {
  }

  handleStateChange(state, prevState) {
    this.setState({
      player: state
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  toggleSound(soundState) {
    return () => {
      if (this.player.muted) {
        this.player.muted = soundState;
      } else {
        this.player.muted = !soundState;
      }
    };
  }

  changeSource() {
    return () => {
      console.log(this.props.movie.movieUrl);
      this.setState({
        source: this.sources.movie,
        width: null,
        height: null,
        autoplay: !this.state.autoplay,
        toggleControls: !this.state.toggleControls
      });
      setTimeout(() => {
        this.player.toggleFullscreen();
        this.play();
      }, 300);
    };
  }
  
  handleMouseEnter(e) {
    e.preventDefault();
    this.setState({
      height: 200,
      width: 370
    });
    setTimeout(() => {
      this.play();
    }, 100);
  }

  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({
      height:130,
      width: 229
    });
    setTimeout(() => {
      this.pause();
      this.load();
    }, 300);
  }

  // handleFullScreenChange() {
  //   return () => this.player.handleFullScreenChange(() => {
  //     this.setState({
  //       source: this.sources.trailerUrl
  //     });
  //   });
  // }
      
  render() {

    const { movie } = this.props;
    const { width, height, source, autoplay } = this.state;

    return (
      <div 
        className="temp-single-movie-thumbnail-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <Player 
          ref={(p) => {
            this.player = p;
          }}
          autoplay={autoplay}
          fluid={false}
          poster={movie.imageUrl}
          src={source}
          width={width}
          height={height}
        >
          <ControlBar style={{display: "flex"}}/>
        </Player>
        <button onClick={this.toggleSound(false)}>sound</button>
        <button onClick={this.changeSource()}>play</button>
      </div>
    );
  }
}

// onstart render a button that controls volume and a place holder button for adding movie to list

export default Movie;