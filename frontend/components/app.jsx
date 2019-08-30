import React from 'react';
import { 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.js';
import SplashPage from './splash_page';
import SignupFormContainer from './session_form/signup_container';
import LoginFormContainer from './session_form/login_container';
import BrowseContainer from './browse/browse_components/browse_container.js';
import MovieWatch from './browse/movie_components/movie_watch_container';
import MyListContainer from './browse/my_lists_components/my_list_container';

const App = () => (
  <div className="body">
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/browse" component={BrowseContainer} />
      <ProtectedRoute exact path="/browse/watch/:movieId" component={MovieWatch} />
      <ProtectedRoute exact path="/browse/my-list" component={MyListContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);


export default App;