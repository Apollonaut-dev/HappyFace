import React from 'react';
import classes from './profile.css';
import { TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button, object, ObjectsRow, item, Container, Box, ListItem, List, ListItemText, Grid } from '@material-ui/core'
import { shadows, FormRow } from '@material-ui/system';

export default function (props) {
  return (
    <div>
      <Box boxShadow={3} borderRadius={5} className="classes settings">
      <div className="classes profile">
        <ul>
          <li><div className="classes opButton">
          <TextField
              className="classes textField"
              id="email"
              label="Email"
              defaultValue=""
              variant="outlined"
            />
            <Button variant="contained" color="grey" className="classes option" >Save</Button>
            </div></li>
          <li><div className="classes opButton">
            <TextField
              className="classes textField"
              id="phoneNum"
              label="Phone Number"
              defaultValue=""
              variant="outlined"
            />
            <Button variant="contained" color="grey" className="classes option" style={{maxWidth: '100px', maxHeight: '55px', minWidth: '100px', minHeight: '55px'}}>Save</Button>
          </div></li>
          <li><div className="classes opButton">
            <TextField
              className="classes textField"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <Button variant="contained" color="grey" className="classes option" style={{maxWidth: '100px', maxHeight: '55px', minWidth: '100px', minHeight: '55px'}}>Save</Button>
          </div></li>
          
          <hr className="subheading"></hr>
          <li><div className="classes opButton"><Button variant="contained" color="grey" className="classes option" style={{maxWidth: '325px', maxHeight: '55px', minWidth: '325px', minHeight: '55px'}}>Payment methods</Button></div></li>
        </ul>
      </div>
      </Box>
    </div>
  )
}

{/*  */}