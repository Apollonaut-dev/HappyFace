import React from 'react';
import { useParams } from 'react-router-dom';

import classes from './profile.module.css';
import { Comment, FormatBold, Share, ThumbUp, Edit } from '@material-ui/icons'
import { shadows, FormRow } from '@material-ui/system';
import { Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Icon, Button, object, ObjectsRow, item, Container, Box, ListItem, List, ListItemText, Grid } from '@material-ui/core'
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CardMedia, Avatar, Paper, CardHeader } from '@material-ui/core';
import { Divider } from '@material-ui/core';

const StyledButton = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const user = {
    avatarUrl: './test.jpg',
    fname: 'Matteo',
    lname: 'De Vellis',
    email: 'example@email.com'
}


export default function (props) {

    const { profileId } = useParams();
    if (profileId) { console.log('someone else\'s profile') } else { console.log('own profile') }
    return (
        <Container style={{ maxWidth: "45rem" }}>
            <Box boxShadow={3} borderRadius={5} m={2} padding={3} alignItems="center" >
                <div container style={{ display: "flex" }}>
                    <IconButton style={{ paddingLeft: "10px" }}>
                        <Avatar color="secondary" src={user.avatarUrl} style={{ transform: "scale(2)" }} />
                    </IconButton>
                    <p style={{ fontSize: "20px", color: "black", paddingLeft: "30px" }}>
                        {user.fname} {user.lname}
                    </p>
                </div>
                <br />

                <span style={{ fontSize: "20px", color: "black", display: "flex" }}>
                    Name
                </span>
                <div container style={{ display: "flex" }}>
                    <form>
                        <Container style={{ paddingLeft: "0px", display: "flex" }}>
                            <TextField label={user.fname} />
                            <Button>Change</Button>
                        </Container>
                    </form>
                    <form>
                        <Container style={{ paddingLeft: "0px", display: "flex" }}>
                            <TextField label={user.lname} />
                            <Button>Change</Button>
                        </Container>
                    </form>
                </div>

                <br></br>
                <Divider></Divider>
                <br></br>
                <span style={{ fontSize: "20px", color: "black", display: "flex" }}>
                    Email
                </span>
                <Container style={{ paddingLeft: "0px", display: "flex" }}>
                    <TextField label={user.email} />
                    <Button>Change</Button>
                </Container>


                <br></br>
                <Divider></Divider>
                <br></br>
                <span style={{ fontSize: "20px", color: "black", display: "flex" }}>
                    Password
                </span>
                <form>
                    <div container style={{ display: "flex" }}>
                        <Container style={{ paddingLeft: "0px", display: "flex" }}>
                            <TextField type="password" label="Current password" />
                        </Container>
                    </div>
                    <div container style={{ display: "flex" }}>
                        <Container style={{ paddingLeft: "0px", display: "flex" }}>
                            <TextField type="password" label="New password" />
                        </Container>
                        <Container style={{ paddingLeft: "0px", display: "flex" }}>
                            <TextField type="password" label="New password again" />
                            <Button>Submit</Button>
                        </Container>
                        
                    </div>
                </form>

            </Box>
        </Container>

    )
}


