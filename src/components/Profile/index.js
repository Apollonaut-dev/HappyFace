import React from 'react';
import { useParams } from 'react-router-dom';

import classes from './profile.module.css';
import { TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button, object, ObjectsRow, item, Container, Box, ListItem, List, ListItemText, Grid } from '@material-ui/core'
import { shadows, FormRow } from '@material-ui/system';
import { withStyles } from '@material-ui/core/styles';

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



export default function (props) {
    const { profileId } = useParams();
    if (profileId) { consol.log('someone else\'s profile')} else { console.log ('own profile')}
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
                                PFP here
            </h1>
                            <h2>PFN here

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
