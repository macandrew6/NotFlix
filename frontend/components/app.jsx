import React from 'react';
import { 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route.js';
import SplashPage from './splash_page';
import SignupFormContainer from './session_form/signup_container';
import LoginFormContainer from './session_form/login_container';
import BrowseContainer from './browse/browse_components/browse_container.js';
import MovieWatch from './browse/movie_components/movie_watch_container';
import SearchPage from './browse/nav_bar_components/search_components/search_page';

const App = () => (
  <div className="body">
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/browse" component={BrowseContainer} />
      <ProtectedRoute path="/browse/watch/:movieId" component={MovieWatch} />
      <Redirect to="/" />
    </Switch>
  </div>
);


export default App;