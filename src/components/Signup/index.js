import React, { useState } from 'react';
import classes from './index.module.css';

import * as ROUTES from '../../constants/routes';

import User from '../../models/User';

import {
  Paper,
  Button,
  FormLabel,
  FormControl,
  // FormControlLabel,
  FormHelperText,
  Input,
  // InputLabel,
} from '@material-ui/core';

import { withFirebase } from '../../Firebase';

function Signup({ firebase, history }) {
  const [formData, updateFormData] = useState({ email: '', name: '', password: '', confirmPassword: '' });
  const [validationErrors, updateValidationErrors] = useState({ email: null, name: null, password: null, confirmPassword: null });

  const handleSubmit = () => {
    const errors = {};
    // these must be checked before async firebase API call
    if (formData.name.length < 2) {
      errors.name = 'Name must be at least two characters';
    } else {
      errors.name = null;
    }
    if (formData.confirmPassword.length === 0) {
      errors.confirmPassword = 'Please confirm password';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    } else {
      errors.confirmPassword = null;
    }
    // if no non-essential form field errors, call firebase API
    if (errors.confirmPassword || errors.name) {
      // otherwise update error state
      updateValidationErrors({ ...validationErrors, ...errors });
    } else {
      firebase.signUpWithEmailAndPassword(formData.email, formData.password, formData.name)
        .then((u) => {
          console.log(formData);
          return User.create(u.user.uid, formData.email, formData.name);
        })
        .then(() => {
          history.push(ROUTES.FEED)
        })
        .catch(error => {
          errors.password = null;
          errors.email = null;
          switch (error.code) {
            // eslint-disable-next-line
            case undefined:
            case null:
            case '':
              break;
            case 'auth/weak-password':
              errors.password = error.message;
              // eslint-disable-next-line
            case 'auth/email-already-in-use':
              errors.email = error.message;
              break;
            case 'auth/email-invalid':
              errors.email = error.message;
              break;
            case 'auth/operation-not-allowed':
              errors.email = error.message;
              break;
            default:
              throw new Error(error);
          }
          updateValidationErrors({ ...validationErrors, ...errors });
        });
    }
  }

  return (
    <Paper className={classes.formWrapper}>
      <form className={classes.SignUpForm}>{/*error={!!validationErrors}*/}
        <FormLabel>
          Sign up for Happy Face
        </FormLabel>

        <FormControl error={!!validationErrors.name} className={classes.formControl}>
          {/* <InputLabel htmlFor="name">Name</InputLabel> */}
          <Input
            placeholder="Full name"
            type="name" id="name" aria-describedby="name-helper-text"
            value={formData.name}
            onChange={(e) => updateFormData({ ...formData, name: e.target.value })}
          />
          <FormHelperText id="name-helper-text">{!!validationErrors.name ? validationErrors.name : 'Enter your full name'}</FormHelperText>
        </FormControl>

        <FormControl error={!!validationErrors.email} className={classes.formControl}>
          {/* <InputLabel htmlFor="email">Email address</InputLabel> */}
          <Input
            placeholder="Email"
            type="email" id="email" aria-describedby="email-helper-text"
            value={formData.email}
            onChange={(e) => updateFormData({ ...formData, email: e.target.value })}
          />
          <FormHelperText id="email-helper-text">{!!validationErrors.email ? validationErrors.email : 'We\'ll never share your email.'}</FormHelperText>
        </FormControl>
        <FormControl error={!!validationErrors.password} className={classes.formControl}>
          {/* <InputLabel htmlFor="password">Password</InputLabel> */}
          <Input
            placeholder="Password"
            type="password" id="password" aria-describedby="password-helper-text"
            value={formData.password}
            onChange={(e) => updateFormData({ ...formData, password: e.target.value })}
          />
          <FormHelperText id="password-helper-text">{!!validationErrors.password ? validationErrors.password : 'Choose a secure password! A three or four word phrase is more secure than patterns with numbers and special characters.'}</FormHelperText>
        </FormControl>

        <FormControl error={!!validationErrors.confirmPassword} className={classes.formControl}>
          {/* <InputLabel htmlFor="password-confirmation">Password</InputLabel> */}
          <Input
            placeholder="Confirm password"
            type="password" id="password-confirmation" aria-describedby="password-confirmation-helper-text"
            value={formData.confirmPassword}
            onChange={(e) => updateFormData({ ...formData, confirmPassword: e.target.value })}
          />
          <FormHelperText id="password-confirmation-helper-text">{!!validationErrors.confirmPassword ? validationErrors.confirmPassword : 'Re-type password'}</FormHelperText>
        </FormControl>

        <Button color="primary" variant="contained" disableElevation type="submit" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default withFirebase(Signup);