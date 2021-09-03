import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import Profile from '../../components/Profile';

export default function ProfilePage(props) {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`/profile/:profileId`}>
        <Profile />
      </Route>
      <Route exact path={'/profile'}>
        <Link to='/profile/123'>some profile</Link>
        <Profile />
      </Route>
    </Switch>
  );
}