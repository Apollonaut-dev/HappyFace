import React, { useState } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { Link as RouteLink } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import { withFirebase } from '../../Firebase';

import { Container, TextField, Button, Link, Typography } from '@material-ui/core';

function Signin({ firebase }) {
  const [loading, updateLoadingState] = useState(false);
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [error, updateError] = useState({});
  
  // will return user to previous location
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: ROUTES.FEED } };
  return (
    <Container maxWidth="md" style={{ position: 'fixed', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'white', padding: '1rem', textAlign: 'center' }}>
      {loading ?
        <CircularProgress />
        :
        <form className="signin-form">
          <Typography>
            Happy Face
          </Typography>
          <div>
            <TextField
              style={{ width: '20rem', margin: '0.5rem' }}
              label="Email"
              value={email}
              error={error.code}
              helperText={error.code === 'auth/invalid-email' ? error.message : ''}
              onChange={e => updateEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              style={{ width: '20rem', margin: '0.5rem' }}
              error={error.code}
              label="Password"
              type="password"
              helperText={error.code === 'auth/wrong-password' ? error.message : <Link href="#" onClick={e => e.preventDefault()}>Forgot password?</Link>}
              value={password}
              onChange={e => updatePassword(e.target.value)}
            />
          </div>
          <Container>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              style={{ margin: '1rem' }}
              onClick={() => {
                updateLoadingState(true);
                firebase.signInWithEmailAndPassword(email, password)
                  .then(() => history.replace(from.pathname))
                  .catch(e => updateError(e) || updateLoadingState(false));
              }}
            >
              Sign in
            </Button>
            <RouteLink to={ROUTES.REGISTRATION}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                style={{ margin: '1rem' }}
              >
                Sign up
              </Button>
            </RouteLink>
          </Container>
        </form>}
    </Container>
  )
}

export default withFirebase(Signin);