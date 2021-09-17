import React from 'react';

import * as ROUTES from '../../constants/routes';
import { Redirect, useLocation } from 'react-router-dom';

import { AuthUserContext } from '../../Auth';

import Signin from '../../components/Signin';

function Auth() {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: ROUTES.FEED } };
  
  return (
    <AuthUserContext.Consumer>
      {authState => authState ? <Redirect to={from} /> : <Signin />}
    </AuthUserContext.Consumer>
  );
}

export default Auth;