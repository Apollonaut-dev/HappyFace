import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import Profile from '../../components/Profile';

export default function ProfilePage(props) {
  const { path, url } = useRouteMatch();
  const { profileId } = useParams();
  console.log('path: ', path);
  
  return (
    <Switch>
      <Route path={`${path}/:profileId`}>
        someone else's profileID: {profileId}
        <Profile />
      </Route>
      <Route path={path}>
        <Link to={`${url}/123`}>some profile</Link>
        <Profile profileId={profileId}/>
      </Route>
    </Switch>
  );
}