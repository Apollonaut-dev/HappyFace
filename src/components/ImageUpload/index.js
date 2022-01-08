import React, { useState, setState, state } from "react";
import { storage } from "../../Firebase/firebase.js"

import { CardMedia, Avatar, IconButton, Container, Box, Grid, Button, Input } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleChange = e => {
    for (let i = 0; i < e.target.files; i++) 
    if (e.target.files[i]) {
      setImage(e.target.files[i]);
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => { },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
          })
      }
    )
  }

  return (
    <Box boxShadow={3} borderRadius={5} m={2}>
      <IconButton variant="contained" component="label">
        <Add/>
        <input type="file" onChange={handleChange} hidden></input>
      </IconButton>
    </Box>
  )
}

export default ImageUpload;
