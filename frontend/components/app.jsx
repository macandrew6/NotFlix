import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route';
import SplashPage from './splash_page';
import SignupFormContainer from './session_form/signup_container';
import LoginFormContainer from './session_form/login_container';
import NavBarContainer from './browse/nav_bar_container';
import BrowseContainer from './browse/browse_container';

const App = () => (
  <header>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/browse" component={NavBarContainer} />
      <ProtectedRoute path="/browse" component={BrowseContainer} />
    </Switch>
  </header>
);


export default App;