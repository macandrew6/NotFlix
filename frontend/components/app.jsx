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
import NavBarContainer from './browse/nav_bar_components/nav_bar_container.js';
import BrowseContainer from './browse/browse_components/browse_container.js';

const App = () => (
  <header>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/browse" component={BrowseContainer} />
      <Redirect to="/" />
    </Switch>
  </header>
);


export default App;