import React, { useState } from 'react';

import { withFirebase } from '../../Firebase';

import { Container, TextField, Button, Link, Typography } from '@material-ui/core';

function Auth({ firebase, history }) {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [error, updateError] = useState({});
  return (
    <Container maxWidth="30rem" style={{ position: 'fixed', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'white', padding: '1rem', textAlign: 'center' }}>
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
        <Button
          variant="contained"
          color="primary"
          disableElevation
          style={{ margin: '1rem' }}
          onClick={() => {
            firebase.signInWithEmailAndPassword(email, password)
              .then(() => history.push('/inventory'))
              .catch(updateError);
          }}
        >
          Sign in
                </Button>
      </form>
    </Container>
  )
}

export default withFirebase(Auth);