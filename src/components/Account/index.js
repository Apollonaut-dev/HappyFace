import React from 'react';
import classes from './account.module.css';
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
  return (
    <div>
      
      <Box boxShadow={3} borderRadius={5} className={classes.settings}>
      <p style={{fontSize: 24, paddingTop: 20}}>
        Edit Account Settings
      </p>
      <div className="classes account">
        <ul>
          <li><div className={classes.optionDiv}>
          <TextField
              className={classes.textField}
              id="email"
              label="Email"
              defaultValue=""
              variant="outlined"
            
            />
            <Button variant="contained" id="emailBtn" color="grey" className={classes.opButton}>Save</Button>
            </div></li>
            <br></br>
            <li><div className={classes.optionDiv}>
            <TextField
              className={classes.textField}
              id="phoneNum"
              label="Phone Number"
              defaultValue=""
              variant="outlined"
            />
            <Button variant="contained" color="grey" className={classes.opButton}>Save</Button>
          </div></li>
          <br></br>
          <li><div className={classes.optionDiv}>
            <TextField
              className={classes.textField}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <Button variant="contained" color="grey" className={classes.opButton}>Save</Button>
          </div></li>
          <br></br>
          <hr className={classes.subheading}></hr>
          <br></br>
          <li><div className="classes opButton"><Button variant="contained" color="grey" className="classes option" >Payment methods</Button></div></li>
          <br></br>
        </ul>
      </div>
      </Box>
    </div>
  )
}

{/*  */}