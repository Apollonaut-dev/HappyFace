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
import Image from "material-ui-image/lib/components/Image/Image";

const AddNewImage = () => {
  const multipleImages = true;
  
  let contentDirs = [];
  let xsAmount = 3;

  const handleUpload = (e) => {
    console.log(contentDirs)
    for (let i = 0; i < e.target.files.length; i++) {
      contentDirs.push(e.target.files[i]);
    }
    console.log(contentDirs[0])
  };

  return (
    <div className="App">
      <Box boxShadow={3} height={"100%"} width={"100%"} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <Image cover />
        <IconButton variant="contained" component="label">
          <input type="file" onChange={handleUpload} multiple hidden />
          <AddCircleOutline type="file" fontSize="large" >
          </AddCircleOutline>
        </IconButton>
      </Box>
    </div>
  );
};

export default AddNewImage;