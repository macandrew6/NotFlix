import React from 'react';
import SearchPage from './search_page';
import { withRouter } from 'react-router-dom';
import { AuthRoute } from '../../../../util/route.js';
import { Route } from 'react-router-dom';

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
    let { filteredMovies } = this.state;
    if(!filteredMovies) {
      return null;
    }
    console.log("filtered movies in render",filteredMovies);

    return (
      <div>
        <input 
          className="search-bar"
          type="text" 
          placeholder="Title, people, genres"
          value={this.state.input}
          onChange={this.handleSearchChange}  
        />
        <div>
          {this.state.filteredMovies.length > 0 ? 
            <Route 
              exact
              to="search" 
              component={SearchPage} 
              filteredMovies={filteredMovies}
            /> : 
            null
          }
        </div>
      </div>
    );
  }
}


export default withRouter(SearchBar);