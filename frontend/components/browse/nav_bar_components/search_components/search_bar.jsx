import React from 'react';
import SearchPage from './search_page';
import { AuthRoute } from '../../../../util/route_util.js';
import { Route, Redirect } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      filteredMovies: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  handleSearchChange(e) {
    e.preventDefault();
    let newList = [];
    if(e.target.value) {
      newList = this.state.movies
        .filter(movie => movie.title.toLowerCase()
          .includes(e.target.value.toLowerCase())
        );
    }

    this.setState({
      filteredMovies: newList 
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      movies: nextProps.movies
    });
  }

  render() {
    let { user } = this.props;
    let { filteredMovies } = this.state;
    if(!filteredMovies) {
      return null;
    }

    return (
      <div >
        <div className="search-bar-container">
          <div className="icon-div"><i className="fas fa-search"></i></div>
          <input 
            className="search-bar"
            type="text" 
            placeholder="Title, people, genres..."
            value={this.state.input}
            onChange={this.handleSearchChange}  
          />
        </div>
        <div>
          {filteredMovies.length > 0 ? 
            <SearchPage filteredMovies={filteredMovies} user={user} /> : 
            null
          }
        </div>
      </div>
    );
  }
}


export default SearchBar;