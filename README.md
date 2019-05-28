# README
[Notflix](https://not-flix.herokuapp.com/#/)

# Notflix 
Notflix is a media streaming website where movies are seperated into genres, inpired by Netflix. It makes use of a Rails/PostgreSQL backend that interacts with a React.js/Redux frontend.
This project was built within a span of 10 days.
Bug fixes and refactors are underway.

# Frontend
* Secure frontend to backend user authentication using BCrypt.
* Users can hover over movie thumbnails to watch a trailer of the movie
* On the thumbnails the user can turn off the sound
* Users can also dynamically add the movie to their "My List" page on clicking the add button
* On click of a thumbnail User is brought to a watch page where the movie data is then played in full screen
* User can scroll through movies in each genre list within the homepage

# Dynamic Video Thumbnails
* Movie thumbnails can be hovered over to reactively grow in size, but also fires a function to play the video. To do this I used a video library called [Video-React](https://video-react.js.org/). This is a fun library to learn, I guess the coolest thing I'd like to highlight is the .subscribeToStateChange() function that they provide out of box. The idea is that you can call subscribleToStateChange with a callback function where you can connect the state of a component to the player. You can imagine all the possibilities at this point. I'll leave the rest of the exploration of this library in your hands. 

![Active Thumbnail demo](https://github.com/macandrew6/NotFlix/blob/master/docs/images/notflix-screenshot.png)

* How I implemented this was adding a react mouseEnter event handler on the thumbnail component that changes the state of the component, then on change of that component I was able to fire functions on my video player to operate the video, eg.(play, pause, load, mute) these are only a few of the things that are possible for these videos.
```
  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange);
  }

  handleStateChange(state, prevState) {
    this.setState({
      player: state
    });
  }
```

# Genre-List Carousel
* It was particularily complex implementing the sliding feature for each genre-list on the browse page. For each genre list to implement the slide bar I had to somehow give each genre-list it's own state so that my user would be able to slide the list without affecting the other lists. To do this I implemented this nifty little react static life cycle method called getDerivedStateFromProps (to learn more about this life cycle method visit [getDerivedStateFromProps](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)) which has access to nextProps and also previousState. You can check out the implementation in my GenreList component. but the idea was to give each genrelist its own copy of the movies in that specific genre. I did this because if when scaling this app to have more genres, it would be as simple as adding more genre data and movies of that genre to the database, where the front end handles all of the organizing aspects of presentation data.

passes down movies filtered by genre to presentational component:
`genre_lists_container.js`
```
  const mapStateToProps = ({entities: { movies, users }, session}, ownProps) => ({
    user: users[session.id],
    genre: ownProps.genre,
    moviesInGenre: Object.values(ownProps.movies)
      .filter(movie => ownProps.genre.movieIds.includes(movie.id))
  });
```
Saves the movies to the state of each genre-list component:
`genre_lists.jsx`
```
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.moviesInGenre !== prevState.moviesInGenre) {
      return { moviesInGenre: nextProps.moviesInGenre};
    } else {
      return null;
    }
  }
```

<!-- ![Genre List carousel demo](doc/clip/genre-corousel-demo.mp4/) -->

v2.0 refactors to be rolled out May 28th 
* thumbnails, making them less data expensive during load of browse page
* adds a showpage button on each thumbnail which renders a block gracifully with more movie details will be rolled out May 28th. 
* search by genre and year