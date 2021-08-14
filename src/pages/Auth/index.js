import React from 'react';

import * as ROUTES from '../../constants/routes';
import { Redirect } from 'react-router-dom';

import { AuthUserContext } from '../../Auth';

import Signin from '../../components/Signin';

function Auth() {
  return (
    <AuthUserContext.Consumer>
      {authState => authState ? <Redirect to={ROUTES.FEED} /> : <Signin />}
    </AuthUserContext.Consumer>
  );
}

export default Auth;