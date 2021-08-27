import classes from './App.css';
import * as ROUTES from './constants/routes';

import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Container } from '@material-ui/core';

import { withFirebase } from './Firebase';
import { AuthUserContext } from './Auth';

import Navigation from './components/Navigation';
import Auth from './pages/Auth';
import Feed from './pages/Feed';
import Account from './pages/Account';
import Profile from './pages/Profile';


function App({ firebase }) {
  const [authState, updateAuthState] = useState(null);

  useEffect(
    () => firebase.auth.onAuthStateChanged(
      authUser => authUser ? updateAuthState(authState) : updateAuthState(null))
  );

  return (
    <div className="App">
      <AuthUserContext.Provider value={authState}>
        {
          true ?
            <BrowserRouter>
              <Navigation />
              <Container className={classes.root}>
                <Route exact path={ROUTES.ROOT} component={Feed} />
                <Route path={'/profile'} component={Profile} />
                <Route path={'/account'} component={Account} />
              </Container>
            </BrowserRouter>
            :
            <Auth />
        }
      </AuthUserContext.Provider>
    </div>
  );
}

export default withFirebase(App);
// export default App;
