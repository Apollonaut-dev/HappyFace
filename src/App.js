import React from 'react';

import * as ROUTES from './constants/routes';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { withFirebase } from './Firebase';
import { AuthUserContext } from './Auth';

/* Authentication */
import Auth from './pages/Auth';
import Registration from './pages/Registration';

import Navigation from './components/Navigation';

/* Primary App Pages*/
import Feed from './pages/Feed';

import Profile from './pages/Profile';

import Post from './models/Post';


function App({ firebase, history }) {
  const [authState, updateAuthState] = useState(null);

  useEffect(() => {
    // returns unsubscribe function
    return firebase.authStateChangeListener(authUser => authUser ? updateAuthState(authUser) : updateAuthState(null))
  }, [firebase]);

  return (
    <div className="App">
      <AuthUserContext.Provider value={authState}>
        <BrowserRouter>
          <Switch>
            <Route path={ROUTES.AUTH} component={Auth} />
            <Route path={ROUTES.REGISTRATION} component={Registration} />
            <PrivateRoute path={ROUTES.PROFILE} authState={authState}>
              <Profile />
            </PrivateRoute>
            <PrivateRoute path={ROUTES.FEED} authState={authState}>
              <Feed />
            </PrivateRoute>
            {/* catch-all route */}
            <Route path={ROUTES.ROOT}>
              {authState && <Navigation />}
              <main>
                <h1>404</h1>
              </main>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthUserContext.Provider>
    </div>
  );
}

function PrivateRoute({ authState, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authState ? (
          <>
            <Navigation />
            {console.log('rendering...location: ', location)}
            <main>
              {children}
            </main>
          </>
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.AUTH,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default withFirebase(App);
