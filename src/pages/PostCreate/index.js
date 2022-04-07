import CreatePost from '../../components/ImageUpload'
import React, { useState, Item } from "react";
import { render } from "react-dom";
import { storage } from "../../Firebase/firebase.js"
import { Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Icon, Button, object, ObjectsRow, item, Container, Box, ListItem, List, ListItemText, Grid } from '@material-ui/core'
import { shadows, FormRow } from '@material-ui/system';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { CardMedia, Avatar, Paper, CardHeader } from '@material-ui/core'
import { Comment, FormatBold, ImageRounded, Share, ThumbUp, AddCircleOutline } from '@material-ui/icons'
import ShareIcon from '@material-ui/icons/Share';
import { ThemeProvider } from '@material-ui/core/styles';
import { Divider, Switch, FormControlLabel, FormGroup } from '@material-ui/core';
import ImageUpload from '../../components/ImageUpload';
import { createStyles } from "@material-ui/core";

const styles = createStyles({
  button: {
    margin: 10
  },
  buttonContainer: {
    marginLeft: "10em",
    display: "flex",
    flexDirection: "row"
  },
  "@media (min-width: 960px)": {
    buttonContainer: {
      backgroundColor: "black"
    }
  }
});

export default function postCreate() {

  return (
    <div>
      <Container style={{ maxWidth: "60rem" }}>
        <Container style={{ maxWidth: "45rem" }}>
          <Box boxShadow={3} borderRadius={5} m={2} padding={3} >
            <span style={{ fontSize: "20px", color: "black" }}>
              SHARE YOUR STORY
            </span>
            <br />
            <br />
            <div container style={{ display: "flex" }}>
              <TextField variant="outlined" label="Tell the world..." multiline fullWidth minRows="2" />
            </div>
            <br />
            <Divider></Divider>
            <br />

            <ImageUpload></ImageUpload>

            <br />
            <Divider></Divider>
            <br />
            <TextField variant="outlined" label="Tags" size="small" margin="none" multiline fullWidth />
            <br />
            <br />

            <Grid container style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
              <Grid item xs={12}>
                <FormControlLabel control={<Switch defaultChecked />} label="Allow Comments?" />
              </Grid>
              <Grid item xs={12} style={{padding: "10px"}}>
                <Button variant="contained" color="primary">Post</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Container>
    </div>
  );
}
