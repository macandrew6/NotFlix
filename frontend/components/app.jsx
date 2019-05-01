import React from 'react';
import { 
  Link,
  Route,
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route.js';
import SplashPage from './splash_page.js';
import SignupFormContainer from './session_form/signup_container.js';
import LoginFormContainer from './session_form/login_container.js';
import BrowseContainer from './browse/browse_container.js';

const App = () => (
  <header>
    <Route exact path="/" component={SplashPage} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <ProtectedRoute exact path="/browse" component={BrowseContainer} />
  </header>
);


export default App;