import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import classes from './profile.module.css';
import { Box } from '@material-ui/core'

import User from '../../models/User';

export default function Profile({ profileId }) {
 const [user, updateUser] = useState(null);
  
  if (profileId) { console.log('someone else\'s profile') } else { console.log('own profile') }
  useEffect(() => {
    User.readById('yRn3fIw07kQSbQ1Kfi3NlAXkexm2')
    .then(updateUser);
  }, []);
  
  return (
    <div>

      <Box boxShadow={3} borderRadius={5} className={classes.settings}>
        <p style={{ fontSize: 24, paddingTop: 20 }}>
          My Profile
        </p>
        <div className="classes profileDiv">
          <ul>
            <div className="classes profileMainDiv">
              <h1>
                
              </h1>
              <h2>
                {user ? user.name : null}
              </h2>
              <h3>
                Bio here
              </h3>
              <ul>
                {listItems}
              </ul>
            </div>
          </ul>
        </div>
      </Box>
    </div>
  )
}

var posts = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
];

const listItems = posts.map((number) =>
  <div>
    <Box boxShadow={3} borderRadius={5} className={classes.postsBox}>
      {posts}
    </Box>
  </div>

);
