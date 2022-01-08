import React from 'react';
import { useParams } from 'react-router-dom';

import classes from './post.module.css';
import { Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Icon, Button, object, ObjectsRow, item, Container, Box, ListItem, List, ListItemText, Grid } from '@material-ui/core'
import { shadows, FormRow } from '@material-ui/system';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { CardMedia, Avatar, Paper, CardHeader } from '@material-ui/core'
import { Comment, FormatBold, Share, ThumbUp } from '@material-ui/icons'
import ShareIcon from '@material-ui/icons/Share';
import { ThemeProvider } from '@material-ui/core/styles';

export default function Post(props) {
  const { profileId } = useParams();
  if (profileId) { console.log('someone elses profile') } else { console.log('own profile') }
  return (
    <Container style={{ maxWidth: "60rem" }}>
      <Box boxShadow={3} borderRadius={5} m={2} alignItems="left">

        <Box m={1} pt={0}>
          <Grid container direction="row" alignItems="center">
            <Grid Item xs={0}>
              <IconButton>
                <Avatar color="secondary" src={props.post.user.avatarUrl} />
              </IconButton>
            </Grid>
            <Grid Item xs={0}>

              <IconButton>
                {props.post.user.name}
              </IconButton>

            </Grid>
          </Grid>
        </Box>

        <CardMedia component="img" src={props.post.postContentUrls} >
        </CardMedia>
        <Box m={0} pt={0} padding={1}>
          <Grid container direction="row" alignItems="left">
            <Grid item xs={1}>
              <IconButton>
                <ThumbUp></ThumbUp>
              </IconButton>
              <br></br>{props.post.likes}
            </Grid>
            <Grid item xs={1}>
              <IconButton>
                <Comment></Comment>
              </IconButton>
              <br></br>{props.post.comments.length}
            </Grid>
            <Grid item xs={1}>
              <IconButton>
                <Share></Share>
              </IconButton>
              <br></br>{props.post.shares}
            </Grid>
            <Grid item>
              <p style={{ fontSize: "20px" }}>
                "{props.post.text}"
              </p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
