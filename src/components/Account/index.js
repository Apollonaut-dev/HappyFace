import React from 'react';
import classes from './account.module.css';
import { TextField, Button, Box } from '@material-ui/core'

export default function () {
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