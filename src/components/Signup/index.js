import React from 'react';
import classes from './index.module.css';

import * as ROUTES from '../../constants/routes';

import { Link as RouteLink } from 'react-router-dom';

import { withFirebase } from '../../Firebase';

function Signup() {
  return (
    <p>Signup component</p>
  );
}

export default withFirebase(Signup);