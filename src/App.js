import React from 'react';

import classes from './App.css';

import * as ROUTES from './constants/routes';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { Container } from '@material-ui/core';

import { withFirebase } from './Firebase';
import { AuthUserContext } from './Auth';

/* Authentication */
import Auth from './pages/Auth';
import Registration from './pages/Registration';

import Navigation from './components/Navigation';

/* Primary App Pages*/
import Feed from './pages/Feed';
// import Cards from './pages/Cards'; 
import Profile from './pages/Profile';


function App({ firebase, history }) {
  const [authState, updateAuthState] = useState(null);

  // firebase.auth.onAuthStateChanged(authUser => authUser ? updateAuthState(authUser) : updateAuthState(null));
  useEffect(
    () => firebase.auth.onIdTokenChanged(
      authUser => authUser ? updateAuthState(authUser) : updateAuthState(null))
  );

  console.log('authstate: ', authState);
  return (
    <div className="App">
      <AuthUserContext.Provider value={authState}>
        <BrowserRouter>
          {
            // only render private Routes if authenticated
            authState ?
              <>
                <Navigation />
                <Container className={classes.root}>
                  <Route exact path={ROUTES.FEED} component={Feed} />
                  <Route path={ROUTES.PROFILE} component={Profile} />
                </Container>
              </>
              :
              <Redirect to={ROUTES.AUTH} />
          }

          <Route path={ROUTES.AUTH} component={Auth} />
          <Route path={ROUTES.REGISTRATION} component={Registration} />

        </BrowserRouter>
      </AuthUserContext.Provider>
    </div>
  );
}

export default withFirebase(App);
