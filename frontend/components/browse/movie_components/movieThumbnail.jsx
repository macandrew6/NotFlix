import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';

class MovieThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.sources = {
      trailer: this.props.movie.trailerUrl,
      movie: this.props.movie.movieUrl
    };
    this.state = {
      movie_id: this.props.movie.id,
      user_id: this.props.user.id,
      movieAddedToList: false,
      height: 149,
      width: 250,
      source: this.sources.trailer,
      autoplay: false,
      showButtons: false,
      toggleControls: false,
    };
  
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleRemoveMovie = this.handleRemoveMovie.bind(this);
    // this.openShowPage = this.openShowPage.bind(this);
    // this.closeShowPage = this.closeShowPage.bind(this);
  }
  
  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange);
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
  
  handleMouseEnter(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      // height: 260,
      // width: 460,
      showButtons: true
    });
    setTimeout(() => {
      this.play();
    }, 270);
  }

  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({
      height: 149,
      width: 250,
      showButtons: false
    });
    setTimeout(() => {
      this.pause();
      this.load();
    }, 380);
  }

  handleRemoveMovie(e) {
    e.preventDefault();
    //send some data to the database to delete this association from the db
    console.log('i dont do anything yet, but im supposed to remove this movie from my list');
  }

  handleAddMovie(e) {
    e.preventDefault();
    const assData = {
      user_movie: {
        user_id: this.state.user_id,
        movie_id: this.state.movie_id
      }
    };
    setTimeout(() => {
      this.props.postUserMovie(assData);
    }, 300);

    this.setState({
      movieAddedToList: true
    });
  }
      
  render() {
    const { movie } = this.props;
    const { width, height, source, autoplay, showButtons } = this.state;
    return (
      <div 
        className="movie-thumbnail-slide"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={this.props.offSet ? {
          transform: `translateX(${this.props.offSet[0]}px)`,
          display: `${this.props.offSet[1] ? 'flex' : 'none'}`
        } : {position: 'relative'}}
        >
        <Link to={`/browse/watch/${movie.id}`}>
          <Player 
            ref={(p) => {
              this.player = p;
            }}
            autoPlay={autoplay}
            muted={true}
            fluid={false}
            poster={movie.imageUrl}
            src={source}
            width={width}
            height={height}
          >
          </Player>
        </Link>
        
        {showButtons ? 
          <div className="button-div">
            <div className="toggle-thumbnail-sound" onClick={this.toggleSound(false)}>
              <i className="fas fa-volume-up"></i>
            </div>
            {this.state.movieAddedToList ?
              <button 
                disabled={!this.state.movieAddedToList}
                className="remove-movie-btn" 
                onClick={this.handleRemoveMovie} 
              >
                <i className="fas fa-minus-circle"></i>
              </button> :
              <button 
                disabled={this.state.movieAddedToList} 
                className="add-movie-btn" 
                onClick={this.handleAddMovie}
              >
                <i className="fas fa-plus"></i>
              </button>
            }
          </div> : 
          null
        }
      </div>
    );
  }
}


export default MovieThumbnail;