import React from 'react';
import { useParams } from 'react-router-dom';

import classes from './post.module.css';
import { Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Icon, Button, object, ObjectsRow, item, Container, Box, ListItem, List, ListItemText, Grid } from '@material-ui/core'
import { shadows, FormRow } from '@material-ui/system';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { CardMedia, Avatar, Paper, CardHeader } from '@material-ui/core';
import image from './test.jpg'
import { Comment, FormatBold, Share, ThumbUp } from '@material-ui/icons'
import ShareIcon from '@material-ui/icons/Share';
import { ThemeProvider } from '@material-ui/core/styles';

// let post = {
//     user: {
//         name: 'Matteo',
//         pfpUrl: './test.jpg'
//     },
//     text: "Downtown Night City just after noon, what a site.",
//     likes: 43,
//     shares: 12,
//     comments: [{
//         user: "Matteo",
//         comment: "What a view!"
//     },
//     {
//         user: "Anthony",
//         comment: "Nice!"
//     },
//     {
//         user: "Joe",
//         comment: "Amazing!"
//     },
//     {
//         user: "Lucas",
//         comment: "Beautiful!"
//     },
//     ]
// }

export default function Post(props) {
    const { profileId } = useParams();
    if (profileId) { console.log('someone elses profile') } else { console.log('own profile') }
    return (
        <Container style={{maxWidth: "60rem"}}>
            <Box boxShadow={3} borderRadius={5} m={2} alignItems="left">

                <Box m={1} pt={0}>
                    <Grid container direction="row" alignItems="center">
                        <Grid Item xs={0}>
                            <IconButton aria-label="Give a smile!">
                                <Avatar color="secondary" src={props.post.user.avatarUrl}/*pfp src here*/ />
                            </IconButton>
                        </Grid>
                        <Grid Item xs={0}>

                            <IconButton aria-label="Original Poster">
                                {props.post.user.name}
                            </IconButton>

                        </Grid>
                    </Grid>
                </Box>

                <CardMedia component="img" src={props.post.postContentUrls[0]}>
                </CardMedia>
                <Box m={0} pt={0} padding={1}>
                    <Grid container direction="row" alignItems="left">
                        <Grid item xs={1}>
                            <IconButton aria-label="Give a smile!">
                                <ThumbUp></ThumbUp>
                            </IconButton>
                            <br></br>{props.post.likes}
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton aria-label="Send some happiness in text form!">
                                <Comment></Comment>
                            </IconButton>
                            <br></br>{props.post.comments.length}
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton aria-label="Send the happey to friendly faces!">
                                <Share></Share>
                            </IconButton>
                            <br></br>{props.post.shares}
                        </Grid>
                        <Grid item>
                            <p style={{fontSize: "20px"}}>
                                "{props.post.text}"
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

/*
 <Grid item xs={3} alignItems="left">
                            <Grid container direction="column" alignItems="left" xs={10}>
                                <Grid item xs={10}>
                                    <ThemeProvider theme={theme}><Typography display="inline">{comments[0].user}</Typography></ThemeProvider> {comments[0].comment}
                                </Grid>
                                <Grid item xs={10}>
                                    <ThemeProvider theme={theme}><Typography display="inline">{comments[1].user}</Typography></ThemeProvider> {comments[1].comment}
                                </Grid>
                                <Grid item xs={10}>
                                    <ThemeProvider theme={theme}><Typography display="inline">{comments[2].user}</Typography></ThemeProvider> {comments[2].comment}
                                </Grid>
                                <Grid item xs={10}>
                                    <ThemeProvider theme={theme}><Typography display="inline">{comments[3].user}</Typography></ThemeProvider> {comments[3].comment}
                                </Grid>
                            </Grid>
                        </Grid>
*/