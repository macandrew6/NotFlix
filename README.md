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

![Active Thumbnail demo](doc/images/thumbnail.png/)

How I implemented this was adding a react mouseEnter event handler on the thumbnail component that changes the state of the component, then on change of that component I was able to fire functions on my video player to operate the video, eg.(play, pause, load, mute) these are only a few of the things that are possible for these videos.

Things you may want to cover:

* Ruby version
* System dependencies
* Configuration
* Database creation
* Database initialization
  
* Deployment instructions
* ...
