import React from 'react';

import * as ROUTES from '../../constants/routes';
import { Redirect } from 'react-router-dom';

import { AuthUserContext } from '../../Auth';

import Signup from '../../components/Signup';

function Registration() {
  return (
    <AuthUserContext.Consumer>
      {authState => authState ? <Redirect to={ROUTES.FEED} /> : <Signup />}
    </AuthUserContext.Consumer>
  );
}

export default Registration;