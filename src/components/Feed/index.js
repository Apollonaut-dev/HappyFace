import React from 'react';

import { makeStyles, List, ListItem } from '@material-ui/core';

export default function Feed({ feedItems }) {
  return (
    <List>
      {feedItems.map((FeedItem, i) => <ListItem><FeedItem /></ListItem>)}
    </List>
  );
}